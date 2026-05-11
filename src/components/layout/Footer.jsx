"use client";

import { Link } from "@heroui/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-6">
          <span className="text-xl font-bold text-gray-900">SkillSphere</span>
          <p className="text-gray-500 text-sm max-w-xs">
            A modern learning platform for the next generation of creative minds and tech leaders.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">Platform</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-500">
            <li><Link href="#" className="hover:text-gray-900 transition-colors">Courses</Link></li>
            <li><Link href="#" className="hover:text-gray-900 transition-colors">Mentors</Link></li>
            <li><Link href="#" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">Company</h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-500">
            <li><Link href="#" className="hover:text-gray-900 transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-gray-900 transition-colors">Terms</Link></li>
            <li><Link href="#" className="hover:text-gray-900 transition-colors">Privacy</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container-custom mt-20 pt-8 border-t border-gray-100">
        <p className="text-gray-400 text-[10px] font-medium tracking-wide">© 2024 SKILLSPHERE ACADEMY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
