import {Request} from '@prisma/client'
import FeedbackCardStyles from '../../../styles/FeedbackCard.module.scss'
import ButtonStyles from '../../../styles/Buttons.module.scss'
import { Typography } from '@mui/material'
import CategoryButton from '../../components/buttons/CategoryButton'
import {CommentsNotification} from '../../components/CommentsNotification'

import Link from 'next/link'
import { useState } from 'react'
interface FeedbackCardProps {
  request: Request
  isRoadmap?: boolean
  status?: {
    title: string
    color: string
  }
}

export const FeedbackCard = ({request, isRoadmap, status}: FeedbackCardProps)=> {
  const [upvoted, setUpvoted] = useState<boolean>(request.liked)
  const [upvotesCount, setUpvotesCount] = useState<number>(request.upvotes?request.upvotes:0)
  let upvoteParams = {
    id: request.id,
    upvotes: request.liked ? request?.upvotes - 1 : request.upvotes + 1,
    liked: request.liked ? false : true
  }
  async function handleUpvote() {
    await fetch('http://localhost:3000/api/addUpvote', {
      method: 'POST',
      body: JSON.stringify(upvoteParams),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(()=> {
      if (!upvoted) {
        setUpvoted(true)
        setUpvotesCount(upvotesCount + 1)
      }
      if (upvoted) {
        setUpvoted(false)
        setUpvotesCount(upvotesCount - 1)
      }
    })
  }

  return(
    <div className={FeedbackCardStyles.container}>
      {isRoadmap && <div className={FeedbackCardStyles.cardTopline} style={{backgroundColor: status.color}}></div>}
      <div className={FeedbackCardStyles.contentArea}>
        {isRoadmap && <div className={FeedbackCardStyles.statusContainer}>
            <div className={FeedbackCardStyles.dot} style={{backgroundColor: status.color}}></div>
            <div className={FeedbackCardStyles.title}>{status.title}</div>
          </div>
        }
        <Link href={`/feedback/${request.id}`}>
          <Typography 
            variant='h4' 
            color="success.main"
            sx={{cursor: 'pointer'}} 
            gutterBottom>
              {request.title}
          </Typography>
        </Link>
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
      <div className={FeedbackCardStyles.upVoteButton} onClick={handleUpvote}>
        <div className={`${ButtonStyles.upVoteButton} ${upvoted ? ButtonStyles.active : ''}`}>
          <img src='/assets/shared/icon-arrow-up.svg' />
          {upvotesCount}
        </div>
      </div>
      <CommentsNotification amount={request.comments?.length}/>
    </div>
  )
}