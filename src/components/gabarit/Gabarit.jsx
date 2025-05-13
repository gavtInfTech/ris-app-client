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
import {useMediaQuery} from '@mui/material';
import HelpIcon from "@mui/icons-material/HelpOutline";
import NoteIcon from "@mui/icons-material/Note";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useForm, Controller} from 'react-hook-form';
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
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.5), fontSize: '0.7rem',
    },
    "&.title": {
        backgroundColor: theme.palette.grey[500],
        fontWeight: "bold",
        fontSize: "0.875rem",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        },
    },
    "&.header": {
        backgroundColor: theme.palette.grey[100],
        fontWeight: 600,
        fontSize: "0.8rem",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        },
    },
    "&.body": {
        fontSize: "0.8rem", [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        },
    },
    "&.post_name": {
        borderRight: `2px solid ${theme.palette.grey[400]} !important`,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    "&:hover:not(.header-row):not(.sticky-row)": {
        backgroundColor: theme.palette.action.hover,
    }, "&.sticky-row": {backgroundColor: theme.palette.primary.light},
}));

const headerNotes = {
    coefficient: "Коэффициент «К» – соотношение размера изменения глубин судового хода к размерам изменения уровня воды ниже проектного значения.",
};

const EditSectionModal = ({open, onClose, sectionData, allUnits, onSave, assignedUnits, currentSection}) => {
    const {control, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues: {
            ...sectionData,
            units: Array.isArray(sectionData?.units) ? sectionData.units : [],
            equipment: sectionData?.equipment || '',
            post_name: sectionData?.post_name || '',
            level: sectionData?.level || '',
            depth: sectionData?.depth || '',
            width: sectionData?.width || '',
            radius: sectionData?.radius || '',
            discharge: sectionData?.discharge || '',
            coverage: sectionData?.coverage || '',
            coefficient: sectionData?.coefficient || '',
            category: sectionData?.category || '',
            group: sectionData?.group || '',
        }, mode: 'onChange',
    });

    const [currentNoteField, setCurrentNoteField] = useState(null);
    const [multiFields, setMultiFields] = useState({
        post_name: typeof sectionData?.post_name === 'string' && sectionData.post_name ? sectionData.post_name.split('\n').filter(Boolean) : [''],
        level: typeof sectionData?.level === 'string' && sectionData.level ? sectionData.level.split('\n').filter(Boolean) : [''],
    });

    useEffect(() => {
        reset({
            ...sectionData,
            notes: sectionData?.notes || {},
            units: Array.isArray(sectionData?.units) ? sectionData.units : [],
            equipment: sectionData?.equipment || '',
            post_name: sectionData?.post_name || '',
            level: sectionData?.level || '',
            depth: sectionData?.depth || '',
            width: sectionData?.width || '',
            radius: sectionData?.radius || '',
            discharge: sectionData?.discharge || '',
            coverage: sectionData?.coverage || '',
            coefficient: sectionData?.coefficient || '',
            category: sectionData?.category || '',
            group: sectionData?.group || '',
        });
        setMultiFields({
            post_name: typeof sectionData?.post_name === 'string' && sectionData.post_name ? sectionData.post_name.split('\n').filter(Boolean) : [''],
            level: typeof sectionData?.level === 'string' && sectionData.level ? sectionData.level.split('\n').filter(Boolean) : [''],
        });
    }, [sectionData, reset]);

    const addMultiField = (fieldName) => {
        setMultiFields((prev) => ({
            ...prev, [fieldName]: [...prev[fieldName], ''],
        }));
    };

    const removeMultiField = (fieldName, index) => {
        setMultiFields((prev) => ({
            ...prev, [fieldName]: prev[fieldName].filter((_, i) => i !== index),
        }));
    };

    const updateMultiField = (fieldName, index, value) => {
        setMultiFields((prev) => ({
            ...prev, [fieldName]: prev[fieldName].map((item, i) => (i === index ? value : item)),
        }));
    };

    const fields = [{name: 'section', label: 'Название участка', type: 'blocked'}, {
        name: 'equipment', label: 'Вид навигационного оборудования', type: 'text'
    }, {name: 'start_date', label: 'Открытие', type: 'date'}, {
        name: 'end_date', label: 'Закрытие', type: 'date'
    }, {name: 'depth', label: 'Глубина, см', type: 'number'}, {
        name: 'width', label: 'Ширина, м', type: 'number'
    }, {name: 'radius', label: 'Радиус кривизны, м', type: 'number'}, {
        name: 'post_name', label: 'Наименование г/п', type: 'multi'
    }, {name: 'level', label: 'Отметка проектного уровня', type: 'multi'}, {
        name: 'discharge', label: 'Расход воды, м³/с', type: 'number'
    }, {name: 'coverage', label: 'Обеспеченность проектного уровня', type: 'number'}, {
        name: 'coefficient', label: 'Коэф. "K"', type: 'number'
    }, {name: 'category', label: 'Категория', type: 'text'}, {name: 'group', label: 'Группа', type: 'text'}];

    const onSubmit = (data) => {
        const updatedData = {
            ...data,
            post_name: multiFields.post_name.filter(Boolean).join('\n') || '',
            level: multiFields.level.filter(Boolean).join('\n') || '',
            units: Array.isArray(data.units) ? data.units : [],
        };
        onSave(updatedData);
        onClose();
    };

    const availableUnits = allUnits.map((unit) => ({
        ...unit,
        isAssigned: assignedUnits.has(unit.id) && assignedUnits.get(unit.id) !== currentSection,
        assignedSection: assignedUnits.get(unit.id),
    }));

    return (<Modal open={open} onClose={onClose}>
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs: '90%', sm: 800},
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: {xs: 2, sm: 4},
            maxHeight: '90vh',
            overflowY: 'auto',
        }}>
            <Typography variant="h6">Редактировать
                участок: {sectionData?.section || 'Неизвестный участок'}</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field) => (<Box key={field.name} sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    {field.type === 'blocked' ? (<Typography sx={{width: '100%', mt: '1'}}>
                        {sectionData[field.name] || '-'}
                    </Typography>) : field.type === 'multi' ? (<Box sx={{width: '100%'}}>
                            <Typography>
                                {field.label}
                            </Typography>
                            {multiFields[field.name].map((value, index) => (<Box key={`${field.name}-${index}`}
                                                                                 sx={{
                                                                                     display: 'flex',
                                                                                     alignItems: 'center',
                                                                                     mb: 1
                                                                                 }}>
                                <Controller
                                    name={`${field.name}[${index}]`}
                                    control={control}
                                    defaultValue={value}
                                    render={({field: controllerField}) => (<TextField
                                        value={multiFields[field.name][index] || ''}
                                        onChange={(e) => {
                                            updateMultiField(field.name, index, e.target.value);
                                            controllerField.onChange(multiFields[field.name].join('\n'));
                                        }}
                                        fullWidth
                                        InputLabelProps={{shrink: true}}
                                        placeholder={`Значение ${index + 1}`}
                                        sx={{mr: 1}}
                                        {...(field.name === 'level' && {
                                            InputProps: {
                                                startAdornment: /^\d+$/.test(value) ?
                                                    <span style={{marginRight: 4}}>+</span> : null,
                                            },
                                        })}
                                    />)}
                                />
                                <IconButton onClick={() => removeMultiField(field.name, index)}
                                            disabled={multiFields[field.name].length === 1}>
                                    <DeleteIcon/>
                                </IconButton>
                            </Box>))}
                            <Button onClick={() => addMultiField(field.name)} sx={{mt: 1}}>
                                Добавить строку
                            </Button>
                        </Box>) :

                        (<Controller
                            name={field.name}
                            control={control}
                            rules={{
                                validate: field.type === 'number' ? (value) => !value || !isNaN(value) || 'Введите число' : undefined,
                            }}
                            render={({field: controllerField}) => (<TextField
                                {...controllerField}
                                value={controllerField.value || ''}
                                label={field.label}
                                type={field.type}
                                multiline={field.multiline}
                                rows={field.multiline ? 3 : 1}
                                fullWidth
                                InputLabelProps={{shrink: true}}
                                variant="outlined"
                                error={!!errors[field.name]}
                                helperText={errors[field.name]?.message}
                            />)}
                        />)}
                    <IconButton onClick={() => setCurrentNoteField(field.name)}>
                        <NoteIcon/>
                    </IconButton>
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
                                {sectionData?.units?.includes(unit.id) ? ' (текущий)' : ''}
                                {unit.isAssigned ? ` (занят: ${unit.assignedSection})` : ''}
                            </MenuItem>))}
                        </Select>)}
                    />
                    {!sectionData?.units?.length && (<Typography variant="caption" color="info.main" sx={{mt: 1}}>
                        К этому участку пока не привязаны гидроузлы.
                    </Typography>)}
                    {availableUnits.length === 0 && (<Typography color="error" sx={{mt: 1}}>
                        Нет доступных гидроузлов для выбора.
                    </Typography>)}
                </FormControl>
                {currentNoteField && (<Box sx={{mt: 2}}>
                    <Typography>Редактировать заметку для {currentNoteField}</Typography>
                    <Controller
                        name={`notes.${currentNoteField}`}
                        control={control}
                        render={({field}) => (<TextField
                            {...field}
                            multiline
                            rows={4}
                            fullWidth
                            placeholder="Введите заметку"
                            value={field.value || ''}
                            onChange={(e) => field.onChange(e.target.value)}
                        />)}
                    />
                </Box>)}
                <Box sx={{mt: 2}}>
                    <Button type="submit" variant="contained">Сохранить</Button>
                    <Button onClick={onClose} sx={{ml: 2}}>Отмена</Button>
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

    const open = Boolean(anchorEl);

    return (<React.Fragment>
        <IconButton onClick={handleClick} sx={{
            position: "absolute",
            top: theme.spacing(0),
            right: theme.spacing(0.5),
            fontSize: "1rem",
            color: theme.palette.warning.main,
            cursor: "pointer",
        }}>
            <HelpIcon sx={{
                position: "absolute", fontSize: "1rem",
            }}/>
        </IconButton>
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom", horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top", horizontal: "center",
            }}
        >
            <Typography sx={{p: 2}}>{note}</Typography>
        </Popover>
    </React.Fragment>);
};

const SectionRow = memo(({row, extraData, isNearDate, calculateDuration, getStatus, auth, onEdit}) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const extra = extraData.get(row.name);
    const status = getStatus(extra?.start_date, extra?.end_date);

    const renderMultiLine = (value, isLevel) => {
        if (value === null || value === "" || !value) return "-";
        if (typeof value === "string" && value.includes("\n")) {
            const items = value.split("\n").filter((item) => item.trim());
            if (items.length === 0) return "-";
            return (<table style={{width: "100%", borderCollapse: "collapse"}}>
                <tbody>
                {items.map((item, idx, arr) => (<tr key={`${item}-${idx}`}>
                    <td
                        style={{
                            borderBottom: idx < arr.length - 1 ? "2px solid rgba(0, 0, 0, 0.12)" : "none",
                            padding: "2px 0",
                        }}
                    >
                        {isLevel && item.trim().match(/^\d+$/) ? `+ ${item}` : item.trim() || "-"}
                    </td>
                </tr>))}
                </tbody>
            </table>);
        }
        return isLevel && (typeof value === "number" || (typeof value === "string" && value.match(/^\d+$/))) ? `+ ${value}` : value || "-";
    };

    const renderCellContent = (value, noteField, sx = {textAlign: "center"}) => {
        const note = extra?.notes?.[noteField];
        return (<StyledTableCell className="body" sx={{textAlign: "left", ...sx}} hasnote={!!note}>
            {value}
            {note && (isMobile ? (<ClickableTooltip note={note}/>) : (<Tooltip title={note}>
                <HelpIcon
                    sx={{
                        position: "absolute",
                        top: theme.spacing(0),
                        right: theme.spacing(0.5),
                        fontSize: "1rem",
                        color: theme.palette.warning.main,
                        cursor: "pointer",
                    }}
                />
            </Tooltip>))}
        </StyledTableCell>);
    };

    return (<StyledTableRow>
        {renderCellContent(<React.Fragment>
            {row.name}
            {auth.role === "Администратор" && (<IconButton onClick={() => onEdit(row.name)} sx={{
                position: "absolute", fontSize: "1rem", bottom: theme.spacing(0), right: theme.spacing(0.5),
            }}>
                <EditIcon
                    sx={{
                        position: "absolute", fontSize: "1rem", color: theme.palette.warning.main,
                    }}
                />
            </IconButton>)}
        </React.Fragment>, "section", {
            textAlign: "left",
        })}
        {renderCellContent(row.length, "length")}
        {renderCellContent(extra?.equipment || "-", "equipment")}
        {renderCellContent(extra?.start_date ? new Date(extra.start_date).toLocaleDateString() : "**", "start_date", {
            backgroundColor: isNearDate(extra?.start_date) ? theme.palette.warning.light : "inherit",
            color: isNearDate(extra?.start_date) ? theme.palette.warning.contrastText : "inherit",
            transition: "background-color 0.3s, color 0.3s",
            textAlign: "center",
        })}
        {renderCellContent(extra?.end_date ? new Date(extra.end_date).toLocaleDateString() : "**", "end_date", {
            backgroundColor: isNearDate(extra?.end_date) ? theme.palette.warning.light : "inherit",
            color: isNearDate(extra?.end_date) ? theme.palette.warning.contrastText : "inherit",
            transition: "background-color 0.3s, color 0.3s",
            textAlign: "center",
        })}
        {renderCellContent(calculateDuration(extra?.start_date, extra?.end_date), "duration")}
        {renderCellContent(status, null, {
            backgroundColor: status === "Открыто" ? "success.main" : status === "Закрыто" ? "secondary.main" : "transparent",
            color: status !== "-" ? "white" : "inherit",
            textAlign: "center",
        })}
        {renderCellContent(extra?.depth || "-", "depth")}
        {renderCellContent(extra?.width || "-", "width")}
        {renderCellContent(extra?.radius || "-", "radius")}
        {renderCellContent(renderMultiLine(extra?.post_name, false), "post_name",)}
        {renderCellContent(renderMultiLine(extra?.level, true), "level")}
        {renderCellContent(extra?.discharge || "-", "discharge")}
        {renderCellContent(extra?.coverage || "-", "coverage")}
        {renderCellContent(extra?.coefficient || "-", "coefficient")}
        {auth.role === "Администратор" && (<React.Fragment>
            {renderCellContent(extra?.category || "-", "category")}
            {renderCellContent(extra?.group || "-", "group")}
        </React.Fragment>)}
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
            }}>
            {status}
        </StyledTableCell>
    </StyledTableRow>);
});

const Gabarit = () => {
    const {auth} = useContext(AuthContext);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
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

    const calculateDuration = (start, end) => start && end ? Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24) + 1) : "-";

    const getStatus = (start, end) => {
        if (!start) return "Закрыто";
        const now = new Date();
        const start_date = new Date(start);
        const end_date = end ? new Date(end) : null;
        return now < start_date || (end_date && now > end_date) ? "Закрыто" : "Открыто";
    };

    const isNearDate = (date) => {
        if (!date) return false;
        const diff = (new Date() - new Date(date)) / (1000 * 60 * 60 * 24);
        return diff >= -1 && diff <= 1;
    };

    const updateAssignedUnits = (extraData) => {
        const newAssignedUnits = new Map();
        extraData.forEach((data, section) => {
            if (Array.isArray(data.units)) {
                data.units.forEach((unitId) => {
                    newAssignedUnits.set(unitId, section);
                });
            }
        });
        setAssignedUnits(newAssignedUnits);
    };

    const processRiverData = useMemo(() => {
        return (rawData, extraDataMap) => {
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
                rivers[riverIndex].totalLength += parseFloat(row.length) || 0;
                if (extraDataMap.get(row.name)?.depth) {
                    rivers[riverIndex].guaranteedLength += parseFloat(row.length);
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
        };
    }, []);

    const processShtsData = useMemo(() => {
        return (extraData, units) => {
            const unitsMap = units.reduce((map, unit) => {
                map.names[unit.id] = unit.name;
                map.ids[unit.name] = unit.id;
                return map;
            }, {names: {}, ids: {}});

            const shtsRecords = [];
            extraData.forEach((item) => {
                if (item.units && Array.isArray(item.units)) {
                    item.units.forEach((unitId) => {
                        const existingRecord = shtsRecords.find((record) => record.id === unitId);
                        if (!existingRecord) {
                            shtsRecords.push({
                                id: unitId,
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
                }
            });

            shtsRecords.sort((a, b) => a.id - b.id);
            return shtsRecords;
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [response1, response2, units] = await Promise.all([api.get("/sites/getAll"), api.get("/gabarit/getAll"), api.get("/units/getAll"),]);

                const extraDataMap = new Map();
                response2.data
                    .sort((a, b) => b.id - a.id)
                    .forEach((item) => {
                        if (!extraDataMap.has(item.section)) {
                            extraDataMap.set(item.section, {
                                ...item, units: Array.isArray(item.units) ? item.units : [],
                            });
                        } else {
                            console.warn(`Skipping duplicate section: ${item.section}, id: ${item.id}`);
                        }
                    });

                const processedData = processRiverData(response1.data, extraDataMap);
                const shtsRecords = processShtsData(extraDataMap, units.data);

                setState({
                    data: processedData, extraData: extraDataMap, loading: false, error: null,
                });
                setShtsData(shtsRecords);
                setAllUnits(units.data);
                updateAssignedUnits(extraDataMap);

                const riverIndices = new Set(processedData.filter((row) => row.isRiverHeader).map((row) => row.riverIndex));
                setExpandedRivers(Object.fromEntries([...riverIndices].map((idx) => [idx, true])));
            } catch (error) {
                console.error("Fetch error:", error);
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
            if (header) setHeaderHeight(header.offsetHeight);
        }
    }, [state.loading]);

    const toggleRiver = (riverIndex) => {
        setExpandedRivers((prev) => ({...prev, [riverIndex]: !prev[riverIndex]}));
    };

    const handleEdit = (sectionName) => {
        const sectionData = state.extraData.get(sectionName) || {section: sectionName};
        const assignedUnitIds = [...assignedUnits]
            .filter(([_, assignedSection]) => assignedSection === sectionName)
            .map(([unitId]) => unitId);

        setEditingSection({
            ...sectionData,
            section: sectionData.section || sectionName,
            post_name: typeof sectionData.post_name === 'string' ? sectionData.post_name : '',
            level: typeof sectionData.level === 'string' ? sectionData.level : '',
            units: Array.isArray(sectionData.units) ? sectionData.units : assignedUnitIds,
            equipment: sectionData.equipment || '',
            depth: sectionData.depth || '',
            width: sectionData.width || '',
            radius: sectionData.radius || '',
            discharge: sectionData.discharge || '',
            coverage: sectionData.coverage || '',
            coefficient: sectionData.coefficient || '',
            category: sectionData.category || '',
            group: sectionData.group || '',
        });
        setEditModalOpen(true);
    };

    const handleSave = async (updatedData) => {
        try {
            const payload = {
                id: editingSection.id,
                section: updatedData.section || "",
                equipment: updatedData.equipment || null,
                start_date: updatedData.start_date || null,
                end_date: updatedData.end_date || null,
                depth: updatedData.depth ? parseFloat(updatedData.depth) : null,
                width: updatedData.width ? parseFloat(updatedData.width) : null,
                radius: updatedData.radius ? parseFloat(updatedData.radius) : null,
                post_name: updatedData.post_name || null,
                level: updatedData.level || null,
                discharge: updatedData.discharge ? parseFloat(updatedData.discharge) : null,
                coverage: updatedData.coverage ? parseFloat(updatedData.coverage) : null,
                coefficient: updatedData.coefficient ? parseFloat(updatedData.coefficient) : null,
                category: updatedData.category || null,
                group_name: updatedData.group || null,
                units: Array.isArray(updatedData.units) ? updatedData.units : [],
                note: updatedData.notes || null,
            };

            await api.post("/gabarit/change", payload);

            const [response1, response2, units] = await Promise.all([api.get("/sites/getAll"), api.get("/gabarit/getAll"), api.get("/units/getAll"),]);

            const extraDataMap = new Map();
            response2.data
                .sort((a, b) => b.id - a.id)
                .forEach((item) => {
                    if (!extraDataMap.has(item.section)) {
                        extraDataMap.set(item.section, {
                            ...item,
                            units: Array.isArray(item.units) ? item.units : [],
                            post_name: item.post_name || "",
                            level: item.level || "",
                        });
                    } else {
                        console.warn(`Skipping duplicate section: ${item.section}, id: ${item.id}`);
                    }
                });

            const processedData = processRiverData(response1.data, extraDataMap);
            const shtsRecords = processShtsData(extraDataMap, units.data);

            setState({
                data: processedData, extraData: extraDataMap, loading: false, error: null,
            });
            setShtsData(shtsRecords);
            setAllUnits(units.data);
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
            <FormControlLabel
                control={<Switch
                    checked={showShtsTable}
                    onChange={(e) => setShowShtsTable(e.target.checked)}
                    color="primary"
                />}
                label={showShtsTable ? "Показать сроки действия навигационного оборудования" : "Показать сроки работы СГТС"}
                sx={{mb: 2}}
            />
            {!showShtsTable && (<TableContainer
                component={Paper}
                sx={{maxHeight: "100vh", overflow: "auto", borderRadius: 2, boxShadow: 3}}
                ref={tableRef}
            >
                <Table stickyHeader sx={{minWidth: 1200}}>
                    <TableHead sx={{position: "sticky", top: 0, zIndex: 100, backgroundColor: "grey.100"}}>
                        <TableRow className="header-row">
                            <StyledTableCell colSpan={auth.role === "Администратор" ? 17 : 15}
                                             className="title">
                                СРОКИ ДЕЙСТВИЯ НАВИГАЦИОННОГО ОБОРУДОВАНИЯ И ГАРАНТИРОВАННЫЕ ГАБАРИТЫ ВВП РБ
                                НА {new Date().getFullYear()} ГОД
                            </StyledTableCell>
                        </TableRow>
                        <TableRow className="header-row">
                            <StyledTableCell rowSpan={2} className="header">Наименование рек и границ
                                участков</StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header">Протяженность, км</StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header">Вид навигационного
                                оборудования</StyledTableCell>
                            <StyledTableCell colSpan={2} className="header">Срок действия Н.О.</StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header">Длительность действия,
                                сут.</StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header">Статус действия
                                Н.О.</StyledTableCell>
                            <StyledTableCell colSpan={3} className="header">Габариты пути</StyledTableCell>
                            <StyledTableCell colSpan={4} className="header">Опорный гидропост и его
                                характеристики</StyledTableCell>
                            <StyledTableCell rowSpan={2} className="header" hasnote={!!headerNotes.coefficient}>
                                Коэф. "K"
                                {headerNotes.coefficient && isMobile ? (
                                    <ClickableTooltip note={headerNotes.coefficient}/>) : (
                                    <Tooltip title={headerNotes.coefficient}>
                                        <HelpIcon
                                            sx={{
                                                position: "absolute",
                                                top: theme.spacing(0),
                                                right: theme.spacing(0.5),
                                                fontSize: "1rem",
                                                color: theme.palette.warning.main,
                                            }}
                                        />
                                    </Tooltip>)}
                            </StyledTableCell>
                            {auth.role === "Администратор" && (<>
                                <StyledTableCell rowSpan={2} className="header">Категория</StyledTableCell>
                                <StyledTableCell rowSpan={2} className="header">Группа</StyledTableCell>
                            </>)}
                        </TableRow>
                        <TableRow className="header-row">
                            <StyledTableCell className="header">Открытие</StyledTableCell>
                            <StyledTableCell className="header">Закрытие</StyledTableCell>
                            <StyledTableCell className="header">Глубина, см</StyledTableCell>
                            <StyledTableCell className="header">Ширина, м</StyledTableCell>
                            <StyledTableCell className="header">Радиус кривизны, м</StyledTableCell>
                            <StyledTableCell className="header">Наименование г/п</StyledTableCell>
                            <StyledTableCell className="header">Отметка проектного уровня над "0"
                                графика</StyledTableCell>
                            <StyledTableCell className="header">Расход воды при проектном уровне,
                                м³/с</StyledTableCell>
                            <StyledTableCell className="header">Обеспеченность проектного
                                уровня</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state.data.map((row) => {
                            if (row.isRiverHeader) {
                                return (<StyledTableRow
                                    key={`river-${row.riverIndex}`}
                                    className="sticky-row"
                                    sx={{
                                        position: "sticky", top: `${headerHeight}px`, zIndex: 50, cursor: "pointer",
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
                                        >-
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
                                        >-
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
                                        >-
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow sx={{bgcolor: "success.light"}}>
                                        <StyledTableCell className="body">С гарант.
                                            габаритами</StyledTableCell>
                                        <StyledTableCell className="body" sx={{textAlign: "center"}}>
                                            {row.guaranteedLengthAll}
                                        </StyledTableCell>
                                        <StyledTableCell
                                            colSpan={auth.role === "Администратор" ? 17 : 15}
                                            className="body"
                                        >-
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
                sectionData={editingSection || {}}
                allUnits={allUnits}
                onSave={handleSave}
                assignedUnits={assignedUnits}
                currentSection={editingSection?.section}
            />
        </Box>
    </ThemeProvider>);
};

export default memo(Gabarit);