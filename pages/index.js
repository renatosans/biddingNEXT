import useSWR, { useSWRConfig } from 'swr'
import { request, gql} from 'graphql-request'
import ItemCard from '../components/ItemCard'
import styles from '../styles/Home.module.css'


const url = '/api/graphql';
const query = gql`{
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
      <div className={styles.header}>
        <title>Invitation For Bid</title>
        <link rel="icon" href="/favicon.ico" />
      </div>

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
