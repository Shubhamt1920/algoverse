import React from "react";
import logo from "./logo.png";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-around px-6 mt-2 pt-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="IEEE NSUT logo"
            className="w-10 h-10 sm:w-14 sm:h-14"
          />
          <span className="font-semibold text-xl sm:text-2xl text-sky-300">
            IEEE&nbsp;NSUT
          </span>
        </div>

        {/* Link */}
        <div className="hidden sm:flex items-center gap-8 text-cyan-300 font-semibold">
          <span className="cursor-pointer text-2xl hover:text-cyan-100 transition-colors">
            Algoverse Leaderboard
          </span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
