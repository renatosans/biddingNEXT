import useSWR from 'swr'
import { useState } from 'react'
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
    const [selected, setSelected] = useState(0);
    const { data: inventory } = useSWR(query1, fetcher2)

    const deleteItem = () => {
        console.log(selected)
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
