import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = ["home", "services", "industries", "about us", "careers", "contact us"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <>
      {/* "" Navbar Container */}
      <nav className="bg-white fixed w-full flex items-center justify-between px-6 md:px-12 lg:px-20 shadow-md z-50">
        
        {/* "" Logo */}
        <div className="text-lg font-bold">
          <img className="w-40" src="/logo.png" alt="Logo" />
        </div>

        {/* "" Desktop Menu */}
        <ul className="hidden md:flex items-center py-1 gap-8 font-semibold">
          {menuItems.map((item) => (
            <motion.li
              key={item}
              className={`px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 group
                ${active === item ? "text-white bg-gradient-to-r from-[#12006A] to-[#2300D0]" 
                : "text-black hover:text-white hover:bg-gradient-to-r from-[#12006A] to-[#2300D0]"}`}
              onClick={() => setActive(item)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.li>
          ))}
        </ul>

        {/* "" Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* "" Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white text-black shadow-lg flex flex-col items-center py-5 gap-4 md:hidden"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-lg font-semibold hover:text-yellow-500 transition-all"
                onClick={() => {
                  setActive(item);
                  setIsOpen(false); // Close menu after selection
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
