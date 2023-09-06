import { React, useState } from "react";
import Button from "@mui/material/Button";
import styles from "./style.module.css";
import { createPacker } from "docxtemplater";


export default function DocxFile() {
  const generateDocxFile = () => {
    
  };

  return (
    <>
      <Button
        variant="contained"
        type="submit"
        className={styles.button}
        onClick={() => generateDocxFile()}
      >
        Скачать акт
      </Button>
    </>
  );
}
