// import { FC } from "react"

import { Stack, FormControl, FormLabel, Input } from "@mui/material";
import Box from '@mui/material/Box';

export const UserEdit = () => {
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
      <>
        <Box sx={style}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel>email</FormLabel>
              <Input></Input>
            </FormControl>
            <FormControl>
              <FormLabel>password</FormLabel>
              <Input></Input>
            </FormControl>
          </Stack>
        </Box>
    </>
    )
}