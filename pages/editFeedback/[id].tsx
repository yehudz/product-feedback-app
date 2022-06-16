import { GetStaticProps } from 'next'
import prisma from '../../db'
import React, {Suspense} from 'react'
import { useEffect, useState } from 'react'
import {Request} from '../../typings/common.types'
import EditFeedbackView from '../../views/EditFeedbackView/EditFeedbackView'

interface EditFeedbackProps {
  request: Request
}

const EditFeedback = ({request}: EditFeedbackProps)=> {
  return(
    <EditFeedbackView request={request}/>
  )
}

export const getStaticPaths = async ()=> {
  const res = await prisma.request.findMany()
  const paths = res.map((feedback: Request)=> {
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
          replies: true
        }
      },
    },
  })
  return {
    props: {request}
  }
}

export default EditFeedback