import { FC, memo, useState } from "react";

import { Grid, Typography } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export const InputFoodExpence: FC = memo(() => {
  const [amount, setAmount] = useState(0);
  const [totalamount, setTotalamount] = useState(0);

  const onChangeAmount= (e: React.ChangeEvent<HTMLInputElement>) =>{
    setAmount(Number(e.target.value))
  } ;

  const onClickSubmit = () => {
    const newTotalAmount = totalamount + amount;
    setTotalamount(newTotalAmount);
    setAmount(0);
  }

  return (
    <Grid container direction="column" alignItems="center" mt={20}>
      <Grid item mb={5}>
        <Typography variant="h4">
          食費入力
        </Typography>
      </Grid>
      <Grid item>
        <FormControl fullWidth sx={{ m: 5 }}>
          <InputLabel htmlFor="outlined-adornment-amount">金額</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            value={amount}
            onChange={onChangeAmount}
            type="number"
          />
        </FormControl>
        <Button
          onClick={onClickSubmit} type="submit" variant="outlined" size="large" endIcon={<SendIcon />} sx={{left: 300}}>
          送信
        </Button>
      </Grid>
    </Grid>
  )
})