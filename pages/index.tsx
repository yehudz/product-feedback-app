import type { NextPage } from 'next'
import PrimaryButton from './components/buttons/PrimaryButton'
import SecondaryButton from './components/buttons/SecondayButton'
import Button3 from './components/buttons/Button3'
import Button4 from './components/buttons/Button4'
import GoBackBtnLight from './components/buttons/GoBackBtnLight'
import GoBackBtnDark from './components/buttons/GoBackBtnDark'
import { CaretLeft } from 'phosphor-react'
import Head from 'next/head'
import { Typography } from '@mui/material'

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
        <Typography variant='h1' color="success.main">Sed egestas ante et vulputate volutpat</Typography>
        <Typography variant='h2' color="success.main">Vestibulum volutpat acus a ultrices sagittis</Typography>
        <Typography variant='h3' color="success.main">Pellentesque a diam sit amet mi ullamcorper vehicula</Typography>
        <Typography variant='h4' color="success.main">Ut scelerisque hendrerit tellus. Integer sagittis</Typography>
        <Typography variant='body1' color="success.main">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.</Typography>
        <Typography variant='body2' color="success.main">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu</Typography>
        <Typography variant='subtitle1' color="success.main">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu</Typography>

    </>
  )
}

export default Home
