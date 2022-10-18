import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SocialMedias from '../components/SocialMedias'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import About from '../components/About'
import Division from '../components/Division'
import Gameplay from '../components/Gameplay'
import Tokenomics from '../components/Tokenomics'
import Nfts from '../components/Nfts'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Warbots</title>
        <meta name="description" content="Warbots nft game" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <SocialMedias />
      <NavBar />

      <div className={styles.page}>
        <Header>
        </Header>

        <About />
        <Division />
        <Gameplay />
        <Division />

        <Nfts />
        <Division />

        <Tokenomics />
        <Division />

        <Roadmap />
        <Footer />
      </div>
    </div>
  )
}
