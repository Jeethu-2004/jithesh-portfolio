const projects = [
  {
    title: "Paryavaran Kavalu",
    description:
      "Smart Waste Management Platform with real-time monitoring, Firebase authentication and Google Maps integration.",
    tech: "React • Kotlin • Firebase • Google Maps API",
    github: "https://github.com/Jeethu-2004/Paryavaran-Kavalu",
  },

  {
    title: "AI Content Generator",
    description:
      "Generative AI application capable of producing real-time content using Hugging Face transformer models.",
    tech: "Python • Streamlit • Hugging Face",
    github: "https://github.com/Jeethu-2004/Content-Generator",
  },

  {
    title: "Resume Analyzer",
    description:
      "AI-powered ATS screening application that compares resumes against job descriptions.",
    tech: "Python • NLP • Streamlit",
    github: "https://github.com/Jeethu-2004/Resume-Analyzer",
  },

  {
    title: "FaithConnect",
    description:
      "Community-driven mobile application for religious engagement and networking.",
    tech: "Flutter • Supabase",
    github: "https://github.com/Jeethu-2004/Faith-Connect",
  },

  {
    title: "Face Emotion Recognition",
    description:
      "CNN-based real-time emotion recognition system using TensorFlow and OpenCV.",
    tech: "TensorFlow • OpenCV • Deep Learning",
    github: "https://github.com/Jeethu-2004/Face-Emotion-Recognition-System",
  },

  {
    title: "IoT Precision Farming System",
    description:
      "Smart farming solution with soil monitoring, automated irrigation and cloud dashboard.",
    tech: "IoT • Sensors • Cloud",
    github: "https://github.com/Jeethu-2004",
  },
];

function Projects() {
  return (
    <section
        id="projects"
        className="max-w-7xl mx-auto py-12 px-6"
        >
      <h2 className="text-5xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="
            bg-gradient-to-br
            from-slate-800
            to-slate-700
            p-8
            rounded-3xl
            border
            border-slate-700
            hover:border-sky-400
            hover:-translate-y-2
            hover:shadow-2xl
            hover:shadow-sky-500/20
            transition-all
            duration-300
            "
          >
            <h3 className="text-2xl font-bold text-sky-400">
              🚀{project.title}
            </h3>

            <p className="mt-4 text-gray-300">
              {project.description}
            </p>

            <p className="mt-4 text-sm text-gray-400">
              <div className="mt-4 flex flex-wrap gap-2">

                {project.tech.split("•").map((tech,index)=>(
                    <span
                    key={index}
                    className="
                    bg-cyan-500/20
                    text-cyan-300
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    "
                    >
                    {tech}
                    </span>
                ))}

                </div>
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              inline-block
              mt-6
              bg-sky-500
              px-5
              py-3
              rounded-xl
              hover:bg-sky-600
              transition
              "
            >
              🐙 GitHub Repository
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;