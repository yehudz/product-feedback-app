import { CardWrapper } from "../Card/CardContainer"
import { Snackbar, CardContent, CardHeader, Typography, Box, Stack } from "@mui/material"
import { InputField } from "../inputs/InputField"
import PrimaryButton from "../buttons/PrimaryButton"
import { userContext } from '../../context/userContext'
import React, { useContext, useEffect, useState } from "react"
import { Request } from '../../../typings/common.types'
import { useRouter } from 'next/router'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {server} from '../../../config'
interface AddCommentCardProps {
  setValue: (value: string)=> void
  characterCount?: number
  handleKeyDown?: (event: any)=> void
  request: Request
  value: string,
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AddCommentCard = ({setValue, characterCount, handleKeyDown, request, value}: AddCommentCardProps)=> {
  const {currentUser} = useContext(userContext)
  const router = useRouter()
  const [validate, setValidate] = useState<boolean>(false)
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string>()

  function handleClose() {
    setOpenSnackbar(false)
  }

  const refreshData = ()=> {
    router.replace(router.asPath)
  }
  let commentParams = {
    requestId: request.id,
    content: value,
    user: currentUser
  }
  async function saveComment() {
    if (!validate) {
      setSnackbarMessage('Fields Cannot be Empty')
      setOpenSnackbar(true)
      return
    }
    try {
      await fetch(`${server}/api/addComment`, {
        method: 'POST',
        body: JSON.stringify(commentParams)
      }).then(()=> {
        setValue('')
        refreshData()
      })
    } catch (error) {
      setSnackbarMessage('Something went wrong')
      setOpenSnackbar(true)
    }
  }

  useEffect(()=> {
    if (!value) {
      setValidate(false)
    }
    else setValidate(true)
  }, [value])
  return(
    <>
      {!validate && <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        open={openSnackbar}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert severity="error">{snackbarMessage}</Alert>
      </Snackbar>
      }
      <CardWrapper elevation={0} sx={{margin: '0 auto'}}>
        <CardContent>
          <CardHeader title={<Typography variant="h2" color="success.main">Add Comment</Typography>} />
          <Box ml={2} mr={2}>
            <InputField 
              multiLine={true} 
              setValue={setValue} 
              placeholder="Type your comment here"
              isComment={true}
              handleKeyDown={handleKeyDown}
              defaultValue={value}
            />
          </Box>
          <Stack 
            ml={2} 
            mr={2} 
            mt={3} 
            flexDirection="row" 
            alignItems={'center'} 
            justifyContent="space-between"
          >
            <Typography variant="body1" color="success.main">{characterCount} Charaters left</Typography>
            <PrimaryButton onClick={saveComment}>Post Comment</PrimaryButton>
          </Stack>
        </CardContent>
      </CardWrapper>
    </>
  )
}