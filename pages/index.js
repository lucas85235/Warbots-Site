import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SocialMedias from '../components/SocialMedias'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import About from '../components/About'
import Division from '../components/Division'
import Gameplay from '../components/Gameplay'
import Tokenomics from '../components/Tokenomics'
import Footer from '../components/Footer'

export default function Home() {

  function RenderRoadmap() {
    return (
      <div className={styles.container}>
        <h1>Roadmap</h1>
        <h3 className={styles.text}>Entrega 1</h3>
        <h3 className={styles.text}>Entrega 2</h3>
        <h3 className={styles.text}>Entrega 3</h3>
        <h3 className={styles.text}>Entrega 4</h3>
      </div>
    )
  }

  function RenderTeam() {
    return (
      <div className={styles.container}>
        <h1>Team</h1>
        <h3 className={styles.text}>Anonimo 1</h3>
        <h3 className={styles.text}>Anonimo 2</h3>
        <h3 className={styles.text}>Anonimo 3</h3>
        <h3 className={styles.text}>Anonimo 4</h3>
      </div>
    )
  }

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
        <Header />

        <About />
        <Division />
        
        <Gameplay />
        <Division />

        <Tokenomics />
        <Division />

        {RenderRoadmap()}
        <Footer />
      </div>
    </div>
  )
}
