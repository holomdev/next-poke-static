import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layouts'

const HomePage: NextPage = (props) => {
  console.log(props)
  return (
    <Layout title="Listado de pokemons">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await  // your fetch function here 
  console.log('Hola mundo')
  return {
    props: {
      
    }
  }
}
export default HomePage