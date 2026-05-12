"use client";
import { PiCertificateFill, PiInfinityBold } from "react-icons/pi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { ChartNoAxesColumn, CircleCheck, ClipboardList, Clock, Globe, LockKeyhole, LockKeyholeIcon, MoveRight, Sparkles, Star } from "lucide-react";
import { useParams } from "next/navigation";
export default function CourseDetailPage() {
  const courseData = [
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
  const { id } = useParams();
  const course = courseData.find((c) => c.id === id);
  return (
    <div className="min-h-screen bg-[#f8faff]">
      <Navbar />
      <main className="container-custom py-12">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-10">
          <span>Courses</span>
          <span>{">"}  </span>
          <span>{course.category}</span>
          <span>{">"}  </span>
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
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-blue-100 rounded-2xl text-center flex justify-center items-center flex-col gap-1 p-4 backdrop-blur-md">
                <Clock className="text-indigo-600" />
                <h1 className="text-gray-500! text-md font-semibold">DURATION</h1>
                <p className="text-sm font-bold text-gray-800!">{course.duration}</p>
              </div>
              <div className="bg-blue-100 rounded-2xl text-center flex justify-center items-center flex-col gap-1 p-4 backdrop-blur-md">
                <Star className="text-yellow-600" />
                <h1 className="text-gray-500! text-md font-semibold">RATING</h1>
                <p className="text-sm font-bold text-gray-800!">{course.rating}</p>
              </div>
              <div className="bg-blue-100 rounded-2xl text-center flex justify-center items-center flex-col gap-1 p-4 backdrop-blur-md">
                <ChartNoAxesColumn className="text-indigo-600" />
                <h1 className="text-gray-500! text-md font-semibold">LEVEL</h1>
                <p className="text-sm font-bold text-gray-800!">{course.level}</p>
              </div>
              <div className="bg-blue-100 rounded-2xl text-center flex justify-center items-center flex-col gap-1 p-4 backdrop-blur-md">
                <Globe className="text-indigo-600" />
                <h1 className="text-gray-500! text-md font-semibold">LANGUAGE</h1>
                <p className="text-sm font-bold text-gray-800!">English</p>
              </div>
            </div>
            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Course Overview</h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">
                Master the art of building scalable, enterprise-grade design systems. This course takes you beyond standard components into the world of design tokens, systematic spacing, and accessibility-first architecture. Learn how to bridge the gap between creative vision and technical execution.
              </p>
              {/* <div className="grid md:grid-cols-2 gap-4 pt-4">
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
              </div> */}
            </div>
            {/* Instructor Card */}
            <div className="bg-[#f0f3ff] p-10 rounded-4xl border border-blue-50 flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
              <div className="relative">
                <Image
                  src={course.instructorImgUrl}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-sm"
                  alt="Instructor"
                />
                <div className="absolute -bottom-1 z-10 -right-1 bg-[#5b51e8] text-white p-1 rounded-full border-2 border-white">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <Chip size="sm" className="bg-[#5b51e8] text-white font-bold mb-3 rounded-md">Lead Instructor</Chip>
                  <h3 className="text-xl font-bold text-gray-900">{course.instructor}</h3>
                </div>
                <p className="text-gray-500 text-md leading-relaxed max-w-xl font-medium">
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
                {course.courseCurriculum.map((item, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <LockKeyholeIcon className="text-gray-500 text-md" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 space-y-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-[16px] font-bold text-gray-400">
                  <ClipboardList className="text-base text-[#5b51e8]" />
                  12 hands-on projects
                </div>
                <div className="flex items-center gap-3 text-[16px] font-bold text-gray-400">
                  <PiCertificateFill className="text-2xl text-[#5b51e8]" />
                  Verifiable certificate
                </div>
                <div className="flex items-center gap-3 text-[16px] font-bold text-gray-400">
                  <PiInfinityBold className="text-2xl text-[#5b51e8]" />
                  Lifetime access
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main >
      <Footer />
    </div >
  );
}