import React, { FC, memo, useState, useContext } from "react";

import { Grid } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Footer } from '../organisms/Footer';
import { MainHeader } from "../organisms/MainHeader";
import { HeaderContext } from '../../providers/HeaderProvider';
import { UserDetailModal } from "../organisms/UserDetailModal";


export const InputFoodExpence: FC = memo(() => {
  // モーダルの開閉
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contexts = useContext(HeaderContext);
  const [value, setValue] = useState<Date | null>(new Date());

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
    <>
      <MainHeader title={contexts[1].title} handleOpen={handleOpen} />

      <Grid container direction="column" alignItems="center" mt={30}>  
        <Grid item >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="日付"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} helperText={null} />}
              />
          </LocalizationProvider>
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
      <Footer />
      <UserDetailModal open={open} handleClose={handleClose} />
    </>
    
  )
})