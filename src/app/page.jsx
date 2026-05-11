"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import InstructorCard from "@/components/instructors/InstructorCard";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Home() {
  const trendingCourses = [
    { title: "Data Science Fundamentals", instructor: "Sayed Hasan Dipto", image: "https://i.ibb.co/69PzqkN/b30c7570fc7a66015c22ce42d353c19f.jpg", category: "Data Science" },
    { title: "Leadership Strategies", instructor: "Rasel Islam Rasel", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", category: "Business" },
    { title: "Advanced SEO 2024", instructor: "Ratul Khan", image: "https://i.ibb.co/B20FsTRq/c3bd186f7f552779cc9807de367c5245.jpg", category: "Marketing" },
    { title: "AWS Architect Mastery", instructor: "Refat Raihan", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", category: "Cloud" }
  ];

  const instructors = [
    { name: "Sayed Hasan Dipto", role: "Senior AI Researcher", image: "https://i.ibb.co/FL6H0BN7/pfp.jpg" },
    { name: "Ratul Khan", role: "Marketing Strategist", image: "https://i.ibb.co/rR8N2Hmd/image.png" },
    { name: "Rasel Islam Rasel", role: "Lead Product Designer", image: "https://i.ibb.co/W4jhs4WR/image.png" },
    { name: "Refat Raihan", role: "Cloud Infrastructure Lead", image: "https://i.ibb.co/bDB67GX/image.png" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="space-y-32">
        {/* Hero Section */}
        <section className="pt-24 overflow-hidden">
          <div className="container-custom flex flex-col md:flex-row items-center gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 space-y-8 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                Learn from <br />
                the best, <br />
                <span className="text-blue-600">anywhere.</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-sm mx-auto md:mx-0 font-medium">
                SkillSphere brings world-class education to your fingertips. Join over 2 million students today.
              </p>
              <div className="flex justify-center md:justify-start gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 text-white font-bold px-10 h-16 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
                  Get Started
                </Button>
                <Button size="lg" variant="light" className="text-gray-900 font-bold px-10 h-16 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all">
                  Browse Courses
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative"
            >
              <Image
                alt="Hero Image"
                className="rounded-[40px] shadow-2xl w-full object-cover aspect-4/3 border-12 border-white"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              />
            </motion.div>
          </div>
        </section>

        {/* Bento Grid: Boost Your Learning Velocity */}
        <motion.section
          {...fadeInUp}
          className="container-custom py-12"
        >
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">Boost Your Learning Velocity</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-137.5">
            {/* Blue Box */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-7 bg-[#2563eb] p-12 rounded-[40px] flex flex-col justify-end relative overflow-hidden group shadow-xl"
            >
              <div className="absolute top-17 left-50 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <GraduationCap className="w-60 h-60 text-white" />
              </div>
              <span className="material-symbols-outlined text-[150px] text-white/10 absolute -top-8 -right-8 transition-transform duration-700 group-hover:rotate-12">psychology</span>
              <h3 className="text-4xl font-bold text-white mb-6">The Pomodoro Technique</h3>
              <p className="text-white/50! font-medium leading-relaxed max-w-md">Maximize focus by breaking your study sessions into 25-minute intervals of deep work followed by short breaks.</p>
            </motion.div>
            {/* Right Column */}
            <div className="md:col-span-5 flex flex-col gap-8">
              {/* Orange Box */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#f97316] p-10 rounded-[40px] flex flex-col justify-center gap-6 text-white shadow-lg h-full"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">event_repeat</span>
                  </div>
                  <span className="font-bold text-xl text-white">Spaced Repetition</span>
                </div>
                <p className="text-white/70! text-sm font-medium leading-relaxed">Review material at increasing intervals to solidify long-term memory retention.</p>
              </motion.div>
              {/* Two Bottom Boxes */}
              <div className="grid grid-cols-2 gap-8 h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f7ff] p-8 rounded-[40px] flex flex-col items-center justify-center text-center gap-4 border border-blue-50"
                >
                  <span className="material-symbols-outlined text-[#2563eb] text-3xl">edit_note</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Active Recall</h4>
                    <p className="text-[10px] text-gray-400 font-bold mt-1">Test yourself constantly to reinforce learning.</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f7ff] p-8 rounded-[40px] flex flex-col items-center justify-center text-center gap-4 border border-blue-50"
                >
                  <span className="material-symbols-outlined text-[#2563eb] text-3xl">groups</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Peer Learning</h4>
                    <p className="text-[10px] text-gray-400 font-bold mt-1">Explain concepts to others to deepen understanding.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Instructors Section */}
        <motion.section
          {...fadeInUp}
          className="bg-gray-50/50 py-24"
        >
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Learn from Industry Titans</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {instructors.map((ins, i) => (
                <InstructorCard key={i} instructor={ins} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Trending Courses */}
        <motion.section
          {...fadeInUp}
          className="container-custom py-12 pb-32"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trending Courses</h2>
            <Chip size="sm" className="bg-orange-500 text-white font-bold px-3">New Releases</Chip>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {trendingCourses.map((course, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <Image src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">{course.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">By {course.instructor}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
