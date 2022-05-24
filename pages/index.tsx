// Next imports
import type { NextPage } from 'next'
import Head from 'next/head'

// Server imports
import { GetServerSideProps } from 'next'
// React component imports
import { MobileTopBarContainer } from './components/MobileTopBar/MobileTopBarContainer'
import { FeedbackView } from './views/FeedbackView/FeedbackView'
import { PrismaClient } from '@prisma/client'

const Home: NextPage = ({requests}: any) => {
  return (
    <>
      <Head>
        <title>Product Feedback</title>
      </Head>
      <MobileTopBarContainer />
      <FeedbackView requests={requests}/>
    </>
  )
}

const prisma = new PrismaClient()

export const getServerSideProps: GetServerSideProps = async ()=> {
  
  const requests = await prisma.request.findMany()
  return {
    props: {
      requests
    }
  }
}

export default Home
