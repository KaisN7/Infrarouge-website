export default function Header() {
  return (
    <header className="header">
      <nav className="nav-left">
        <a>Magazines</a>
        <a>Boutique</a>
        <a>Articles</a>
        <a>Infos</a>
      </nav>

      <div className="logo">MOSAIQUE</div>

      <nav className="nav-right">
        <a>Recherche</a>
        <a>Connexion</a>
        <button className="subscribe">S’abonner</button>
      </nav>
    </header>
  );
}
