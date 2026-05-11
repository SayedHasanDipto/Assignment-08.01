"use client";

import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";

export default function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full rounded-2xl overflow-hidden">
        <div className="relative aspect-video">
          <Image
            removeWrapper
            alt={course.title}
            className="z-0 w-full h-full object-cover"
            src={course.image}
          />
        </div>
        <CardBody className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {course.category}
            </span>
            <div className="flex items-center gap-1 text-gray-900 font-bold text-sm">
              <span className="material-symbols-outlined text-[14px] text-orange-400">star</span>
              <span>{course.rating}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center gap-2">
            <Image
              src={course.instructorImage}
              className="w-6 h-6 rounded-full grayscale"
              alt={course.instructor}
            />
            <span className="text-xs text-gray-500 font-medium">
              {course.instructor}
            </span>
          </div>
        </CardBody>
        <CardFooter className="px-6 pb-6 pt-0">
           <div className="flex justify-between items-center w-full text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">bar_chart</span>
                  {course.level}
                </span>
              </div>
           </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
