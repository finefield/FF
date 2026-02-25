import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Award, Newspaper } from "lucide-react"

export const metadata: Metadata = {
  title: "受賞・メディア掲載",
  description: "当教室の受賞歴とメディア掲載情報です。",
}

const awards = [
  { year: "2026", name: "JDDW若手奨励賞", recipient: "山田太郎（大学院生）", event: "第34回JDDW" },
  { year: "2025", name: "日本消化器病学会 優秀演題賞", recipient: "佐藤花子（助教）", event: "第67回日本消化器病学会" },
  { year: "2025", name: "AGA Best Abstract Award", recipient: "高橋一郎（講師）", event: "DDW 2025 (Chicago)" },
  { year: "2024", name: "日本肝臓学会 研究奨励賞", recipient: "田中美咲（大学院生）", event: "第60回日本肝臓学会" },
  { year: "2024", name: "Emerging Leader Award", recipient: "鈴木健太（助教）", event: "APASL 2024" },
]

const media = [
  { date: "2026.01", title: "AIが胃がんを見つける時代へ - 横浜市大の挑戦", source: "日経メディカル" },
  { date: "2025.10", title: "脂肪肝の新分類MASLD - 当教室の研究成果が注目", source: "医学界新聞" },
  { date: "2025.06", title: "消化器内視鏡の最前線", source: "NHK「クローズアップ現代」" },
  { date: "2024.12", title: "膵がん早期発見への新たなアプローチ", source: "読売新聞 医療面" },
]

export default function AwardsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">Awards & Media</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">受賞・メディア掲載</h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="受賞歴" enTitle="Awards" />
          <div className="flex flex-col gap-4 mb-16">
            {awards.map((a, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Award className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{a.year}</span>
                    <h3 className="font-serif text-sm font-bold text-primary">{a.name}</h3>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{a.recipient} / {a.event}</p>
                </div>
              </div>
            ))}
          </div>

          <SectionHeading title="メディア掲載" enTitle="Media" />
          <div className="flex flex-col gap-4">
            {media.map((m, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <Newspaper className="h-5 w-5 text-teal" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{m.date}</span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">{m.source}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-sm font-bold text-primary">{m.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
