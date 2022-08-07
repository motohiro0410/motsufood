import { FC, memo, useState } from "react";

import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { Grid, Typography, Card } from "@mui/material"

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const Money: FC = memo(() => {

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
      <Header />
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
            value={amount === 0 ? "" : amount}
            onChange={onChangeAmount}
            type="number"
          />
        </FormControl>
        <Button
          onClick={onClickSubmit} type="submit" variant="outlined" size="large" endIcon={<SendIcon />} sx={{left: 300}}>
          送信
        </Button>
      </Grid>
        <Grid container direction="column" alignItems="center" mt={20}>
          <Grid item mb={5}>
            <Typography variant="h4">
              食費合計
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              {totalamount}円
            </Typography>
          </Grid>

          <Grid container justifyContent="center" spacing={3} sx={{ mt: 10 }}>
            <Grid item xs={3}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center">
                  user1
                </Typography>
                <Typography textAlign="center" sx={{ mt: 3 }} variant="h5">
                  〇〇円
                </Typography>
              </Card>
            </Grid> 
            <Grid item xs={3}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center">
                  user2
                </Typography>
                <Typography textAlign="center" sx={{ mt: 3 }} variant="h5">
                  〇〇円
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center">
                  user3
                </Typography>
                <Typography textAlign="center" sx={{ mt: 3 }} variant="h5">
                  〇〇円
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      <Footer />
    </>
    
  )
})