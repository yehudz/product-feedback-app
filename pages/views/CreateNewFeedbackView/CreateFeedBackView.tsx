import { CardContent, CardHeader, Grid, Typography } from "@mui/material"
import CardContainer from "../../components/Card/CardContainer"
import Link from "next/link"
import GoBackBtnLight from "../../components/buttons/GoBackBtnLight"
import { CaretLeft } from "phosphor-react"
import { useEffect, useState } from "react"
import { PrismaClient } from "@prisma/client"

export const CreateFeedbackContainer = ()=> {
  const [feedbackTitle, setFeedbackTitle] = useState<string>()
  const [categorySelection, setCategorySelection] = useState<string>()
  const [message, setMessage] = useState<string>()

  let params = {
    title: feedbackTitle,
    category: categorySelection,
    description: message,
    status: '',
    upvotes: 0
  }

  async function saveFeedbackApiCall() {
   const res = await fetch('http://localhost:3000/api/createRequest', {
     body: JSON.stringify(params),
     method: 'POST'
   })
   if (res) window.location.assign('/')
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
        />
      </Grid>
    </>
      
  )
}