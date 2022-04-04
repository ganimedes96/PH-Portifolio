import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from '../styles/theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { WhatsApp } from '../components/WhatsApp'


function MyApp({ Component, pageProps }: AppProps) {
  
  
  return( 
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      <WhatsApp/>
    </ChakraProvider>
  )
}


export default MyApp
