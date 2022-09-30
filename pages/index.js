import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ItemCard from '../components/ItemCard'


const url = '/api/graphql';
const query = `{
  allItems {
    name
    avgPrice
    unitOfMeasurement
  }
}`

const { mutate } = useSWRConfig()
const { inventory } = useSWR(url, () => request(url, { query }))

useEffect(() => {
  // tell all SWRs with this key to revalidate
  mutate(url)
})

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invitation For Bid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>{
            inventory && inventory.data.allItems.map( (item) => <ItemCard item={item} key={item.id} /> )
        }
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by VERCEL</p>
      </footer>
    </div>
  )
}
