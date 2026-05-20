"use client";

import {
  ArrowRight,
  BookOpen,
  Bot,
  CalendarDays,
  CheckCircle2,
  FileText,
  Menu,
  PlayCircle,
  Sparkles,
  Target,
  Trophy,
  UploadCloud,
  Wand2,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Course-based Materials",
    description: "Upload notes, PDFs, and slides, then keep everything organized by course.",
    icon: FileText,
  },
  {
    title: "Exam Builder",
    description: "Generate quizzes and mock exams from the exact materials you provide.",
    icon: Wand2,
  },
  {
    title: "Practice Mode",
    description: "Practice by topic, difficulty, or chapter with instant explanations.",
    icon: Target,
  },
  {
    title: "Mock Exams",
    description: "Take realistic exams with timers, selected files, and exam-style flow.",
    icon: Trophy,
  },
  {
    title: "Planner",
    description: "Build simple weekly study plans that keep students focused and calm.",
    icon: CalendarDays,
  },
  {
    title: "AI Tutor",
    description: "Ask questions, simplify topics, and get exam-ready explanations.",
    icon: Bot,
  },
];

const steps = [
  {
    number: "1",
    title: "Upload your materials",
    description: "Add PDFs, notes, slides, or files from any course.",
    icon: UploadCloud,
  },
  {
    number: "2",
    title: "Generate study tools",
    description: "Create quizzes, summaries, practice questions, and mock exams.",
    icon: Sparkles,
  },
  {
    number: "3",
    title: "Improve with practice",
    description: "Practice, review mistakes, and focus on what matters next.",
    icon: Target,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-8%] top-[10%] h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-lg shadow-blue-500/25">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight sm:text-2xl">StudyForge</span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#how-it-works">
              How It Works
            </a>
            <a className="transition hover:text-white" href="#beta">
              Private Beta
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5">
              Log In
            </button>
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:scale-[1.02]">
              Get Started
            </button>
          </div>

          <button className="rounded-xl border border-white/10 p-2.5 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 lg:mx-0">
            <Sparkles className="h-4 w-4" />
            AI-powered study platform for students
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl">
            Turn your course materials into a{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              smarter study system.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
            Upload your notes and PDFs. Generate quizzes, mock exams, practice
            questions, study plans, and AI tutor explanations from your own course
            materials.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/25 transition hover:scale-[1.02]">
              Start Free
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 font-bold text-white transition hover:border-white/30 hover:bg-white/[0.06]">
              See Demo
              <PlayCircle className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-300 lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
              No payment system
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
              Free private beta
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-pink-400" />
              Built for real students
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-blue-950/60 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#061226] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600" />
                  <span className="font-bold">StudyForge</span>
                </div>
                <div className="h-8 w-32 rounded-full bg-white/5" />
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  {["Overview", "Materials", "Exam Builder", "Practice", "AI Tutor"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className={`rounded-xl px-3 py-2 text-sm ${
                          index === 0
                            ? "bg-blue-500/20 text-blue-200"
                            : "text-slate-400"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-sm text-slate-400">Welcome back, Alex 👋</p>
                    <h3 className="mt-1 text-xl font-bold">Ready to study smarter?</h3>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {[
                        ["12", "Files"],
                        ["48", "Quizzes"],
                        ["6", "Mocks"],
                        ["85%", "Score"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center"
                        >
                          <p className="text-lg font-black">{value}</p>
                          <p className="text-xs text-slate-400">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Study Progress</p>
                        <p className="mt-1 text-3xl font-black">78%</p>
                      </div>
                      <div className="h-24 w-24 rounded-full bg-[conic-gradient(#22d3ee_0_55%,#8b5cf6_55%_78%,rgba(255,255,255,0.08)_78%_100%)] p-3">
                        <div className="h-full w-full rounded-full bg-[#061226]" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-4">
                    <p className="text-sm font-semibold text-blue-200">
                      What to study next
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Focus on Graph Algorithms next. Your recent score shows this
                      topic needs attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-400">
            A simple flow designed to help students study without feeling overwhelmed.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 font-black">
                    {step.number}
                  </div>
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="beta" className="relative z-10 mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-500/10 p-8 text-center shadow-2xl shadow-blue-950/40 sm:p-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Sparkles className="h-7 w-7 text-cyan-200" />
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Built as a free private beta first.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
            StudyForge is starting as a free app for selected friends and students to
            test the idea, improve the experience, and prove the product before
            thinking about anything bigger.
          </p>
          <button className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/25 transition hover:scale-[1.02]">
            Join Private Beta
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <footer id="about" className="relative z-10 border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <div className="flex justify-center gap-3 md:justify-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">StudyForge</span>
            </div>
            <p className="mt-3">Smarter study. Better focus. Built for students.</p>
          </div>

          <p>© 2026 StudyForge. Private beta concept.</p>
        </div>
      </footer>
    </main>
  );
}