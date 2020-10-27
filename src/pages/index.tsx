import SEO from '../components/SEO'
import CMenu from '../components/Menu'
import Plantao from '../components/Plantao'

export default function Home() {
  return (
    <>
      <SEO title="Plantao STI" shouldExcludeTitleSuffix image="boost.png" />
      <CMenu />
      <Plantao />
    </>
  )
}
