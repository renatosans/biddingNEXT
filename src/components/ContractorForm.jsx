import { request } from '../utils/request'
import { useState, useEffect } from 'react'
import { Button, Dialog } from '@mui/material'


export default function ContractorForm({id, parentRef}) {
const [open, setOpen] = useState(true);

const close = () => {
    setOpen(false);
}

const [contractor, setContractor] = useState({
    "companyName": "",
    "email": "",
    "contactPerson": "",
    "logoImage": "",
    "imgFormat": ""
})

const onChange = (e) => {
    setContractor({...contractor, [e.target.name]: e.target.value, })
}

useEffect(() => {
    if (id) {
        // const url = '/api/graphql'
        const query = `getContractor(id: ${parseInt(id)}) {
            companyName
            email
            contactPerson
        }`
        request(query)
        .then((response) => setContractor(response.data.data.getContractor))
        .catch((error) => toast.error(error, notification.options))
    }
}, []);

return (
<>
    <Dialog open={open} onClose={close} >
        <div>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" value={contractor.companyName} onChange={onChange} />
        </div>
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" value={contractor.email} onChange={onChange} />
        </div>
        <div>
            <label htmlFor="contactPerson">Contact Person</label>
            <input type="text" name="contactPerson" value={contractor.contactPerson} onChange={onChange} />
        </div>

        <button type="submit">Salvar</button>
    </Dialog>
</>
)
}
