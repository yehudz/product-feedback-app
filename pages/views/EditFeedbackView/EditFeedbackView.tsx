// MUI imports
import { 
    Grid, 
    Snackbar, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    Button, 
    DialogActions 
  } from "@mui/material"
import CardContainer from "../../components/Card/CardContainer"
import Link from "next/link"
import GoBackBtnLight from "../../components/buttons/GoBackBtnLight"
import { CaretLeft } from "phosphor-react"
import React, { useState } from "react"
import { Request} from '@prisma/client';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface EditFeedbackViewProps {
  request: Request
}

export const EditFeedbackView = ({request}: EditFeedbackViewProps)=> {
  const [feedbackTitle, setFeedbackTitle] = useState<string>(request.title)
  const [categorySelection, setCategorySelection] = useState<string>()
  const [status, setStatus] = useState<string>()
  const [message, setMessage] = useState<string>(request.description)
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)
  const [validate, setValidate] = useState<boolean>(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string>()
  const [openOverlay, setOpenOverlay] = useState<boolean>(false)

  let params = {
    id: request.id,
    title: feedbackTitle ? feedbackTitle : request.title,
    category: categorySelection ? categorySelection : request.category,
    description: message ? message : request.description,
    status: status ? status : 'Suggestion',
  }
  async function saveFeedbackApiCall() {
    if (!feedbackTitle || !message) {
      setValidate(false)
      setSnackbarMessage('Fields Cannot be Empty')
      setOpenSnackbar(true)
      return
    } else {
      try {
      await fetch('http://localhost:3000/api/editFeedback', {
        body: JSON.stringify(params),
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        }
      }).then(()=> {
      window.location.assign('/')
    })
      } catch (error) {
        setSnackbarMessage('Something went wrong, please try again later')
        setOpenSnackbar(true)
      }
    }
  }

  function showDeleteWarning() {
    setOpenOverlay(true)
  }

  async function deleteFeedback() {
    try {
      await fetch('http://localhost:3000/api/deleteRequest', {
        body: JSON.stringify({id: request.id}),
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
    }).then(()=> {
      handleCloseOverlay()
      window.location.assign('/')
    })
    } catch (error) {
      handleCloseOverlay()
      setSnackbarMessage('Something went wrong, please try again later')
      setOpenSnackbar(true)
    }
    
  }

  function handleCloseOverlay() {
    setOpenOverlay(false)
  }

  function handleClose() {
    setOpenSnackbar(false)
  }

  const icon = '../assets/shared/icon-edit-feedback.svg'
  const text = `Editing '${request.title}'`
  const title = 'Feedback Title'
  const titleLabel = 'Add short, descriptive headline'
  const category = 'Category'
  const categoryLabel = 'Choose a category for your feedback'
  const detail = 'Feedback Detail'
  const detailLabel = 'Include any specify comments on what should be improved, added, etc.'
  const menuItems = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug']
  const statusMenuItems = ['Suggestion', 'Planned', 'In-Progress', 'Live']
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
      <Link href="/">
        <GoBackBtnLight startIcon={<CaretLeft size={16}/>}>Go Back</GoBackBtnLight>
      </Link>
      <Grid container justifyContent={'center'} mt={6}>
        <CardContainer 
          icon={icon} 
          text={text}
          title={title}
          titleLabel={titleLabel}
          category={category}
          categoryLabel={categoryLabel}
          detail={detail}
          detailLabel={detailLabel}
          menuItems={menuItems}
          setFeedbackTitle={setFeedbackTitle}
          setCategorySelection={setCategorySelection}
          setMessage={setMessage}
          saveFeedbackApiCall={saveFeedbackApiCall}
          request={request}
          isEdit={true}
          statusMenuItems={statusMenuItems}
          setStatus={setStatus}
          showDeleteWarning={showDeleteWarning}
        />
      </Grid>
      <Dialog
        open={openOverlay}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure you?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`You're about to delete '${request.title}'`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{textTransform: 'none'}} color="primary" onClick={handleCloseOverlay}>Cancel</Button>
          <Button sx={{textTransform: 'none'}} color="secondary" onClick={deleteFeedback} autoFocus>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </>
      
  )
}