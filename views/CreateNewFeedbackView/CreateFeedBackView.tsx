import { Grid, Snackbar } from "@mui/material"
import CardContainer from "../../components/Card/CardContainer"
import Link from "next/link"
import GoBackBtnLight from "../../components/buttons/GoBackBtnLight"
import { CaretLeft } from "phosphor-react"
import React, { useState } from "react"
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {server} from '../../config'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateFeedbackContainer = ()=> {
  const [feedbackTitle, setFeedbackTitle] = useState<string>()
  const [categorySelection, setCategorySelection] = useState<string>()
  const [message, setMessage] = useState<string>()
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)
  const [validate, setValidate] = useState<boolean>(false)
  const [snackbarMessage, setSnackbarMessage] = useState<string>()
  let params = {
    title: feedbackTitle,
    category: categorySelection ? categorySelection : "Feature",
    description: message,
    status: '',
    upvotes: 0
  }

  function handleClose() {
    setOpenSnackbar(false)
  }
  console.log(server)
  async function saveFeedbackApiCall() {
    if (!title || !message) {
      setValidate(false)
      setSnackbarMessage('Fields Cannot be Empty')
      setOpenSnackbar(true)
      return
    } else {
      setValidate(true)
      try {
        await fetch(`${server}/api/createRequest`, {
        body: JSON.stringify(params),
        method: 'POST'
      }).then(()=> {
        // window.location.assign('/')
      })
      } catch (error) {
        setSnackbarMessage('Something went wrong, please try again later')
        setOpenSnackbar(true)
      }
    }
  }

  const icon = 'assets/shared/icon-new-feedback.svg'
  const text = 'Create New Feedback'
  const title = 'Feedback Title'
  const titleLabel = 'Add short, descriptive headline'
  const category = 'Category'
  const categoryLabel = 'Choose a category for your feedback'
  const detail = 'Feedback Detail'
  const detailLabel = 'Include any specify comments on what should be improved, added, etc.'
  const menuItems = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug']
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
          isEdit={true}
        />
      </Grid>
    </>
      
  )
}

export default CreateFeedbackContainer