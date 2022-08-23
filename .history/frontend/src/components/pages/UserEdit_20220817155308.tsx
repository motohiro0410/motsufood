// import { FC } from "react"

import { TextField, Button, FormLabel, Input } from "@mui/material";
import Box from '@mui/material/Box';

export const UserEdit = () => {
  
    return (
        <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="email"
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="password"
                name="password"
                autoComplete="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="comfirmation"
                label="comfirmation"
                type="comfirmation"
                id="comfirmation"
                autoComplete="comfirmation"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                sign In
              </Button>
            </Box>
    )
}