import Head from 'next/head'
import Image from 'next/image'
import SocialMedias from '../components/BottonButton'
import styles from '../styles/Home.module.css'

export default function Home() {

  function RenderMenu() {
    return (
      <div className={styles.image}>
        <a href="/App" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Play Game</button>
        </a>
        <a href="/Contract" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Contract Address</button>
        </a>
        <a href="/Marketplace" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Marketplace</button>
        </a>
        <a href="https://lucas85235.gitbook.io/warbots-whitepaper/" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Whitepaper</button>
        </a>
      </div>
    )
  }

  function RenderFooter() {
    return (
      <div className={styles.footer}>
        <span>© 2021 Copyright - Warbots</span>
      </div>
    )
  }

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

  function RenderTokenomics() {
    return (
      <div className={styles.container}>
        <h1>Tokenomics</h1>
        <Image src="/tokenomics.png" width={700} height={434}></Image>
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
      <SocialMedias/>

      <Head>
        <title>Warbots</title>
        <meta name="description" content="Warbots nft game" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      {RenderMenu()}

      <div className={styles.bannerContainer}>
        <div className={styles.banner}></div>
      </div>

      {RenderAbout()}
      {RenderGameplay()}
      {RenderRoadmap()}
      {RenderTokenomics()}
      {RenderTeam()}

      {RenderFooter()}

    </div>
  )
}
