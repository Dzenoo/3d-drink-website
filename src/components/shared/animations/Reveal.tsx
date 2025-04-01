"use client";

import React from "react";
import { motion, MotionProps } from "motion/react";

interface RevealProps extends MotionProps {
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        opacity: 0,
        y: 50,
      }}
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 130%, 0 100%)",
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        damping: 12,
        stiffness: 100,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
