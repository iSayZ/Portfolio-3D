import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInOnScrollProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

const SlideInOnScroll: React.FC<SlideInOnScrollProps> = ({
  children,
  direction = "left",
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SlideInOnScroll;
