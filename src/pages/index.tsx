import { GetServerSideProps } from "next";
import { client } from "../lib/prismic";
import { Document } from "prismic-javascript/types/documents";

import SEO from "../components/SEO";
import CMenu from "../components/Menu";
import Plantao from "../components/Item-plantao";
import Prismic from "prismic-javascript";
import PrismicDom from "prismic-dom";

interface IPlantaoProps {
  plantoes: Document[];
}

export default function Home({ plantoes }: IPlantaoProps) {
  return (
    <>
      <SEO title="Plantao STI b" shouldExcludeTitleSuffix image="boost.png" />
      <CMenu />
      <Plantao />
      <div className="teste">
        {plantoes.map((plantao) => {
          return <li key={plantao.data.id}>{plantao.data.datestart}</li>;
        })}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<IPlantaoProps> = async () => {
  const plantoes = await client().query([
    Prismic.Predicates.at("document.type", "plantoes"),
  ]);
  console.log(plantoes);
  return {
    props: {
      plantoes: plantoes.results,
    },
  };
};
