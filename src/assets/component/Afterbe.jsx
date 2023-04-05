import React from "react";
import { motion } from "framer-motion";
const Afterbe = () => {
  const maindiv = {
    hidden: {
      x: 0,
      y: 0,
    },
    visible: {
      x: 110,
      y: 0,
    },
  };
  const childvarient = {
    hidden,
  };
  return (
    <motion.div
      style={{ width: 400, height: 200, background: "blue" }}
      variants={maindiv}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 style={{ backgroundColor: "lightblue", marginTop: 200 }}>
        hello tuafik islam
      </motion.h1>
    </motion.div>
  );
};

export default Afterbe;
