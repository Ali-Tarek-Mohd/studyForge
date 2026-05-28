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
  ChevronRight,
  Code2,
  Database,
  ExternalLink,
  FileText,
  FunctionSquare,
  Home,
  Laptop,
  Menu,
  Network,
  PenLine,
  Plus,
  Search,
  Settings,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Courses", icon: BookOpen, href: "/courses", active: true },
  { label: "Materials", icon: FileText, href: "/materials" },
  { label: "Exam Builder", icon: PenLine, href: "/exam-builder" },
  { label: "Practice", icon: CheckCircle2, href: "/practice" },
  { label: "Mock Exams", icon: Trophy, href: "/mock-exams" },
  { label: "Planner", icon: CalendarDays, href: "/planner" },
  { label: "Analytics", icon: BarChart3, href: "/analytics" },
  { label: "AI Tutor", icon: Bot, href: "/ai-tutor" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

const statCards = [
  {
    label: "Total Courses",
    value: "5",
    icon: BookOpen,
    accent: "cyan",
  },
  {
    label: "Upcoming Exams",
    value: "3",
    icon: CalendarDays,
    accent: "blue",
  },
  {
    label: "Average Readiness",
    value: "68%",
    icon: BarChart3,
    accent: "cyan",
  },
];

const courses = [
  {
    title: "Data\nStructures",
    readiness: 72,
    nextExam: "May 28, 2025",
    icon: Code2,
    accent: "cyan",
  },
  {
    title: "Database\nSystems",
    readiness: 65,
    nextExam: "Jun 4, 2025",
    icon: Database,
    accent: "blue",
  },
  {
    title: "Operating\nSystems",
    readiness: 60,
    nextExam: "Jun 10, 2025",
    icon: Laptop,
    accent: "purple",
  },
  {
    title: "Computer\nNetworks",
    readiness: 70,
    nextExam: "Jun 18, 2025",
    icon: Network,
    accent: "cyan",
  },
  {
    title: "Calculus",
    readiness: 75,
    nextExam: "Jun 25, 2025",
    icon: FunctionSquare,
    accent: "yellow",
  },
];

const quickActions = [
  { title: "Add Course", icon: Plus, accent: "blue" },
  { title: "Create Study Plan", icon: CalendarDays, accent: "cyan" },
  { title: "Generate Quiz", icon: Bot, accent: "purple" },
];

const accentStyles: Record<
  string,
  {
    border: string;
    iconWrap: string;
    iconGlow: string;
    ringColor: string;
    ringGlow: string;
  }
> = {
  cyan: {
    border: "border-cyan-300/20",
    iconWrap: "bg-cyan-400/15 text-cyan-200",
    iconGlow: "shadow-[0_0_30px_rgba(34,211,238,0.14)]",
    ringColor: "#22d3ee",
    ringGlow: "rgba(34,211,238,0.35)",
  },
  blue: {
    border: "border-blue-300/20",
    iconWrap: "bg-blue-500/15 text-blue-200",
    iconGlow: "shadow-[0_0_30px_rgba(59,130,246,0.14)]",
    ringColor: "#3b82f6",
    ringGlow: "rgba(59,130,246,0.35)",
  },
  purple: {
    border: "border-violet-300/20",
    iconWrap: "bg-violet-500/15 text-violet-200",
    iconGlow: "shadow-[0_0_30px_rgba(139,92,246,0.14)]",
    ringColor: "#8b5cf6",
    ringGlow: "rgba(139,92,246,0.35)",
  },
  yellow: {
    border: "border-amber-300/20",
    iconWrap: "bg-amber-500/15 text-amber-200",
    iconGlow: "shadow-[0_0_30px_rgba(245,158,11,0.14)]",
    ringColor: "#f59e0b",
    ringGlow: "rgba(245,158,11,0.35)",
  },
};

function StudyForgeLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={compact ? "relative h-9 w-9 shrink-0" : "relative h-11 w-11 shrink-0"}>
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
      className={`flex h-10 items-center gap-3 rounded-xl px-4 text-[0.92rem] transition ${
        active
          ? "bg-gradient-to-r from-blue-600 to-blue-500/80 text-white shadow-[0_16px_38px_rgba(37,99,235,0.34)]"
          : "text-slate-400 hover:bg-white/[0.045] hover:text-white"
      }`}
    >
      <Icon className="h-[1.08rem] w-[1.08rem]" />
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
        className={`fixed left-0 top-0 z-50 flex h-screen w-[214px] flex-col border-r border-white/10 bg-[#071628]/95 p-4 shadow-2xl backdrop-blur-2xl transition lg:sticky lg:top-0 lg:z-auto lg:translate-x-0 ${
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
          {navItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={item.active}
            />
          ))}
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

        <div className="hidden h-11 w-full max-w-[430px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-4 text-slate-400 shadow-[0_18px_45px_rgba(2,6,23,0.22)] md:flex">
          <Search className="h-5 w-5" />
          <input
            placeholder="Search courses, materials, exams..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <span className="rounded-lg bg-white/[0.04] px-2 py-1 text-xs text-slate-400">
            ⌘ K
          </span>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button className="hidden h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 text-sm font-bold text-white shadow-[0_16px_42px_rgba(59,130,246,0.32)] sm:flex">
            <Plus className="h-5 w-5" />
            Add Course
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
      className={`rounded-[1.08rem] border border-white/10 bg-white/[0.043] shadow-[0_18px_55px_rgba(2,6,23,0.22)] ${className}`}
    >
      {children}
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: any;
  label: string;
  value: string;
  accent: string;
}) {
  const styles = accentStyles[accent];

  return (
    <Panel className="h-[82px] px-4 py-3">
      <div className="flex h-full items-center gap-4">
        <div
          className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap} ${styles.iconGlow}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="min-w-0">
          <p className="text-sm text-slate-400">{label}</p>
          <p
            className={`mt-1 text-[2rem] font-black leading-none tracking-[-0.04em] ${
              accent === "cyan" ? "text-cyan-300" : "text-white"
            }`}
          >
            {value}
          </p>
        </div>
      </div>
    </Panel>
  );
}

function ProgressRing({
  value,
  accent,
  id,
}: {
  value: number;
  accent: string;
  id: string;
}) {
  const styles = accentStyles[accent];
  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;

  return (
    <div className="relative h-[60px] w-[60px] shrink-0">
      <div
        className="absolute inset-[8px] rounded-full blur-md"
        style={{ backgroundColor: styles.ringGlow }}
      />
      <svg viewBox="0 0 60 60" className="relative z-[1] h-full w-full">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={styles.ringColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.82" />
          </linearGradient>
        </defs>

        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="5.5"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke={`url(#grad-${id})`}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          transform="rotate(-90 30 30)"
          style={{
            filter: `drop-shadow(0 0 8px ${styles.ringGlow})`,
          }}
        />
      </svg>

      <div className="absolute inset-[11px] rounded-full border border-white/6 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.06),rgba(7,18,34,0.92)_55%,rgba(7,18,34,0.98)_100%)] shadow-[inset_0_0_18px_rgba(255,255,255,0.03)]" />

      <div className="absolute inset-0 z-[2] flex items-center justify-center">
        <span className="text-[12px] font-black tracking-[-0.03em] text-white">{value}%</span>
      </div>
    </div>
  );
}

function CourseCard({
  course,
  index,
}: {
  course: (typeof courses)[number];
  index: number;
}) {
  const Icon = course.icon;
  const styles = accentStyles[course.accent];

  return (
    <div className="flex min-h-[236px] flex-col rounded-[1.08rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_18px_40px_rgba(2,6,23,0.18)] transition hover:border-blue-300/25 hover:bg-white/[0.065]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap} ${styles.iconGlow}`}
          >
            <Icon className="h-6 w-6" />
          </div>

          <h3 className="whitespace-pre-line text-[1rem] font-black leading-tight tracking-[-0.02em] text-white">
            {course.title}
          </h3>
        </div>

        <ProgressRing
          value={course.readiness}
          accent={course.accent}
          id={`${course.title.replace(/\s+/g, "-").toLowerCase()}-${index}`}
        />
      </div>

      <div className="my-3 h-px bg-white/10" />

      <div className="flex items-center gap-3 text-slate-400">
        <CalendarDays className="h-4 w-4 text-slate-300" />
        <div>
          <p className="text-xs text-slate-400">Next Exam</p>
          <p className="text-xs font-medium text-slate-300">{course.nextExam}</p>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="grid grid-cols-[1fr_1fr] gap-2">
          <button className="flex h-10 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-xs font-bold text-white shadow-[0_12px_26px_rgba(37,99,235,0.26)]">
            Open Course
            <ChevronRight className="h-4 w-4" />
          </button>

          <button className="flex h-10 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.035] text-xs font-semibold text-slate-300">
            View Materials
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function QuickAction({
  icon: Icon,
  title,
  accent,
}: {
  icon: any;
  title: string;
  accent: string;
}) {
  const styles = accentStyles[accent];

  return (
    <button className="flex h-[66px] w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-4 text-left shadow-[0_16px_36px_rgba(2,6,23,0.14)] transition hover:border-blue-300/25 hover:bg-white/[0.07]">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border ${styles.border} ${styles.iconWrap} ${styles.iconGlow}`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <span className="text-sm font-bold text-white">{title}</span>
      </div>

      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
    </button>
  );
}

export default function CoursesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030816] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(37,99,235,0.20),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(124,58,237,0.22),transparent_34%),radial-gradient(circle_at_52%_95%,rgba(6,182,212,0.10),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.04]" />
      </div>

      <div className="relative z-10 flex min-h-screen">
        <Sidebar open={sidebarOpen} close={() => setSidebarOpen(false)} />

        <section className="min-w-0 flex-1">
          <TopBar openSidebar={() => setSidebarOpen(true)} />

          <div className="w-full px-4 py-5 lg:px-5 xl:px-6">
            <div className="w-full">
              <div className="mb-4">
                <h1 className="text-[2.15rem] font-black leading-tight tracking-[-0.055em] text-white lg:text-[2.4rem]">
                  Courses
                </h1>
                <p className="mt-2 text-base text-slate-400">
                  Manage your subjects and jump into focused study.
                </p>
              </div>

              <div className="mb-5 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:max-w-[1040px]">
                {statCards.map((card) => (
                  <StatCard
                    key={card.label}
                    icon={card.icon}
                    label={card.label}
                    value={card.value}
                    accent={card.accent}
                  />
                ))}
              </div>

              <div className="grid w-full items-start gap-4 xl:grid-cols-[minmax(0,1fr)_240px]">
                <Panel className="p-4">
                  <h2 className="mb-4 text-[1.1rem] font-black tracking-[-0.035em] text-white">
                    Your Courses
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
                    {courses.map((course, index) => (
                      <CourseCard key={course.title} course={course} index={index} />
                    ))}
                  </div>
                </Panel>

                <Panel className="p-4">
                  <h2 className="mb-4 text-[1.05rem] font-black tracking-[-0.03em] text-white">
                    Quick Course Actions
                  </h2>

                  <div className="flex w-full flex-col gap-3">
                    {quickActions.map((action) => (
                      <QuickAction
                        key={action.title}
                        title={action.title}
                        icon={action.icon}
                        accent={action.accent}
                      />
                    ))}
                  </div>
                </Panel>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}