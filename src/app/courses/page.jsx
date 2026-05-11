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
  { title: "Mastering Advanced React Patterns", category: "Development", instructor: "Sarah Jenkins", rating: "4.9", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800", duration: "24h 30m", level: "Advanced" },
  { title: "UI Design Systems for Professionals", category: "Design", instructor: "Marcus Chen", rating: "4.7", image: "https://i.ibb.co/S4HCkpz6/e9c5c464fb23185a935c00692525ae2c.jpg", duration: "18h 15m", level: "Intermediate" },
  { title: "Growth Hacking: Data-Driven Strategies", category: "Marketing", instructor: "Elena Rodriguez", rating: "4.8", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", duration: "12h 45m", level: "Beginner" },
  { title: "Python for Data Science Mastery", category: "Data Science", instructor: "Dr. James Wilson", rating: "4.9", image: "https://i.ibb.co/69PzqkN/b30c7570fc7a66015c22ce42d353c19f.jpghttps://i.ibb.co/B20FsTRq/c3bd186f7f552779cc9807de367c5245.jpghttps://i.ibb.co/S4HCkpz6/e9c5c464fb23185a935c00692525ae2c.jpghttps://i.ibb.co/r2b1nGng/e16678e62c0cc7e3422051faf512cee6.jpg", duration: "40h", level: "Intermediate" },
  { title: "Full-Stack Web Development 2024", category: "Development", instructor: "Alex Rivera", rating: "5.0", image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800", duration: "60h", level: "Advanced" },
  { title: "Modern Mobile App Design", category: "Design", instructor: "Sofia Patel", rating: "4.8", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800", duration: "30h", level: "Intermediate" },
  { title: "Social Media Marketing Blueprint", category: "Marketing", instructor: "David Kim", rating: "4.6", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800", duration: "15h", level: "Beginner" },
  { title: "Machine Learning with R", category: "Data Science", instructor: "Dr. Emily Watson", rating: "4.7", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800", duration: "45h", level: "Advanced" },
  { title: "Next.js 15 Deep Dive", category: "Development", instructor: "Michael Wu", rating: "4.9", image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800", duration: "25h", level: "Intermediate" },
  { title: "Google Ads Certification Prep", category: "Marketing", instructor: "David Kim", rating: "4.7", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800", duration: "10h", level: "Intermediate" }
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
