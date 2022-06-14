import { Stack, Grid } from '@mui/material'
import { useState } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import {InputField} from '../inputs/InputField'
import CommentStyles from '../../../styles/Comment.module.scss'
import { useRouter } from 'next/router'
interface CommentReplyInputProp {
  commentId: number
  replyingTo: string
  setShowPostReplyInput: ()=> boolean
}

export const CommentReplyInput = ({commentId, replyingTo, setShowPostReplyInput}: CommentReplyInputProp)=> {
  const [value, setValue] = useState<string>()
  const router = useRouter()
  const refreshData = ()=> {
    router.replace(router.asPath)
  }

  const replyParams = {
    commentId,
    replyingTo,
    content: value
  }
  async function handleReplyPost() {
    try {
      await fetch(`http://localhost:3000/api/addReply`, {
        method: 'POST',
        body: JSON.stringify(replyParams)
      }).then(()=> {
        setShowPostReplyInput(false)
        refreshData()
      })
    } catch (error) {
      console.log(error)
    }
  }
  return(
    <Stack 
      className={CommentStyles.postReplyContainer} 
      flexDirection={"row"}
      gap={2}
      mb={3}
      mt={3}
      sx={{zIndex: '1000'}}
    >
      <Grid item flex={1} mt={-1}>
        <InputField 
          setValue={setValue}
          multiLine={true}
          isComment={true}
        />
      </Grid>
      <Grid item flex={.2}>
        <PrimaryButton 
          sx={{minWidth: '117px !important'}}
          onClick={handleReplyPost}
        >
          Post Reply
        </PrimaryButton>
      </Grid>
    </Stack>
  )
}