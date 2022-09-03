import { FC, memo, useState } from "react";

import { Stack, FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

type Props = {
  handleClose: () => void;
  open: boolean;
}

export const  InputExpenceModal: FC<Props> = memo((props) => {
  const { open, handleClose } = props;

    // inputの入力値を取得
    const [amount, setAmount] = useState(0);
    const [totalamount, setTotalamount] = useState(0);
    const onChangeAmount= (e: React.ChangeEvent<HTMLInputElement>) =>{
      setAmount(Number(e.target.value))
    } ;
  
    // 追加ボタンで値を送信
    const onClickSubmit = () => {
      const newTotalAmount = totalamount + amount;
      setTotalamount(newTotalAmount);
      setAmount(0);
    }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FormControl fullWidth sx={{ m: 5 }}>
          <InputLabel htmlFor="outlined-adornment-amount">支払額</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            value={amount}
            onChange={onChangeAmount}
            type="number"
          />
        </FormControl>
        <Button variant="text">キャンセル</Button>
        <Button variant="text">追加</Button>
      </Box>  
    </Modal>
  </div>
  )
})