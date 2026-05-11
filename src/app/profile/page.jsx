"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { CircleCheck, LayoutPanelLeft, Lightbulb, Sun } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f8faff]">
      <Navbar />
      <main className="container-custom py-16">
        <div className="grid my-20 grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Sidebar - Profile Card */}
          <aside className="lg:col-span-4 space-y-6">
            <Card className="bg-white border-none shadow-sm rounded-3xl p-10 flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full border-4 border-[#3b82f6] p-1">
                  <Image
                    src="https://i.ibb.co/FL6H0BN7/pfp.jpg"
                    alt="Sayed Hasan Dipto"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 z-10 right-1 bg-[#51e877] text-white p-1 rounded-full border-2 border-white">
                  <CircleCheck></CircleCheck>
                </div>
              </div>

              <div className="text-center space-y-1 mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Sayed Hasan Dipto</h1>
                <p className="text-sm text-gray-400">dev.sayedhasan@gmail.com</p>
              </div>

              <div className="w-full space-y-3 mb-8">
                <div className="flex justify-between items-center p-4 bg-[#eef4ff] rounded-xl">
                  <span className="text-sm font-medium text-[#4a5568]">Courses Enrolled</span>
                  <span className="font-bold text-[#3b82f6]">12</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#eef4ff] rounded-xl">
                  <span className="text-sm font-medium text-[#4a5568]">Completed</span>
                  <span className="font-bold text-[#3b82f6]">8</span>
                </div>
              </div>

              <button className="w-full bg-[#ff9500] text-white font-bold py-4 rounded-xl shadow-md hover:opacity-90 transition-opacity">
                Update Information
              </button>
            </Card>

            <div className="bg-[#5b51e8] p-8 rounded-2xl text-white shadow-lg flex items-center gap-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <LayoutPanelLeft />
              </div>
              <div>
                <h3 className="font-bold text-lg">SkillSphere Pro</h3>
                <p className="text-xs text-white! opacity-70">Valid until December 2026</p>
              </div>
            </div>
          </aside>

          {/* Right Content - Edit Profile */}
          <section className="lg:col-span-8">
            <Card className="bg-white border-none shadow-sm rounded-3xl p-12 h-full">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Edit Your Profile</h2>
                <p className="text-sm text-gray-500">Update your public identity and account settings to keep your profile fresh.</p>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-600 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Sayed Hasan Dipto"
                    className="w-full h-14 px-6 rounded-xl border border-gray-200 focus:border-[#5b51e8] outline-none text-gray-700 font-medium"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-600 block">Profile Image URL</label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="https://i.ibb.co/FL6H0BN7/pfp.jpg"
                      className="grow h-14 px-6 rounded-xl border border-gray-200 focus:border-[#5b51e8] outline-none text-gray-700 font-medium"
                    />
                    <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
                      <Image src="https://i.ibb.co/FL6H0BN7/pfp.jpg" alt="P" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-center pt-4">
                  <button className="bg-[#5b51e8] text-white font-bold h-14 px-10 rounded-xl shadow-md hover:opacity-90 transition-opacity">
                    Update Information
                  </button>
                  <button className="text-[#5b51e8] font-bold h-14 px-8 rounded-xl hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                </div>

                <div className="mt-12 p-8 bg-[#f5f8ff] rounded-3xl  justify-center items-center flex gap-6 border-l-4 border-[#5b51e8]">
                  <div className="p-3 text-[#5b51e8]">
                    <Lightbulb className="w-10 h-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-800">Did you know?</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Profiles with a professional photo and real name receive 40% more collaboration invites in course communities.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
