import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function FloatingElement({ children, className = "", givenDuration = 1 }) {
  const controls = useAnimation();

  const generateRandomMotion = () => {
    const randomY = Math.random() * 10 - 4; // Random value between -4 and 4
    const randomX = Math.random() * 10 - 4; // Random value between -4 and 4
    const randomRotate = Math.random() * 2 - 0.5; // Random value between -0.5 and 0.5
    const duration = Math.random() * givenDuration + 2; // Random duration between 2 and 3 seconds

    return {
      y: randomY,
      x: randomX,
      rotate: randomRotate,
      transition: { duration, ease: "easeInOut" },
    };
  };

  useEffect(() => {
    const floatAnimation = async () => {
      while (true) {
        await controls.start(generateRandomMotion());
      }
    };
    floatAnimation();
  }, [controls, generateRandomMotion]); // Added generateRandomMotion to dependencies

  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={controls}
      initial={{ y: 0, x: 0, rotate: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default FloatingElement;
