import React from "react";
import { motion, spring } from "framer-motion";
const Afterbe = () => {
  const maindiv = {
    hidden: {
      x: 90,
      y: 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 3,

        when: "afterChildren",
      },
    },
  };
  const childvarient = {
    hidden: {
      x: 1000,
      y: 0,
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 600,
      },
    },
  };
  return (
    <motion.div
      style={{ width: 400, height: 200, background: "blue" }}
      variants={maindiv}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        style={{ backgroundColor: "lightblue", marginTop: 200 }}
        variants={childvarient}
        initial="hidden"
        animate="visible"
      >
        hello tuafik islam
      </motion.h1>
    </motion.div>
  );
};

export default Afterbe;
