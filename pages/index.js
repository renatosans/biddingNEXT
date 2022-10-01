import useSWR from 'swr'
import axios from 'axios'
import { request, gql} from 'graphql-request'
import ItemCard from '../components/ItemCard'
import styles from '../styles/Home.module.css'


const url = '/api/graphql';
const query = `{
  query {
    allItems {
      name
      avgPrice
      unitOfMeasurement
    }  
  }
}`

export default function Home() {
  const { inventory } = useSWR(url, () => request(url, { query }))
  
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
