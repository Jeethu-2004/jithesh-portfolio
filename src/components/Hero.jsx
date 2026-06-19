function Hero() {
  return (
    <section className="pt-32 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}

        <div>

          <p className="text-sky-400 font-semibold mb-4">
            Welcome to my Portfolio
          </p>

          <h1 className="text-5xl font-black leading-tight">

            Jithesh U

          </h1>

          <h2 className="text-3xl mt-4 text-cyan-300">

            AI Developer • Full Stack Developer

          </h2>

          <p className="mt-8 text-lg text-gray-300 leading-8">

            Passionate Computer Science Engineering student
            specializing in Generative AI, Full Stack
            Development, Android Development and IoT Systems.

            Building intelligent applications that solve
            real-world problems.

          </p>

          <div className="mt-10 flex gap-5">

            <a
              href="#projects"
              className="
              bg-gradient-to-r
              from-sky-500
              to-cyan-400
              px-8
              py-4
              rounded-2xl
              font-semibold
              "
            >
              View Projects
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                ml-4
                px-8
                py-4
                rounded-2xl
                border
                border-cyan-400
                text-cyan-300
                font-semibold
                bg-slate-900/40
                shadow-lg
                shadow-cyan-500/20
                hover:bg-cyan-500
                hover:text-white
                hover:shadow-cyan-500/50
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Resume
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Jithesh"

            className="
            w-80
            h-80
            rounded-full
            object-cover
            border-4
            border-cyan-400
            shadow-[0_0_60px_rgba(34,211,238,0.5)]
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;