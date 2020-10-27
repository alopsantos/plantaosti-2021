import CMenu from '../components/Menu'
import CPlantoes from '../components/Plantoes'
import { Container } from '../styles/pages/Plantoes.pg'

export default function PGPlantoes() {
  return (
    <>
      <CMenu />
      <Container>
        <h2>Plantões</h2>
        <hr />
        <CPlantoes
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />
        <CPlantoes
          sigla="RG"
          name="Registro Geral"
          endereco="Rua dos Estudantes, 1055"
          bairro="Centro"
          plantao="25/11/2000 a 25/11/2025"
        />
        <CPlantoes
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />
        <CPlantoes
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />
        <CPlantoes
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />
        <CPlantoes
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />
        <CPlantoes
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />
        <CPlantoes
          sigla="FG"
          name="Farmagrama"
          endereco="Rua Mario goncalves squerdo, 112"
          bairro="Parque das oliveiras"
          plantao="25/11/2000 a 25/11/2025"
        />
      </Container>
    </>
  )
}
