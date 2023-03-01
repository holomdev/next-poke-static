import { FunctionComponent, PropsWithChildren } from "react"
import Head from "next/head"
import { Nabvar } from '../ui';

interface Props {
  title?: string
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Fabio Sanchez" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Nabvar />

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}
