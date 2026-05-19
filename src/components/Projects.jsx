const projects = [
  {
    title: "Commission Management System",
    tech: "Next.js, Node.js, MySQL",
  },
  {
    title: "Crypto Trading Mobile App",
    tech: "React Native, Redux",
  },
  {
    title: "Firstminer Tech Website",
    tech: "React.js, Node.js",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {project.tech}
              </p>

              <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg">
                View Project
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;