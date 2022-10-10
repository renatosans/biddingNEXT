import useSWR from 'swr'
import { fetcher2 } from '../config/defaults'

const query1 = `{
    allItems {
      name
      avgPrice
    }
}
`
const query2 = `{
    mutation {
        deleteItem(id: 6)
    }        
}
`

export const ItemSelect = () => {
    const { data: inventory } = useSWR(query1, fetcher2)

	return (
        <>
            <select>{
                inventory ?
                inventory.data.allItems.map( (item) => <option value={item.id} key={item.id}>{item.name}</option> ) :
                <option value={0} key={0} >No items found</option>
            }
            </select>
        </>
    )
}
