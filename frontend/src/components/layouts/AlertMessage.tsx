import React from "react"
import { AlertProps, Snackbar } from "@mui/material"
import Alert from '@mui/material/Alert';

export const MuiAlert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />
})

interface AlertMessageProps {
  open: boolean
  setOpen: Function
  severity: "error" | "success" | "info" | "warning"
  message: string
}

// アラートメッセージ（何かアクションを行なった際の案内用に使い回す）
export const AlertMessage = ({ open, setOpen, severity, message}: AlertMessageProps) => {
  const handleCloseAlertMessage = (e?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return

    setOpen(false)
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={()=>handleCloseAlertMessage}
      >
        <Alert onClose={handleCloseAlertMessage} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}