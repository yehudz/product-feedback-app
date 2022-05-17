import type { NextPage } from 'next'
import PrimaryButton from './components/buttons/PrimaryButton'
import SecondaryButton from './components/buttons/SecondayButton'
import Button3 from './components/buttons/Button3'
import Button4 from './components/buttons/Button4'
import GoBackBtnLight from './components/buttons/GoBackBtnLight'
import GoBackBtnDark from './components/buttons/GoBackBtnDark'
import { CaretLeft } from 'phosphor-react'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Product Feedback</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <PrimaryButton variant='contained' disableElevation disableRipple>Button 1</PrimaryButton>
      <SecondaryButton variant='contained' disableElevation disableRipple>Button 2</SecondaryButton>
      <Button3 variant='contained' disableElevation disableRipple>Button 3</Button3>
      <Button4 variant='contained' disableElevation disableRipple>Button 4</Button4>
      <GoBackBtnLight 
        disableElevation 
        disableRipple 
        startIcon={<CaretLeft size={14} color="#4661E6" weight="bold"/>}>Go Back</GoBackBtnLight>
      <GoBackBtnDark 
        disableElevation 
        disableRipple 
        startIcon={<CaretLeft size={14} color="#CDD2EE" weight="bold"/>}>Go Back</GoBackBtnDark>
    </>
  )
}

export default Home
