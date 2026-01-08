const categories = [
  "Tous",
  "Interviews",
  "Critiques",
  "Dossiers",
  "Reportages",
  "Vidéos",
  "Chroniques"
];

export default function CategoryFilter() {
  return (
    <div className="categories">
      {categories.map(cat => (
        <button key={cat} className="category-btn">
          {cat}
        </button>
      ))}
    </div>
  );
}
