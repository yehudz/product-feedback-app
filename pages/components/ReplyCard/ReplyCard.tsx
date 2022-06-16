import Button from '../buttons/GoBackBtnLight'
import CommentStyles from '../../../styles/Comment.module.scss'
import { Typography } from '@mui/material'
import CommentReplyInput from '../CommentCard/CommentReplyInput'
import { useState } from 'react'

interface ReplyCardProps {
  name: string
  username: string
  replyingTo: string
  userImage: string
  comment: string
  commentId: number
}

const ReplyCard = ({name, username, replyingTo, userImage, comment, commentId}: ReplyCardProps)=> {
  const [showPostReplyInput, setShowPostReplyInput] = useState<boolean>(false) 
  return(
    <div className={CommentStyles.wrapper}>
      <div className={CommentStyles.image}>
        <img src={userImage} alt="Profile Image" />
      </div>
      <div className={CommentStyles.userDetails}>
        <Typography variant='body2' fontWeight={700} color="success.main">{name}</Typography>
        <Typography variant='body2' fontWeight={100} color="success.main">@{username}</Typography>
      </div>
      <Button 
        sx={{color: '#4661E6', width: '15px', fontSize: '14px'}}
        onClick={()=> setShowPostReplyInput(true)}
      >
        Reply
      </Button>
      <Typography 
        variant='body2' 
        fontWeight={100} 
        color="success.main"
        className={CommentStyles.comment}
        gutterBottom
        mb={3}
        mt={1.5}
        >
          <div className={CommentStyles.replyingTo}>@{replyingTo} <span>{comment}</span></div>
        </Typography>
      {showPostReplyInput && 
        <CommentReplyInput 
          commentId={commentId} 
          replyingTo={username} 
          setShowPostReplyInput={setShowPostReplyInput}
        />}
    </div>
  )
}

export default ReplyCard