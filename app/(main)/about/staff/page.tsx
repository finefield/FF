"use client"

import Link from "next/link"
import { ChevronRight, ArrowRight, Building2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

/* ---- 教授陣 ---- */
const professors = [
  {
    name: "前田 愼",
    year: "H05",
    title: "主任教授",
    affiliation: "消化器内科学教室",
  },
  {
    name: "稲森 正彦",
    year: "H08",
    title: "教授",
    affiliation: "医学部 医学教育学",
  },
  {
    name: "森本 学",
    year: "H01",
    title: "診療教授",
    affiliation: "附属市民総合医療センター 消化器病センター 部長・肝疾患医療センター長",
  },
]

/* ---- 准教授 ---- */
const associateProfessors = [
  {
    name: "国崎 玲子",
    year: "H05",
    title: "准教授",
    affiliation: "附属市民総合医療センター 炎症性腸疾患（IBD）センター 担当部長",
  },
  {
    name: "野﨑 昭人",
    year: "H08",
    title: "准教授",
    affiliation: "附属市民総合医療センター 輸血部 部長・消化器病センター・臨床研究部 部長・治験管理室・次世代臨床研究センター",
    specialty: "肝疾患",
  },
  {
    name: "平澤 欣吾",
    year: "H09",
    title: "准教授",
    affiliation: "附属市民総合医療センター 消化器病センター・内視鏡部 部長",
  },
]

/* ---- 講師 ---- */
const lecturers = [
  {
    name: "桐越 博之",
    year: "H07",
    affiliation: "附属病院 臨床検査部 部長",
    specialty: "肝疾患",
  },
  {
    name: "三輪 治生",
    year: "H18",
    affiliation: "附属市民総合医療センター 消化器病センター",
    specialty: "肝胆膵疾患",
  },
  {
    name: "須江 聡一郎",
    year: "H19",
    affiliation: "附属病院",
    specialty: "消化管疾患",
  },
]

/* ---- 助教 ---- */
const assistantProfessors = [
  { name: "佐藤 知子", year: "H17", affiliation: "附属市民総合医療センター 消化器病センター・内視鏡部", specialty: "消化管疾患" },
  { name: "入江 邦泰", year: "H19", affiliation: "附属病院", specialty: "肝胆膵疾患" },
  { name: "金子 裕明", year: "H19", affiliation: "附属病院", specialty: "消化管疾患" },
  { name: "合田 賢弘", year: "H20", affiliation: "附属病院", specialty: "肝胆膵疾患" },
  { name: "小林 亮介", year: "H20", affiliation: "附属市民総合医療センター 消化器病センター・内視鏡部", specialty: "消化管疾患" },
  { name: "池田 良輔", year: "H22", affiliation: "附属病院", specialty: "消化管疾患" },
  { name: "岩田 悠里", year: "H22", affiliation: "臨床研修センター" },
  { name: "小宮山 哲史", year: "H22", affiliation: "附属市民総合医療センター 化学療法部・消化器病センター" },
  { name: "西尾 匡史", year: "H22", affiliation: "附属市民総合医療センター 消化器病センター・内視鏡部", specialty: "消化管疾患" },
  { name: "池田 礼", year: "H23", affiliation: "附属病院" },
  { name: "澤田 敦史", year: "H23", affiliation: "附属市民総合医療センター 消化器病センター・内視鏡部" },
  { name: "杉森 慎", year: "H25", affiliation: "附属市民総合医療センター がんゲノム診療科・消化器病センター" },
  { name: "露木 翔", year: "H25", affiliation: "附属病院 臨床腫瘍科" },
  { name: "鈴木 良優", year: "H26", affiliation: "附属病院 緩和ケア内科" },
  { name: "中森 義典", year: "H26", affiliation: "附属市民総合医療センター IBDセンター" },
  { name: "遠藤 和樹", year: "H27", affiliation: "附属市民総合医療センター" },
  { name: "大石 梨津子", year: "H27", affiliation: "附属市民総合医療センター" },
  { name: "鈴木 悠一", year: "H27", affiliation: "附属市民総合医療センター" },
  { name: "林 慧", year: "H27", affiliation: "附属市民総合医療センター" },
  { name: "舩岡 昭宏", year: "H27", affiliation: "附属市民総合医療センター" },
  { name: "佐藤 博紀", year: "H28", affiliation: "附属病院 救急科" },
]

/* ---- 大学院生・教室員 ---- */
const graduateStudents = [
  { name: "稲垣 尚子", year: "H19", affiliation: "データサイエンス研究科" },
  { name: "廣谷 あかね", year: "H23", affiliation: "附属市民総合医療センター がんゲノム診療科・消化器病センター" },
  { name: "河野 邦幸", year: "H24", affiliation: "免疫学教室（大学院生）" },
  { name: "小野寺 翔", year: "H25", affiliation: "附属病院（大学院生）" },
  { name: "金丸 雄志", year: "H27", affiliation: "附属病院（大学院生）" },
  { name: "住田 純子", year: "H27", affiliation: "附属病院（大学院生）" },
  { name: "土屋 洋省", year: "H27", affiliation: "附属市民総合医療センター（大学院生）" },
  { name: "濱口 智美", year: "H28", affiliation: "附属病院" },
  { name: "厚坂 励生", year: "H29", affiliation: "附属市民総合医療センター" },
  { name: "東 大輔", year: "H29", affiliation: "附属市民総合医療センター" },
  { name: "角田 翔太郎", year: "H29", affiliation: "附属市民総合医療センター" },
  { name: "松岡 裕人", year: "H29", affiliation: "附属病院" },
  { name: "谷口 勝城", year: "H29", affiliation: "附属市民総合医療センター IBDセンター" },
  { name: "石野 勇康", year: "H30", affiliation: "附属市民総合医療センター" },
  { name: "金村 知樹", year: "H30", affiliation: "附属市民総合医療センター" },
  { name: "春山 芹奈", year: "H30", affiliation: "附属市民総合医療センター IBDセンター" },
  { name: "諸橋 啓太", year: "H30", affiliation: "附属市民総合医療センター" },
  { name: "柴崎 梢", year: "H31", affiliation: "附属市民総合医療センター" },
  { name: "菅 悠紀", year: "H31", affiliation: "附属市民総合医療センター" },
  { name: "山下 啓和", year: "H31", affiliation: "附属市民総合医療センター" },
  { name: "坂井 音々", year: "R2", affiliation: "附属市民総合医療センター" },
  { name: "相馬 亮", year: "R2", affiliation: "附属市民総合医療センター" },
  { name: "野崎 公雄", year: "R2", affiliation: "附属市民総合医療センター" },
  { name: "古川 翼", year: "R2", affiliation: "附属市民総合医療センター" },
  { name: "鎌田 直樹", year: "R3", affiliation: "附属市民総合医療センター" },
  { name: "立野 瑞樹", year: "R3", affiliation: "附属市民総合医療センター" },
  { name: "藤吉 朋子", year: "R3", affiliation: "附属市民総合医療センター" },
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

          {/* 人数サマリー */}
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              { label: "教授", count: professors.length },
              { label: "准教授", count: associateProfessors.length },
              { label: "講師", count: lecturers.length },
              { label: "助教", count: assistantProfessors.length },
              { label: "大学院生・教室員", count: graduateStudents.length },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-gold">{item.count}</p>
                <p className="mt-1 text-xs text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 教授・診療教授 ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Professors</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              教授・診療教授
            </h2>
          </div>

          <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-3">
            {professors.map((p) => (
              <div
                key={p.name}
                className="reveal-child group rounded-2xl border-2 border-gold/20 bg-gradient-to-b from-gold/5 to-transparent p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/15">
                  <span className="font-serif text-2xl text-gold">{p.name.charAt(0)}</span>
                </div>
                <span className="mt-4 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                  {p.title}
                </span>
                <h3 className="mt-3 font-serif text-xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">卒年：{p.year}</p>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-text-sub">
                  <Building2 className="h-3.5 w-3.5" />
                  {p.affiliation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 准教授 ---- */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Associate Professors</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              准教授
            </h2>
          </div>

          <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-3">
            {associateProfessors.map((p) => (
              <div
                key={p.name}
                className="reveal-child group rounded-2xl border border-teal/20 bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
                  <span className="font-serif text-xl text-teal">{p.name.charAt(0)}</span>
                </div>
                <span className="mt-4 inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">
                  {p.title}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">卒年：{p.year}</p>
                <p className="mt-3 text-xs leading-relaxed text-text-sub">
                  {p.affiliation}
                </p>
                {p.specialty && (
                  <p className="mt-2 text-xs text-gold">専門：{p.specialty}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 講師 ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Lecturers</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              講師
            </h2>
          </div>

          <div className="reveal-stagger mt-14 grid gap-5 md:grid-cols-3">
            {lecturers.map((l) => (
              <div
                key={l.name}
                className="reveal-child flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy/8">
                  <span className="font-serif text-lg text-navy/60">{l.name.charAt(0)}</span>
                </div>
                <div className="min-w-0">
                  <span className="inline-block rounded bg-navy/10 px-2 py-0.5 text-[10px] font-bold text-navy">
                    講師
                  </span>
                  <h3 className="mt-1 font-serif text-base font-bold text-foreground">{l.name}</h3>
                  <p className="text-xs text-muted-foreground">卒年：{l.year}</p>
                  <p className="mt-2 text-xs text-text-sub">{l.affiliation}</p>
                  {l.specialty && (
                    <p className="mt-1 text-xs text-gold">専門：{l.specialty}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 助教 ---- */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Assistant Professors</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              助教
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{assistantProfessors.length}名</p>
          </div>

          <div className="reveal-stagger mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {assistantProfessors.map((a) => (
              <div
                key={a.name}
                className="reveal-child flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/8">
                  <span className="font-serif text-sm text-teal/70">{a.name.charAt(0)}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground">{a.name}</p>
                  <p className="text-[11px] text-muted-foreground">卒年：{a.year}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-text-sub">{a.affiliation}</p>
                  {a.specialty && (
                    <p className="mt-1 text-[11px] text-gold">専門：{a.specialty}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 大学院生・教室員 ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Graduate Students & Fellows</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              大学院生・教室員
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{graduateStudents.length}名</p>
          </div>

          <div className="reveal-stagger mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {graduateStudents.map((g) => (
              <div
                key={g.name}
                className="reveal-child flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy/6">
                  <span className="text-xs text-navy/50">{g.name.charAt(0)}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground">{g.name}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {g.year}卒 / {g.affiliation}
                  </p>
                </div>
              </div>
            ))}
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
