import useSWR from 'swr'
import { fetcher2 } from '../src/utils/defaults'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Layout } from '../src/components/Layout';
import { ContractorCard } from '../src/components/ContractorCard'


// const url = '/api/graphql'
const query = `{
    allContractors {
      companyName
      email
      logoImage
      imgFormat
    }
}
`

export default function Home() {
  const { data: companies } = useSWR(query, fetcher2)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Layout>
      <div>
        <p><b>REMOVA AS EMPRESAS QUE NÃO PARTICIPARÃO NA LICITAÇÃO</b></p>
        <select>
            <option>Company 1</option>
            <option>Company 2</option>
            <option>Company 3</option>
        </select>
        <button>Retirar do Site</button>
      </div>

      <div>{
        (companies) ?
        <Carousel responsive={responsive}>{ companies.data.allContractors.map(
            (contractor, index) => <ContractorCard contractor={contractor} />
        )}
        </Carousel> :
        <p>No contractors found</p>
      }
      </div>
    </Layout>
  )
}
