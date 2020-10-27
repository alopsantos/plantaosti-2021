import CFarmacia from '../components/Farmacia'
import CMenu from '../components/Menu'
import SEO from '../components/SEO'

export default function Farmacia() {
  return (
    <>
      <SEO
        title="Farmácias | Plantão STI"
        shouldExcludeTitleSuffix
        image="boost.png"
      />
      <CMenu />
      <CFarmacia />
    </>
  )
}
