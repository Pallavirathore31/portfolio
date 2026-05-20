import BlurText from "./BlurText";

function About() {

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section id="about" className="py-2 px-5">
      <div className="max-w-5xl mx-auto">

        <BlurText
          text="About Me"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl md:text-5xl text-white mb-5 font-bold text-center"
        />
        <p className="text-gray-300 text-lg leading-8 text-center">
         Project Coordinator and Full Stack Developer with 2+ years of experience managing software projects in Agile environments. Skilled in React.js, Node.js, JavaScript, MySQL, API integration, stakeholder communication, sprint planning, and cross-functional team coordination. Experienced in handling project timelines, task allocation, client communication, requirement gathering, debugging, and delivering scalable web applications. Strong understanding of frontend and backend development with the ability to
          bridge the gap between technical teams and business requirements. Proficient in tools like Jira, GitHub, Postman, and Slack, with a focus on delivering projects on time while maintaining quality and team productivity.
        </p>

      </div>
    </section>
  );
}

export default About;