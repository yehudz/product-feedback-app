import { GetStaticProps } from 'next'
import { FeedbackCard } from '../views/FeedbackView/FeedbackCard'
import { FeedbackViewTopBar } from '../views/FeedbackView/FeedbackViewTopBar'
import { AddCommentCard } from '../components/AddCommentCard'
import {Request} from '../../typings/common.types'
import { Box } from '@mui/material'
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
  const res = await prisma.request.findMany({
    include: {
      comments: true
    }
  })
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
    }
  })
  return {
    props: {request}
  }
}

export default Feedback