import React from "react";
import { motion } from "framer-motion";

const leaderboardData = [
  { name: "Aarohi Jain", id: "2024UCA1806", points: "19 pts" },
  { name: "Bhumika Aswal", id: "2024UIN2353", points: "17 pts" },
  { name: "Samarth Dagar", id: "2024UEE4038", points: "12 pts" },
  { name: "Vamika Arya", id: "2024UCS1705", points: "12 pts" },
  { name: "Ashish", id: "2024UCA1859", points: "12 pts" },
  { name: "Hemang Bhat", id: "2024UCA1829", points: "9 pts" },
];

const getMedal = (index) => {
  const medals = ["🥇", "🥈", "🥉"];
  return medals[index] || `#${index + 1}`;
};

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center text-white mb-6"
      >
        Top Performers of Algoverse 3.0
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center text-cyan-200 text-base sm:text-lg font-medium mb-4"
      >
        🎉 Congratulations to all the participants for their amazing efforts and consistency!
      </motion.p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-2">
        {leaderboardData.map((item, index) => (
          <motion.div
            key={index}
            role="alert"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white/10 backdrop-blur-lg border border-cyan-400/30 text-white p-4 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center text-center space-y-1">
              <span className="text-2xl font-bold text-yellow-300">
                {getMedal(index)}
              </span>
              <span className="text-xl sm:text-2xl font-semibold text-cyan-200">
                {item.name}
              </span>
              <span className="text-sm text-cyan-100">{item.id}</span>
              <span className="text-lg font-bold text-emerald-300">
                {item.points}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
