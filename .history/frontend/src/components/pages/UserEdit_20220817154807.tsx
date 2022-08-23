// import { FC } from "react"

import { Stack, FormControl, FormLabel, Input } from "@mui/material";
import Box from '@mui/material/Box';

export const UserEdit = () => {
  
    return (
      <>
        <Box>
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