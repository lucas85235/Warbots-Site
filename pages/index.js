import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SocialMedias from '../components/SocialMedias'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Tokenomics from '../components/Tokenomics'
import Footer from '../components/Footer'

export default function Home() {

  function RenderAbout() {
    return (
      <div className={styles.container}>
        <h1>O que é Warbots?</h1>
        <h3 className={styles.text}>
          O Warbots utiliza mecânicas de jogos de RPG e de cartas, para garantir que o jogador com a melhor estratégia vença!
          Junte-se a esses poderosos robôs em batalhas rápidas e emocionantes!
        </h3>
      </div>
    )
  }

  function RenderGameplay() {
    return (
      <div className={styles.container}>
        <h1>Gameplay</h1>
        <h3 className={styles.text}>
          Cada  War Robot um possui seu baralho próprio de cartas, que representam suas habilidades de combate. Administre a energia de cada um para utilizar golpes poderosos, levantar suas defesas, ou até mesmo atrapalhar o adversário!
        </h3>
      </div>
    )
  }

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

        {RenderAbout()}
        {RenderGameplay()}

        <Tokenomics />
        {RenderRoadmap()}
        {/* {RenderTeam()} */}

        <Footer />
      </div>
    </div>
  )
}
