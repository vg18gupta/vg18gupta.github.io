import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {FC} from 'react'
interface TitleProps {
  cookies: string;
  children: any;
}
interface WorkImageProps {
  src: string,
  alt: string
}
interface MetaProps {
  children: any
}
export const Title: FC<TitleProps> = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage: FC<WorkImageProps> = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta: FC<MetaProps> = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
