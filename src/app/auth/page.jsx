"use client";
import AppNavbar from "@/components/layout/Navbar";
import { signIn, signUp } from "../../lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from '@heroui/react';
import toast from "react-hot-toast";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "", image: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (isLogin) {
        await signIn.email({ email: form.email, password: form.password });
        toast.success("Welcome back! 🎉");
        router.push("/");
      } else {
        await signUp.email({
          email: form.email,
          password: form.password,
          name: form.name,
          image: form.image || undefined,
        });
        toast.success("Account created successfully! 🎉");
        router.push("/");
      }
    } catch (err) {
      const message = err?.message || "Something went wrong";

      if (isLogin) {
        if (
          message.toLowerCase().includes("invalid") ||
          message.toLowerCase().includes("not found") ||
          message.toLowerCase().includes("credentials")
        ) {
          toast.error("Account পাওয়া যায়নি! আগে Sign Up করুন।");
        } else {
          toast.error(message);
        }
      } else {
        if (message.toLowerCase().includes("already exists")) {
          toast.error("এই Email দিয়ে আগেই account আছে! Sign In করুন।");
        } else {
          toast.error(message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () =>
    signIn.social({ provider: "google", callbackURL: "/" });

  return (
    <div className="min-h-screen bg-[#f8faff] flex flex-col">
      <AppNavbar />
      <div className="flex flex-1 items-center justify-center py-24 px-4">
        <div className="w-full max-w-md space-y-10">

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {isLogin ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-gray-400 text-sm font-medium">
              {isLogin ? "Sign in to continue your learning journey." : "Join 2 million learners worldwide."}
            </p>
          </div>

          <div className="flex bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${isLogin ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${!isLogin ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}
            >
              Sign Up
            </button>
          </div>

          <div className="bg-white p-10 rounded-4xl shadow-sm border border-gray-100 space-y-6">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="Alex Thompson"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#5b51e8] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Profile Image URL <span className="text-gray-300 normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#5b51e8] transition-all"
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                placeholder="hello@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#5b51e8] transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
              <input
                type="password"
                placeholder="********"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 text-gray-900 text-sm font-medium focus:outline-none focus:border-[#5b51e8] transition-all"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <button className="text-xs font-bold text-[#5b51e8]">Forgot password?</button>
              </div>
            )}

            <Button
              fullWidth
              onClick={handleSubmit}
              isLoading={loading}
              className="bg-gray-900 text-white font-bold h-14 rounded-2xl shadow-sm hover:opacity-90 transition-opacity"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Or continue with</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <div className="flex w-full gap-4">
            <button
              onClick={handleGoogle}
              className="w-full hover:cursor-pointer h-12 rounded-2xl border border-gray-200 bg-white flex items-center justify-center gap-2 text-sm font-bold text-gray-700 hover:border-gray-400 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              Google
            </button>
          </div>

          <p className="text-center text-xs font-medium text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)} className="font-bold text-[#5b51e8]">
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}