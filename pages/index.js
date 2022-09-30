import Head from 'next/head'
import styles from '../styles/Home.module.css'
import toast, { Toaster } from 'react-hot-toast'


const handleClick = () => {
  toast.error('Select on of the options below');
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invitation For Bid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Toaster/>
        <h1 className={styles.title} onClick={handleClick} >Welcome to Next.js</h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by VERCEL</p>
      </footer>
    </div>
  )
}
