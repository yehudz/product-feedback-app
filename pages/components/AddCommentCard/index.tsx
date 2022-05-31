import { CardWrapper } from "../Card/CardContainer"
import { Card, CardContent, CardHeader, Typography, Box, Stack } from "@mui/material"
import { InputField } from "../inputs/InputField"
import PrimaryButton from "../buttons/PrimaryButton"
import { userContext } from '../../context/userContext'
import { useContext } from "react"
import { Request } from '../../../typings/common.types'
interface AddCommentCardProps {
  setValue: (value: string)=> void
  characterCount?: number
  handleKeyDown?: (event: any)=> void
  request: Request
  value: string
}



export const AddCommentCard = ({setValue, characterCount, handleKeyDown, request, value}: AddCommentCardProps)=> {
  const {currentUser} = useContext(userContext)

  async function saveComment() {

    try {
      fetch(`http://localhost:3000/api/addComment/${request.id}`, {
        method: 'UPDATE',
        body: {
          content: value,
          user: [currentUser]
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  
  return(
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
  )
}