"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { CircleCheck, MoveRight } from "lucide-react";

export default function CourseDetailPage() {
  const course = {
    title: "Advanced UI Systems & Design Architecture",
    category: "Creative Design",
    instructor: "Marcus Chen",
    instructorBio: "Design Systems Architect at Sphere. Formerly Senior Designer at Global Tech Solutions. Over 12 years of experience in product architecture.",
    instructorImage: "https://i.pravatar.cc/150?u=marcus",
    rating: "4.9 (2k+)",
    duration: "12 Weeks",
    level: "Advanced",
    language: "English",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1200&auto=format&fit=crop",
    curriculum: [
      {
        module: "Module 1: Fundamentals",
        lessons: [
          { title: "Introduction to Architecture", time: "12:40", active: true },
          { title: "The Atomic Principle", time: "08:15" },
          { title: "Defining Global Tokens", time: "15:50" }
        ]
      },
      {
        module: "Module 2: Advanced Grid",
        lessons: [
          { title: "Subgrid & Flex Logic", time: "22:10" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8faff]">
      <Navbar />
      <main className="container-custom py-12">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-10">
          <span>Courses</span>
          <span>{">"}  </span>
          <span>{course.category}</span>
          <span>{">"}  </span>
          <span className="text-gray-900">{course.title}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] max-w-2xl leading-tight">
            {course.title}
          </h1>
          <Button
            className="bg-[#5b51e8] text-white font-bold px-10 h-14 rounded-xl shadow-lg shadow-blue-500/20 flex items-center gap-3"
          >
            Enroll
            <MoveRight />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="relative overflow-hidden rounded-4xl shadow-sm border border-gray-100 bg-white">
              <Image
                src={course.image}
                className="w-full aspect-video object-cover"
                alt="Course Preview"
              />
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Duration", val: course.duration, icon: "schedule" },
                { label: "Rating", val: course.rating, icon: "star" },
                { label: "Level", val: course.level, icon: "bar_chart" },
                { label: "Language", val: course.language, icon: "language" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center space-y-3">
                  <span className="material-symbols-outlined text-[#5b51e8] text-2xl">{stat.icon}</span>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter mb-1">{stat.label}</span>
                    <span className="text-xs font-bold text-gray-900">{stat.val}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Course Overview</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
                Master the art of building scalable, enterprise-grade design systems. This course takes you beyond standard components into the world of design tokens, systematic spacing, and accessibility-first architecture. Learn how to bridge the gap between creative vision and technical execution.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {[
                  "Architect complex design systems from scratch",
                  "Implement accessibility standards (WCAG 2.1)",
                  "Master documentation for developer handoff",
                  "Advanced Figma prototyping techniques"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <CircleCheck></CircleCheck>
                    <span className="text-xs font-bold text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Card */}
            <div className="bg-[#f0f3ff] p-10 rounded-4xl border border-blue-50 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
              <div className="relative">
                <Image
                  src={course.instructorImage}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-sm"
                  alt="Instructor"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#5b51e8] text-white p-1 rounded-full border-2 border-white">
                  <span className="material-symbols-outlined text-[10px] fill-current">stars</span>
                </div>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <Chip size="sm" className="bg-[#5b51e8] text-white font-bold mb-3 rounded-md">Lead Instructor</Chip>
                  <h3 className="text-xl font-bold text-gray-900">{course.instructor}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xl font-medium">
                  {course.instructorBio}
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Curriculum */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl shadow-blue-900/5 space-y-8">
              <div className="flex justify-between items-center pb-6 border-b border-gray-50">
                <h3 className="text-sm font-bold text-gray-900">Course Curriculum</h3>
                <span className="text-[10px] font-bold text-gray-400">24 Lessons</span>
              </div>

              <div className="space-y-8">
                {course.curriculum.map((mod, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center gap-3 text-[#5b51e8]">
                      <span className="material-symbols-outlined text-base">folder</span>
                      <span className="text-[11px] font-bold uppercase tracking-wide">{mod.module}</span>
                    </div>
                    <div className="space-y-2">
                      {mod.lessons.map((lesson, j) => (
                        <div
                          key={j}
                          className={`flex justify-between items-center p-4 rounded-xl transition-all cursor-pointer ${lesson.active
                            ? "bg-[#5b51e8] text-white shadow-lg shadow-blue-500/20"
                            : "bg-[#f8faff] text-gray-500 hover:bg-[#f0f4ff]"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-base">
                              {lesson.active ? "play_circle" : "lock"}
                            </span>
                            <span className="text-[11px] font-bold">{lesson.title}</span>
                          </div>
                          <span className="text-[10px] font-bold opacity-60">{lesson.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 space-y-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                  <span className="material-symbols-outlined text-base text-[#5b51e8]">assignment</span>
                  12 hands-on projects
                </div>
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                  <span className="material-symbols-outlined text-base text-[#5b51e8]">workspace_premium</span>
                  Verifiable certificate
                </div>
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                  <span className="material-symbols-outlined text-base text-[#5b51e8]">all_inclusive</span>
                  Lifetime access
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
