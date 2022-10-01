import useSWR from 'swr'
import axios from 'axios'
import { ItemCard } from '../components/ItemCard'
import styles from '../styles/Home.module.css'


// const fetcher = () => request(url, query)
const fetcher2 = () => { return axios.post(url, { query }).then((res) => res.data) }


const url = '/api/graphql'
const query = `
  query {
    allItems {
      name
      avgPrice
      unitOfMeasurement
  }
}`

export default function Home() {
  const { data: inventory } = useSWR(query, fetcher2)
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <title>Invitation For Bid</title>
        <link rel="icon" href="/favicon.ico" />
      </div>

      <h1>GraphQL</h1>
      <pre>{JSON.stringify(inventory, null, 2)}</pre>
        <div className={styles.grid}>{
            inventory && inventory.data.allItems.map( (item) => <ItemCard item={item} key={item.id} /> )
        }
        </div>

    </div>
  )
}
