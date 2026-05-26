"use client";

import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

function StudyForgeLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-11 shrink-0">
        <div className="absolute left-[8px] top-[3px] h-[18px] w-[28px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-700 shadow-[0_10px_25px_rgba(59,130,246,0.35)]" />
        <div className="absolute left-[4px] top-[13px] h-[18px] w-[28px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_10px_25px_rgba(34,211,238,0.25)]" />
        <div className="absolute left-[10px] top-[23px] h-[18px] w-[28px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-violet-400 via-violet-500 to-indigo-700 shadow-[0_12px_28px_rgba(168,85,247,0.32)]" />
      </div>

      <span className="text-[2rem] font-black tracking-[-0.05em] text-white">
        StudyForge
      </span>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030816] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_13%_16%,rgba(29,78,216,0.24),transparent_32%),radial-gradient(circle_at_88%_10%,rgba(124,58,237,0.26),transparent_36%),radial-gradient(circle_at_50%_82%,rgba(6,182,212,0.12),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:74px_74px] opacity-[0.06]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.9),rgba(2,6,23,0.58),rgba(124,58,237,0.12))]" />
      </div>

      <section className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] items-center gap-12 px-6 py-8 lg:grid-cols-[1fr_0.9fr] lg:px-14 xl:px-16">
        <div className="hidden lg:block">
          <StudyForgeLogo />

          <div className="mt-16 max-w-[640px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-200 shadow-[0_12px_30px_rgba(8,145,178,0.15)]">
              <Sparkles className="h-4 w-4" />
              Free private beta for students
            </div>

            <h1 className="mt-10 text-[5.1rem] font-black leading-[0.98] tracking-[-0.07em] text-white">
              Start studying
              <br />
              with your own{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                AI
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                system.
              </span>
            </h1>

            <p className="mt-8 max-w-[520px] text-[1.1rem] leading-9 text-slate-300">
              Create your StudyForge account, upload your course files, and turn
              your notes into practice, mock exams, and simple explanations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.045] px-5 py-4 text-sm text-slate-200 shadow-[0_16px_60px_rgba(15,23,42,0.3)]">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                No payment required
              </div>

              <div className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.045] px-5 py-4 text-sm text-slate-200 shadow-[0_16px_60px_rgba(15,23,42,0.3)]">
                <Sparkles className="h-5 w-5 text-violet-300" />
                Built for students
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[590px]">
          <div className="mb-8 lg:hidden">
            <StudyForgeLogo />
          </div>

          <div className="rounded-[2.3rem] border border-violet-300/18 bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(30,64,175,0.32)] backdrop-blur-2xl">
            <div className="rounded-[1.9rem] border border-white/10 bg-[#071224]/96 p-6 sm:p-8">
              <div className="grid grid-cols-2 rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-1.5">
                <Link
                  href="/login"
                  className="rounded-[1rem] py-4 text-center text-base font-medium text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  Log In
                </Link>

                <button className="rounded-[1rem] bg-gradient-to-r from-blue-500 to-violet-600 py-4 text-base font-black text-white shadow-[0_16px_40px_rgba(59,130,246,0.25)]">
                  Create Account
                </button>
              </div>

              <div className="mt-10">
                <h2 className="text-[2.15rem] font-black tracking-[-0.03em] text-white">
                  Create your account
                </h2>
                <p className="mt-3 text-lg leading-8 text-slate-400">
                  Start organizing your materials and generating study tools.
                </p>
              </div>

              <form className="mt-9 space-y-6">
                <div>
                  <label className="mb-3 block text-base font-bold text-white">
                    Full name
                  </label>
                  <div className="flex h-16 items-center gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 transition focus-within:border-blue-400/60">
                    <User className="h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Alex Johnson"
                      className="h-full w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-base font-bold text-white">
                    Email
                  </label>
                  <div className="flex h-16 items-center gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 transition focus-within:border-blue-400/60">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="you@university.edu"
                      className="h-full w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-base font-bold text-white">
                    Password
                  </label>
                  <div className="flex h-16 items-center gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 transition focus-within:border-blue-400/60">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="h-full w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                    />
                    <Eye className="h-5 w-5 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-base font-bold text-white">
                    Confirm password
                  </label>
                  <div className="flex h-16 items-center gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 transition focus-within:border-blue-400/60">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="h-full w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="group flex h-16 w-full items-center justify-center gap-4 rounded-[1.2rem] bg-gradient-to-r from-blue-500 to-violet-600 text-[1.2rem] font-black text-white shadow-[0_24px_70px_rgba(59,130,246,0.28)] transition hover:scale-[1.01]"
                >
                  Create Account
                  <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" />
                </button>
              </form>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-lg text-slate-400">or</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <button className="flex h-16 w-full items-center justify-center gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] text-lg font-medium text-white transition hover:bg-white/[0.05]">
                <span className="text-[1.6rem] font-black text-[#4285F4]">G</span>
                Continue with Google
              </button>

              <div className="mt-8 text-center text-base text-slate-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-black text-violet-300 transition hover:text-violet-200"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}