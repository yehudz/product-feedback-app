import Button from '../buttons/GoBackBtnLight'
import CommentStyles from '../../../styles/Comment.module.scss'
import { Typography } from '@mui/material'
interface CommentCardProps {
  userImage: string
  username: string
  name: string
  comment: string
}

export const CommentCard = ({
  userImage,
  username,
  name,
  comment
}: CommentCardProps)=> {
  return(
    <div className={CommentStyles.wrapper}>
      <div className={CommentStyles.image}>
        <img src={userImage} alt="Profile Image" />
      </div>
      <div className={CommentStyles.userDetails}>
        <Typography variant='body2' fontWeight={700} color="success.main">{name}</Typography>
        <Typography variant='body2' fontWeight={100} color="success.main">@{username}</Typography>
      </div>
      <Button sx={{color: '#4661E6', width: '15px', fontSize: '14px'}}>Reply</Button>
      <Typography 
        variant='body2' 
        fontWeight={100} 
        color="success.main"
        className={CommentStyles.comment}
        >
          {comment}
        </Typography>
    </div>
  )
}