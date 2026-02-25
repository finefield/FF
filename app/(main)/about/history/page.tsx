"use client"

import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

const missions = [
  {
    title: "診療",
    description: "患者さん一人ひとりに最善の医療を提供し、生活の質の向上に貢献します。",
  },
  {
    title: "研究",
    description: "消化器疾患の病態解明と新規治療法の開発を通じて、医学の発展に寄与します。",
  },
  {
    title: "教育",
    description: "次世代の消化器内科医を育成し、地域医療と学術の発展を支える人材を輩出します。",
  },
  {
    title: "地域貢献",
    description: "地域の医療機関と連携し、切れ目のない医療を提供することで、市民の健康を守ります。",
  },
]

const timeline = [
  { year: "1949", event: "横浜医科大学（現 横浜市立大学医学部）に内科学教室が設立" },
  { year: "1960年代", event: "消化器グループが内科学教室内に発足" },
  { year: "1970年代", event: "内視鏡診断・治療の先駆的研究を開始" },
  { year: "1980年代", event: "肝臓疾患研究が本格化。B型肝炎治療の臨床研究" },
  { year: "1990年代", event: "C型肝炎のインターフェロン治療研究で全国をリード" },
  { year: "2000年代", event: "消化器内科学教室として独立。ESDなど内視鏡治療の発展" },
  { year: "2010年代", event: "分子標的治療・免疫療法の臨床研究を推進。国際共同研究を拡大" },
  { year: "2020年代", event: "AI診断支援・個別化医療の研究を開始。地域連携をさらに強化" },
]

export default function HistoryPage() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* ---- Hero ---- */}
      <section className="relative flex items-center overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="history-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#history-grid)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-white/40" aria-label="パンくず">
            <Link href="/" className="transition-colors hover:text-white/70">HOME</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/about" className="transition-colors hover:text-white/70">教室について</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/70">沿革・ミッション</span>
          </nav>
          <p className="font-serif text-sm tracking-[0.15em] text-white/45 italic">History & Mission</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl text-balance">
            教室の沿革・ミッション
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            1949年の設立から現在に至るまでの歩みと、
            私たちが掲げる4つのミッションをご紹介します。
          </p>
        </div>
      </section>

      {/* ---- ミッション ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Our Mission</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              私たちのミッション
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] text-text-sub leading-relaxed">
              横浜市立大学消化器内科学教室は、4つの柱を掲げ、消化器医学の未来を切り拓きます。
            </p>
          </div>

          <div className="reveal-stagger mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {missions.map((m, i) => (
              <div
                key={m.title}
                className="reveal-child rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-serif text-lg font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-foreground">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-sub">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- タイムライン ---- */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">History</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              沿革
            </h2>
          </div>

          <div className="reveal-stagger mx-auto mt-14 max-w-3xl">
            <div className="relative border-l-2 border-gold/30 pl-8 md:pl-12">
              {timeline.map((item, i) => (
                <div key={i} className="reveal-child relative pb-10 last:pb-0">
                  <div className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gold md:-left-[calc(3rem+5px)]" />
                  <p className="font-serif text-lg font-bold text-gold-light md:text-xl">{item.year}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-text-sub">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:gap-3"
            >
              教授挨拶を読む
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about/staff"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:gap-3"
            >
              スタッフ紹介を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
