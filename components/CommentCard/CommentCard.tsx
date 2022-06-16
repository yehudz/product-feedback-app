import Button from '../buttons/GoBackBtnLight'
import React, {Suspense, useEffect, useState} from 'react'
import CommentStyles from '../../styles/Comment.module.scss'
import { Typography } from '@mui/material'
import CommentReplyInput from './CommentReplyInput'
import { Reply } from "@prisma/client";
// import { ReplyCard } from '../ReplyCard/ReplyCard'
const ReplyCard = React.lazy(() => import('../ReplyCard/ReplyCard'));
interface CommentCardProps {
  userImage: string
  username: string
  name: string
  comment: string
  commentId: number
  replies?: Reply[] | any
  isReply? : boolean
}

const CommentCard = ({
  userImage,
  username,
  name,
  comment,
  commentId,
  replies,
  isReply
}: CommentCardProps)=> {
  const [showPostReplyInput, setShowPostReplyInput] = useState<boolean>(false) 
  useEffect(()=> {
    setShowPostReplyInput(false)
  }, [])
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
          {isReply ? <span className={CommentStyles.replyingTo}>@{username} <span>{comment}</span></span>: comment}
        </Typography>
      {showPostReplyInput && <CommentReplyInput commentId={commentId} replyingTo={username} setShowPostReplyInput={setShowPostReplyInput}/> }
      {replies && <Suspense><div className={CommentStyles.repliesContainer}>
        {replies.map((reply: Reply)=> {
        return(
            <ReplyCard 
              key={reply.id}
              name={name}
              username={username}
              userImage={userImage}
              replyingTo={username}
              comment={reply.content}
              commentId={commentId}
            />
          
        )
      })}
      </div></Suspense>}
    </div>
  )
}

export default CommentCard