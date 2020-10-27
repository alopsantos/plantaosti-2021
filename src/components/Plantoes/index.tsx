import { Container, Sigla, Detalhes } from '../../styles/components/Plantoes'
import { IoIosPin, IoMdCalendar } from 'react-icons/io'

interface PropsPlantoes{
  sigla: string;
  name: string;
  endereco: string;
  bairro: string;
  plantao: string;
}
export default function CPlantoes({sigla, name, endereco, bairro, plantao}: PropsPlantoes) {
  return (
    <Container href="#">
          <article>
            <Sigla>
              <span>{sigla}</span>
            </Sigla>
            <Detalhes>
              <h3>{name}</h3>
              <p>
                <IoIosPin size="16" />
                {endereco}<br />
                <span>{ bairro }</span>
                <br />
                <IoMdCalendar size="16" />
                {plantao}
              </p>
            </Detalhes>
          </article>
    </Container>
  )
}
