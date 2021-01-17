import CFarmacias from "../components/Itens-farmacias";
import CMenu from "../components/Menu";
import SEO from "../components/SEO";
import { Container } from "../styles/pages/Item-lista.pg";

export default function PGFarmacias() {
  return (
    <>
      <SEO
        title="Farmácias | Plantão STI"
        shouldExcludeTitleSuffix
        image="boost.png"
      />
      <CMenu />
      <Container>
        <h2>Farmacias</h2>
        <hr />
        <CFarmacias
          key="1"
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />

        <CFarmacias
          key="2"
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />
      </Container>
    </>
  );
}
