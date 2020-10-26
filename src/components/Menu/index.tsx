import { Container } from '../../styles/pages/Menu'

import Farmacia from '../../assets/images/farmacias.svg';
import Plantao from '../../assets/images/plantao.svg'
import Plantoes from '../../assets/images/plantoes.svg'

export default function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#">
            <Plantao />
          </a>
        </li>
        <li>
          <a href="#">
            <Plantoes />
          </a>
        </li>
        <li>
          <a href="#">
            <Farmacia />
          </a>
        </li>
      </ul>
    </Container>
  )
}
