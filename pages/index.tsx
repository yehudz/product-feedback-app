import React, {Suspense, useContext, useEffect} from 'react'

// Next imports
import type { NextPage } from 'next'
import Head from 'next/head'

// Server imports
import { GetServerSideProps } from 'next'
// React component imports
import MobileTopBarContainer from '../components/MobileTopBar/MobileTopBarContainer';
const FeedbackView = React.lazy(()=> import('../views/FeedbackView/FeedbackView'))
import appContext from '../context/appContext'
const MobileNavMenu = React.lazy(()=> import('../components/MobileNavMenu/MobileNavMenu'));
import prisma from '../db'
import {Request} from '../typings/common.types'
import TopBar from '../components/TopBar/TopBar';
import { TopSection } from '../components/TopSection/TopSection';
interface RoadmapProps {
  requests: Request[]
}
const Home = ({requests}: RoadmapProps) => {
  const {mobileMenuVisibility, setRoadmapsAmounts, isMobile, setIsMobile} = useContext(appContext)
  const planned = requests.filter(request=> {
    if (request.status === 'Planned') return request
  })

  const inProgress = requests.filter(request=> {
    if (request.status === 'In-Progress') return request
  })

  const live = requests.filter(request=> {
    if (request.status === 'Live') return request
  })

  
  console.log(isMobile)
  useEffect(()=> {
    setRoadmapsAmounts([
      {
        color: '#F49F85',
        title: 'Planned',
        amount: planned.length
      },
      {
        color: '#AD1FEA',
        title: 'In-Progress',
        amount: inProgress.length
      },
      {
        color: '#62BCFA',
        title: 'Live',
        amount: live.length
      }
    ])

    if (window.innerWidth >= 767) setIsMobile(false)
    else setIsMobile(true) 

    window.addEventListener('resize', (e)=> {
      if (e.target?.innerWidth >= 767) setIsMobile(false)
      else setIsMobile(true)
    })
  }, [])
  return (
    <>
      <Head>
        <title>Product Feedback</title>
      </Head>
      {!isMobile && <TopSection />}
      {isMobile ? <MobileTopBarContainer /> : <TopBar />}
      
      <Suspense fallback={<h1 style={{color: '#000'}}>Loading...</h1>}>
      {mobileMenuVisibility && <Suspense fallback={<h1>Loading</h1>}>
        <MobileNavMenu />
      </Suspense>}
        <FeedbackView requests={requests}/>
      </Suspense>
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
