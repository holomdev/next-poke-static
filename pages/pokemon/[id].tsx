import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { Layout } from '@/components/layouts'
import React from 'react'

interface Props {
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({id, name}) => {

  const router = useRouter()
  console.log(router.query)

  return (
    <Layout>
      <h1>{id} - {name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 

  return {
    paths: [
      {
        params: {
          id: '1'
        }
      },
      {
        params: {
          id: '2'
        }
      },
      {
        params: {
          id: '3'
        }
      }
    ],
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  return {
    props: {
      id: 1,
      name: 'Bulbasaur'
    }
  }
}

export default PokemonPage