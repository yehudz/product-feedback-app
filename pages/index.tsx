import React, {Suspense, useContext} from 'react'

// Next imports
import type { NextPage } from 'next'
import Head from 'next/head'

// Server imports
import { GetServerSideProps } from 'next'
// React component imports
import { MobileTopBarContainer } from './components/MobileTopBar/MobileTopBarContainer'
import { FeedbackView } from './views/FeedbackView/FeedbackView'
import { appContext } from './context/appContext'
const MobileNavMenu = React.lazy(()=> import('./components/MobileNavMenu/MobileNavMenu'));
import prisma from '../db'
const Home: NextPage = ({requests}: any) => {
  console.log(requests)
  const {mobileMenuVisibility} = useContext(appContext)
  return (
    <>
      <Head>
        <title>Product Feedback</title>
      </Head>
      <MobileTopBarContainer />
      {mobileMenuVisibility && <Suspense fallback={<h1>Loading</h1>}>
        <MobileNavMenu />
      </Suspense>}
      <FeedbackView requests={requests}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ()=> {
  
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
