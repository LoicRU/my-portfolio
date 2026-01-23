
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
      <ul className="flex justify-center gap-8 py-4">
        <li><a href="#about">À propos</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
