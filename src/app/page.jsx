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
      "courseCurriculum": [
        "Introduction to Advanced Patterns",
        "Custom Hooks Deep Dive",
        "Compound Component Pattern",
        "Performance Optimization with Memo",
        "Testing Complex Patterns"
      ]
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
      "courseCurriculum": [
        "Foundations of Design Systems",
        "Typography and Color Tokens",
        "Building Atomic Components",
        "Documentation Strategies",
        "Handover Process"
      ]
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
      "courseCurriculum": [
        "The Growth Hacking Mindset",
        "A/B Testing Fundamentals",
        "Viral Loops and Referral Programs",
        "Retention Strategies",
        "Tools of the Trade"
      ]
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
      "courseCurriculum": [
        "Python Basics for Data Science",
        "Data Manipulation with Pandas",
        "Visualization with Matplotlib",
        "Introduction to Scikit-Learn",
        "Final Capstone Project"
      ]
    },
    {
      "id": "course-5",
      "title": "Full-Stack Web Development 2026",
      "category": "Development",
      "instructor": "Sayed Hasan Dipto",
      "instructorImgUrl": "https://i.ibb.co.com/FL6H0BN7/pfp.jpg",
      "instructorBio": "Junior MERN Stack Developer with expertise in modern web technologies.",
      "rating": "5.0",
      "image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800",
      "duration": "60h",
      "level": "Advanced",
      "description": "Become a job-ready developer by learning the full MERN stack along with Next.js and PostgreSQL.",
      "courseCurriculum": [
        "Frontend with React & Tailwind",
        "Backend API Development with Node",
        "Database Modeling with MongoDB",
        "Authentication and Security",
        "Deployment on Vercel and AWS"
      ]
    },
    {
      "id": "course-6",
      "title": "Modern Mobile App Design",
      "category": "Design",
      "instructor": "Sofia Patel",
      "instructorImgUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
      "instructorBio": "Mobile UX Designer with a passion for creating intuitive user experiences.",
      "rating": "4.8",
      "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
      "duration": "30h",
      "level": "Intermediate",
      "description": "Learn to design intuitive mobile experiences for iOS and Android, focusing on modern UX trends.",
      "courseCurriculum": [
        "Mobile UX Principles",
        "Prototyping in Figma",
        "iOS vs Android Design Guidelines",
        "Micro-interactions",
        "User Testing and Iteration"
      ]
    },
    {
      "id": "course-7",
      "title": "Social Media Marketing Blueprint",
      "category": "Marketing",
      "instructor": "David Kim",
      "instructorImgUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200",
      "instructorBio": "Social Media Strategist with a track record of successful campaigns for global brands.",
      "rating": "4.6",
      "image": "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800",
      "duration": "15h",
      "level": "Beginner",
      "description": "Create a winning social media strategy to build your brand and engage with customers effectively.",
      "courseCurriculum": [
        "Platform Algorithms Explained",
        "Content Calendar Creation",
        "Paid Ad Strategies",
        "Influencer Marketing",
        "Analytics and ROI Tracking"
      ]
    },
    {
      "id": "course-8",
      "title": "Machine Learning with R",
      "category": "Data Science",
      "instructor": "Dr. Emily Watson",
      "instructorImgUrl": "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200",
      "instructorBio": "Data Scientist and Professor specializing in statistical modeling and machine learning.",
      "rating": "4.7",
      "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800",
      "duration": "45h",
      "level": "Advanced",
      "description": "Dive deep into statistical modeling and machine learning algorithms using the R programming language.",
      "courseCurriculum": [
        "R Programming Basics",
        "Linear and Logistic Regression",
        "Decision Trees and Random Forests",
        "Clustering Techniques",
        "Model Evaluation and Validation"
      ]
    },
    {
      "id": "course-9",
      "title": "Next.js 15 Deep Dive",
      "category": "Development",
      "instructor": "Michael Wu",
      "instructorImgUrl": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
      "instructorBio": "Senior Frontend Engineer with expertise in Next.js and server-side rendering.",
      "rating": "4.9",
      "image": "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800",
      "duration": "25h",
      "level": "Intermediate",
      "description": "Master the latest features of Next.js 15, including the App Router, Server Components, and Server Actions.",
      "courseCurriculum": [
        "App Router Architecture",
        "Server vs Client Components",
        "Data Fetching and Caching",
        "Server Actions for Mutations",
        "Middleware and Security"
      ]
    },
    {
      "id": "course-10",
      "title": "Google Ads Certification Prep",
      "category": "Marketing",
      "instructor": "David Kim",
      "instructorImgUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200",
      "instructorBio": "Digital Marketing Expert with a focus on data-driven growth strategies.",
      "rating": "4.7",
      "image": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800",
      "duration": "10h",
      "level": "Intermediate",
      "description": "Everything you need to know to pass the Google Ads certification and manage professional campaigns.",
      "courseCurriculum": [
        "Search Ads Fundamentals",
        "Display and Video Campaigns",
        "Keyword Research Techniques",
        "Budget and Bidding Logic",
        "Mock Exams and Preparation"
      ]
    }
  ];;

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
              {/* <span className="material-symbols-outlined text-[150px] text-white/10 absolute -top-8 -right-8 transition-transform duration-700 group-hover:rotate-12">psychology</span> */}
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
                    <ArrowsRotateRight className="w-7 h-7"></ArrowsRotateRight>
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
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Pencil />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Active Recall</h4>
                    <p className="text-[10px] text-gray-400 font-bold mt-1">Test yourself constantly to reinforce learning.</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f0f7ff] p-8 rounded-[40px] flex flex-col items-center justify-center text-center gap-4 border border-blue-50"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <UsersRound />
                  </div>
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
            {/* {trendingCourses.map((course, i) => (
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
            ))} */}
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
