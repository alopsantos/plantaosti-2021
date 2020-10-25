import SEO from '../components/SEO'
import Menu from '../components/Menu'
import Plantao from '../components/Plantao'

export default function Home() {
  return (
    <>
      <SEO title="Plantao STI" shouldExcludeTitleSuffix image="boost.png" />
      <Menu />
      <Plantao />
    </>
  )
}
