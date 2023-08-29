import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { postContent } from '../constants/index';

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {postContent.map((item) => (
            <GridItem
              title={item.title}
              thumbnail={item.thumb}
              href={item.href}
            />
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
// export { getServerSideProps } from '../components/chakra'
