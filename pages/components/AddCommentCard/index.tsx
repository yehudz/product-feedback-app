import { CardWrapper } from "../Card/CardContainer"
import { Card, CardContent, CardHeader, Typography, Box, Stack } from "@mui/material"
import { InputField } from "../inputs/InputField"
import PrimaryButton from "../buttons/PrimaryButton"

interface AddCommentCardProps {
  setValue: (value: string)=> void
  characterCount?: number
  handleKeyDown?: (event: any)=> void
}

export const AddCommentCard = ({setValue, characterCount, handleKeyDown}: AddCommentCardProps)=> {
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
          <PrimaryButton>Post Comment</PrimaryButton>
        </Stack>
      </CardContent>
    </CardWrapper>
  )
}