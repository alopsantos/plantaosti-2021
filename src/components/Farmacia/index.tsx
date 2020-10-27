import { Container, Detalhes, Blocos } from '../../styles/components/Plantao'
import { IoIosPin, IoMdCall, IoMdTime} from 'react-icons/io'

export default function CFarmacia() {
  return (
    <Container>
      <h2>Farmácia</h2>
      <hr />

      <section>
        <article>
          <img
            src="https://www.mkarquiteturaengenharia.com.br/wp-content/uploads/2019/03/5-min.jpg"
            alt=""
          />
          <Detalhes>
            <h3>Droga Raia</h3>

            <p>
              <IoIosPin size="13" />
              Rua Primeiro de Maio, 166 | Centro
              <br />
              <IoMdCall size="13" />
              (45) 3541-3622 <br />
              <IoMdTime size="13" />
              7:00 am até 7:00 pm
            </p>

            <Blocos>
              <a href="#">
                Ver no mapa <IoIosPin size="16" fill="#565e6a" />
              </a>
            </Blocos>
          </Detalhes>
        </article>
      </section>
    </Container>
  )
}
