import {
 FaGithub,
 FaLinkedin,
 FaEnvelope,
 FaPhone
} from "react-icons/fa";

function Contact() {
  return (
    <section
        id="experience"
        className="max-w-6xl mx-auto py-10 px-6"
        >

      <h2 className="text-5xl font-bold text-center mb-16">
        Get In Touch
      </h2>

      <div
        className="
        bg-slate-800
        rounded-3xl
        p-10
        border
        border-slate-700
        text-center
        "
      >

        <h3 className="text-3xl font-bold text-sky-400">
          Let's Connect
        </h3>

        <p className="text-gray-400 mt-4">
          Open to internships, software development
          opportunities and collaborations.
        </p>

        <div className="space-y-4">

        <p className="flex items-center justify-center gap-3">

            <FaEnvelope />

            jitheshu2004@gmail.com

        </p>

        <p className="flex items-center justify-center gap-3">

            <FaPhone />

            +91 8722067551

        </p>

        <a
            href="https://github.com/Jeethu-2004"
            target="_blank"
            rel="noreferrer"
            className="
            flex
            justify-center
            items-center
            gap-3
            text-sky-400
            "
        >
            <FaGithub />

            GitHub
        </a>

        <a
            href="https://www.linkedin.com/in/jithesh-u"
            target="_blank"
            rel="noreferrer"
            className="
            flex
            justify-center
            items-center
            gap-3
            text-sky-400
            "
        >
            <FaLinkedin />

            LinkedIn
        </a>

        </div>
      </div>

    </section>
  );
}

export default Contact;