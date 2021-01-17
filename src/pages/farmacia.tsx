import SEO from "../components/SEO";
import CMenu from "../components/Menu";
import CFarmacia from "../components/Item-farmacia";

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
  );
}
