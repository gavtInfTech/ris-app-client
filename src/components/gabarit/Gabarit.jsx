import React, {useEffect, useState, useRef, memo, useContext, useMemo} from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Alert,
    ThemeProvider,
    createTheme,
    styled,
    Tooltip,
    Switch,
    FormControlLabel,
    Box,
    Button,
    Modal,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    IconButton,
} from "@mui/material";
import {api} from "../../axiosConfig";
import {AuthContext} from "../../contexts/AuthContext";
import {useMediaQuery} from "@mui/material";
import HelpIcon from "@mui/icons-material/HelpOutline";
import NoteIcon from "@mui/icons-material/Note";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useForm, Controller} from "react-hook-form";
import Popover from "@mui/material/Popover";

const theme = createTheme({
    typography: {fontFamily: '"Roboto", "Arial", sans-serif'}, palette: {
        primary: {main: "rgba(25,118,210,0.9)"},
        secondary: {main: "rgba(197,34,46,0.8)"},
        success: {main: "rgba(46,125,50,0.8)"},
        warning: {
            main: "rgba(245,124,0,0.8)", light: "rgba(255,204,128,0.6)", contrastText: "#000000",
        },
    },
});

const StyledTableCell = styled(TableCell)(({theme}) => ({
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: theme.spacing(1),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(0.5), fontSize: "0.7rem",
    },
    "&.title": {
        backgroundColor: theme.palette.grey[500], fontWeight: "bold", fontSize: "0.875rem", textAlign: "center",
    },
    "&.header": {
        backgroundColor: theme.palette.grey[100], fontWeight: 600, fontSize: "0.8rem", textAlign: "center",
    },
    "&.body": {
        fontSize: "0.8rem",
    },
    "&.post_name": {
        borderRight: `2px solid ${theme.palette.grey[400]} !important`,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    "&:hover:not(.header-row):not(.sticky-row)": {
        backgroundColor: theme.palette.action.hover,
    }, "&.sticky-row": {
        backgroundColor: theme.palette.primary.light,
        position: "sticky",
        zIndex: 50,
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    },
}));

const headerNotes = {
    coefficient: "Коэффициент «К» – соотношение размера изменения глубин судового хода к размерам изменения уровня воды ниже проектного значения.",
};

const fields = [{name: "section", label: "Название участка", type: "blocked"}, {
    name: "equipment", label: "Вид навигационного оборудования", type: "text"
}, {name: "start_date", label: "Открытие", type: "date"}, {
    name: "end_date", label: "Закрытие", type: "date"
}, {name: "depth", label: "Глубина, см", type: "number"}, {
    name: "width", label: "Ширина, м", type: "number"
}, {name: "radius", label: "Радиус кривизны, м", type: "number"}, {
    name: "post_name", label: "Наименование г/п", type: "multi"
}, {name: "level", label: "Отметка проектного уровня над \"0\" графика", type: "multi"}, {
    name: "discharge", label: "Расход воды, м³/с", type: "number"
}, {name: "coverage", label: "Обеспеченность проектного уровня", type: "number"}, {
    name: "coefficient", label: "Коэф. 'K'", type: "number"
}, {name: "category", label: "Категория", type: "text"}, {name: "group", label: "Группа", type: "text"},];

const calculateDuration = (start, end) => start && end ? Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24) + 1).toString() : "-";

const getStatus = (start, end) => {
    if (!start) return "Закрыто";
    const now = new Date();
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : null;
    return now < startDate || (endDate && now > endDate) ? "Закрыто" : "Открыто";
};

const isNearDate = (date) => {
    if (!date) return false;
    const diff = (new Date() - new Date(date)) / (1000 * 60 * 60 * 24);
    return diff >= -1 && diff <= 1;
};

const EditSectionModal = ({
                              open, onClose, sectionData, allUnits, onSave, assignedUnits, currentSection,
                          }) => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            ...sectionData, units: sectionData.units || [], notes: sectionData.notes || {},
        }, mode: "onChange",
    });
    const [multiFields, setMultiFields] = useState({
        post_name: sectionData.post_name?.split("\n").filter(Boolean).length > 0 ? sectionData.post_name.split("\n").filter(Boolean) : [""],
        level: sectionData.level?.split("\n").filter(Boolean).length > 0 ? sectionData.level.split("\n").filter(Boolean) : [""],
    });
    const [selectedNoteFields, setSelectedNoteFields] = useState([]);
    const [notes, setNotes] = useState(sectionData.notes || {});

    useEffect(() => {
        reset({
            ...sectionData, units: sectionData.units || [], notes: sectionData.notes || {},
        });
        setMultiFields({
            post_name: sectionData.post_name?.split("\n").filter(Boolean).length > 0 ? sectionData.post_name.split("\n").filter(Boolean) : [""],
            level: sectionData.level?.split("\n").filter(Boolean).length > 0 ? sectionData.level.split("\n").filter(Boolean) : [""],
        });
        setSelectedNoteFields([]);
        setNotes(sectionData.notes || {});
    }, [sectionData, reset]);

    const updateMultiField = (field, index, value) => {
        setMultiFields((prev) => ({
            ...prev, [field]: prev[field].map((item, i) => (i === index ? value : item)),
        }));
    };

    const addMultiField = (field) => {
        setMultiFields((prev) => ({
            ...prev, [field]: [...prev[field], ""],
        }));
    };

    const removeMultiField = (field, index) => {
        setMultiFields((prev) => {
            const updated = prev[field].filter((_, i) => i !== index);
            return {
                ...prev, [field]: updated.length === 0 ? [""] : updated,
            };
        });
    };

    const handleNoteFieldToggle = (fieldName) => {
        setSelectedNoteFields((prev) => {
            if (prev.includes(fieldName)) {
                const newNotes = {...notes};
                delete newNotes[fieldName];
                setNotes(newNotes);
                return prev.filter((f) => f !== fieldName);
            } else {
                return [...prev, fieldName];
            }
        });
    };

    const handleNoteChange = (fieldName, value) => {
        setNotes((prev) => ({
            ...prev, [fieldName]: value,
        }));
    };

    const onSubmit = (data) => {
        onSave({
            ...data,
            post_name: multiFields.post_name.filter(Boolean).join("\n"),
            level: multiFields.level.filter(Boolean).join("\n"),
            notes: {...data.notes, ...notes},
        });
        onClose();
    };

    const availableUnits = allUnits.map((unit) => ({
        ...unit,
        isAssigned: assignedUnits.has(unit.id) && assignedUnits.get(unit.id) !== currentSection,
        assignedSection: assignedUnits.get(unit.id),
    }));

    return (<Modal open={open} onClose={onClose}>
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {xs: "90%", sm: 800},
            bgcolor: "background.paper",
            boxShadow: 24,
            p: {xs: 2, sm: 4},
            maxHeight: "90vh",
            overflowY: "auto",
        }}>
            <Typography variant="h6">
                Редактировать участок: {sectionData.section || "Неизвестный участок"}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field) => (<Box key={field.name} sx={{display: "flex", alignItems: "center", mb: 2}}>
                    {field.type === "blocked" ? (<Typography sx={{width: "100%", mt: 1}}>
                        {sectionData[field.name] || "-"}
                    </Typography>) : field.type === "multi" ? (<Box sx={{width: "100%"}}>
                        <Typography>{field.label}</Typography>
                        {multiFields[field.name].map((value, index) => (<Box
                            key={`${field.name}-${index}`}
                            sx={{display: "flex", alignItems: "center", mb: 1}}
                        >
                            <Controller
                                name={field.name}
                                control={control}
                                render={({field: controllerField}) => (<TextField
                                    value={multiFields[field.name][index] || ""}
                                    onChange={(e) => {
                                        updateMultiField(field.name, index, e.target.value);
                                        controllerField.onChange(multiFields[field.name].join("\n"));
                                    }}
                                    fullWidth
                                    InputLabelProps={{shrink: true}}
                                    placeholder={`Значение ${index + 1}`}
                                    sx={{mr: 1}}
                                    InputProps={{
                                        startAdornment: field.name === "level" && /^\d+$/.test(value) ? (
                                            <span style={{marginRight: 4}}>+</span>) : null,
                                    }}
                                />)}
                            />
                            <IconButton
                                onClick={() => removeMultiField(field.name, index)}
                                disabled={multiFields[field.name].length === 1}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </Box>))}
                        <Button onClick={() => addMultiField(field.name)} sx={{mt: 1}}>
                            Добавить строку
                        </Button>
                    </Box>) : (<Controller
                        name={field.name}
                        control={control}
                        rules={{
                            validate: field.type === "number" ? (value) => !value || !isNaN(value) || "Введите число" : undefined,
                        }}
                        render={({field: controllerField}) => (<TextField
                            {...controllerField}
                            label={field.label}
                            type={field.type}
                            fullWidth
                            InputLabelProps={{shrink: true}}
                            variant="outlined"
                            error={!!errors[field.name]}
                            helperText={errors[field.name]?.message}
                        />)}
                    />)}
                    <Tooltip
                        title={selectedNoteFields.includes(field.name) ? "Скрыть заметку" : "Показать заметку"}>
                        <IconButton onClick={() => handleNoteFieldToggle(field.name)}>
                            <NoteIcon color={selectedNoteFields.includes(field.name) ? "primary" : "inherit"}/>
                        </IconButton>
                    </Tooltip>
                </Box>))}
                <FormControl fullWidth sx={{mb: 2}}>
                    <InputLabel shrink>Гидроузлы</InputLabel>
                    <Controller
                        name="units"
                        control={control}
                        render={({field}) => (<Select
                            {...field}
                            multiple
                            value={field.value || []}
                            onChange={(e) => field.onChange(e.target.value)}
                        >
                            {availableUnits.map((unit) => (<MenuItem
                                key={unit.id}
                                value={unit.id}
                                disabled={unit.isAssigned}
                            >
                                {unit.name}
                                {sectionData.units?.includes(unit.id) ? " (текущий)" : ""}
                                {unit.isAssigned ? ` (занят: ${unit.assignedSection})` : ""}
                            </MenuItem>))}
                        </Select>)}
                    />
                    {!sectionData.units?.length && (<Typography variant="caption" color="info.main" sx={{mt: 1}}>
                        К этому участку пока не привязаны гидроузлы.
                    </Typography>)}
                    {availableUnits.length === 0 && (<Typography color="error" sx={{mt: 1}}>
                        Нет доступных гидроузлов для выбора.
                    </Typography>)}
                </FormControl>
                {selectedNoteFields.length > 0 && (<Box sx={{mt: 2}}>
                    <Typography variant="subtitle1">Заметки для выбранных полей</Typography>
                    {selectedNoteFields.map((fieldName) => (<Box key={fieldName} sx={{mt: 2}}>
                        <Typography>Заметка
                            для {fields.find(f => f.name === fieldName)?.label || fieldName}</Typography>
                        <TextField
                            value={notes[fieldName] || ""}
                            onChange={(e) => handleNoteChange(fieldName, e.target.value)}
                            multiline
                            rows={4}
                            fullWidth
                            placeholder={`Введите заметку для ${fieldName}`}
                        />
                    </Box>))}
                </Box>)}
                <Box sx={{mt: 2}}>
                    <Button type="submit" variant="contained">
                        Сохранить
                    </Button>
                    <Button onClick={onClose} sx={{ml: 2}}>
                        Отмена
                    </Button>
                </Box>
            </form>
        </Box>
    </Modal>);
};

const ClickableTooltip = ({note}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
        <IconButton
            onClick={handleClick}
            sx={{
                position: "absolute", top: theme.spacing(0), right: theme.spacing(0), color: theme.palette.warning.main,
            }}
        >
            <HelpIcon sx={{
                fontSize: "1rem", top: theme.spacing(0), right: theme.spacing(0)
            }}/>
        </IconButton>
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            transformOrigin={{vertical: "top", horizontal: "center"}}
        >
            <Typography sx={{p: 2}}>{note}</Typography>
        </Popover>
    </>);
};

const SectionRow = memo(({row, extraData, isNearDate, calculateDuration, getStatus, auth, onEdit}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const extra = extraData.get(row.name);
    const status = getStatus(extra?.start_date, extra?.end_date);

    const renderMultiLine = (value, isLevel) => {
        if (!value) return "-";
        const items = value.split("\n").filter(Boolean);
        if (items.length === 0) return "-";
        return (<table style={{width: "100%", borderCollapse: "collapse"}}>
            <tbody>
            {items.map((item, idx, arr) => (<tr key={`${item}-${idx}`}>
                <td
                    style={{
                        borderBottom: idx < arr.length - 1 ? "2px solid rgba(0, 0, 0, 0.12)" : "none", padding: "2px 0",
                    }}
                >
                    {isLevel && item.match(/^\d+$/) ? `+ ${item}` : item || "-"}
                </td>
            </tr>))}
            </tbody>
        </table>);
    };

    const renderCellContent = (value, noteField, sx = {textAlign: "center"}) => {
        const note = noteField && extra?.notes?.[noteField];
        return (<StyledTableCell className="body" sx={{textAlign: "left", ...sx}}>
            {value}
            {note && (isMobile ? (<ClickableTooltip note={note}/>) : (<Tooltip title={note}>
                <HelpIcon
                    sx={{
                        position: "absolute",
                        top: theme.spacing(0),
                        right: theme.spacing(0),
                        fontSize: "1rem",
                        color: theme.palette.warning.main,
                        cursor: "pointer",
                    }}
                />
            </Tooltip>))}
        </StyledTableCell>);
    };

    return (<StyledTableRow>
        {renderCellContent(<>
            {row.name}
            {auth.role === "Администратор" && (<IconButton
                onClick={() => onEdit(row.name)}
                sx={{
                    position: "absolute", bottom: theme.spacing(0), right: theme.spacing(0),
                }}
            >
                <EditIcon sx={{
                    position: "absolute",
                    fontSize: "1rem",
                    color: theme.palette.warning.main,
                    top: theme.spacing(0),
                    right: theme.spacing(0),
                }}/>
            </IconButton>)}
        </>, "section", {textAlign: "left"})}
        {renderCellContent(row.length, "length")}
        {renderCellContent(extra?.equipment || "-", "equipment")}
        {renderCellContent(extra?.start_date ? new Date(extra.start_date).toLocaleDateString() : "**", "start_date", {
            backgroundColor: isNearDate(extra?.start_date) ? theme.palette.warning.light : "inherit",
            color: isNearDate(extra?.start_date) ? theme.palette.warning.contrastText : "inherit",
            transition: "background-color 0.3s, color 0.3s",
            textAlign: "center"
        })}
        {renderCellContent(extra?.end_date ? new Date(extra.end_date).toLocaleDateString() : "**", "end_date", {
            backgroundColor: isNearDate(extra?.end_date) ? theme.palette.warning.light : "inherit",
            color: isNearDate(extra?.end_date) ? theme.palette.warning.contrastText : "inherit",
            transition: "background-color 0.3s, color 0.3s",
            textAlign: "center"
        })}
        {renderCellContent(calculateDuration(extra?.start_date, extra?.end_date), "duration")}
        {renderCellContent(status, null, {
            backgroundColor: status === "Открыто" ? "success.main" : status === "Закрыто" ? "secondary.main" : "transparent",
            color: status !== "-" ? "white" : "inherit",
            textAlign: "center"
        })}
        {renderCellContent(extra?.depth || "-", "depth")}
        {renderCellContent(extra?.width || "-", "width")}
        {renderCellContent(extra?.radius || "-", "radius")}
        {renderCellContent(renderMultiLine(extra?.post_name, false), "post_name")}
        {renderCellContent(renderMultiLine(extra?.level, true), "level")}
        {renderCellContent(extra?.discharge || "-", "discharge")}
        {renderCellContent(extra?.coverage || "-", "coverage")}
        {renderCellContent(extra?.coefficient || "-", "coefficient")}
        {auth.role === "Администратор" && (<>
            {renderCellContent(extra?.category || "-", "category")}
            {renderCellContent(extra?.group || "-", "group")}
        </>)}
    </StyledTableRow>);
}, (prev, next) => prev.row.name === next.row.name && prev.extraData === next.extraData && prev.auth.role === next.auth.role);

const SHTSRow = memo(({row, calculateDuration, getStatus}) => {
    const status = getStatus(row.start_date, row.end_date);

    return (<StyledTableRow>
        <StyledTableCell className="body" sx={{textAlign: "left"}}>
            {row.name}
        </StyledTableCell>
        <StyledTableCell className="body" sx={{textAlign: "center"}}>
            {row.start_date ? new Date(row.start_date).toLocaleDateString() : "-"}
        </StyledTableCell>
        <StyledTableCell className="body" sx={{textAlign: "center"}}>
            {row.end_date ? new Date(row.end_date).toLocaleDateString() : "-"}
        </StyledTableCell>
        <StyledTableCell className="body" sx={{textAlign: "center"}}>
            {calculateDuration(row.start_date, row.end_date)}
        </StyledTableCell>
        <StyledTableCell
            className="body"
            sx={{
                textAlign: "center",
                backgroundColor: status === "Открыто" ? "success.main" : status === "Закрыто" ? "secondary.main" : "transparent",
                color: status !== "-" ? "white" : "inherit",
            }}
        >
            {status}
        </StyledTableCell>
    </StyledTableRow>);
});

const Gabarit = () => {
    const {auth} = useContext(AuthContext);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const tableRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [state, setState] = useState({
        data: [], extraData: new Map(), error: null, loading: true,
    });
    const [shtsData, setShtsData] = useState([]);
    const [expandedRivers, setExpandedRivers] = useState({});
    const [showShtsTable, setShowShtsTable] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editingSection, setEditingSection] = useState(null);
    const [allUnits, setAllUnits] = useState([]);
    const [assignedUnits, setAssignedUnits] = useState(new Map());

    const toggleAllRivers = (expand) => {
        setExpandedRivers((prev) => Object.keys(prev).reduce((acc, key) => ({...acc, [key]: expand}), {}));
    };

    const updateAssignedUnits = (extraData) => {
        const newAssignedUnits = new Map();
        extraData.forEach((data, section) => {
            data.units?.forEach((unitId) => {
                newAssignedUnits.set(unitId, section);
            });
        });
        setAssignedUnits(newAssignedUnits);
    };

    const processRiverData = useMemo(() => (rawData, extraDataMap) => {
        const rivers = {};
        let totalLengthAll = 0;
        let guaranteedLengthAll = 0;

        rawData.sort((a, b) => a.name.localeCompare(b.name, undefined, {numeric: true}));

        rawData.forEach((row) => {
            const riverIndex = row.name.split(".")[0];
            rivers[riverIndex] = rivers[riverIndex] || {
                riverName: row.river, sections: [], totalLength: 0, guaranteedLength: 0,
            };
            rivers[riverIndex].sections.push({...row, riverIndex});
            rivers[riverIndex].totalLength += parseFloat(row.length.toString()) || 0;
            if (extraDataMap.get(row.name)?.depth) {
                rivers[riverIndex].guaranteedLength += parseFloat(row.length.toString());
            }
        });

        const processedData = Object.entries(rivers).flatMap(([index, river]) => {
            const first = river.sections[0].name.split(" – ")[0].split(" ").slice(1).join(" ");
            const [, last] = river.sections[river.sections.length - 1].name.split(" – ");

            totalLengthAll += river.totalLength;
            guaranteedLengthAll += river.guaranteedLength;

            return [{
                isRiverHeader: true, riverIndex: index, riverName: `${river.riverName} (${first} − ${last})`,
            }, ...river.sections.map((section) => ({...section, riverIndex: index})), {
                isTotal: true,
                riverName: river.riverName,
                riverIndex: index,
                totalLength: river.totalLength.toFixed(1),
                guaranteedLength: river.guaranteedLength.toFixed(1),
            },];
        });

        processedData.push({
            isFinalSummary: true,
            totalLengthAll: totalLengthAll.toFixed(1),
            guaranteedLengthAll: guaranteedLengthAll.toFixed(1),
        });

        return processedData;
    }, []);

    const processShtsData = useMemo(() => (extraData, units) => {
        const unitsMap = units.reduce((map, unit) => ({
            names: {...map.names, [unit.id]: unit.name}, ids: {...map.ids, [unit.name]: unit.id},
        }), {names: {}, ids: {}});

        const shtsRecords = [];
        extraData.forEach((item) => {
            item.units?.forEach((unitId) => {
                const existingRecord = shtsRecords.find((record) => record.id === unitId);
                if (!existingRecord) {
                    shtsRecords.push({
                        id: String(unitId),
                        name: unitsMap.names[unitId] || `Unknown ID ${unitId}`,
                        start_date: item.start_date,
                        end_date: item.end_date,
                    });
                } else {
                    if (item.start_date && (!existingRecord.start_date || new Date(item.start_date) < new Date(existingRecord.start_date))) {
                        existingRecord.start_date = item.start_date;
                    }
                    if (item.end_date && (!existingRecord.end_date || new Date(item.end_date) > new Date(existingRecord.end_date))) {
                        existingRecord.end_date = item.end_date;
                    }
                }
            });
        });

        return shtsRecords.sort((a, b) => Number(a.id) - Number(b.id));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [sitesRes, gabaritRes, unitsRes] = await Promise.all([api.get("/sites/getAll"), api.get("/gabarit/getAll"), api.get("/units/getAll"),]);

                const extraDataMap = new Map();
                gabaritRes.data
                    .sort((a, b) => b.id - a.id)
                    .forEach((item) => {
                        if (!extraDataMap.has(item.section)) {
                            extraDataMap.set(item.section, {
                                ...item, units: item.units || [],
                            });
                        }
                    });

                const processedData = processRiverData(sitesRes.data, extraDataMap);
                const shtsRecords = processShtsData(extraDataMap, unitsRes.data);

                setState({
                    data: processedData, extraData: extraDataMap, loading: false, error: null,
                });
                setShtsData(shtsRecords);
                setAllUnits(unitsRes.data);
                updateAssignedUnits(extraDataMap);

                const riverIndices = new Set(processedData.filter((row) => row.isRiverHeader).map((row) => row.riverIndex));
                setExpandedRivers(Object.fromEntries([...riverIndices].map((idx) => [idx, true])));
            } catch (error) {
                setState((prev) => ({
                    ...prev, loading: false, error: `Не удалось загрузить данные: ${error.message}`,
                }));
            }
        };
        fetchData();
    }, [processRiverData, processShtsData]);

    useEffect(() => {
        if (!state.loading && tableRef.current) {
            const header = tableRef.current.querySelector("thead");

            const updateHeaderHeight = () => {
                if (header) {
                    const height = header.offsetHeight;
                    setHeaderHeight(height);
                    console.log("Header height updated:", height);
                } else {
                    console.warn("Header (thead) not found");
                }
            };

            updateHeaderHeight();
            const timeout = setTimeout(updateHeaderHeight, 100);

            const resizeObserver = new ResizeObserver(updateHeaderHeight);
            if (header) {
                resizeObserver.observe(header);
            }

            return () => {
                clearTimeout(timeout);
                if (header) {
                    resizeObserver.unobserve(header);
                }
            };
        }
    }, [state.loading]);

    const toggleRiver = (riverIndex) => {
        setExpandedRivers((prev) => ({...prev, [riverIndex]: !prev[riverIndex]}));
    };

    const handleEdit = (sectionName) => {
        const sectionData = state.extraData.get(sectionName) || {section: sectionName};
        setEditingSection({
            ...sectionData,
            units: sectionData.units || [],
            post_name: sectionData.post_name || "",
            level: sectionData.level || "",
        });
        setEditModalOpen(true);
    };

    const handleSave = async (updatedData) => {
        try {
            await api.post("/gabarit/change", {
                ...updatedData,
                depth: updatedData.depth ? parseFloat(updatedData.depth.toString()) : null,
                width: updatedData.width ? parseFloat(updatedData.width.toString()) : null,
                radius: updatedData.radius ? parseFloat(updatedData.radius.toString()) : null,
                discharge: updatedData.discharge ? parseFloat(updatedData.discharge.toString()) : null,
                coverage: updatedData.coverage ? parseFloat(updatedData.coverage.toString()) : null,
                coefficient: updatedData.coefficient ? parseFloat(updatedData.coefficient.toString()) : null,
                units: updatedData.units || [],
                note: updatedData.notes || null,
            });

            const [sitesRes, gabaritRes, unitsRes] = await Promise.all([api.get("/sites/getAll"), api.get("/gabarit/getAll"), api.get("/units/getAll"),]);

            const extraDataMap = new Map();
            gabaritRes.data
                .sort((a, b) => b.id - a.id)
                .forEach((item) => {
                    if (!extraDataMap.has(item.section)) {
                        extraDataMap.set(item.section, {
                            ...item, units: item.units || [], post_name: item.post_name || "", level: item.level || "",
                        });
                    }
                });

            const processedData = processRiverData(sitesRes.data, extraDataMap);
            const shtsRecords = processShtsData(extraDataMap, unitsRes.data);

            setState({
                data: processedData, extraData: extraDataMap, loading: false, error: null,
            });
            setShtsData(shtsRecords);
            setAllUnits(unitsRes.data);
            updateAssignedUnits(extraDataMap);
            setEditModalOpen(false);
        } catch (error) {
            console.error("Failed to update section:", error);
        }
    };

    if (state.loading) {
        return (<CircularProgress
            sx={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
        />);
    }

    if (state.error) {
        return <Alert severity="error" sx={{m: 2}}>{state.error}</Alert>;
    }

    return (<ThemeProvider theme={theme}>
        <Box sx={{p: 2}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2}}>
                <FormControlLabel
                    control={<Switch
                        checked={showShtsTable}
                        onChange={(e) => setShowShtsTable(e.target.checked)}
                        color="primary"
                    />}
                    label={showShtsTable ? "Показать сроки действия навигационного оборудования" : "Показать сроки работы СГТС"}
                />
                {!showShtsTable && (<Box>
                    <Button variant="outlined" onClick={() => toggleAllRivers(true)} sx={{mr: 1}}>
                        Развернуть все
                    </Button>
                    <Button variant="outlined" onClick={() => toggleAllRivers(false)}>
                        Свернуть все
                    </Button>
                </Box>)}
            </Box>
            {!showShtsTable && (<TableContainer
                component={Paper}
                sx={{maxHeight: "100vh", overflow: "auto", borderRadius: 2, boxShadow: 3}}
                ref={tableRef}
            >
                <Table stickyHeader sx={{minWidth: 1200}}>
                    <TableHead sx={{position: "sticky", top: 0, zIndex: 100, backgroundColor: "grey.100"}}>
                        <TableRow className="header-row">
                            <StyledTableCell
                                colSpan={auth.role === "Администратор" ? 17 : 15}
                                className="title"
                            >
                                СРОКИ ДЕЙСТВИЯ НАВИГАЦИОННОГО ОБОРУДОВАНИЯ И ГАРАНТИРОВАННЫЕ ГАБАРИТЫ ВВП РБ
                                НА {new Date().getFullYear()} ГОД
                            </StyledTableCell>
                        </TableRow>
                        <TableRow className="header-row">
                            <StyledTableCell rowSpan={2} className="header">
                                Наименование рек и границ участков
                            </StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header">
                                Протяженность, км
                            </StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header">
                                Вид навигационного оборудования
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} className="header">
                                Срок действия Н.О.
                            </StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header">
                                Длительность действия, сут.
                            </StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header">
                                Статус действия Н.О.
                            </StyledTableCell>
                            <StyledTableCell colSpan={3} className="header">
                                Габариты пути
                            </StyledTableCell>
                            <StyledTableCell colSpan={4} className="header">
                                Опорный гидропост и его характеристики
                            </StyledTableCell>
                            <StyledTableCell
                                rowSpan={2}
                                className="header"
                                hasnote={!!headerNotes.coefficient}
                            >
                                Коэф. "K"
                                {headerNotes.coefficient && (isMobile ? (
                                    <ClickableTooltip note={headerNotes.coefficient}/>) : (
                                    <Tooltip title={headerNotes.coefficient}>
                                        <HelpIcon
                                            sx={{
                                                position: "absolute",
                                                top: theme.spacing(0),
                                                right: theme.spacing(0),
                                                fontSize: "1rem",
                                                color: theme.palette.warning.main,
                                            }}
                                        />
                                    </Tooltip>))}
                            </StyledTableCell>
                            {auth.role === "Администратор" && (<>
                                <StyledTableCell rowSpan={2} className="header">
                                    Категория
                                </StyledTableCell>
                                <StyledTableCell rowSpan={2} className="header">
                                    Группа
                                </StyledTableCell>
                            </>)}
                        </TableRow>
                        <TableRow className="header-row">
                            <StyledTableCell className="header">Открытие</StyledTableCell>
                            <StyledTableCell className="header">Закрытие</StyledTableCell>
                            <StyledTableCell className="header">Глубина, см</StyledTableCell>
                            <StyledTableCell className="header">Ширина, м</StyledTableCell>
                            <StyledTableCell className="header">Радиус кривизны, м</StyledTableCell>
                            <StyledTableCell className="header">Наименование г/п</StyledTableCell>
                            <StyledTableCell className="header">
                                Отметка проектного уровня над "0" графика
                            </StyledTableCell>
                            <StyledTableCell className="header">
                                Расход воды при проектном уровне, м³/с
                            </StyledTableCell>
                            <StyledTableCell className="header">
                                Обеспеченность проектного уровня
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.data.map((row, index) => {
                            if (row.isRiverHeader) {
                                console.log(`Rendering sticky-row for river-${row.riverIndex} with top: ${headerHeight}px`);
                                return (<StyledTableRow
                                    key={`river-${row.riverIndex}`}
                                    className="sticky-row"
                                    sx={{
                                        position: "sticky",
                                        top: headerHeight,
                                        zIndex: 50,
                                        cursor: "pointer",
                                        borderBottom: "1px solid blue",
                                    }}
                                    onClick={() => toggleRiver(row.riverIndex)}
                                >
                                    <StyledTableCell className="body" sx={{textAlign: "right"}}>
                                        {row.riverIndex}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        colSpan={auth.role === "Администратор" ? 17 : 15}
                                        className="body"
                                        sx={{fontWeight: 600, textAlign: "left"}}
                                    >
                                        {expandedRivers[row.riverIndex] ? "▼" : "▶"} {row.riverName}
                                    </StyledTableCell>
                                </StyledTableRow>);
                            }
                            if (row.isTotal) {
                                return (<React.Fragment key={`total-block-${row.riverIndex}`}>
                                    <StyledTableRow sx={{bgcolor: "grey.200"}}>
                                        <StyledTableCell className="body">Итого:</StyledTableCell>
                                        <StyledTableCell className="body" sx={{textAlign: "center"}}>
                                            {row.totalLength}
                                        </StyledTableCell>
                                        <StyledTableCell
                                            colSpan={auth.role === "Администратор" ? 17 : 15}
                                            className="body"
                                        >
                                            -
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow sx={{bgcolor: "grey.200"}}>
                                        <StyledTableCell className="body">
                                            В т.ч {row.riverName} с гарант. габаритами
                                        </StyledTableCell>
                                        <StyledTableCell className="body" sx={{textAlign: "center"}}>
                                            {row.guaranteedLength}
                                        </StyledTableCell>
                                        <StyledTableCell
                                            colSpan={auth.role === "Администратор" ? 17 : 15}
                                            className="body"
                                        >
                                            -
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </React.Fragment>);
                            }
                            if (row.isFinalSummary) {
                                return (<React.Fragment key="final-summary">
                                    <StyledTableRow sx={{bgcolor: "success.light"}}>
                                        <StyledTableCell className="body">Общий итог:</StyledTableCell>
                                        <StyledTableCell className="body" sx={{textAlign: "center"}}>
                                            {row.totalLengthAll}
                                        </StyledTableCell>
                                        <StyledTableCell
                                            colSpan={auth.role === "Администратор" ? 17 : 15}
                                            className="body"
                                        >
                                            -
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow sx={{bgcolor: "success.light"}}>
                                        <StyledTableCell className="body">
                                            С гарант. габаритами
                                        </StyledTableCell>
                                        <StyledTableCell className="body" sx={{textAlign: "center"}}>
                                            {row.guaranteedLengthAll}
                                        </StyledTableCell>
                                        <StyledTableCell
                                            colSpan={auth.role === "Администратор" ? 17 : 15}
                                            className="body"
                                        >
                                            -
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </React.Fragment>);
                            }
                            if (expandedRivers[row.riverIndex]) {
                                return (<SectionRow
                                    key={row.name}
                                    row={row}
                                    extraData={state.extraData}
                                    isNearDate={isNearDate}
                                    calculateDuration={calculateDuration}
                                    getStatus={getStatus}
                                    auth={auth}
                                    onEdit={handleEdit}
                                />);
                            }
                            return null;
                        })}
                    </TableBody>
                </Table>
            </TableContainer>)}
            {showShtsTable && (<TableContainer
                component={Paper}
                sx={{maxHeight: "100vh", overflow: "auto", borderRadius: 2, boxShadow: 3}}
            >
                <Table stickyHeader sx={{minWidth: 1200}}>
                    <TableHead sx={{position: "sticky", top: 0, zIndex: 100, backgroundColor: "grey.100"}}>
                        <TableRow className="header-row">
                            <StyledTableCell colSpan={5} className="title">
                                СРОКИ РАБОТЫ СУДОХОДНЫХ ГИДРОТЕХНИЧЕСКИХ СООРУЖЕНИЙ
                                НА {new Date().getFullYear()} ГОД
                            </StyledTableCell>
                        </TableRow>
                        <TableRow className="header-row">
                            <StyledTableCell className="header" rowSpan={2}>
                                Наименование судоходного шлюза
                            </StyledTableCell>
                            <StyledTableCell colSpan={2} className="header">
                                Даты работы в навигационном режиме
                            </StyledTableCell>
                            <StyledTableCell className="header" rowSpan={2}>
                                Работа в навигационном режиме, суток
                            </StyledTableCell>
                            <StyledTableCell className="header" rowSpan={2}>
                                Статус работы СГТС
                            </StyledTableCell>
                        </TableRow>
                        <TableRow className="header-row">
                            <StyledTableCell className="header">Дата начала</StyledTableCell>
                            <StyledTableCell className="header">Последняя дата</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shtsData.map((row, index) => (<SHTSRow
                            key={`shts-${index}`}
                            row={row}
                            calculateDuration={calculateDuration}
                            getStatus={getStatus}
                        />))}
                    </TableBody>
                </Table>
            </TableContainer>)}
            <EditSectionModal
                open={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                sectionData={editingSection || {section: ""}}
                allUnits={allUnits}
                onSave={handleSave}
                assignedUnits={assignedUnits}
                currentSection={editingSection?.section || ""}
            />
        </Box>
    </ThemeProvider>);
};

export default memo(Gabarit);