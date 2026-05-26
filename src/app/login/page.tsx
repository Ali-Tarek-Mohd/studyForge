"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart2,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  ClipboardList,
  Eye,
  EyeOff,
  FileText,
  LineChart,
  Lock,
  Mail,
  MessageSquareText,
  Search,
  Shield,
  Sparkles,
  User,
} from "lucide-react";

type View = "login" | "register" | "forgot";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const points = Array.from({ length: 110 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.05 + 0.3,
      dx: (Math.random() - 0.5) * 0.16,
      dy: (Math.random() - 0.5) * 0.16,
      a: Math.random() * 0.48 + 0.14,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(112, 166, 255, ${p.a})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-55" />;
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "relative h-4 w-4 shrink-0" : "relative h-10 w-10 shrink-0 drop-shadow-[0_0_22px_rgba(58,130,255,0.58)]"}>
      <div className="absolute left-0 top-1/2 h-1/2 w-full -translate-y-[16%] skew-y-[-28deg] rounded-[4px] bg-gradient-to-br from-[#9b5cff] via-[#5a43ff] to-[#1c6cff]" />
      <div className="absolute left-0 top-0 h-1/2 w-full skew-y-[-28deg] rounded-[4px] bg-gradient-to-br from-[#36c5ff] via-[#2d7dff] to-[#7757ff]" />
      <div className="absolute left-[18%] top-[34%] h-[38%] w-[64%] skew-y-[-28deg] rounded-[3px] bg-[#071338]/35" />
    </div>
  );
}

function OrbitField() {
  return (
    <div className="pointer-events-none absolute -inset-x-10 -bottom-5 top-1 z-0 overflow-hidden">
      <div className="absolute left-[2%] top-[18%] h-[310px] w-[720px] rounded-full bg-[radial-gradient(circle_at_46%_48%,rgba(45,119,255,0.31),rgba(119,59,255,0.16)_43%,transparent_70%)] blur-3xl" />
      <div className="absolute left-[32%] top-[28%] h-[205px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_68%)] blur-2xl" />
      <svg className="absolute left-[-86px] top-[8px] h-[340px] w-[790px]" viewBox="0 0 780 390" fill="none">
        <path d="M43 209C122 80 301 39 470 86C650 136 735 244 696 307C657 369 506 348 332 293C158 238 20 282 43 209Z" stroke="url(#orbitA)" strokeWidth="1.2" opacity=".64" />
        <path d="M92 277C95 175 263 126 439 151C615 177 745 253 718 315C691 377 502 363 320 322C138 281 91 326 92 277Z" stroke="url(#orbitB)" strokeWidth="1" opacity=".58" />
        <path d="M146 316C38 232 147 132 314 102C481 72 666 114 665 218C664 322 478 364 308 346C229 338 179 331 146 316Z" stroke="url(#orbitC)" strokeWidth=".85" opacity=".5" />
        <defs>
          <linearGradient id="orbitA" x1="42" y1="210" x2="715" y2="306">
            <stop stopColor="#a855f7" stopOpacity="0" />
            <stop offset=".22" stopColor="#8b5cf6" />
            <stop offset=".58" stopColor="#2f8cff" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbitB" x1="93" y1="278" x2="719" y2="310">
            <stop stopColor="#20d6ff" stopOpacity="0" />
            <stop offset=".3" stopColor="#1d7cff" />
            <stop offset=".72" stopColor="#9b5cff" />
            <stop offset="1" stopColor="#9b5cff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbitC" x1="79" y1="319" x2="665" y2="164">
            <stop stopColor="#7c3aed" stopOpacity="0" />
            <stop offset=".32" stopColor="#7c3aed" />
            <stop offset=".7" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute left-[71%] top-[12%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
      <div className="absolute left-[19%] top-[43%] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(168,85,247,0.9)]" />
      <div className="absolute left-[88%] top-[49%] h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_16px_rgba(96,165,250,0.9)]" />
    </div>
  );
}

function MiniDashboard() {
  const navItems = [
    { icon: BarChart2, label: "Overview", active: true },
    { icon: FileText, label: "My Materials" },
    { icon: ClipboardList, label: "Exam Builder" },
    { icon: BookOpen, label: "Practice" },
    { icon: ClipboardList, label: "Mock Exams" },
    { icon: Calendar, label: "Planner" },
    { icon: Brain, label: "AI Tutor" },
    { icon: LineChart, label: "Analytics" },
  ];
  const stats = [
    { value: "12", label: "Materials", tone: "from-blue-500/22 to-blue-400/5", icon: FileText },
    { value: "48", label: "Quizzes", tone: "from-violet-500/22 to-violet-400/5", icon: Brain },
    { value: "6", label: "Mock Exams", tone: "from-cyan-500/22 to-cyan-400/5", icon: ClipboardList },
    { value: "85%", label: "Avg. Score", tone: "from-teal-500/22 to-blue-400/5", icon: BarChart2 },
  ];
  const materials = [
    { name: "Thermodynamics Notes.pdf", time: "Uploaded 2h ago", color: "from-rose-500 to-red-400" },
    { name: "Calculus Formulas.pdf", time: "Uploaded yesterday", color: "from-violet-500 to-blue-400" },
    { name: "Cell Biology - Chapter 4.pdf", time: "Uploaded 2 days ago", color: "from-sky-500 to-cyan-300" },
  ];

  return (
    <div className="relative z-10 w-full" style={{ maxWidth: 610 }}>
      <div className="absolute -inset-7 rounded-[32px] bg-[radial-gradient(ellipse_at_52%_42%,rgba(36,122,255,0.36),rgba(119,48,255,0.18)_48%,transparent_76%)] blur-2xl" />
      <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-blue-500/35 via-violet-500/25 to-cyan-400/25 blur-md" />
      <div className="dashboard-perspective relative overflow-hidden rounded-[22px] border border-blue-400/35 bg-[#070d23]/95 text-white shadow-[0_30px_82px_rgba(0,0,0,0.76),0_0_50px_rgba(50,110,255,0.32),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(54,150,255,0.18),transparent_36%),radial-gradient(circle_at_90%_25%,rgba(139,92,246,0.16),transparent_34%)]" />
        <div className="relative flex items-center gap-3 border-b border-blue-300/10 bg-white/[0.025] px-4 py-3">
          <div className="flex items-center gap-2">
            <BrandMark compact />
            <span className="text-[12px] font-extrabold tracking-[-0.02em] text-white">StudyForge</span>
          </div>
          <div className="flex h-8 flex-1 items-center gap-2 rounded-[9px] border border-white/8 bg-white/[0.045] px-3 text-[10px] text-slate-500 shadow-inner shadow-black/25">
            <Search size={12} />
            <span>Search anything...</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full border border-blue-300/20 bg-gradient-to-br from-blue-400/20 to-violet-500/10" />
            <div className="h-6 w-6 rounded-full border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 to-blue-500/10" />
          </div>
        </div>

        <div className="relative flex">
          <aside className="w-[132px] shrink-0 border-r border-blue-300/10 bg-[#060c20]/72 px-2.5 py-3">
            <div className="space-y-1">
              {navItems.map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex h-7 items-center gap-2 rounded-[8px] px-2 text-[10px] transition ${
                    active
                      ? "border border-blue-300/15 bg-gradient-to-r from-blue-500/38 to-violet-500/15 text-blue-100 shadow-[0_0_18px_rgba(43,126,255,0.18)]"
                      : "text-slate-400"
                  }`}
                >
                  <Icon size={12} className={active ? "text-sky-300" : "text-slate-500"} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </aside>

          <section className="flex-1 p-4">
            <div className="mb-3">
              <h3 className="text-[16px] font-extrabold leading-tight tracking-[-0.03em] text-white">
                Welcome back, Alex! <span className="text-[14px]">👋</span>
              </h3>
              <p className="mt-1 text-[11px] text-slate-400">Ready to continue your learning journey?</p>
            </div>

            <div className="mb-3 grid grid-cols-4 gap-2">
              {stats.map(({ value, label, tone, icon: Icon }) => (
                <div key={label} className={`rounded-[11px] border border-white/8 bg-gradient-to-br ${tone} p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <p className="text-[20px] font-extrabold leading-none tracking-[-0.03em] text-white">{value}</p>
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/[0.055] text-blue-300">
                      <Icon size={11} />
                    </div>
                  </div>
                  <p className="text-[9px] font-medium text-slate-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[1.08fr_.92fr] gap-3">
              <div className="rounded-[13px] border border-white/8 bg-white/[0.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                <div className="mb-2.5 flex items-center justify-between">
                  <p className="text-[12px] font-bold text-white">Recent Materials</p>
                  <Sparkles size={13} className="text-blue-300" />
                </div>
                <div className="space-y-2.5">
                  {materials.map(({ name, time, color }) => (
                    <div key={name} className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-br ${color} shadow-[0_0_18px_rgba(70,120,255,0.22)]`}>
                        <FileText size={12} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-[10px] font-semibold leading-tight text-slate-100">{name}</p>
                        <p className="mt-0.5 text-[9px] text-slate-500">{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[13px] border border-white/8 bg-white/[0.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]">
                <p className="mb-2.5 text-[12px] font-bold text-white">Study Progress</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-[76px] w-[76px] shrink-0">
                    <svg viewBox="0 0 92 92" className="h-full w-full -rotate-90">
                      <circle cx="46" cy="46" r="34" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="10" />
                      <circle cx="46" cy="46" r="34" fill="none" stroke="url(#progress)" strokeWidth="10" strokeLinecap="round" strokeDasharray="213.6" strokeDashoffset="47" />
                      <defs>
                        <linearGradient id="progress" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#21d4d7" />
                          <stop offset="52%" stopColor="#4f8cff" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[19px] font-extrabold leading-none">78%</span>
                      <span className="mt-1 text-[7px] uppercase tracking-[0.08em] text-slate-500">Overall</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      ["Completed", "78%", "bg-cyan-300"],
                      ["In Progress", "16%", "bg-blue-400"],
                      ["Not Started", "6%", "bg-fuchsia-400"],
                    ].map(([label, value, color]) => (
                      <div key={label} className="flex items-center gap-1.5 text-[9px] text-slate-400">
                        <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
                        <span className="min-w-[58px]">{label}</span>
                        <span className="font-semibold text-slate-200">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 rounded-[10px] border border-cyan-300/10 bg-cyan-300/[0.055] px-3 py-2">
                  <p className="text-[10px] font-semibold text-cyan-100">Next focus</p>
                  <p className="mt-0.5 text-[9px] text-slate-400">Thermodynamics review set</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function FloatingCard({
  className,
  children,
  glow,
  style,
}: {
  className: string;
  children: React.ReactNode;
  glow: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`absolute z-20 ${className}`} style={style}>
      <div className={`absolute -inset-5 rounded-full blur-2xl ${glow}`} />
      {children}
    </div>
  );
}

function FormInput({
  id,
  type,
  placeholder,
  value,
  onChange,
  icon,
  suffix,
  error,
}: {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  icon: React.ReactNode;
  suffix?: React.ReactNode;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col" style={{ gap: 4 }}>
      <div className="relative">
        <span className="absolute flex text-slate-500" style={{ left: 16, top: "50%", transform: "translateY(-50%)" }}>{icon}</span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-white/[0.055] text-slate-100 outline-none placeholder:text-slate-600"
          style={{
            height: 50,
            borderRadius: 11,
            padding: "0 48px",
            fontSize: 14,
            border: error ? "1px solid rgba(248,113,113,0.7)" : focused ? "1px solid rgba(79,140,255,0.62)" : "1px solid rgba(125,165,255,0.22)",
            boxShadow: focused && !error ? "0 0 0 3px rgba(79,140,255,0.1)" : error ? "0 0 0 3px rgba(248,113,113,0.1)" : "none",
            transition: "border 0.15s, box-shadow 0.15s",
          }}
        />
        {suffix && <span className="absolute flex" style={{ right: 16, top: "50%", transform: "translateY(-50%)" }}>{suffix}</span>}
      </div>
      {error && (
        <p className="flex items-center gap-1 text-[11px] text-red-400">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center justify-center gap-2 font-bold text-white shadow-[0_12px_34px_rgba(44,104,255,0.38)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_15px_42px_rgba(79,140,255,0.52)]"
      style={{ height: 54, borderRadius: 12, fontSize: 15, background: "linear-gradient(100deg, #1855d8 0%, #2779ff 46%, #7b25f2 100%)" }}
    >
      {children}
    </button>
  );
}

function LinkBtn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="p-0 text-[14px] font-semibold text-cyan-400 transition hover:text-cyan-300">
      {children}
    </button>
  );
}

function SuccessState({ title, sub, onBack }: { title: string; sub: string; onBack?: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-300/30 bg-gradient-to-br from-blue-500/20 to-violet-500/20">
        <CheckCircle size={30} className="text-sky-400" />
      </div>
      <div>
        <p className="text-lg font-bold text-white">{title}</p>
        <p className="mt-1 text-[13px] text-slate-400">{sub}</p>
      </div>
      {onBack && <LinkBtn onClick={onBack}>Back to login</LinkBtn>}
    </div>
  );
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] transition ${
        checked ? "bg-gradient-to-br from-[#4f8cff] to-[#7c3aed]" : "border border-blue-400/35 bg-white/[0.08]"
      }`}
      aria-label="Remember me"
    >
      {checked && (
        <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" fill="none" stroke="#fff" strokeWidth="1.8">
          <polyline points="1.5,5 4,7.5 8.5,2.5" />
        </svg>
      )}
    </button>
  );
}

function LoginForm({ onSwitch }: { onSwitch: (v: View) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [success, setSuccess] = useState(false);

  const submit = () => {
    const nextErrors: typeof errors = {};
    if (!email) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) nextErrors.email = "Enter a valid email";
    if (!password) nextErrors.password = "Password is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    if (remember) localStorage.setItem("sf_email", email);
    else localStorage.removeItem("sf_email");
    setSuccess(true);
  };

  if (success) return <SuccessState title="Logged in!" sub="Redirecting to dashboard..." />;

  return (
    <div className="flex flex-col" style={{ gap: 24 }}>
      <div>
        <h2 className="m-0 font-extrabold text-white" style={{ fontSize: 24, letterSpacing: "-0.03em" }}>Welcome back!</h2>
        <p className="text-slate-400" style={{ marginTop: 6, fontSize: 14 }}>Log in to continue your smarter study journey.</p>
      </div>
      <div className="flex flex-col" style={{ gap: 16 }}>
        <div>
          <label className="block font-semibold text-slate-300" style={{ marginBottom: 8, fontSize: 14 }}>Email</label>
          <FormInput id="email" type="email" placeholder="you@university.edu" value={email} onChange={setEmail} icon={<Mail size={17} />} error={errors.email} />
        </div>
        <div>
          <label className="block font-semibold text-slate-300" style={{ marginBottom: 8, fontSize: 14 }}>Password</label>
          <FormInput
            id="password"
            type={showPw ? "text" : "password"}
            placeholder="••••••••••••"
            value={password}
            onChange={setPassword}
            icon={<Lock size={17} />}
            error={errors.password}
            suffix={
              <button type="button" onClick={() => setShowPw((v) => !v)} className="flex p-0 text-slate-500 transition hover:text-slate-300">
                {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            }
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer select-none items-center" style={{ gap: 10 }}>
          <Checkbox checked={remember} onChange={() => setRemember((v) => !v)} />
          <span className="text-slate-300" style={{ fontSize: 14 }}>Remember me</span>
        </label>
        <LinkBtn onClick={() => onSwitch("forgot")}>Forgot password?</LinkBtn>
      </div>
      <PrimaryButton onClick={submit}>
        Log In <ArrowRight size={18} />
      </PrimaryButton>
      <p className="m-0 text-center text-slate-400" style={{ fontSize: 14 }}>
        Don&apos;t have an account? <LinkBtn onClick={() => onSwitch("register")}>Create account</LinkBtn>
      </p>
    </div>
  );
}

function RegisterForm({ onSwitch }: { onSwitch: (v: View) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showCf, setShowCf] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const submit = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email) nextErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) nextErrors.email = "Enter a valid email";
    if (!password) nextErrors.password = "Password is required";
    else if (password.length < 8) nextErrors.password = "Min. 8 characters";
    if (!confirm) nextErrors.confirm = "Please confirm your password";
    else if (confirm !== password) nextErrors.confirm = "Passwords do not match";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSuccess(true);
  };

  if (success) return <SuccessState title="Account created!" sub="Welcome to StudyForge." onBack={() => onSwitch("login")} />;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="m-0 text-[24px] font-extrabold text-white">Create account</h2>
        <p className="mt-1 text-[14px] text-slate-400">Start your smarter study journey today.</p>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-slate-300">Full Name</label>
          <FormInput id="name" type="text" placeholder="Your name" value={name} onChange={setName} icon={<User size={15} />} error={errors.name} />
        </div>
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-slate-300">Email</label>
          <FormInput id="reg-email" type="email" placeholder="you@university.edu" value={email} onChange={setEmail} icon={<Mail size={15} />} error={errors.email} />
        </div>
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-slate-300">Password</label>
          <FormInput
            id="reg-pw"
            type={showPw ? "text" : "password"}
            placeholder="Min. 8 characters"
            value={password}
            onChange={setPassword}
            icon={<Lock size={15} />}
            error={errors.password}
            suffix={<button type="button" onClick={() => setShowPw((v) => !v)} className="flex p-0 text-slate-500">{showPw ? <EyeOff size={15} /> : <Eye size={15} />}</button>}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[13px] font-semibold text-slate-300">Confirm Password</label>
          <FormInput
            id="confirm"
            type={showCf ? "text" : "password"}
            placeholder="Re-enter password"
            value={confirm}
            onChange={setConfirm}
            icon={<Lock size={15} />}
            error={errors.confirm}
            suffix={<button type="button" onClick={() => setShowCf((v) => !v)} className="flex p-0 text-slate-500">{showCf ? <EyeOff size={15} /> : <Eye size={15} />}</button>}
          />
        </div>
      </div>
      <PrimaryButton onClick={submit}>
        Create Account <ArrowRight size={16} />
      </PrimaryButton>
      <p className="m-0 text-center text-[13px] text-slate-400">
        Already have an account? <LinkBtn onClick={() => onSwitch("login")}>Log in</LinkBtn>
      </p>
    </div>
  );
}

function ForgotForm({ onSwitch }: { onSwitch: (v: View) => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handle = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email");
      return;
    }
    setError("");
    setSent(true);
  };

  if (sent) {
    return (
      <div>
        <SuccessState title="Check your inbox" sub={`We sent a reset link to ${email}`} />
        <p className="mt-2 text-center">
          <LinkBtn onClick={() => onSwitch("login")}>Back to login</LinkBtn>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="m-0 text-[24px] font-extrabold text-white">Reset password</h2>
        <p className="mt-1 text-[14px] text-slate-400">Enter your email and we&apos;ll send a reset link.</p>
      </div>
      <div>
        <label className="mb-2 block text-[14px] font-semibold text-slate-300">Email</label>
        <FormInput id="reset-email" type="email" placeholder="you@university.edu" value={email} onChange={setEmail} icon={<Mail size={17} />} error={error} />
      </div>
      <PrimaryButton onClick={handle}>Send Reset Link</PrimaryButton>
      <p className="m-0 text-center text-[14px] text-slate-400">
        <LinkBtn onClick={() => onSwitch("login")}>Back to login</LinkBtn>
      </p>
    </div>
  );
}

export default function LoginPage() {
  const [view, setView] = useState<View>("login");
  const badges = [
    { icon: Shield, label: "Trusted by", sub: "students", color: "text-cyan-300", glow: "shadow-cyan-500/25" },
    { icon: Sparkles, label: "AI-powered", sub: "learning", color: "text-blue-300", glow: "shadow-blue-500/25" },
    { icon: Lock, label: "Your data is", sub: "always protected", color: "text-violet-300", glow: "shadow-violet-500/25" },
  ];

  return (
    <>
      <style>{`
        html, body { height: 100%; overflow: hidden; background: #020716; }
        button { border: 0; background: none; font-family: inherit; cursor: pointer; }
        .dashboard-perspective {
          transform: perspective(1200px) rotateX(1deg) rotateY(-4deg) rotateZ(-1deg);
          transform-origin: 52% 50%;
        }
        @keyframes floatPdf { 0%,100%{transform:translateY(0) rotate(-12deg)} 50%{transform:translateY(-10px) rotate(-8deg)} }
        @keyframes floatNote { 0%,100%{transform:translateY(0) rotate(9deg)} 50%{transform:translateY(-12px) rotate(12deg)} }
        @keyframes floatGrade { 0%,100%{transform:translateY(0) rotate(8deg)} 50%{transform:translateY(-9px) rotate(4deg)} }
        .float-pdf { animation: floatPdf 5.2s ease-in-out infinite; }
        .float-note { animation: floatNote 4.8s ease-in-out infinite .3s; }
        .float-grade { animation: floatGrade 4.4s ease-in-out infinite .8s; }
        @media (max-width: 1180px) {
          html, body { overflow: auto; }
          .dashboard-perspective { transform: perspective(1000px) rotateY(-3deg) rotateX(1deg); }
        }
        @media (max-width: 720px) {
          .dashboard-perspective { transform: none; }
        }
      `}</style>

      <div className="relative flex h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_12%_14%,rgba(22,78,173,0.26),transparent_34%),radial-gradient(circle_at_77%_27%,rgba(85,40,151,0.2),transparent_36%),linear-gradient(135deg,#020716_0%,#050d25_46%,#060a19_100%)] font-[var(--font-plus-jakarta),var(--font-geist-sans),system-ui,sans-serif] text-white">
        <Particles />
        <div className="pointer-events-none fixed -left-44 -top-44 z-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(47,112,255,0.22),transparent_68%)] blur-3xl" />
        <div className="pointer-events-none fixed bottom-[-180px] left-[30%] z-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(122,64,255,0.17),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none fixed right-[-170px] top-[34%] z-0 h-[470px] w-[470px] rounded-full bg-[radial-gradient(circle,rgba(48,128,255,0.1),transparent_70%)] blur-3xl" />

        <main className="relative z-10 flex min-h-0 flex-1 items-start justify-center px-6 pb-2 lg:px-10" style={{ paddingTop: "clamp(22px, 3.5vh, 42px)" }}>
          <div
            className="grid h-full w-full items-start"
            style={{
              maxWidth: 1680,
              gridTemplateColumns: "minmax(680px, 780px) minmax(460px, 540px)",
              justifyContent: "space-between",
              gap: 56,
            }}
          >
            <section className="relative mx-0 flex w-full flex-col" style={{ maxWidth: 780 }}>
              <div className="relative z-20 flex items-center gap-4">
                <BrandMark />
                <span className="text-[25px] font-black tracking-[-0.04em] text-white md:text-[28px]">StudyForge</span>
              </div>

              <div className="relative z-20" style={{ marginTop: "clamp(26px, 4vh, 44px)" }}>
                <h1
                  className="font-black text-white"
                  style={{
                    maxWidth: 660,
                    fontSize: "clamp(2.5rem, 3.75vw, 3.75rem)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.055em",
                  }}
                >
                  Welcome back.
                  <br />
                  Let&apos;s keep building
                  <br />
                  <span className="bg-gradient-to-r from-[#22a7ff] via-[#5f7cff] to-[#a85cff] bg-clip-text text-transparent">smarter habits.</span>
                </h1>
                <p
                  className="text-slate-300/82"
                  style={{ marginTop: "clamp(14px, 2vh, 22px)", maxWidth: 390, fontSize: 17, lineHeight: 1.62, letterSpacing: "-0.01em" }}
                >
                  Upload materials, generate quizzes,
                  <br />
                  and study smarter with AI.
                </p>
              </div>

              <div className="relative z-20 flex flex-wrap items-center gap-x-7 gap-y-4" style={{ marginTop: "clamp(15px, 2.4vh, 24px)" }}>
                {badges.map(({ icon: Icon, label, sub, color, glow }, index) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] shadow-lg ${glow} backdrop-blur-md`}>
                      <Icon size={18} className={color} strokeWidth={2.1} />
                    </div>
                    <div className="text-[14px] leading-[1.25] tracking-[-0.01em]">
                      <p className="font-semibold text-slate-200">{label}</p>
                      <p className="text-slate-400">{sub}</p>
                    </div>
                    {index < badges.length - 1 && <div className="ml-1 hidden h-10 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent md:block" />}
                  </div>
                ))}
              </div>

              <div className="relative h-[360px] w-full" style={{ marginTop: "clamp(10px, 1.9vh, 18px)" }}>
                <OrbitField />
                <FloatingCard className="float-pdf left-[-26px] top-[96px]" glow="bg-violet-500/35">
                  <div className="relative flex h-[66px] w-[58px] flex-col items-center justify-center gap-1 rounded-[17px] border border-white/15 bg-gradient-to-br from-[#a75cff] to-[#5424e9] text-white shadow-[0_16px_42px_rgba(116,64,255,0.56),inset_0_1px_0_rgba(255,255,255,0.24)]">
                    <FileText size={21} />
                    <span className="text-[16px] font-black tracking-[-0.04em]">PDF</span>
                  </div>
                </FloatingCard>
                <FloatingCard className="float-note right-[78px] top-[-28px]" glow="bg-blue-500/35">
                  <div className="relative flex h-[70px] w-[70px] items-center justify-center rounded-[18px] border border-cyan-200/18 bg-gradient-to-br from-[#1e8bff] to-[#3137d5] text-cyan-100 shadow-[0_18px_46px_rgba(37,118,255,0.56),inset_0_1px_0_rgba(255,255,255,0.22)]">
                    <MessageSquareText size={32} strokeWidth={2.3} />
                  </div>
                </FloatingCard>
                <FloatingCard className="float-grade right-[28px] top-[132px]" glow="bg-cyan-400/30">
                  <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-[17px] border border-cyan-200/18 bg-gradient-to-br from-[#0cb7d6] to-[#0b637c] text-cyan-100 shadow-[0_16px_42px_rgba(19,205,225,0.4),inset_0_1px_0_rgba(255,255,255,0.18)]">
                    <span className="text-[20px] font-black tracking-[-0.05em]">A+</span>
                  </div>
                </FloatingCard>
                <div className="relative z-10 w-full pt-0">
                  <MiniDashboard />
                </div>
              </div>
            </section>

            <section className="mx-0 w-full" style={{ maxWidth: 540, marginTop: "clamp(16px, 4.5vh, 46px)" }}>
              <div className="rounded-[24px] border border-blue-400/24 bg-[linear-gradient(145deg,rgba(12,20,52,0.92),rgba(8,13,36,0.96))] p-8 shadow-[0_0_0_1px_rgba(79,140,255,0.07),0_36px_90px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-3xl">
                {view !== "forgot" && (
                  <div className="mb-8 flex rounded-[14px] border border-blue-300/15 bg-white/[0.055] p-1.5">
                    {(["login", "register"] as const).map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setView(v)}
                        className={`flex-1 rounded-[10px] py-3 text-[14px] font-bold transition ${
                          view === v ? "text-white shadow-[0_2px_18px_rgba(79,140,255,0.38)]" : "text-slate-500 hover:text-slate-300"
                        }`}
                        style={view === v ? { background: "linear-gradient(100deg, #1855d8 0%, #2779ff 46%, #5e1ec7 100%)" } : undefined}
                      >
                        {v === "login" ? "Log In" : "Create Account"}
                      </button>
                    ))}
                  </div>
                )}
                {view === "login" && <LoginForm onSwitch={setView} />}
                {view === "register" && <RegisterForm onSwitch={setView} />}
                {view === "forgot" && <ForgotForm onSwitch={setView} />}
              </div>
            </section>
          </div>
        </main>

        <footer className="relative z-10 h-12 shrink-0 border-t border-blue-400/10 px-6 text-center text-xs text-slate-500">
          <div className="flex h-full flex-wrap items-center justify-center gap-7">
            <span className="flex items-center gap-1.5">
              <Lock size={12} /> Secure login
            </span>
            <span className="flex items-center gap-1.5">
              <Shield size={12} /> Privacy first
            </span>
            <span>© 2026 StudyForge. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  );
}
