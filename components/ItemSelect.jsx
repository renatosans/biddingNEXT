import useSWR from 'swr'
import ReactDom from 'react-dom';
import React, { useState } from 'react'
import { fetcher2 } from '../config/defaults'


const query = `{
    allItems {
      id
      name
    }
}
`

const Delete = (props) => {
    const { data: deletedId } = useSWR(`mutation { deleteItem(id: ${props.id}) }`, fetcher2)

    return ( <> <p hidden>Item {deletedId} deleted</p> </> )
}


export const ItemSelect = () => {
    const [selected, setSelected] = useState(0);
    const { data: inventory } = useSWR(query, fetcher2)

    const deleteItem = () => {
        const root = ReactDom.createRoot(document.getElementById('container'));

		// const message = 'Deseja realmente excluir o item ?';
        const deleteSelected = React.createElement(Delete, {id: selected}, null)
        root.render(deleteSelected);
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
