interface TextFieldProps {
  setValue: (value: string)=> string | void
}

import { TextField } from "@mui/material"
import React, { useState, useRef } from "react"

export const InputField = ({textInputValue, setValue}: TextFieldProps)=> {
  let input = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<boolean>()

  function checkForValidation() {
    if (!input.current?.value) setError(true)
    else setError(false)
  }

  function handleChange(e: React.ChangeEvent) {
    setValue((e.target as HTMLInputElement).value)
  }
  return(
    <TextField 
      inputRef={input}
      color="secondary" 
      fullWidth={true}
      sx={{height: '44px', borderRadius: '5px'}} 
      size="small"
      error={error}
      helperText={error ? "Fields cannot be empty." : ""}
      onBlur={checkForValidation}
      onChange={handleChange}
    />
  )
}