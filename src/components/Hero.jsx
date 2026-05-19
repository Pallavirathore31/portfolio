import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-5"
        >
          Pallavi Rathore
        </motion.h1>

        <h2 className="text-3xl text-cyan-400 mb-5">
          Full Stack Developer & Project Coordinator
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Building scalable web applications and managing Agile teams using React.js, Node.js, and modern technologies.
        </p>

        <div className="flex justify-center gap-5">
          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-bold"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-cyan-400 px-6 py-3 rounded-xl"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;