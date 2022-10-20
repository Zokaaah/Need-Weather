import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

import styles from "./alert.module.css"

export default function DescriptionAlerts() {
  return (

    <div className={styles.alertContainer}>
    <Stack sx={{ width: "50%" }} spacing={2}>
      <Alert severity="warning">
        <AlertTitle>Cidade não encontrada</AlertTitle>
        Verifique a ortografia<strong> e tente novamente</strong>
      </Alert>
    </Stack>
    </div>
  );
}
