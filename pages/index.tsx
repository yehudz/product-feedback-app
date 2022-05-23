// Next imports
import type { NextPage } from 'next'
import Head from 'next/head'

// Server imports
import { GetStaticProps } from 'next'
import {server} from '../config'
// React component imports
import {MobileTopBarContainer} from './components/MobileTopBar/MobileTopBarContainer'
import { FeedbackView } from './views/FeedbackView/FeedbackView'
import { PrismaClient } from '@prisma/client'

const Home: NextPage = ({requests}: any) => {
  return (
    <>
      <Head>
        <title>Product Feedback</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <MobileTopBarContainer />
      <FeedbackView requests={requests}/>
    </>
  )
}

const prisma = new PrismaClient()

export const getStaticProps: GetStaticProps = async ()=> {
  
  const requests = await prisma.request.findMany({
    include: {
      comments: true
    }
  })
  return {
    props: {
      requests
    }
  }
}

export default Home
