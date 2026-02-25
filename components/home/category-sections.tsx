"use client"

import Link from "next/link"
import { ArrowRight, User, History, Users, FlaskConical, FileText, Tv, GraduationCap, Building2, Route, MessageSquare, CalendarCheck, HelpCircle, Stethoscope } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

/* ──────────────────── Shared card component ──────────────────── */
function CategoryCard({
  href,
  icon: Icon,
  label,
  iconColor = "#147A85",
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  iconColor?: string
}) {
  return (
    <Link
      href={href}
      className="reveal-child group flex items-center gap-4 rounded-xl border border-[#DCE4EE] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-transparent"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#F4F7FA] transition-colors group-hover:bg-[#0C2340]/5">
        <Icon className="h-5 w-5" style={{ color: iconColor }} />
      </div>
      <span className="flex-1 text-sm font-bold text-[#192533]">{label}</span>
      <ArrowRight className="h-4 w-4 text-[#DCE4EE] transition-all group-hover:text-[#C4923A] group-hover:translate-x-0.5" />
    </Link>
  )
}

/* ──────────────────── Section wrapper ──────────────────── */
function CategorySection({
  labelEn,
  catchcopy,
  bgClass,
  textClass,
  catchcopyClass,
  lineClass,
  children,
}: {
  labelEn: string
  catchcopy: string
  bgClass: string
  textClass: string
  catchcopyClass: string
  lineClass: string
  children: React.ReactNode
}) {
  const ref = useScrollReveal()

  return (
    <section className={`py-20 md:py-28 ${bgClass}`} ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: cards */}
          <div className="reveal-stagger grid gap-4 sm:grid-cols-2">
            {children}
          </div>

          {/* Right: catchcopy */}
          <div className="flex flex-col justify-center reveal lg:pl-8">
            <p className={`text-xs font-bold tracking-[0.2em] uppercase ${textClass}`}>
              {labelEn}
            </p>
            <div className={`mt-3 h-[3px] w-10 ${lineClass}`} />
            <h2 className={`mt-6 font-serif text-2xl font-bold leading-snug md:text-3xl text-balance ${catchcopyClass}`}>
              {catchcopy}
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────── ABOUT US ──────────────────── */
export function AboutUsSection() {
  return (
    <CategorySection
      labelEn="ABOUT US"
      catchcopy="人の化学反応が、常識を超える。"
      bgClass="bg-[#F4F7FA]"
      textClass="text-[#C4923A]"
      catchcopyClass="text-[#0C2340]"
      lineClass="bg-[#C4923A]"
    >
      <CategoryCard href="/about" icon={User} label="教授挨拶" iconColor="#0C2340" />
      <CategoryCard href="/about/staff" icon={Users} label="スタッフ紹介" iconColor="#147A85" />
      <CategoryCard href="/research" icon={FlaskConical} label="研究紹介" iconColor="#147A85" />
      <CategoryCard href="/about/history" icon={History} label="教室の沿革" iconColor="#0C2340" />
    </CategorySection>
  )
}

/* ──────────────────── ADMISSION & TRAINING ──────────────────── */
export function AdmissionSection() {
  return (
    <CategorySection
      labelEn="ADMISSION & TRAINING"
      catchcopy="伝統と革新の融合が、ここにある。"
      bgClass="bg-white"
      textClass="text-[#147A85]"
      catchcopyClass="text-[#0C2340]"
      lineClass="bg-[#147A85]"
    >
      <CategoryCard href="/recruit/voice" icon={MessageSquare} label="先輩医師のVoice" iconColor="#C4923A" />
      <CategoryCard href="/recruit/education" icon={GraduationCap} label="教育・研修の特徴" iconColor="#147A85" />
      <CategoryCard href="/recruit/career" icon={Route} label="キャリアパス・ロールモデル" iconColor="#0C2340" />
      <CategoryCard href="/network" icon={Building2} label="連携病院ネットワーク" iconColor="#147A85" />
      <CategoryCard href="/recruit/visit" icon={CalendarCheck} label="見学・入局相談" iconColor="#C4923A" />
      <CategoryCard href="/recruit/faq" icon={HelpCircle} label="よくある質問 FAQ" iconColor="#7A8FA8" />
    </CategorySection>
  )
}

/* ──────────────────── CLINICAL SERVICES ──────────────────── */
export function ClinicalSection() {
  return (
    <CategorySection
      labelEn="CLINICAL SERVICES"
      catchcopy="消化管・肝臓・胆膵、すべてを高いレベルで。"
      bgClass="bg-[#0C2340]"
      textClass="text-[#E8B96A]"
      catchcopyClass="text-white"
      lineClass="bg-[#C4923A]"
    >
      <CategoryCard href="/clinical" icon={Stethoscope} label="消化管グループ" iconColor="#147A85" />
      <CategoryCard href="/clinical" icon={Stethoscope} label="肝臓グループ" iconColor="#C4923A" />
      <CategoryCard href="/clinical" icon={Stethoscope} label="胆膵グループ" iconColor="#0C2340" />
    </CategorySection>
  )
}
