import { Layout } from '../src/components/Layout'


export default function Home() {
  return (
    <Layout>
      <h1>HOME</h1>
      <h2>Versão oficial(frontend e backend separados) no endereço: </h2>
      <p>https://github.com/renato-sanseverino/InvitationForBid.git</p>

      <p>Esta versão é um protótipo. Possui alguma lentidão
        devido ao framework Next.js e ao Apollo Server</p>
    </Layout>
  )
}
