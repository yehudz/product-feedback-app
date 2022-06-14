import { Grid } from "@mui/material"
import CardContainer from "../../components/Card/CardContainer"
import Link from "next/link"
import GoBackBtnLight from "../../components/buttons/GoBackBtnLight"
import { CaretLeft } from "phosphor-react"
import { useState } from "react"
import { Request} from '@prisma/client';

interface EditFeedbackViewProps {
  request: Request
}

export const EditFeedbackView = ({request}: EditFeedbackViewProps)=> {
  const [feedbackTitle, setFeedbackTitle] = useState<string>()
  const [categorySelection, setCategorySelection] = useState<string>()
  const [status, setStatus] = useState<string>()
  const [message, setMessage] = useState<string>()

  let params = {
    id: request.id,
    title: feedbackTitle ? feedbackTitle : request.title,
    category: categorySelection ? categorySelection : request.category,
    description: message ? message : request.description,
    status: status ? status : 'Suggestion',
  }
  async function saveFeedbackApiCall() {
   const res = await fetch('http://localhost:3000/api/editFeedback', {
     body: JSON.stringify(params),
     method: 'POST',
     headers: {
       'Content-type': 'application/json'
     }
   })
   if (res) window.location.assign('/')
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
        />
      </Grid>
    </>
      
  )
}