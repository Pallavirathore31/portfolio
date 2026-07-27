import BlurText from "./BlurText";

function About() {
  const handleAnimationComplete = () => {
    // console.log("Animation completed!");
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
          A Full Stack Developer with 2+ years of experience building scalable
          and responsive web applications using React.js, Next.js, Node.js,
          Express.js, JavaScript, and MySQL. Experienced in developing RESTful
          APIs, integrating third-party services, optimizing application
          performance, and creating user-friendly interfaces. Proficient in
          frontend and backend development, database design, authentication,
          debugging, and writing clean, maintainable code. Familiar with Agile
          methodologies and collaborative development using GitHub, Jira,
          Postman, and Slack. Passionate about solving complex problems,
          learning new technologies, and delivering high-quality software
          solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
