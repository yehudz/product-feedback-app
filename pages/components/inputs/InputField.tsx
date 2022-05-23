interface TextFieldProps {
  setValue: (value: string)=> string | void
}

import { TextField } from "@mui/material"
import {makeStyles} from '@mui/styles'
import React, { useState, useRef } from "react"

const useStyles = makeStyles(() => ({
  noBorder: {
    borderColor: "transparent",
    borderWidth: '1px !important'
  }
}));

export const InputField = ({setValue}: TextFieldProps)=> {
  let input = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<boolean>()
  const [noBorder, setNoBorder] = useState(false)
  const classes = useStyles();

  function checkForValidation() {
    if (!input.current?.value) setError(true)
    else setError(false)
  }

  function handleChange(e: React.ChangeEvent) {
    let value = (e.target as HTMLInputElement).value
    if (!value) setError(true)
    else {
      setError(false)
      setValue(value)
    }
  }
  return(
    <TextField 
      variant="outlined"
      inputRef={input}
      color="secondary" 
      fullWidth={true}
      sx={{height: '44px', borderRadius: '5px', backgroundColor: "#F7F8FD", marginTop: 1}} 
      size="small"
      error={error}
      helperText={error ? "Cant't be empty." : ""}
      onBlur={checkForValidation}
      onChange={handleChange}
      InputProps={{
        classes:{notchedOutline:classes.noBorder}
      }}
    />
  )
}