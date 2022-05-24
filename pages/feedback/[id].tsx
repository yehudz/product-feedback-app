import { PrismaClient } from '@prisma/client'
import { GetStaticProps } from 'next'
import { FeedbackCard } from '../views/FeedbackView/FeedbackCard'
import { FeedbackViewTopBar } from '../views/FeedbackView/FeedbackViewTopBar'

import {Request} from '../../typings/common.types'
import { Box } from '@mui/material'

const prisma = new PrismaClient()
const Feedback = ({request}: Request)=> {

  return (
    <Box mt={2}>
      <FeedbackViewTopBar />
      <FeedbackCard request={request} />
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