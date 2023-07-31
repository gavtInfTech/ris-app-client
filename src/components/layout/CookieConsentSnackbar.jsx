import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import Button from "@mui/material/Button";
import Cookies from 'js-cookie';

export default function CookieConsentSnackbar() {
  const [open, setOpen] = useState(true);

  const handleAccept = () => {
    setOpen(false);
    Cookies.set("cookieConsent", "accepted", { expires: 90 }); 
  };

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (cookieConsent === "accepted") {
      setOpen(false);
    }
  }, []);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={null}
    >
      <SnackbarContent
        message="Мы используем файлы cookies, чтобы обеспечить вам лучший опыт на нашем веб-сайте."
        action={
          <Button color="inherit" size="small" onClick={handleAccept}>
            Принять
          </Button>
        }
        sx={{backgroundColor: '#6578eb', maxWidth: '400px'}}
      />
    </Snackbar>
  );
}
