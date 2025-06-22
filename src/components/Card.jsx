import React from "react";
import { motion } from "framer-motion";

const leaderboardData = [
  { name: "Samarth Dagar", id: "2024UEE4038", points: "10 pts" },
  { name: "Ekta", id: "2023UCA2142", points: "9.5 pts" },
  { name: "Hemang Bhat", id: "2024UCA1829", points: "9 pts" },
  { name: "Aarohi Jain", id: "2024UCA1806", points: "8 pts" },
  { name: "Daksh Dagar", id: "2024UCS1705", points: "7 pts" },
  { name: "Vivek Kumar", id: "2024UEC2509", points: "7 pts" },
];

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 gap-2 pt-0 mb-2">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl pb-2 sm:text-4xl font-bold text-center text-white mt-0"
      >
        Top Performers of Algoverse 3.0
      </motion.h1>

      {leaderboardData.map((item, index) => (
        <motion.div
          key={index}
          role="alert"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-cyan-400/30 dark:border-cyan-500/30 text-white p-5 rounded-xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[30vw] shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium text-center">
            <span className="block font-semibold text-xl sm:text-2xl text-cyan-200">
              {item.name}
            </span>
            <span className="text-sm text-cyan-100">{item.id}</span>
            <br />
            <span className="text-lg font-bold text-emerald-300">
              {item.points}
            </span>
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
