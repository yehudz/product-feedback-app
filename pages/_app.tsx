import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/MainTheme'
import Layout from '../components/Layout';
import Head from 'next/head';

import {UserProvider} from '../context/userContext'
import appContext from '../context/appContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState<boolean>(false)
  const [selectedPanelFilterOption, setSelectedPanelFilterOption] = useState<string>()
  const [mainMenuFilterOption, setMainFilterOption] = useState<string>('Most Upvotes')
  const [roadmapAmounts, setRoadmapsAmounts] = useState()
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <appContext.Provider 
        value={{
          mobileMenuVisibility, 
          setMobileMenuVisibility,
          selectedPanelFilterOption,
          setSelectedPanelFilterOption,
          mainMenuFilterOption,
          setMainFilterOption,
          roadmapAmounts,
          setRoadmapsAmounts
        }}>
        <Layout>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </Layout>
      </appContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
