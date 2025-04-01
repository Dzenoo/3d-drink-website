"use client";

import React, { useRef } from "react";
import { motion, MotionProps, useInView } from "motion/react";

interface RevealProps extends MotionProps {
  children: React.ReactNode;
}

const Reveal: React.FC<RevealProps> = ({ children, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
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
        duration: 1,
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
