import { Stack } from "@mui/material"
import GoBackBtnLight from "../../components/buttons/GoBackBtnLight"
import SecondaryButton from "../../components/buttons/SecondayButton"
import { CaretLeft } from "phosphor-react"
import { Request } from '../../../typings/common.types'
import Link from "next/link"
export const FeedbackViewTopBar = ({request}: Request)=> {
  return(
    <Stack 
      flexDirection={'row'} 
      alignItems="center" 
      justifyContent={'space-between'}
      mr={3}
      ml={-1}
    >
      <Link href="/">
        <GoBackBtnLight startIcon={<CaretLeft size={16}/>}>Go Back</GoBackBtnLight>
      </Link>
      <Link href={`/editFeedback/${request.id}`}>
        <SecondaryButton>Edit Feedback</SecondaryButton>
      </Link>
    </Stack>
  )
}