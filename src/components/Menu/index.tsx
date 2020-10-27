import Link from 'next/link'

import Farmacia from '../../assets/images/farmacias.svg'
import Plantao from '../../assets/images/plantao.svg'
import Plantoes from '../../assets/images/plantoes.svg'

import { Container } from '../../styles/components/Menu'

export default function CMenu() {
  return (
    <Container>
      <ul>
        <li>
          <Link href={`/plantao`}>
            <a>
              <Plantao />
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/plantoes`}>
            <a>
              <Plantoes />
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/farmacias`}>
            <a>
              <Farmacia />
            </a>
          </Link>
        </li>
      </ul>
    </Container>
  )
}
