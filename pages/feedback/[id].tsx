import { PrismaClient } from '@prisma/client'
import { GetStaticProps } from 'next'

import {Request} from '../../typings/common.types'

const prisma = new PrismaClient()
const Feedback = ({title, category, description, status, comments, upvotes}: Request)=> {
  console.log(title)


  return (
    <>
    </>
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
    props: request
  }
}

export default Feedback