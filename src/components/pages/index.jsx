import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import GridLayout from "../components/GridLayout";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <>
      <Header />

      {/* BARRE DE CATÉGORIES */}
      <CategoryFilter />

      {/* GRILLE D’ARTICLES */}
      <GridLayout>
        <ArticleCard
          type="DOSSIER"
          title="E-TRAP, new bouyon…"
          image="https://picsum.photos/400/500"
        />

        <ArticleCard
          type="INTERVIEW"
          title="La musique m’a donné la parole"
          image="https://picsum.photos/400/600"
        />
      </GridLayout>
    </>
  );
}
