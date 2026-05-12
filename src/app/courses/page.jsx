"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { RadioGroup, Radio } from "@heroui/radio";

const allCourses = [
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
];

const categories = ["Development", "Design", "Marketing", "Data Science"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategories]);

  const handleCategoryChange = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container-custom py-16">
        <header className="mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Explore Courses</h1>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
            <Input
              isClearable
              placeholder="Search for courses..."
              size="lg"
              variant="bordered"
              value={search}
              onValueChange={setSearch}
              className="grow"
              classNames={{ inputWrapper: "rounded-full px-6" }}
            />
            <Button className="bg-blue-600 text-white rounded-full px-10 h-12 font-bold">
              Search
            </Button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-10 shrink-0">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Categories</h3>
              <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                  <Checkbox
                    key={cat}
                    isSelected={selectedCategories.includes(cat)}
                    onValueChange={() => handleCategoryChange(cat)}
                    classNames={{ label: "text-sm font-semibold text-gray-700" }}
                  >
                    {cat}
                  </Checkbox>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Level</h3>
              <RadioGroup defaultValue="all">
                <Radio value="all" classNames={{ label: "text-sm font-semibold text-gray-700" }}>All Levels</Radio>
                <Radio value="beginner" classNames={{ label: "text-sm font-semibold text-gray-700" }}>Beginner</Radio>
                <Radio value="intermediate" classNames={{ label: "text-sm font-semibold text-gray-700" }}>Intermediate</Radio>
                <Radio value="advanced" classNames={{ label: "text-sm font-semibold text-gray-700" }}>Advanced</Radio>
              </RadioGroup>
            </div>
          </aside>

          {/* Grid */}
          <div className="grow">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredCourses.map((course, i) => (
                  <CourseCard key={i} course={course} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center text-gray-400 font-medium">
                No courses found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
