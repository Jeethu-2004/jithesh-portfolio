function Navbar() {
  return (
    <nav className="
        fixed
        top-0
        w-full
        z-50
        bg-slate-900/70
        backdrop-blur-xl
        border-b
        border-slate-800
        ">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <h1 className="
            text-3xl
            font-black
            bg-gradient-to-r
            from-sky-400
            to-cyan-300
            bg-clip-text
            text-transparent
            ">
            <span
                className="
                bg-gradient-to-r
                from-cyan-300
                to-sky-500
                bg-clip-text
                text-transparent
                font-black
                text-4xl
                ">
                Jithesh U
                </span>
            </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;