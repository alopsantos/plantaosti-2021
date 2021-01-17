import CMenu from "../components/Menu";
import Plantao from "../components/Item-plantao";
import SEO from "../components/SEO";

export default function PGPlantao() {
  return (
    <>
      <SEO title="Plantao STI" shouldExcludeTitleSuffix image="boost.png" />
      <CMenu />
      <Plantao />
    </>
  );
}
