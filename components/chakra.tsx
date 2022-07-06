import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { FC } from 'react'
import theme from '../lib/theme'

interface ChakraProps{
  cookies: string,
  children: any
}
 const  Chakra: FC<ChakraProps>=({ cookies, children }) =>{
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export  const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

export default Chakra;
