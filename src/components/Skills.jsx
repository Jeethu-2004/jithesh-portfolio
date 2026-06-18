function Skills() {

  const skills = [
    {
      name: "Python",
      projects: ["AI Content Generator", "Resume Analyzer"]
    },
    {
      name: "Java",
      projects: ["Android Development", "Academic Projects"]
    },
    {
      name: "C++",
      projects: ["Data Structures", "Problem Solving"]
    },
    {
      name: "C",
      projects: ["Academic Projects"]
    },
    {
      name: "SQL",
      projects: ["Resume Analyzer", "FaithConnect"]
    },
    {
      name: "HTML/CSS",
      projects: ["Portfolio Website"]
    },
    {
      name: "Kotlin",
      projects: ["Paryavaran Kavalu"]
    },
    {
      name: "Flutter",
      projects: ["FaithConnect"]
    },
    {
      name: "React",
      projects: ["Paryavaran Kavalu", "Portfolio Website"]
    },
    {
      name: "Flask",
      projects: ["AI Content Generator"]
    },
    {
      name: "Streamlit",
      projects: ["AI Content Generator", "Resume Analyzer"]
    },
    {
      name: "Firebase",
      projects: ["Paryavaran Kavalu"]
    },
    {
      name: "Supabase",
      projects: ["FaithConnect"]
    },
    {
      name: "Neo4j",
      projects: ["Graph Database Work"]
    },
    {
      name: "TensorFlow",
      projects: ["Face Emotion Recognition"]
    },
    {
      name: "Keras",
      projects: ["Face Emotion Recognition"]
    },
    {
      name: "Hugging Face",
      projects: ["AI Content Generator"]
    },
    {
      name: "NLP",
      projects: ["Resume Analyzer", "AI Content Generator"]
    },
    {
      name: "Prompt Engineering",
      projects: ["AI Content Generator", "MindMatrix Internship"]
    },
    {
      name: "Generative AI",
      projects: ["AI Content Generator", "MindMatrix Internship"]
    },
    {
      name: "Android Development",
      projects: ["MindMatrix Internship", "Paryavaran Kavalu"]
    },
    {
      name: "Git",
      projects: ["All Projects"]
    },
    {
      name: "Android Studio",
      projects: ["FaithConnect", "MindMatrix Internship"]
    },
    {
      name: "Manual Testing",
      projects: ["Bookleey Internship"]
    },
    {
      name: "Bug Reporting",
      projects: ["Bookleey Internship"]
    },
    {
      name: "Blockchain",
      projects: ["Certificate Validation System"]
    },
    {
      name: "IoT",
      projects: ["Precision Farming System"]
    },
    {
      name: "Google Maps API",
      projects: ["Paryavaran Kavalu"]
    }
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-24 px-6"
    >

      <h2 className="text-5xl font-bold text-center mb-16">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {skills.map((skill) => (

          <div
            key={skill.name}
            className="group relative"
          >

            <div
              className="
              bg-gradient-to-br
              from-slate-800
              to-slate-700
              rounded-2xl
              p-5
              text-center
              font-semibold
              border
              border-slate-700
              hover:border-sky-400
              hover:scale-105
              hover:shadow-xl
              hover:shadow-sky-500/20
              transition-all
              duration-300
              cursor-pointer
              "
            >
              {skill.name}
            </div>

            <div
              className="
              absolute
              hidden
              group-hover:block
              top-full
              left-1/2
              -translate-x-1/2
              mt-3
              w-64
              bg-slate-900
              border
              border-sky-500
              rounded-2xl
              p-4
              z-50
              shadow-2xl
              shadow-sky-500/30
              "
            >

              <h4 className="text-sky-400 font-bold mb-3">
                Used In
              </h4>

              {skill.projects.map((project, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-300 mb-1"
                >
                  🚀 {project}
                </p>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;