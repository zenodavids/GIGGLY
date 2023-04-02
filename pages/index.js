import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>GIGGLY</title>
        <meta
          name='description'
          content='A one-stop shop for connecting clients with workers.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Header />
      <HeroBanner />
    </>
  )
}
