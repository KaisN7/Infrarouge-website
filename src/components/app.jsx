import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import GridLayout from "./GridLayout";
import ArticleCard from "./ArticleCard";
import articles from "./pages/data/articles";

export default function App() {
  return (
    <>
      <Header />

      <CategoryFilter />

      <GridLayout>
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            type={article.type}
            title={article.title}
            image={article.image}
          />
        ))}
      </GridLayout>
    </>
  );
}
