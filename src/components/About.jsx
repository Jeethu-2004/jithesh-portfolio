function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-16 px-6"
    >

      <h2 className="text-6xl font-black text-center mb-16">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <div
            className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-500/30
            text-cyan-400
            mb-6
            "
          >
            Software Engineer & AI Enthusiast
          </div>

          <h3 className="text-4xl font-bold mb-6 leading-tight">

            Building Intelligent Solutions
            for Real-World Problems

          </h3>

          <p className="text-lg text-gray-300 leading-9">

            I'm Jithesh U, a Computer Science Engineering
            student who enjoys transforming innovative ideas
            into impactful software solutions.

          </p>

          <p className="mt-6 text-lg text-gray-400 leading-9">

            My primary interests include Generative AI,
            Full Stack Development, Android Development,
            IoT Systems and Machine Learning.

          </p>

          <p className="mt-6 text-lg text-gray-400 leading-9">

            Through internships and personal projects,
            I have developed AI-powered applications,
            cloud-integrated platforms, mobile applications,
            and intelligent systems focused on solving
            practical challenges.

          </p>

        </div>

        {/* Right Side */}

        <div className="space-y-5">

          <div
            className="
            bg-slate-800/60
            border
            border-cyan-500/20
            rounded-3xl
            p-6
            hover:border-cyan-400
            transition
            "
          >
            <h3 className="text-cyan-400 text-xl font-bold">
              🚀 Generative AI
            </h3>

            <p className="text-gray-400 mt-2">
              Building intelligent applications using NLP,
              Prompt Engineering and Hugging Face models.
            </p>
          </div>

          <div
            className="
            bg-slate-800/60
            border
            border-purple-500/20
            rounded-3xl
            p-6
            hover:border-purple-400
            transition
            "
          >
            <h3 className="text-purple-400 text-xl font-bold">
              💻 Full Stack Development
            </h3>

            <p className="text-gray-400 mt-2">
              Creating scalable applications using React,
              Flutter, Firebase and Supabase.
            </p>
          </div>

          <div
            className="
            bg-slate-800/60
            border
            border-green-500/20
            rounded-3xl
            p-6
            hover:border-green-400
            transition
            "
          >
            <h3 className="text-green-400 text-xl font-bold">
              📱 Mobile Development
            </h3>

            <p className="text-gray-400 mt-2">
              Experience building Android and Flutter
              applications with modern UI and backend
              integrations.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;