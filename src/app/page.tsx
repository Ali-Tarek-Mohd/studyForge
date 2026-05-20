"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  CloudUpload,
  FileText,
  FolderOpen,
  Heart,
  Home,
  LineChart,
  Menu,
  PenLine,
  PlayCircle,
  Search,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

const navItems = ["Features", "How It Works", "Private Beta", "About"];

const dashboardNav = [
  { label: "Overview", icon: Home },
  { label: "My Materials", icon: FolderOpen },
  { label: "Exam Builder", icon: ClipboardList },
  { label: "Practice", icon: PenLine },
  { label: "Mock Exams", icon: Trophy },
  { label: "Planner", icon: CalendarDays },
  { label: "AI Tutor", icon: Bot },
  { label: "Analytics", icon: BarChart3 },
];

const featureCards = [
  {
    title: "Course-based Materials",
    text: "Upload notes, PDFs, slides, and organize everything by course in one place.",
    icon: FolderOpen,
    iconTint: "text-blue-200",
    glow: "from-blue-500/35 via-blue-500/15 to-transparent",
    tile: "from-blue-500/30 to-blue-500/10",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.22)]",
  },
  {
    title: "Exam Builder",
    text: "Generate quizzes and custom question sets from your materials instantly.",
    icon: ClipboardList,
    iconTint: "text-violet-200",
    glow: "from-violet-500/35 via-violet-500/15 to-transparent",
    tile: "from-violet-500/30 to-violet-500/10",
    shadow: "shadow-[0_0_30px_rgba(139,92,246,0.22)]",
  },
  {
    title: "Practice Mode",
    text: "Practice by topic, difficulty, or chapter with instant feedback.",
    icon: Target,
    iconTint: "text-cyan-200",
    glow: "from-cyan-500/35 via-cyan-500/15 to-transparent",
    tile: "from-cyan-500/30 to-cyan-500/10",
    shadow: "shadow-[0_0_30px_rgba(34,211,238,0.22)]",
  },
  {
    title: "Mock Exams",
    text: "Take full-length mock exams under real conditions and track your performance.",
    icon: Trophy,
    iconTint: "text-purple-200",
    glow: "from-purple-500/35 via-purple-500/15 to-transparent",
    tile: "from-purple-500/30 to-purple-500/10",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.22)]",
  },
  {
    title: "Planner",
    text: "Build a personalized study plan, set goals, and stay consistent.",
    icon: CalendarDays,
    iconTint: "text-teal-200",
    glow: "from-teal-500/35 via-teal-500/15 to-transparent",
    tile: "from-teal-500/30 to-teal-500/10",
    shadow: "shadow-[0_0_30px_rgba(20,184,166,0.22)]",
  },
  {
    title: "AI Tutor",
    text: "Get step-by-step explanations, clarify doubts, and learn smarter with AI.",
    icon: Bot,
    iconTint: "text-indigo-200",
    glow: "from-indigo-500/35 via-indigo-500/15 to-transparent",
    tile: "from-indigo-500/30 to-indigo-500/10",
    shadow: "shadow-[0_0_30px_rgba(99,102,241,0.22)]",
  },
];

const statCards = [
  {
    value: "12",
    label: "Materials",
    icon: FolderOpen,
    iconColor: "text-purple-300",
  },
  {
    value: "48",
    label: "Quizzes",
    icon: ClipboardList,
    iconColor: "text-violet-300",
  },
  {
    value: "6",
    label: "Mock Exams",
    icon: Trophy,
    iconColor: "text-cyan-300",
  },
  {
    value: "85%",
    label: "Avg. Score",
    icon: Target,
    iconColor: "text-teal-300",
  },
];

const upcomingItems = [
  {
    title: "Physics Mock Exam",
    date: "Tomorrow, 10:00 AM",
    icon: CalendarDays,
    iconBox:
      "bg-violet-500/20 text-violet-200 shadow-lg shadow-violet-500/20",
  },
  {
    title: "Chemistry Quiz",
    date: "May 24, 2:00 PM",
    icon: ClipboardList,
    iconBox:
      "bg-fuchsia-500/18 text-fuchsia-200 shadow-lg shadow-fuchsia-500/20",
  },
  {
    title: "Math Practice",
    date: "May 25, 6:00 PM",
    icon: PenLine,
    iconBox: "bg-blue-500/18 text-blue-200 shadow-lg shadow-blue-500/20",
  },
];

const howItWorksSteps = [
  {
    number: "1",
    title: "Upload Your Materials",
    text: "Upload notes, PDFs, or slides from any of your courses.",
    icon: CloudUpload,
    ring: "border-blue-400/35",
    orb: "from-blue-500/35 via-cyan-400/18 to-transparent",
    glow: "shadow-[0_0_55px_rgba(59,130,246,0.35)]",
    iconColor: "text-cyan-300",
    connector: "from-blue-500/10 via-cyan-300/90 to-cyan-300/70",
    dot: "bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,1)]",
    badge: "from-blue-500 to-violet-600",
  },
  {
    number: "2",
    title: "Generate Study Tools",
    text: "Get quizzes, summaries, mock exams, and plans in seconds.",
    icon: Sparkles,
    ring: "border-violet-400/35",
    orb: "from-violet-500/35 via-fuchsia-400/18 to-transparent",
    glow: "shadow-[0_0_55px_rgba(139,92,246,0.35)]",
    iconColor: "text-violet-300",
    connector: "from-violet-500/10 via-cyan-300/90 to-cyan-300/70",
    dot: "bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,1)]",
    badge: "from-blue-500 to-violet-600",
  },
  {
    number: "3",
    title: "Improve with Practice",
    text: "Practice, review mistakes, and keep improving every day.",
    icon: LineChart,
    ring: "border-teal-400/35",
    orb: "from-teal-500/35 via-cyan-400/18 to-transparent",
    glow: "shadow-[0_0_55px_rgba(20,184,166,0.35)]",
    iconColor: "text-teal-300",
    connector: "from-cyan-400/10 via-teal-300/90 to-teal-300/70",
    dot: "bg-teal-300 shadow-[0_0_16px_rgba(94,234,212,1)]",
    badge: "from-cyan-500 to-teal-500",
  },
];

function StudyForgeLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 shrink-0">
        <div className="absolute left-[7px] top-[3px] h-[18px] w-[28px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-blue-300 to-blue-700 shadow-lg shadow-blue-500/30" />
        <div className="absolute left-[3px] top-[13px] h-[18px] w-[28px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20" />
        <div className="absolute left-[9px] top-[23px] h-[18px] w-[28px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-violet-500 to-indigo-700 shadow-lg shadow-violet-500/30" />
      </div>

      <span className="text-[1.65rem] font-black tracking-[-0.04em] text-white sm:text-[1.75rem]">
        StudyForge
      </span>
    </div>
  );
}

function MiniStudyForgeLogo() {
  return (
    <div className="relative h-7 w-7 shrink-0">
      <div className="absolute left-[5px] top-[2px] h-[12px] w-[20px] -skew-y-[22deg] rounded bg-gradient-to-br from-blue-300 to-blue-700" />
      <div className="absolute left-[2px] top-[9px] h-[12px] w-[20px] -skew-y-[22deg] rounded bg-gradient-to-br from-cyan-400 to-blue-500" />
      <div className="absolute left-[6px] top-[16px] h-[12px] w-[20px] -skew-y-[22deg] rounded bg-gradient-to-br from-violet-500 to-indigo-700" />
    </div>
  );
}

function DesktopDashboardPreview() {
  return (
    <div className="relative w-full max-w-[1070px]">
      <div className="rounded-[1.9rem] border border-blue-300/20 bg-white/[0.065] p-3 shadow-[0_30px_120px_rgba(37,99,235,0.28)] backdrop-blur-2xl">
        <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#081326]/95">
          <div className="flex h-[58px] items-center gap-4 border-b border-white/10 px-5">
            <div className="flex items-center gap-3">
              <MiniStudyForgeLogo />
              <p className="text-sm font-black">StudyForge</p>
            </div>

            <div className="ml-auto flex h-9 w-[450px] items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-xs text-slate-500">
              <Search className="h-4 w-4" />
              Search anything...
            </div>

            <Bell className="h-4 w-4 text-slate-300" />

            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-200 via-pink-300 to-blue-600 ring-2 ring-white/20" />
          </div>

          <div className="grid h-[465px] grid-cols-[185px_1fr]">
            <aside className="border-r border-white/10 bg-[#061023] p-4">
              {dashboardNav.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`mb-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold ${
                      index === 0
                        ? "bg-blue-500/30 text-blue-100"
                        : "text-slate-400"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </div>
                );
              })}
            </aside>

            <div className="grid grid-cols-[1fr_250px] gap-4 p-4">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-sm font-extrabold text-slate-200">
                    Welcome back, Alex! 👋
                  </p>

                  <h3 className="mt-1 text-[1.28rem] font-medium leading-tight text-slate-300">
                    Ready to continue your learning journey?
                  </h3>

                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {statCards.map((card) => {
                      const Icon = card.icon;

                      return (
                        <div
                          key={card.label}
                          className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-3 py-3"
                        >
                          <div className="text-left">
                            <p className="text-2xl font-black leading-none text-white">
                              {card.value}
                            </p>
                            <p className="mt-1 text-[0.62rem] font-medium leading-tight text-slate-400">
                              {card.label}
                            </p>
                          </div>

                          <Icon className={`h-4 w-4 ${card.iconColor}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_0.95fr] gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm font-black">Recent Materials</p>
                      <span className="text-xs text-blue-300">View all</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        [
                          "Thermodynamics Notes.pdf",
                          "PDF • 2.4 MB • Uploaded 2h ago",
                        ],
                        [
                          "Calculus Formulas.pdf",
                          "PDF • 2.1 MB • Uploaded 1d ago",
                        ],
                        [
                          "Organic Chemistry Notes.pdf",
                          "PDF • 5.3 MB • Uploaded 2d ago",
                        ],
                      ].map(([name, info], index) => (
                        <div
                          key={name}
                          className="flex items-center gap-3 rounded-xl bg-white/[0.035] p-3"
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/10 ${
                              index === 0
                                ? "bg-red-500/20 text-red-200 shadow-lg shadow-red-500/20"
                                : index === 1
                                ? "bg-blue-500/20 text-blue-200 shadow-lg shadow-blue-500/20"
                                : "bg-violet-500/20 text-violet-200 shadow-lg shadow-violet-500/20"
                            }`}
                          >
                            <FileText className="h-4 w-4" />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-xs font-black">{name}</p>
                            <p className="truncate text-[0.62rem] text-slate-400">
                              {info}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <p className="text-sm font-black">Study Progress</p>

                    <div className="mt-4 flex items-center gap-4">
                      <div className="h-[105px] w-[105px] shrink-0 rounded-full bg-[conic-gradient(#22d3ee_0_56%,#8b5cf6_56%_78%,rgba(255,255,255,0.08)_78%_100%)] p-3 shadow-[0_0_35px_rgba(34,211,238,0.22)]">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#081326]">
                          <div className="text-center">
                            <p className="text-2xl font-black">78%</p>
                            <p className="text-[0.56rem] text-slate-400">
                              Overall
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        <p>
                          <span className="text-cyan-300">●</span> Completed 78%
                        </p>
                        <p>
                          <span className="text-blue-400">●</span> In Progress 16%
                        </p>
                        <p>
                          <span className="text-violet-400">●</span> Not Started 6%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-sm font-black">Study Streak</p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <p className="text-xl font-black">12 days</p>
                      <p className="text-xs text-slate-400">Keep it up!</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.62rem] font-bold text-slate-400">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                      <span key={`${day}-${index}`}>{day}</span>
                    ))}

                    {["✓", "✓", "✓", "✓", "✓", "✓", "5"].map(
                      (mark, index) => (
                        <span
                          key={`${mark}-${index}`}
                          className={`mx-auto flex h-5 w-5 items-center justify-center rounded-full text-[0.62rem] font-black ${
                            index === 6
                              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                              : "bg-cyan-400/20 text-cyan-300"
                          }`}
                        >
                          {mark}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="mb-3 text-sm font-black">Upcoming</p>

                  <div className="space-y-3">
                    {upcomingItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.title} className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-white/10 ${item.iconBox}`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-black">{item.title}</p>
                            <p className="text-[0.62rem] text-cyan-300">
                              {item.date}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button className="mt-4 w-full rounded-xl bg-blue-500 px-4 py-2.5 text-xs font-black shadow-lg shadow-blue-500/20">
                    View Planner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDashboardPreview() {
  return (
    <div className="mx-auto w-full max-w-[360px] rounded-[1.8rem] border border-blue-300/20 bg-white/[0.065] p-3 shadow-[0_24px_90px_rgba(37,99,235,0.24)] backdrop-blur-2xl sm:hidden">
      <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#081326]/95">
        <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
          <div className="flex items-center gap-2">
            <MiniStudyForgeLogo />
            <p className="text-sm font-black">StudyForge</p>
          </div>

          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-200 via-pink-300 to-blue-600 ring-2 ring-white/20" />
        </div>

        <div className="space-y-3 p-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <p className="text-sm font-extrabold text-slate-200">
              Welcome back, Alex! 👋
            </p>
            <p className="mt-1 text-sm font-medium leading-6 text-slate-300">
              Ready to continue your learning journey?
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {statCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-3 py-3"
                  >
                    <div>
                      <p className="text-xl font-black">{card.value}</p>
                      <p className="text-[0.65rem] text-slate-400">
                        {card.label}
                      </p>
                    </div>
                    <Icon className={`h-4 w-4 ${card.iconColor}`} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm font-black">Progress</p>
              <div className="mx-auto mt-4 h-[98px] w-[98px] rounded-full bg-[conic-gradient(#22d3ee_0_56%,#8b5cf6_56%_78%,rgba(255,255,255,0.08)_78%_100%)] p-3 shadow-[0_0_35px_rgba(34,211,238,0.22)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#081326]">
                  <div className="text-center">
                    <p className="text-xl font-black">78%</p>
                    <p className="text-[0.55rem] text-slate-400">Overall</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm font-black">Streak</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-xl font-black">12</p>
                  <p className="text-[0.65rem] text-slate-400">days</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.55rem] font-bold text-slate-400">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <span key={`${day}-${index}`}>{day}</span>
                ))}

                {["✓", "✓", "✓", "✓", "✓", "✓", "5"].map((mark, index) => (
                  <span
                    key={`${mark}-${index}`}
                    className={`mx-auto flex h-4 w-4 items-center justify-center rounded-full text-[0.55rem] font-black ${
                      index === 6
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                        : "bg-cyan-400/20 text-cyan-300"
                    }`}
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-black">Recent Materials</p>
              <span className="text-xs text-blue-300">View all</span>
            </div>

            <div className="space-y-2">
              {[
                ["Thermodynamics Notes.pdf", "PDF • Uploaded 2h ago"],
                ["Calculus Formulas.pdf", "PDF • Uploaded 1d ago"],
              ].map(([name, info], index) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.035] p-3"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/10 ${
                      index === 0
                        ? "bg-red-500/20 text-red-200 shadow-lg shadow-red-500/20"
                        : "bg-blue-500/20 text-blue-200 shadow-lg shadow-blue-500/20"
                    }`}
                  >
                    <FileText className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-black">{name}</p>
                    <p className="truncate text-[0.62rem] text-slate-400">
                      {info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <p className="mb-3 text-sm font-black">Upcoming</p>

            <div className="space-y-3">
              {upcomingItems.slice(0, 2).map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-white/10 ${item.iconBox}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-black">{item.title}</p>
                      <p className="text-[0.62rem] text-cyan-300">
                        {item.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="mt-4 w-full rounded-xl bg-blue-500 px-4 py-2.5 text-xs font-black shadow-lg shadow-blue-500/20">
              View Planner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureIconTile({
  icon: Icon,
  glow,
  tile,
  iconTint,
  shadow,
}: {
  icon: React.ComponentType<{ className?: string }>;
  glow: string;
  tile: string;
  iconTint: string;
  shadow: string;
}) {
  return (
    <div className="relative mb-5 h-14 w-14">
      <div
        className={`absolute inset-[-10px] rounded-[1.4rem] bg-gradient-to-br ${glow} blur-xl`}
      />
      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${tile} ${shadow}`}
      >
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.22),transparent_45%)]" />
        <Icon className={`relative h-7 w-7 ${iconTint}`} />
      </div>
    </div>
  );
}

function HowItWorksStep({
  step,
  showConnector,
}: {
  step: (typeof howItWorksSteps)[number];
  showConnector: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="flex flex-1 items-center">
      <div className="flex items-center gap-5">
        <div className="relative flex h-[92px] w-[92px] shrink-0 items-center justify-center">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.orb} blur-2xl`}
          />

          <div
            className={`absolute inset-0 rounded-full border ${step.ring} bg-white/[0.035] ${step.glow}`}
          />

          <div className="absolute inset-[7px] rounded-full border border-white/10 bg-[#071326]/80" />

          <div className="absolute inset-[13px] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),transparent_45%)]" />

          <Icon
            className={`relative h-10 w-10 ${step.iconColor} drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]`}
            strokeWidth={2.3}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center gap-3">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${step.badge} text-sm font-black shadow-lg shadow-blue-500/25`}
            >
              {step.number}
            </span>

            <h3 className="text-lg font-black tracking-[-0.02em]">
              {step.title}
            </h3>
          </div>

          <p className="max-w-[270px] text-sm leading-6 text-slate-400">
            {step.text}
          </p>
        </div>
      </div>

      {showConnector && (
        <div className="mx-7 hidden flex-1 items-center lg:flex">
          <div className="relative h-[2px] flex-1 overflow-visible">
            <div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.connector} opacity-90`}
            />

            <div className="absolute inset-0 rounded-full bg-cyan-300/20 blur-sm" />

            <div
              className={`absolute right-0 top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full ${step.dot}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_8%,rgba(37,99,235,0.26),transparent_27%),radial-gradient(circle_at_88%_9%,rgba(124,58,237,0.34),transparent_31%),radial-gradient(circle_at_40%_82%,rgba(6,182,212,0.13),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:76px_76px] opacity-[0.08]" />
      </div>

      <header className="relative z-20 border-b border-white/10 bg-[#020817]/80 backdrop-blur-2xl">
        <nav className="flex h-[70px] items-center justify-between px-5 sm:px-8 lg:px-10 2xl:px-20">
          <StudyForgeLogo />

          <div className="hidden items-center gap-16 text-[0.95rem] font-bold text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <button className="rounded-xl border border-white/15 bg-white/[0.02] px-7 py-2.5 text-sm font-black transition hover:border-white/30 hover:bg-white/[0.06]">
              Log In
            </button>
            <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-2.5 text-sm font-black shadow-lg shadow-blue-500/25 transition hover:scale-[1.02]">
              Get Started
            </button>
          </div>

          <button className="rounded-xl border border-white/10 bg-white/5 p-3 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <section className="relative z-10 grid min-h-[750px] grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 lg:px-10 xl:grid-cols-[0.95fr_1.05fr] 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-[900px]"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black text-cyan-200 shadow-lg shadow-cyan-950/30 sm:text-sm">
            <Sparkles className="h-4 w-4" />
            AI-Powered Study Platform for Students
          </div>

          <h1 className="text-[3rem] font-black leading-[1.04] tracking-[-0.055em] sm:text-[3.6rem] xl:text-[4.15rem] 2xl:text-[4.55rem]">
            <span className="block">Turn your course</span>
            <span className="block">materials into a</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent sm:whitespace-nowrap">
              smarter study system.
            </span>
          </h1>

          <p className="mt-6 max-w-[680px] text-base leading-8 text-slate-300 sm:text-[1.08rem]">
            Upload your notes and PDFs. Instantly generate quizzes, mock exams,
            and personalized study plans. Get AI tutoring that explains, guides,
            and helps you master any subject.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="group inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-8 text-base font-black shadow-xl shadow-blue-500/25 transition hover:scale-[1.02]">
              Start Free
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>

            <button className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.035] px-8 text-base font-black transition hover:border-white/30 hover:bg-white/[0.07]">
              See Demo
              <PlayCircle className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
              No credit card required
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
              Free private beta
            </span>
            <span className="inline-flex items-center gap-2">
              <Heart className="h-4 w-4 text-pink-400" />
              Loved by students
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden justify-self-end sm:block"
        >
          <DesktopDashboardPreview />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="sm:hidden"
        >
          <MobileDashboardPreview />
        </motion.div>
      </section>

      <section
        id="features"
        className="relative z-10 px-5 pb-12 sm:px-8 lg:px-10 2xl:px-20"
      >
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
          {featureCards.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[1.55rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
              >
                <FeatureIconTile
                  icon={Icon}
                  glow={feature.glow}
                  tile={feature.tile}
                  iconTint={feature.iconTint}
                  shadow={feature.shadow}
                />

                <h3 className="text-[1.05rem] font-black leading-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative z-10 px-5 py-12 sm:px-8 lg:px-10 2xl:px-20"
      >
        <h2 className="text-center text-3xl font-black tracking-tight sm:text-4xl">
          How It Works
        </h2>

        <div className="mx-auto mt-8 grid max-w-[1380px] gap-5 lg:flex lg:items-center lg:justify-between lg:gap-8">
          {howItWorksSteps.map((step, index) => (
            <HowItWorksStep
              key={step.title}
              step={step}
              showConnector={index < howItWorksSteps.length - 1}
            />
          ))}
        </div>
      </section>
    </main>
  );
}