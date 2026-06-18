function Experience() {
  const experiences = [
    {
      company: "MindMatrix",
      role: "Android App Development Intern (Gen AI)",
      period: "Feb 2026 - May 2026",
      desc: "Worked on Generative AI integration, prompt engineering, API integration and Android workflows."
    },
    {
      company: "Bookleey Ecommerce Pvt Ltd",
      role: "Software Tester Intern",
      period: "Feb 2025 - May 2025",
      desc: "Performed manual testing, bug reporting and QA validation while collaborating with developers."
    }
  ];

  return (
    <section
        id="experience"
        className="max-w-6xl mx-auto py-10 px-6"
        >

      <h2 className="text-5xl font-bold text-center mb-16">
        Experience
      </h2>

      <div className="space-y-8">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-sky-400 transition"
          >
            <h3 className="text-2xl font-bold text-sky-400">
              {exp.role}
            </h3>

            <p className="text-lg mt-2">
              {exp.company}
            </p>

            <p className="text-gray-400">
              {exp.period}
            </p>

            <p className="mt-4 text-gray-300">
              {exp.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;