"use client"

import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

const historyEras = [
  {
    era: "1",
    title: "源流：十全医院から横浜市立医科大学へ",
    subtitle: "明治初期〜昭和20年代",
    description: "横浜市立大学の医学教育の歴史は、明治初期まで遡ります。",
    events: [
      { year: "1871年（明治4年）", event: "横浜・野毛山に「十全医院」が設立。これが現在の横浜市立大学附属病院の源流となります。" },
      { year: "1944年（昭和19年）", event: "横浜市立医学専門学校を設置。" },
      { year: "1947年（昭和22年）", event: "横浜市立医科大学へ昇格。内科学講座が編成され、高度な専門医療の礎が築かれました。" },
    ],
  },
  {
    era: "2",
    title: "第2内科・第3内科の時代（専門分化の始まり）",
    subtitle: "昭和30年代〜平成初期",
    description: "高度経済成長期から平成初期にかけ、内科学はより専門的な領域へと分化していきます。",
    events: [
      { year: "1954年（昭和29年）", event: "「第2内科」が開設。初代教授に今井 光之助が就任。消化器、循環器、代謝、内分泌を網羅する広範な教室としてスタート。" },
      { year: "1973年（昭和48年）", event: "「第3内科」が開設。第2内科より消化器・代謝部門が分離・独立し、より専門性の高い消化器病学の研究が加速しました。" },
    ],
  },
  {
    era: "3",
    title: "2病院体制の確立と「消化器内科学」への統合",
    subtitle: "平成3年〜平成15年",
    description: "大学の組織改編と附属病院の機能分担が進み、現在の体制へと繋がります。",
    events: [
      { year: "1991年（平成3年）", event: "金沢区に「横浜市立大学附属病院」が新築移転。南区浦舟の旧病院跡地に「附属市民総合医療センター（センター病院）」が開設。" },
      { year: "2003年（平成15年）", event: "医局講座制の再編（大学院化）に伴い、第2内科と第3内科が統合。現在の「消化器内科学（Gastroenterology）」として一本化されました。" },
    ],
  },
  {
    era: "4",
    title: "現在：世界をリードする臨床・研究拠点へ",
    subtitle: "平成22年〜現在",
    description: "附属病院と附属市民総合医療センターの二つの拠点が連携し、世界をリードする研究成果を発信し続けています。",
    events: [
      { year: "2010年（平成22年）", event: "中島 淳 教授が就任。" },
      { year: "2015年（平成27年）", event: "附属市民総合医療センター 消化器病センターに前田 愼 教授が就任。" },
      { year: "現在", event: "附属病院（中島 淳 教授）と附属市民総合医療センター（前田 愼 教授）の二つの拠点が連携し、便秘症・脂肪肝（NAFLD/NASH）・炎症性腸疾患（IBD）・早期がんの内視鏡治療など、多岐にわたる分野で世界をリードする研究成果を発信し続けています。" },
    ],
  },
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
            <span className="text-white/70">教室の沿革</span>
          </nav>
          <p className="font-serif text-sm tracking-[0.15em] text-white/45 italic">History</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl text-balance">
            教室の沿革
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            明治4年の十全医院設立から150年以上の歴史を持つ横浜市立大学医学部。
            消化器内科学教室の歩みをご紹介します。
          </p>
        </div>
      </section>

      {/* ---- 沿革タイムライン ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Our History</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              150年の歩み
            </h2>
          </div>

          <div className="mt-16 space-y-16">
            {historyEras.map((era, eraIndex) => (
              <div key={era.era} className="reveal">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-white font-serif text-xl font-bold shadow-lg">
                    {era.era}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-gold">{era.subtitle}</p>
                    <h3 className="mt-1 font-serif text-xl font-bold text-foreground md:text-2xl">
                      {era.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-sub">
                      {era.description}
                    </p>
                  </div>
                </div>

                <div className="reveal-stagger mt-8 ml-7 border-l-2 border-gold/30 pl-12 md:ml-7 md:pl-16">
                  {era.events.map((item, i) => (
                    <div key={i} className="reveal-child relative pb-8 last:pb-0">
                      <div className="absolute -left-[calc(3rem+5px)] top-1.5 h-3 w-3 rounded-full bg-gold md:-left-[calc(4rem+5px)]" />
                      <p className="font-serif text-base font-bold text-navy md:text-lg">{item.year}</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-text-sub">{item.event}</p>
                    </div>
                  ))}
                </div>

                {eraIndex < historyEras.length - 1 && (
                  <div className="mt-12 border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-off-white py-16 md:py-20">
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
