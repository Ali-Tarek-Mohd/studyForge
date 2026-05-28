"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CloudUpload,
  FileText,
  Home,
  Menu,
  PenLine,
  Plus,
  Search,
  Settings,
  Sparkles,
  Target,
  Trophy,
  UploadCloud,
  X,
} from "lucide-react";

const planItems = [
  {
    time: "09:00 - 10:30",
    title: "Lecture Review – Data Structures",
    subtitle: "Arrays & Linked Lists",
    tag: "In 30 min",
    icon: FileText,
    color: "blue",
  },
  {
    time: "11:00 - 12:30",
    title: "Practice Questions – Algorithms",
    subtitle: "Time Complexity",
    tag: "High Priority",
    icon: PenLine,
    color: "purple",
  },
  {
    time: "15:00 - 16:30",
    title: "Revision – Operating Systems",
    subtitle: "Process Scheduling",
    tag: "Medium",
    icon: BarChart3,
    color: "cyan",
  },
  {
    time: "19:00 - 20:30",
    title: "Weak Topic Focus – DBMS",
    subtitle: "Normalization",
    tag: "High",
    icon: Target,
    color: "orange",
  },
];

const upcomingExams = [
  {
    month: "MAY",
    day: "31",
    title: "Data Structures Mock Test",
    subtitle: "Mock Exam • Full Syllabus",
    due: "3 Days",
  },
  {
    month: "JUN",
    day: "05",
    title: "DBMS Assignment 2",
    subtitle: "Coursework • Submit Online",
    due: "8 Days",
  },
  {
    month: "JUN",
    day: "10",
    title: "Algorithms Quiz",
    subtitle: "Weekly Quiz • 20 Questions",
    due: "13 Days",
  },
  {
    month: "JUN",
    day: "20",
    title: "End-Semester Exam",
    subtitle: "Final Exam • 3 Hours",
    due: "23 Days",
  },
];

const recentMaterials = [
  {
    name: "DSA_Complete_Notes.pdf",
    date: "May 28, 2025",
    size: "2.4 MB",
    type: "pdf",
  },
  {
    name: "Graph_Algorithms_Slides.pptx",
    date: "May 23, 2025",
    size: "3.1 MB",
    type: "ppt",
  },
  {
    name: "Hashing_Notes.docx",
    date: "May 21, 2025",
    size: "1.2 MB",
    type: "doc",
  },
  {
    name: "Practice_Problems.pdf",
    date: "May 20, 2025",
    size: "2.0 MB",
    type: "pdf",
  },
  {
    name: "Trees_Recursion_Guide.pdf",
    date: "May 26, 2025",
    size: "1.8 MB",
    type: "pdf",
  },
];

const readiness = [
  { name: "Data Structures", value: 80, color: "from-cyan-400 to-emerald-400" },
  { name: "Algorithms", value: 65, color: "from-blue-400 to-blue-500" },
  { name: "DBMS", value: 70, color: "from-violet-400 to-purple-500" },
  { name: "Operating Systems", value: 75, color: "from-orange-400 to-orange-500" },
];

function StudyForgeLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={
          compact ? "relative h-9 w-9 shrink-0" : "relative h-11 w-11 shrink-0"
        }
      >
        <div className="absolute left-[8px] top-[2px] h-[18px] w-[29px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-blue-300 via-blue-500 to-indigo-700 shadow-[0_0_24px_rgba(59,130,246,0.58)]" />
        <div className="absolute left-[3px] top-[13px] h-[18px] w-[29px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_24px_rgba(34,211,238,0.48)]" />
        <div className="absolute left-[10px] top-[24px] h-[18px] w-[29px] -skew-y-[22deg] rounded-md bg-gradient-to-br from-violet-400 via-violet-500 to-indigo-700 shadow-[0_0_26px_rgba(168,85,247,0.55)]" />
      </div>

      <span
        className={
          compact
            ? "text-[1.42rem] font-black tracking-[-0.055em] text-white"
            : "text-[1.62rem] font-black tracking-[-0.055em] text-white"
        }
      >
        StudyForge
      </span>
    </div>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  active = false,
  href = "#",
}: {
  icon: any;
  label: string;
  active?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`flex h-10 items-center gap-3 rounded-xl px-4 text-[0.9rem] transition ${
        active
          ? "bg-gradient-to-r from-blue-600 to-blue-500/80 text-white shadow-[0_16px_38px_rgba(37,99,235,0.34)]"
          : "text-slate-400 hover:bg-white/[0.045] hover:text-white"
      }`}
    >
      <Icon className="h-[1.1rem] w-[1.1rem]" />
      <span className="font-medium">{label}</span>
    </Link>
  );
}

function Sidebar({ open, close }: { open: boolean; close: () => void }) {
  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[230px] flex-col border-r border-white/10 bg-[#071628]/95 p-4 shadow-2xl backdrop-blur-2xl transition lg:sticky lg:top-0 lg:z-auto lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-5 flex h-12 items-center justify-between">
          <StudyForgeLogo compact />

          <button
            onClick={close}
            className="rounded-xl border border-white/10 p-2 text-slate-400 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-1.5">
          <SidebarItem icon={Home} label="Dashboard" active href="/dashboard" />
          <SidebarItem icon={BookOpen} label="Courses" href="/courses" />
          <SidebarItem icon={FileText} label="Materials" href="/materials" />
          <SidebarItem icon={PenLine} label="Exam Builder" href="/exam-builder" />
          <SidebarItem icon={CheckCircle2} label="Practice" href="/practice" />
          <SidebarItem icon={Trophy} label="Mock Exams" href="/mock-exams" />
          <SidebarItem icon={CalendarDays} label="Planner" href="/planner" />
          <SidebarItem icon={BarChart3} label="Analytics" href="/analytics" />
          <SidebarItem icon={Bot} label="AI Tutor" href="/ai-tutor" />
          <SidebarItem icon={Settings} label="Settings" href="/settings" />
        </nav>

        <div className="mt-auto rounded-[1.15rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/12 via-violet-500/10 to-cyan-500/10 p-4 shadow-[0_0_45px_rgba(59,130,246,0.13)]">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.2)]">
            <Sparkles className="h-5 w-5" />
          </div>

          <p className="text-sm text-slate-400">Unlock more with</p>
          <p className="mt-0.5 text-lg font-black tracking-[-0.035em] text-white">
            StudyForge Pro
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Advanced AI, unlimited summaries, and more.
          </p>

          <button className="mt-4 h-10 w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-sm font-bold text-white shadow-[0_14px_35px_rgba(59,130,246,0.25)]">
            Upgrade Now
          </button>
        </div>
      </aside>
    </>
  );
}

function TopBar({ openSidebar }: { openSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#030816]/78 backdrop-blur-2xl">
      <div className="flex h-16 w-full items-center gap-4 px-4 lg:px-5 xl:px-6">
        <button
          onClick={openSidebar}
          className="rounded-xl border border-white/10 bg-white/[0.045] p-2.5 text-slate-300 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden h-11 w-full max-w-[440px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 text-slate-400 shadow-[0_18px_45px_rgba(2,6,23,0.22)] md:flex">
          <Search className="h-5 w-5" />
          <input
            placeholder="Search for topics, materials, exams..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <span className="rounded-lg bg-white/[0.04] px-2 py-1 text-xs text-slate-400">
            ⌘ K
          </span>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="hidden h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 text-sm font-bold shadow-[0_16px_42px_rgba(59,130,246,0.32)] sm:flex">
            <Plus className="h-5 w-5" />
            Quick Add
          </button>

          <button className="relative rounded-xl border border-white/10 bg-white/[0.045] p-2.5 text-slate-300">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[11px] font-black">
              3
            </span>
          </button>

          <button className="flex h-11 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-200 via-pink-300 to-blue-600 ring-2 ring-blue-300/20" />
            <div className="hidden text-left md:block">
              <p className="text-sm font-bold text-white">Aarav Singh</p>
              <p className="text-xs text-slate-500">Student</p>
            </div>
            <ChevronDown className="hidden h-4 w-4 text-slate-500 md:block" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[1.05rem] border border-white/10 bg-white/[0.043] shadow-[0_18px_55px_rgba(2,6,23,0.22)] ${className}`}
    >
      {children}
    </section>
  );
}

function PlanIcon({
  icon: Icon,
  color,
}: {
  icon: any;
  color: "blue" | "purple" | "cyan" | "orange";
}) {
  const styles = {
    blue: "bg-blue-500/16 text-blue-200 border-blue-400/20 shadow-[0_0_20px_rgba(59,130,246,0.18)]",
    purple:
      "bg-violet-500/16 text-violet-200 border-violet-400/20 shadow-[0_0_20px_rgba(168,85,247,0.18)]",
    cyan: "bg-cyan-500/16 text-cyan-200 border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.16)]",
    orange:
      "bg-orange-500/16 text-orange-200 border-orange-400/20 shadow-[0_0_20px_rgba(249,115,22,0.15)]",
  };

  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${styles[color]}`}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

function Pill({ children, color }: { children: string; color: string }) {
  const styles: Record<string, string> = {
    blue: "bg-blue-500/15 text-blue-200",
    purple: "bg-violet-500/15 text-violet-200",
    cyan: "bg-cyan-500/15 text-cyan-200",
    orange: "bg-orange-500/15 text-orange-200",
  };

  return (
    <span className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold ${styles[color]}`}>
      {children}
    </span>
  );
}

function TodayStudyPlan() {
  return (
    <Panel className="p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200">
            <CalendarDays className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-black tracking-[-0.035em]">
            Today&apos;s Study Plan
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-slate-400 md:inline">
            May 28, 2025
          </span>
          <Link
            href="/planner"
            className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-semibold text-slate-300"
          >
            View Planner
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        {planItems.map((item) => (
          <div
            key={item.title}
            className="grid min-h-[54px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2 md:grid-cols-[118px_44px_minmax(210px,0.78fr)_auto]"
          >
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <span
                className={`h-2 w-2 rounded-full ${
                  item.color === "blue"
                    ? "bg-blue-400"
                    : item.color === "purple"
                      ? "bg-violet-400"
                      : item.color === "cyan"
                        ? "bg-cyan-400"
                        : "bg-orange-400"
                }`}
              />
              <span>{item.time}</span>
            </div>

            <PlanIcon icon={item.icon} color={item.color as any} />

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white">{item.title}</p>
              <p className="mt-0.5 truncate text-xs text-slate-400">{item.subtitle}</p>
            </div>

            <div className="flex justify-end">
              <Pill color={item.color}>{item.tag}</Pill>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-sm text-slate-400">
        <span>✨ Stay consistent! You&apos;re on a 7-day streak. Keep it up!</span>
        <span className="font-semibold text-blue-300">
          Total Study Hours Today: 5.5 hrs
        </span>
      </div>
    </Panel>
  );
}

function UpcomingExams() {
  return (
    <Panel className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-blue-300" />
          <h2 className="text-lg font-black tracking-[-0.035em]">Upcoming Exams</h2>
        </div>

        <Link
          href="/mock-exams"
          className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-semibold text-slate-300"
        >
          View All
        </Link>
      </div>

      <div className="space-y-2">
        {upcomingExams.map((exam) => (
          <div
            key={exam.title}
            className="grid min-h-[50px] grid-cols-[48px_minmax(0,1fr)_82px] items-center gap-3 border-b border-white/10 pb-2 last:border-b-0 last:pb-0"
          >
            <div className="flex h-11 w-11 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]">
              <span className="text-[9px] font-bold text-slate-400">{exam.month}</span>
              <span className="text-lg font-black text-white">{exam.day}</span>
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-white">{exam.title}</p>
              <p className="mt-0.5 truncate text-xs text-slate-400">{exam.subtitle}</p>
            </div>

            <div className="flex justify-end">
              <span className="whitespace-nowrap rounded-lg bg-violet-500/15 px-3 py-1.5 text-xs font-semibold text-violet-200">
                {exam.due}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function CourseReadiness() {
  return (
    <Panel className="h-full p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-black tracking-[-0.035em] text-white">
          Course Readiness
        </h2>

        <Link
          href="/analytics"
          className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300"
        >
          View Analytics
        </Link>
      </div>

      <div className="grid items-center gap-5 md:grid-cols-[132px_1fr]">
        <div className="relative mx-auto flex h-[124px] w-[124px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl" />

          <svg className="relative h-full w-full -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="rgba(148,163,184,0.13)"
              strokeWidth="12"
            />
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="url(#readinessGradientOne)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="95 302"
              strokeDashoffset="0"
              className="drop-shadow-[0_0_8px_rgba(52,211,153,0.55)]"
            />
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="url(#readinessGradientTwo)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="122 302"
              strokeDashoffset="-112"
              className="drop-shadow-[0_0_8px_rgba(59,130,246,0.55)]"
            />
            <defs>
              <linearGradient id="readinessGradientOne" x1="0" y1="0" x2="120" y2="120">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
              <linearGradient id="readinessGradientTwo" x1="0" y1="0" x2="120" y2="120">
                <stop stopColor="#3b82f6" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-[18px] flex flex-col items-center justify-center rounded-full bg-[#071326]/95 shadow-inner">
            <span className="text-[2.05rem] font-black leading-none tracking-[-0.06em] text-white">
              72%
            </span>
            <span className="mt-1 text-[10px] leading-none text-slate-400">
              Overall
            </span>
            <span className="text-[10px] leading-none text-slate-400">
              Readiness
            </span>
          </div>
        </div>

        <div className="space-y-3.5">
          {readiness.map((item) => (
            <div key={item.name}>
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-semibold text-white">{item.name}</span>
                <span className="text-slate-400">{item.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/[0.07]">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-[0_0_18px_rgba(59,130,246,0.28)]`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-slate-400">
        <span className="text-emerald-300">↗</span>
        <span>Keep going! You&apos;re making great progress.</span>
      </div>
    </Panel>
  );
}

function QuickActions() {
  const actions = [
    {
      title: "Upload Material",
      subtitle: "Add PDFs or files",
      icon: CloudUpload,
      color: "bg-blue-500/18 text-blue-200",
    },
    {
      title: "Generate Quiz",
      subtitle: "From any material",
      icon: Sparkles,
      color: "bg-violet-500/18 text-violet-200",
    },
    {
      title: "Ask AI Tutor",
      subtitle: "Get instant help",
      icon: Bot,
      color: "bg-cyan-500/18 text-cyan-200",
    },
    {
      title: "Build Mock Exam",
      subtitle: "Custom tests",
      icon: FileText,
      color: "bg-orange-500/18 text-orange-200",
    },
  ];

  return (
    <Panel className="h-full p-4">
      <h2 className="text-lg font-black tracking-[-0.035em] text-white">
        Quick Actions
      </h2>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.title}
            className="min-h-[102px] rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center transition hover:bg-white/[0.065]"
          >
            <div
              className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full ${action.color} shadow-[0_0_24px_rgba(59,130,246,0.18)]`}
            >
              <action.icon className="h-5 w-5" />
            </div>
            <p className="mt-2 text-sm font-bold text-white">{action.title}</p>
            <p className="mt-1 text-xs text-slate-400">{action.subtitle}</p>
          </button>
        ))}
      </div>
    </Panel>
  );
}

function FileIcon({ type }: { type: string }) {
  const styles: Record<string, string> = {
    pdf: "bg-red-500/15 text-red-200",
    ppt: "bg-orange-500/15 text-orange-200",
    doc: "bg-blue-500/15 text-blue-200",
  };

  return (
    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${styles[type]}`}>
      <FileText className="h-4 w-4" />
    </div>
  );
}

function RecentMaterials() {
  return (
    <Panel className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-black tracking-[-0.035em]">Recent Materials</h2>
        <Link
          href="/materials"
          className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-semibold text-slate-300"
        >
          View All
        </Link>
      </div>

      <div className="space-y-2.5">
        {recentMaterials.map((file) => (
          <div
            key={file.name}
            className="grid grid-cols-[minmax(0,1fr)_52px_38px] items-center gap-3 border-b border-white/10 pb-2.5 last:border-b-0 last:pb-0"
          >
            <div className="flex min-w-0 items-center gap-3">
              <FileIcon type={file.type} />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">{file.name}</p>
                <p className="mt-0.5 text-xs text-slate-400">{file.date}</p>
              </div>
            </div>

            <span className="hidden text-xs text-slate-400 sm:block">{file.size}</span>

            <button className="text-xs font-semibold text-blue-300">Open</button>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-slate-400">
        <UploadCloud className="h-4 w-4 text-blue-300" />
        <span>Upload more to keep everything in one place.</span>
      </div>
    </Panel>
  );
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030816] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_13%_9%,rgba(37,99,235,0.24),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(124,58,237,0.28),transparent_34%),radial-gradient(circle_at_45%_90%,rgba(6,182,212,0.12),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.045]" />
      </div>

      <div className="relative z-10 flex min-h-screen">
        <Sidebar open={sidebarOpen} close={() => setSidebarOpen(false)} />

        <section className="min-w-0 flex-1">
          <TopBar openSidebar={() => setSidebarOpen(true)} />

          <div className="w-full px-4 py-4 lg:px-5 xl:px-6 2xl:px-7">
            <div className="mb-4">
              <h1 className="text-[2.05rem] font-black leading-tight tracking-[-0.055em] text-white lg:text-[2.25rem]">
                Welcome back, Aarav 👋
              </h1>
              <p className="mt-1 text-base text-slate-400">
                Here’s what matters most today.
              </p>
            </div>

            <div className="grid items-start gap-4 xl:grid-cols-[1.4fr_1fr]">
              <div className="space-y-4">
                <TodayStudyPlan />

                <div className="grid items-stretch gap-4 lg:grid-cols-[1.18fr_0.82fr]">
                  <CourseReadiness />
                  <QuickActions />
                </div>
              </div>

              <div className="space-y-4">
                <UpcomingExams />
                <RecentMaterials />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}