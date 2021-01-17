import {
  Container,
  Detalhes,
  Sigla,
} from "../../styles/components/Itens-lista";
import { IoIosPin, IoMdCalendar } from "react-icons/io";

interface PropsFarmacias {
  sigla: string;
  name: string;
  endereco: string;
  bairro: string;
  plantao: string;
}
export default function CFarmacias({
  sigla,
  name,
  endereco,
  bairro,
  plantao,
}: PropsFarmacias) {
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
            {endereco}
            <br />
            <span>{bairro}</span>
            <br />
            <IoMdCalendar size="16" />
            {plantao}
          </p>
        </Detalhes>
      </article>
    </Container>
  );
}
