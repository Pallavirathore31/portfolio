import reactImg from "../assets/images/react.png";
import nextImg from "../assets/images/nextjs.png";
import nodeImg from "../assets/images/node.png";
import expressImg from "../assets/images/expressjs.png";
import mysqlImg from "../assets/images/mysql.png";
import postgresImg from "../assets/images/postgress.png";
import mongoImg from "../assets/images/mongodb.png";
import jiraImg from "../assets/images/k6.png";
import githubImg from "../assets/images/github.png";
import postmanImg from "../assets/images/postman.png";

const skills = [
  { name: "React.js", image: reactImg },
  { name: "Next.js", image: nextImg },
  { name: "Node.js", image: nodeImg },
  { name: "Express.js", image: expressImg },
  { name: "MySQL", image: mysqlImg },
  { name: "PostgreSQL", image: postgresImg },
  { name: "MongoDB", image: mongoImg },
  { name: "Jira", image: jiraImg },
  { name: "GitHub", image: githubImg },
  { name: "Postman", image: postmanImg },
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
              className="bg-slate-800 p-2 rounded-2xl flex flex-col items-center hover:scale-105 transition"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-25 h-20 object-contain"
              />

              {/* <p className="mt-3 text-sm text-white">
                {skill.name}
              </p> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;