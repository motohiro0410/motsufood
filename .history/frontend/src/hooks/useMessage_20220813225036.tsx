import { useCallback } from "react"
import Alert from '@mui/material/Alert';

export const useMessage = () => {

  const MessageComment = [
    "ユーザー取得に失敗しました"
  ]

  const getUsersAlert = useCallback(() => {
    return(
      <Alert severity="error">
        '${MessageComment[0]}'
      </Alert>
    )
  }, [])
}