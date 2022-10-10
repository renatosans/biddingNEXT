import useSWR from 'swr'
import { useState } from 'react'
import { fetcher2 } from '../config/defaults'


const query = `{
    allItems {
      id
      name
    }
}
`

export const ItemSelect = () => {
    const [selected, setSelected] = useState(0);
    const { data: inventory } = useSWR(query, fetcher2)

    const deleteItem = () => {
        const mutationQuery = `{
            mutation {
                deleteItem(id: ${selected})
            }
        }`

        console.log(mutationQuery)
    }

	return (
        <>
            <select onChange={(e) => setSelected(e.target.value)} >{
                inventory ?
                inventory.data.allItems.map( (item) => <option value={item.id} key={item.id} >{item.name}</option> ) :
                <option value={0} key={0} >No items found</option>
            }
            </select>
            <button onClick={deleteItem} >Retirar do Site</button>
        </>
    )
}
