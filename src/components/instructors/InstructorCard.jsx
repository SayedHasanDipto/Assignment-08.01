"use client";

import { Image } from "@heroui/image";
import { motion } from "framer-motion";

export default function InstructorCard({ instructor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="relative mb-5">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-100 shadow-md group-hover:shadow-2xl group-hover:border-green-100 transition-all duration-300">
          <Image
            src={instructor.image}
            alt={instructor.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="absolute bottom-1 z-10 right-1 bg-[#51e877] text-white p-1 rounded-full border-2 border-white shadow-sm">
          <span className="material-symbols-outlined text-[10px] fill-current">check_circle</span>
        </div>
      </div>
      <h3 className="text-sm font-bold text-gray-900 mb-1">{instructor.name}</h3>
      <p className="text-[10px] font-bold text-[#5b51e8] uppercase tracking-widest">{instructor.role}</p>
    </motion.div>
  );
}
