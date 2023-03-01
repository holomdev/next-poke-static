import { Layout } from '@/components/layouts'
import { Button } from '@nextui-org/react'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <Layout title="Listado de pokemons">
      <Button color="gradient">
        Hola mundo
      </Button>
    </Layout>
  )
}
