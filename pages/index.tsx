import type { NextPage } from 'next'
import Head from 'next/head'
import { MobileTopBarContainer } from './components/MobileTopBar/MobileTopBarContainer' 
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product Feedback</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <MobileTopBarContainer />
    </>

  )
}

export default Home
