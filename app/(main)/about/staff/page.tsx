"use client"

import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

const professors = [
  {
    name: "前田 愼",
    title: "教授・教室主任",
    specialty: "肝臓病学、ウイルス性肝炎、肝癌",
    background: "横浜市立大学医学部卒業。NIH留学を経て現職。日本消化器病学会指導医。",
  },
  {
    name: "鈴木 一郎",
    title: "准教授",
    specialty: "消化管内視鏡学、早期がん診断",
    background: "横浜市立大学医学部卒業。消化管疾患の内視鏡診断・治療が専門。",
  },
  {
    name: "田中 美咲",
    title: "准教授",
    specialty: "炎症性腸疾患、消化管免疫学",
    background: "横浜市立大学医学部卒業。IBDの病態解明と治療最適化に取り組む。",
  },
]

const lecturers = [
  { name: "佐藤 裕子", title: "講師", specialty: "胆膵疾患、ERCP" },
  { name: "山本 健太", title: "講師", specialty: "肝臓がん、IVR" },
  { name: "中村 大輔", title: "講師", specialty: "上部消化管、ヘリコバクター" },
]

const assistants = [
  { name: "伊藤 真理", specialty: "消化管腫瘍", hospital: "附属病院" },
  { name: "小林 翔太", specialty: "肝炎ウイルス学", hospital: "附属病院" },
  { name: "渡辺 あゆみ", specialty: "消化管内視鏡", hospital: "市民総合医療センター" },
  { name: "高橋 優", specialty: "胆膵内視鏡", hospital: "附属病院" },
  { name: "松本 千尋", specialty: "IBD", hospital: "市民総合医療センター" },
  { name: "加藤 隆", specialty: "肝臓病学", hospital: "附属病院" },
]

export default function StaffPage() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* ---- Hero ---- */}
      <section className="relative flex items-center overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="staff-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#staff-grid)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-white/40" aria-label="パンくず">
            <Link href="/" className="transition-colors hover:text-white/70">HOME</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/about" className="transition-colors hover:text-white/70">教室について</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/70">スタッフ紹介</span>
          </nav>
          <p className="font-serif text-sm tracking-[0.15em] text-white/45 italic">Faculty & Staff</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl text-balance">
            スタッフ紹介
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            各分野のエキスパートが集う教室のメンバーをご紹介します。
          </p>
        </div>
      </section>

      {/* ---- 教授・准教授 ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Professors</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              教授・准教授
            </h2>
          </div>

          <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-3">
            {professors.map((p) => (
              <div
                key={p.name}
                className="reveal-child group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-navy/8">
                  <span className="font-serif text-2xl text-navy/40">{p.name.charAt(0)}</span>
                </div>
                <p className="mt-4 text-xs font-medium text-teal">{p.title}</p>
                <h3 className="mt-1 font-serif text-lg font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 text-xs font-medium text-gold">{p.specialty}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-text-sub">
                  {p.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 講師 ---- */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Lecturers</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              講師
            </h2>
          </div>

          <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-3">
            {lecturers.map((l) => (
              <div
                key={l.name}
                className="reveal-child flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <span className="font-serif text-lg text-teal/60">{l.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-teal">{l.title}</p>
                  <h3 className="font-serif text-base font-bold text-foreground">{l.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{l.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 助教 ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Assistant Professors</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              助教・教室員
            </h2>
          </div>

          <div className="reveal-stagger mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {assistants.map((a) => (
              <div
                key={a.name}
                className="reveal-child flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/6">
                  <span className="font-serif text-sm text-navy/40">{a.name.charAt(0)}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground">{a.name}</p>
                  <p className="mt-0.5 text-xs text-gold">助教</p>
                  <p className="mt-1 text-xs text-muted-foreground">{a.specialty}</p>
                  <p className="mt-0.5 text-xs text-text-muted">{a.hospital}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 補足 */}
          <div className="reveal mt-10 rounded-xl border border-border bg-off-white p-6 text-center">
            <p className="text-sm leading-relaxed text-text-sub">
              上記は主要スタッフの一部です。大学院生・後期研修医・研究員を含め、
              約40名の教室員が在籍しています。
            </p>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal rounded-2xl bg-navy p-8 text-center md:p-12">
            <h3 className="font-serif text-xl font-bold text-white md:text-2xl text-balance">
              私たちの仲間になりませんか
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60">
              教室見学や入局に関するご相談を随時受け付けています。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/recruit/visit"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-gold-light hover:gap-3"
              >
                見学・入局相談を申込む
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/50 hover:bg-white/5 hover:text-white"
              >
                教授挨拶を読む
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
