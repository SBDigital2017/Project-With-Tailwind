import { motion } from "framer-motion";

const ShinyTextBlue      = ({ text, disabled = false, speed, className = '' }) => {
  return (
    <motion.div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${className}`}
      initial={{ backgroundPosition: "200% 0%" }}
      animate={disabled ? {} : { backgroundPosition: ["200% 0%", "0% 0%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(0, 0, 0, 0) 40%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        color: "#f2f5f7a4",
      }}
    >
      <motion.p drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} whileDrag={{ cursor: "grabbing" }} className="hover:text-white hover:cursor-grab" >{text}</motion.p>
    </motion.div>
  );
};

export default ShinyTextBlue;
