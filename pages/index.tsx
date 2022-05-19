// Next imports
import type { NextPage } from 'next'
import Head from 'next/head'
// Types imports
import { ProductRequests } from '../typings/common.types'
// Server imports
import { GetStaticProps } from 'next'
import {server} from '../config'
// React component imports
import {MobileTopBarContainer} from './components/MobileTopBar/MobileTopBarContainer'
import { FeedbackView } from './views/FeedbackView/FeedbackView'

const Home: NextPage<ProductRequests> = ({requests}: ProductRequests) => {
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

export const getStaticProps: GetStaticProps = async ()=> {
  const res = await fetch(`${server}/api/productRequests`);
  const requests: ProductRequests = await res.json();

  return {
    props: {
      requests
    }
  }
}

export default Home
