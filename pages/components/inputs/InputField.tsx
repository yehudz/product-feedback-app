interface TextFieldProps {
  setValue: (value: string)=> string | void
  multiLine: boolean
  placeholder?: string
  isComment?: boolean
  handleKeyDown?: (event: any)=> void
}

import { TextField } from "@mui/material"
import {makeStyles} from '@mui/styles'
import React, { useState, useRef } from "react"

const useStyles = makeStyles(() => ({
  noBorder: {
    borderColor: "transparent",
    borderWidth: '1px !important',
  }
}));

export const InputField = ({setValue, multiLine, placeholder, isComment, handleKeyDown}: TextFieldProps)=> {
  let input = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<boolean>()
  const classes = useStyles();

  function checkForValidation() {
    if (!input.current?.value) setError(true)
    else setError(false)
  }

  function handleChange(e: React.ChangeEvent) {
    let value = (e.target as HTMLInputElement).value
    if (!value) {
      setError(true)
      setValue(value)
    }
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
      sx={{
        borderRadius: '5px', 
        backgroundColor: "#F7F8FD", 
        marginTop: 1,
        // height: '100%'
      }} 
      size="small"
      error={error}
      helperText={error ? "Cant't be empty." : ""}
      onBlur={checkForValidation}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      InputProps={{
        classes:{notchedOutline:classes.noBorder},
      }}
      inputProps={{
        maxLength: 250
      }}
      multiline={multiLine ? true : false}
      minRows={isComment ? 3 : 6}
      placeholder={placeholder}
    />
  )
}