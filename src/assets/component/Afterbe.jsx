import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
const Afterbe = () => {
  const mation = useAnimation();
  return (
    <>
      <motion.div
        style={{ width: 400, height: 200, background: "blue" }}
        animate={mation}
      ></motion.div>

      <motion.button
        style={{ padding: 10, marginLeft: 60 }}
        onClick={() => {
          mation.start({
            x: 100,
            transition: {
              delay: 0.3,
              type: "spring",
              stiffness: 500,
            },
          });
        }}
      >
        Send
      </motion.button>
    </>
  );
};

export default Afterbe;
