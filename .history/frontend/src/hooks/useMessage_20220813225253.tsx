import { useCallback } from "react"
import Alert from '@mui/material/Alert';

export const showMessage = () => {

  const MessageComment = [
    "ユーザー取得に失敗しました"
  ]

  const getUsersAlert = () => {
    return(
      <Alert severity="error">
        '${MessageComment[0]}'
      </Alert>
    )
  }
}