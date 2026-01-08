export default function ArticleCard({ type, title, image }) {
  return (
    <article className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition">
      <span className="text-xs uppercase tracking-widest text-gray-400">
        {type}
      </span>

      <h2 className="mt-3 text-2xl font-serif leading-tight">
        {title}
      </h2>

      <div className="mt-6 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover hover:scale-105 transition"
        />
      </div>
    </article>
  );
}
