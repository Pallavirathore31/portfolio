import { motion } from "framer-motion";

const BlurText = ({
  text,
  className = "",
  delay = 200,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
}) => {

  const items =
    animateBy === "words" ? text.split(" ") : text.split("");

  const getInitial = () => {
    switch (direction) {
      case "top":
        return { opacity: 0, y: -50, filter: "blur(10px)" };
      case "bottom":
        return { opacity: 0, y: 50, filter: "blur(10px)" };
      case "left":
        return { opacity: 0, x: -50, filter: "blur(10px)" };
      case "right":
        return { opacity: 0, x: 50, filter: "blur(10px)" };
      default:
        return { opacity: 0, y: -50, filter: "blur(10px)" };
    }
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={getInitial()}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.5,
            delay: index * (delay / 1000),
          }}
          onAnimationComplete={onAnimationComplete}
          className="inline-block mr-2"
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;