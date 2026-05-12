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
import { GraduationCap, Pencil, UsersRound } from "lucide-react";
import { ArrowsRotateRight } from '@gravity-ui/icons';
import Link from "next/link";

export default function Home() {
  const trendingCourses = [
    {
      "id": "course-1",
      "title": "Mastering Advanced React Patterns",
      "category": "Development",
      "instructor": "Sarah Jenkins",
      "instructorImgUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      "instructorBio": "Senior Frontend Engineer with 10+ years of experience in building scalable React applications.",
      "rating": "4.9",
      "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
      "duration": "24h 30m",
      "level": "Advanced",
      "description": "Take your React skills to the next level by mastering HOCs, Render Props, Compound Components, and Hooks patterns for scalable applications.",
      "courseCurriculum": ["Introduction to Advanced Patterns", "Custom Hooks Deep Dive", "Compound Component Pattern", "Performance Optimization with Memo", "Testing Complex Patterns"]
    },
    {
      "id": "course-2",
      "title": "UI Design Systems for Professionals",
      "category": "Design",
      "instructor": "Marcus Chen",
      "instructorImgUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
      "instructorBio": "Lead Designer specializing in design systems and scalable UI architecture for global brands.",
      "rating": "4.7",
      "image": "https://i.ibb.co/S4HCkpz6/e9c5c464fb23185a935c00692525ae2c.jpg",
      "duration": "18h 15m",
      "level": "Intermediate",
      "description": "Learn how to build scalable and maintainable design systems that bridge the gap between design and code using Figma.",
      "courseCurriculum": ["Foundations of Design Systems", "Typography and Color Tokens", "Building Atomic Components", "Documentation Strategies", "Handover Process"]
    },
    {
      "id": "course-3",
      "title": "Growth Hacking: Data-Driven Strategies",
      "category": "Marketing",
      "instructor": "Elena Rodriguez",
      "instructorImgUrl": "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
      "instructorBio": "Digital Marketing Expert with a focus on data-driven growth strategies.",
      "rating": "4.8",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      "duration": "12h 45m",
      "level": "Beginner",
      "description": "Master the art of rapid experimentation across marketing channels and product development for massive growth.",
      "courseCurriculum": ["The Growth Hacking Mindset", "A/B Testing Fundamentals", "Viral Loops and Referral Programs", "Retention Strategies", "Tools of the Trade"]
    },
    {
      "id": "course-4",
      "title": "Python for Data Science Mastery",
      "category": "Data Science",
      "instructor": "Dr. James Wilson",
      "instructorImgUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
      "instructorBio": "Professor of Computer Science with a focus on data-driven applications.",
      "rating": "4.9",
      "image": "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800",
      "duration": "40h",
      "level": "Intermediate",
      "description": "A comprehensive guide to using Python, Pandas, NumPy, and Scikit-Learn for data analysis and machine learning.",
      "courseCurriculum": ["Python Basics for Data Science", "Data Manipulation with Pandas", "Visualization with Matplotlib", "Introduction to Scikit-Learn", "Final Capstone Project"]
    },
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
      <main className="space-y-20 md:space-y-32">

        {/* Hero Section */}
        <section className="pt-16 md:pt-24 overflow-hidden">
          <div className="container-custom flex flex-col md:flex-row items-center gap-12 md:gap-24 px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                Learn from <br />
                the best, <br />
                <span className="text-blue-600">anywhere.</span>
              </h1>
              <p className="text-base md:text-lg text-gray-500 max-w-sm mx-auto md:mx-0 font-medium">
                SkillSphere brings world-class education to your fingertips. Join over 2 million students today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2 md:pt-4">
                <Link href="/auth">
                  <Button size="lg" className="w-full sm:w-auto bg-blue-600 text-white font-bold px-10 h-14 md:h-16 rounded-2xl shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
                    Get Started
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="light" className="w-full sm:w-auto text-gray-900 font-bold px-10 h-14 md:h-16 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all">
                    Browse Courses
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative w-full"
            >
              <Image
                alt="Hero Image"
                className="rounded-[32px] md:rounded-[40px] shadow-2xl w-full object-cover aspect-4/3 border-8 md:border-12 border-white"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              />
            </motion.div>
          </div>
        </section>

        {/* Bento Grid */}
        <motion.section {...fadeInUp} className="container-custom py-8 md:py-12 px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-20 text-gray-900">Boost Your Learning Velocity</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

            {/* Blue Box */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-7 bg-[#2563eb] p-8 md:p-12 rounded-[32px] md:rounded-[40px] flex flex-col justify-end relative overflow-hidden group shadow-xl min-h-[280px] md:min-h-[400px]"
            >
              <div className="absolute top-6 left-1/2 -translate-x-1/2 md:top-17 md:left-50 md:translate-x-0 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <GraduationCap className="w-24 h-24 md:w-30 md:h-30 text-white" />
              </div>
              <h3 className="text-2xl max-sm:mt-32 md:text-4xl font-bold text-white mb-3 md:mb-6">The Pomodoro Technique</h3>
              <p className="text-white/50 font-medium leading-relaxed text-sm md:text-base max-w-md">Maximize focus by breaking your study sessions into 25-minute intervals of deep work followed by short breaks.</p>
            </motion.div>

            {/* Right Column */}
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              {/* Orange Box */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-[#f97316] p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col justify-center gap-4 md:gap-6 text-white shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <ArrowsRotateRight className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <span className="font-bold text-lg md:text-xl text-white">Spaced Repetition</span>
                </div>
                <p className="text-white/70 text-sm font-medium leading-relaxed">Review material at increasing intervals to solidify long-term memory retention.</p>
              </motion.div>

              {/* Two Bottom Boxes */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f7ff] p-6 md:p-8 rounded-[28px] md:rounded-[40px] flex flex-col items-center justify-center text-center gap-3 md:gap-4 border border-blue-50"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Pencil className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Active Recall</h4>
                    <p className="text-[10px] text-gray-400 font-bold mt-1">Test yourself constantly to reinforce learning.</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f7ff] p-6 md:p-8 rounded-[28px] md:rounded-[40px] flex flex-col items-center justify-center text-center gap-3 md:gap-4 border border-blue-50"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <UsersRound className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Peer Learning</h4>
                    <p className="text-[10px] text-gray-400 font-bold mt-1">Explain concepts to others to deepen understanding.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Instructors Section */}
        <motion.section {...fadeInUp} className="bg-gray-50/50 py-16 md:py-24">
          <div className="container-custom px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-16 text-gray-900">Learn from Industry Titans</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {instructors.map((ins, i) => (
                <InstructorCard key={i} instructor={ins} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Trending Courses */}
        <motion.section {...fadeInUp} className="container-custom py-8 pb-20 md:pb-32 px-4">
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trending Courses</h2>
            <Chip size="sm" className="bg-orange-500 text-white font-bold px-3">New Releases</Chip>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <CourseCard course={trendingCourses[0]} />
            <CourseCard course={trendingCourses[1]} />
            <CourseCard course={trendingCourses[2]} />
            <CourseCard course={trendingCourses[3]} />
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}