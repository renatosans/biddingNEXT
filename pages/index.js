import useSWR from 'swr'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
import { ItemCard } from '../components/ItemCard'


// const fetcher = () => request(url, query)
const fetcher2 = () => { return axios.post(url, { query }).then((res) => res.data) }


const url = '/api/graphql'
const query = `{
    allItems {
      name
      description
      avgPrice
      image
      banner
      unitOfMeasurement
    }
}
`

export default function Home() {
  const { data: inventory } = useSWR(query, fetcher2)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <>
      <div>{
        (inventory) ?
        <Carousel deviceType="desktop" responsive={responsive}>{
          inventory.data.allItems.map( (item) => <ItemCard item={item} key={item.id} /> )
        }
        </Carousel> :
        <p>No Items found</p>  
      }
      </div>

      <h1>GraphQL</h1>
      <pre>{JSON.stringify(inventory, null, 2)}</pre>
    </>
  )
}
