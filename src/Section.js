import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '', style = {} }) => (
  <motion.section
    id={id}
    className={`py-16 px-8 pt-24 pb-24 ${className}`}
    style={{ scrollMarginTop: "5px", ...style }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {title && <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>}
    <motion.div
      className="text-black max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  </motion.section>
);

export default Section;
