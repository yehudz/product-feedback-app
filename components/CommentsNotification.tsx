import { Typography } from '@mui/material';
import FeedbackCardStyles from '../styles/FeedbackCard.module.scss';

interface CommentsNotificationProps {
  amount?: number
}

const CommentsNotification = ({amount}: CommentsNotificationProps)=> {
  return (
    <div className={FeedbackCardStyles.commentsContainer}>
      <img src="/assets/shared/icon-comments.svg" alt="" />
      <Typography variant="h4">{amount ? amount : 0}</Typography>
    </div>
  )
}

export default CommentsNotification