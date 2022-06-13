import { GetStaticProps } from 'next'
import { FeedbackCard } from '../views/FeedbackView/FeedbackCard'
import { FeedbackViewTopBar } from '../views/FeedbackView/FeedbackViewTopBar'
import { AddCommentCard } from '../components/AddCommentCard'
import { CommentCard } from '../components/CommentCard/CommentCard'
import CommentStyles from '../../styles/Comment.module.scss'
import {Request, Comment, User} from '../../typings/common.types'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import prisma from '../../db'

const Feedback = ({request}: Request)=> {
  const [value, setValue] = useState<string>('')
  const [characterCount, setCharacterCount] = useState<number>(250)

  // Handles the characters left on the UI
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace') {
      if (characterCount === 250) return
      setCharacterCount(characterCount + 1)
      } else {
        if (characterCount === 0) return
        setCharacterCount(characterCount - 1)
      }
  };

  useEffect(()=> {
    if (!value.length) {
      setCharacterCount(250)
      return
    }
  }, [value])
  
  return (
    <Box mt={2}>
      <FeedbackViewTopBar />
      <FeedbackCard request={request} />
      {request.comments.length ? <div className={CommentStyles.container}>
        <Typography 
          variant='h3' 
          color="success.main" 
          pt={3} 
          pl={3}
        >
          {request.comments.length} {request.comments.length === 1 ? 'Comment' : 'Comments'}
        </Typography>
        {request?.comments.map((comment: Comment)=> {
          const user: User = comment.user[0]
          return(
            <CommentCard 
              key={comment.id}
              username={user.username}
              userImage={user.image}
              name={user.name}
              comment={comment.content}

            />
            )
        })}
      </div> : null}
      
      <AddCommentCard 
        setValue={setValue} 
        characterCount={characterCount} 
        handleKeyDown={handleKeyDown}
        request={request}
        value={value}
      />
    </Box>
  )
}

export const getStaticPaths = async ()=> {
  const res = await prisma.request.findMany()
  const paths = res.map(feedback=> {
    return {
      params: {id: feedback.id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params})=> {
  const id: string = params?.id as string
  const request = await prisma.request.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      comments: {
        include: {
          user: true
        }
      },
    },
  })
  return {
    props: {request}
  }
}

export default Feedback