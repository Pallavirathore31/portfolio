function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between">
        <h1 className="text-2xl font-bold text-cyan-400">
          Pallavi.
        </h1>

        <ul className="flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;