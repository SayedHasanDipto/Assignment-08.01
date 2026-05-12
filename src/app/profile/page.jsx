"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Image } from "@heroui/image";
import { Card } from "@heroui/card";
import { BadgeCheck, LayoutPanelLeft, Lightbulb } from "lucide-react";
import { useSession, updateUser } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const userName = user?.name ?? "";
  const userImage = user?.image ?? "";

  React.useEffect(() => {
    setName(userName);
    setImage(userImage);
  }, [userName, userImage]);

  const handleUpdate = async () => {
    setSaving(true);
    setSuccess(false);
    try {
      await updateUser({ name, image });
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#f8faff] flex items-center justify-center">
        <p className="text-gray-400 font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8faff]">
      <Navbar />

      <main className="container-custom px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid my-8 sm:my-12 lg:my-20 grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-4 space-y-4 sm:space-y-6">

            {/* Profile card */}
            <Card className="bg-white border-none shadow-sm rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center">

              {/* Avatar */}
              <div className="relative mb-6 sm:mb-8">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-[#3b82f6] p-1">
                  <Image
                    src={image || user?.image || "https://i.ibb.co/FL6H0BN7/pfp.jpg"}
                    alt={name || user?.name || "Profile"}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 z-10 right-1 bg-[#51e877] text-white p-1 rounded-full border-2 border-white">
                  <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Name / email */}
              <div className="text-center space-y-1 mb-6 sm:mb-8 w-full px-2">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 truncate">
                  {name || user?.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 truncate">{user?.email}</p>
              </div>

              {/* Stats */}
              <div className="w-full space-y-3 mb-6 sm:mb-8">
                <div className="flex justify-between items-center p-3 sm:p-4 bg-[#eef4ff] rounded-xl">
                  <span className="text-xs sm:text-sm font-medium text-[#4a5568]">Courses Enrolled</span>
                  <span className="font-bold text-[#3b82f6]">12</span>
                </div>
                <div className="flex justify-between items-center p-3 sm:p-4 bg-[#eef4ff] rounded-xl">
                  <span className="text-xs sm:text-sm font-medium text-[#4a5568]">Completed</span>
                  <span className="font-bold text-[#3b82f6]">8</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={handleUpdate}
                disabled={saving}
                className="w-full bg-[#ff9500] text-white font-bold py-3 sm:py-4 rounded-xl shadow-md hover:opacity-90 transition-opacity disabled:opacity-60 text-sm sm:text-base"
              >
                {saving ? "Saving..." : "Update Information"}
              </button>
            </Card>

            {/* Pro badge */}
            <div className="bg-[#5b51e8] p-5 sm:p-6 lg:p-8 rounded-2xl text-white shadow-lg flex items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-white/20 rounded-xl flex items-center justify-center">
                <LayoutPanelLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg">SkillSphere Pro</h3>
                <p className="text-xs opacity-70">Valid until December 2026</p>
              </div>
            </div>
          </aside>

          {/* ── Main edit section ── */}
          <section className="lg:col-span-8">
            <Card className="bg-white border-none shadow-sm rounded-3xl p-6 sm:p-8 lg:p-12 h-full">

              {/* Header */}
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
                  Edit Your Profile
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Update your public identity and account settings.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">

                {/* Full name */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-xs sm:text-sm font-bold text-gray-600 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl border border-gray-200 focus:border-[#5b51e8] outline-none text-gray-700 font-medium text-sm sm:text-base"
                  />
                </div>

                {/* Profile image URL */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-xs sm:text-sm font-bold text-gray-600 block">
                    Profile Image URL
                  </label>
                  <div className="flex gap-3 sm:gap-4">
                    <input
                      type="text"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://example.com/photo.jpg"
                      className="grow h-12 sm:h-14 px-4 sm:px-6 rounded-xl border border-gray-200 focus:border-[#5b51e8] outline-none text-gray-700 font-medium text-sm sm:text-base min-w-0"
                    />
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
                      <Image
                        src={image || user?.image || "https://i.ibb.co/FL6H0BN7/pfp.jpg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Success message */}
                {success && (
                  <p className="text-green-500 text-xs sm:text-sm font-semibold">
                    Profile updated successfully!
                  </p>
                )}

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-2 sm:pt-4">
                  <button
                    onClick={handleUpdate}
                    disabled={saving}
                    className="bg-[#5b51e8] text-white font-bold h-12 sm:h-14 px-6 sm:px-10 rounded-xl shadow-md hover:opacity-90 transition-opacity disabled:opacity-60 text-sm sm:text-base whitespace-nowrap"
                  >
                    {saving ? "Saving..." : "Update Information"}
                  </button>
                  <button
                    onClick={() => {
                      setName(user?.name || "");
                      setImage(user?.image || "");
                    }}
                    className="text-[#5b51e8] font-bold h-12 sm:h-14 px-6 sm:px-8 rounded-xl hover:bg-gray-50 transition-colors text-sm sm:text-base whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>

                {/* Tip box */}
                <div className="mt-6 sm:mt-8 lg:mt-12 p-5 sm:p-6 lg:p-8 bg-[#f5f8ff] rounded-3xl flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 sm:gap-6 border-l-4 border-[#5b51e8]">
                  <div className="p-2 sm:p-3 text-[#5b51e8] shrink-0">
                    <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-800 text-sm sm:text-base">Did you know?</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      Profiles with a professional photo and real name receive 40% more collaboration
                      invites in course communities.
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