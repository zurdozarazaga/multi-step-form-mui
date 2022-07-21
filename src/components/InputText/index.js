import { FormHelperText, InputLabel, TextField } from "@mui/material";
import React from "react";

const InputText = (props) => {
  const { label, formHelperText, variant, size, marginVertical, fullWidth, color, field} = props;
  return (
    <>
            <InputLabel htmlFor="my-input">{label}</InputLabel>
            <TextField
              variant={variant}
              id="outlined-basic"
              label={label}
              size={size}
              margin={marginVertical || ''}
              fullWidth={fullWidth || false}
              color={color}
              {...field}
            />
            <FormHelperText id="my-helper-text">{formHelperText}</FormHelperText>
            </>
  );
};

export default InputText;
