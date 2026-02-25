import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "NEWS・お知らせ",
  description:
    "横浜市立大学消化器内科学教室の最新ニュース・お知らせ一覧です。",
}

const newsItems = [
  {
    date: "2026.02.15",
    category: "受賞",
    title: "当教室の研究員が日本消化器病学会奨励賞を受賞しました",
  },
  {
    date: "2026.02.01",
    category: "お知らせ",
    title: "2026年度 消化器内科後期研修プログラムの募集を開始しました",
  },
  {
    date: "2026.01.20",
    category: "論文",
    title: "MASLD/MASHに関する研究論文がGastroenterologyに掲載されました",
  },
  {
    date: "2026.01.10",
    category: "イベント",
    title: "第48回消化器疾患症例検討会を3月15日に開催します",
  },
  {
    date: "2025.12.25",
    category: "お知らせ",
    title: "年末年始の外来診療スケジュールについて",
  },
  {
    date: "2025.12.15",
    category: "受賞",
    title: "教室員がDDW 2025でBest Poster Awardを受賞",
  },
  {
    date: "2025.12.01",
    category: "論文",
    title: "IBDの新規バイオマーカーに関する論文がGut誌に掲載",
  },
  {
    date: "2025.11.20",
    category: "イベント",
    title: "肝臓病教室を開催しました（参加者50名）",
  },
  {
    date: "2025.11.10",
    category: "お知らせ",
    title: "当教室ホームページをリニューアルしました",
  },
  {
    date: "2025.10.25",
    category: "受賞",
    title: "APDW 2025にて教室員が口演発表、優秀演題賞を受賞",
  },
]

const categoryColors: Record<string, string> = {
  "受賞": "bg-gold/10 text-gold",
  "お知らせ": "bg-teal/10 text-teal",
  "論文": "bg-navy/10 text-navy",
  "イベント": "bg-secondary/10 text-secondary",
}

export default function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            News & Updates
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            {"NEWS\u30FB\u304A\u77E5\u3089\u305B"}
          </h1>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="お知らせ一覧" enTitle="All News" />
          <div className="flex flex-col divide-y divide-border">
            {newsItems.map((item, i) => (
              <article key={i} className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:gap-4">
                <time className="shrink-0 text-sm font-medium text-muted-foreground md:w-28">
                  {item.date}
                </time>
                <span
                  className={`inline-block w-fit shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    categoryColors[item.category] || "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.category}
                </span>
                <h2 className="text-sm font-medium text-foreground hover:text-secondary cursor-pointer transition-colors">
                  {item.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
