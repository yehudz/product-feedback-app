import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/MainTheme'
import Layout from './components/Layout';
import Head from 'next/head';

import {UserProvider} from './context/userContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      
      <Head>
      <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
