import { Container } from '../../styles/pages/Menu'

import Farmacia from '../../assets/images/farmacias.svg'
import Plantao from '../../assets/images/plantao.svg'
import Plantoes from '../../assets/images/plantoes.svg'

export default function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">
            <Plantao width={46} height={46} />
          </a>
        </li>
        <li>
          <a href="#">
            <Plantoes width={46} height={46} />
          </a>
        </li>
        <li>
          <a href="#">
            <Farmacia width={46} height={46} />
          </a>
        </li>
      </ul>
    </Container>
  )
}
