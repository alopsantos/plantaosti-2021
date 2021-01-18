import { GetServerSideProps } from "next";
import { client } from "../lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import Prismic from "prismic-javascript";
import PrismicDom from "prismic-dom";

import CMenu from "../components/Menu";
import Plantao from "../components/Item-plantao";
import SEO from "../components/SEO";

interface IPlantaoProps {
  plantoes: Document[];
}

export default function PGPlantao({ plantoes }: IPlantaoProps) {
  return (
    <>
      <SEO title="Plantao STI" shouldExcludeTitleSuffix image="boost.png" />
      <CMenu />
      <Plantao />

      <div className="teste">
        te
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
    Prismic.Predicates.dateAfter("my.plantoes.dateend", "2021-01-16" ),
    // Prismic.Predicates.dateBefore("my.plantoes.dateend", "2021-01-23" )
  ]);

  return {
    props: {
      plantoes: plantoes.results,
    },
  };
};
