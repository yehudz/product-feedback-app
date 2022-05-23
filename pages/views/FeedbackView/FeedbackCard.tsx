import {Request} from '../../../typings/common.types'
import FeedbackCardStyles from '../../../styles/FeedbackCard.module.scss'
import ButtonStyles from '../../../styles/Buttons.module.scss'
import { Typography } from '@mui/material'
import CategoryButton from '../../components/buttons/CategoryButton'
import {CommentsNotification} from '../../components/CommentsNotification'

interface FeedbackCardProps {
  request: Request
}

export const FeedbackCard = ({request}: FeedbackCardProps)=> {
  return(
    <div className={FeedbackCardStyles.container}>
      <div className={FeedbackCardStyles.contentArea}>
        <Typography 
          variant='h4' 
          color="success.main" 
          gutterBottom>
            {request.title}
        </Typography>
        <Typography 
          variant='body2' 
          color="success.main" 
          mb={1.3}>
            {request.description}
        </Typography>
        <CategoryButton 
          className={FeedbackCardStyles.capitalize}>
            {request.category}
        </CategoryButton>
      </div>
      <div className={FeedbackCardStyles.upVoteButton}>
        <div className={ButtonStyles.upVoteButton}>
          <img src='assets/shared/icon-arrow-up.svg' />
          {request.upvotes}
        </div>
      </div>
      <CommentsNotification amount={request.comments?.length}/>
    </div>
  )
}