import React from "react";
import ShinyText from "./ShinyText";
import { motion } from "motion/react";
import VariableProximity from "./VariableProximity";

function Footer() {
  return (
    <footer className="relative w-full text-white pt-10 lg:pt-15 px-6 md:px-20 lg:px-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050044] to-[#000033] z-0"></div>

      {/* Background Image - Positioned Above Gradient */}
      <div className="absolute inset-0 bg-[url('/Holo.png')] bg-cover bg-center opacity-50 z-10"></div>

      {/* Footer Content */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between gap-10 lg:gap-20 2xl:mx-30">
        
        {/* Company Name */}
        <div className="text-center md:text-left">
          <motion.h2 drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} whileDrag={{ cursor: "grabbing" }}  className="lg:text-3xl 2xl:text-4xl font-bold transition-all duration-300 hover:cursor-grab hover:scale-110 ">SB Digital Automation</motion.h2>
        </div>

        {/* Footer Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left">
            <thead>
              <tr className="text-md 2xl:text-lg text-white  border-gray-600">
                <th className="pb-4">Company</th>
                <th className="pb-4">Solutions</th>
                <th className="pb-4">PLM Solutions</th>
                <th className="pb-4">Industries</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["Home", "Engineering", "PLM Application Support", "Rail Transport"],
                ["Careers", "IT Services", "PLM CAD", "Aerospace"],
                ["Services", "Cloud Computing", "Data Migration", "Automotive"],
                ["About Us", "PLM", "", "Manufacturing Industry"],
                ["Contact Us", "App Development", "", "Login"],
                ["Become a Partner", "Web Development", "", ""]
              ].map((row, i) => (
                <tr key={i} >
                  {row.map((item, j) => (
                    <td key={j} className="py-2 ">
                      {item && <a href="#" className="hover:text-gray-100">{item}</a>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="relative z-20 text-gray-400 text-sm 2xl:text-md  py-5 mt-6 text-start 2xl:mx-30">
        <ShinyText text="2025 SB Digital Automation, All Rights Reserved" speed={4} />
      </div>

      <VariableProximity />
    </footer>
  );
}

export default Footer;
