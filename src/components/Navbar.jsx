import React, { useState } from "react";
import logo from "./logo.png";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="IEEE NSUT logo"
            className="w-10 h-10 sm:w-14 sm:h-14"
          />
          <span className="font-bold text-xl sm:text-2xl text-sky-300">
            IEEE&nbsp;NSUT
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8 text-cyan-300 font-medium">
          <span className="cursor-pointer text-2xl hover:text-white transition-colors duration-200">
            Algoverse Leaderboard
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-cyan-300 focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden bg-white/10 dark:bg-black/10 backdrop-blur-md px-6 pb-4"
          >
            <span className="block py-2 text-cyan-300 font-medium hover:text-white cursor-pointer transition-colors">
              Algoverse Leaderboard
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
