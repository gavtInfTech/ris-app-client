import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  Autocomplete,
  Popper,
  Typography,
  Chip,
} from "@mui/material";
import { React, useEffect, useState } from "react";
import { api } from "../../axiosConfig";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PortAddForm from "./components/PortAddForm";
import PortTable from "./components/PortTable";
import PortTableSend from "./components/SendShipForm";

export default function AdminPort({ portId }) {
  const [bigForceReload, setBigForceReload] = useState(false);
  const bigReload = () => {
    setBigForceReload((prev) => !prev);
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <PortTableSend
          portId={portId}
          bigReload={bigReload}
          bigForceReload={bigForceReload}
        ></PortTableSend>
        <PortAddForm portId={portId} bigReload={bigReload} />
      </div>
      <PortTable
        portId={portId}
        bigReload={bigReload}
        bigForceReload={bigForceReload}
      />
    </div>
  );
}
