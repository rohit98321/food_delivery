// src/pages/AuthWrapper.jsx
import { motion } from "framer-motion";

const Animation = ({ title, children }) => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-[#1A3636]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-md bg-[#E2DFD0] p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </motion.div>
  );
};

export default Animation;
