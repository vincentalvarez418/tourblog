import React from "react";
import { motion } from "framer-motion";

const itemVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const AnimatedReveal = ({ children, index }) => (
  <motion.div
    variants={itemVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    style={{ overflow: "hidden" }}
  >
    {children}
  </motion.div>
);

export default AnimatedReveal;
