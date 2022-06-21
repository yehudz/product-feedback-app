import { GetStaticProps } from 'next'
import dynamic from "next/dynamic";
import FeedbackCard from '../../views/FeedbackView/FeedbackCard'
import FeedbackViewTopBar from '../../views/FeedbackView/FeedbackViewTopBar'
import AddCommentCard from '../../components/AddCommentCard'
import React, {Suspense} from 'react'
const  CommentCard = dynamic(()=> import('../../components/CommentCard/CommentCard'), { ssr: false }) 
import CommentStyles from '../../styles/Comment.module.scss'
import {Request, Comment, User} from '../../typings/common.types'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import prisma from '../../db'

interface FeedbackProps {
  request: Request
}

const Feedback = ({request}: FeedbackProps)=> {
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
      <FeedbackViewTopBar request={request}/>
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
        <Suspense>
        {request?.comments.map((comment: Comment)=> {
          const user: User = comment.user[0]
          console.log(comment)
          return(
            
              <CommentCard 
                key={comment.id}
                username={user?.username}
                userImage={user?.image}
                name={user?.name}
                comment={comment.content}
                commentId={comment.id}
                replies={comment.replies}
              />
            
            )
        })}</Suspense>
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
  const paths = res.map((feedback: any)=> {
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
          user: true,
          replies: {
            include: {
              user: true
            }
          }
        }
      },
    },
  })
  return {
    props: {request}
  }
}

export default Feedback