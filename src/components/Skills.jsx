const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Jira",
  "GitHub",
  "Postman",
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-5 rounded-2xl text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;