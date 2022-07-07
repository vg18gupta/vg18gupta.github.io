import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { FC } from 'react'

interface MainProps{
  children: any,
  router: {
    asPath: string
  }
}
const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main: FC<MainProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Takuya's homepage" />
        <meta name="author" content="Vishal Gupta" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Vishal Gupta" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Vishal Gupta" />
        <meta name="og:title" content="Vishal Gupta" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Vishal Gupta - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
