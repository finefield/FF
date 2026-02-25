import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "研究トピックス",
  description: "消化器内科学教室の最新研究トピックスをお届けします。",
}

const topics = [
  {
    date: "2026.02",
    title: "AIによる内視鏡画像診断の精度がさらに向上",
    summary: "当教室が開発したAI内視鏡診断システムが、最新のアップデートにより早期胃がんの検出感度99.2%を達成しました。この成果はGastroenterology誌に掲載されました。",
    tags: ["AI", "内視鏡", "消化管"],
  },
  {
    date: "2025.11",
    title: "MASLD/MASHの新規バイオマーカーを発見",
    summary: "肝臓グループの研究チームが、血液検査で脂肪肝の進行度を高精度に判定できる新規バイオマーカーを同定しました。Journal of Hepatologyに掲載されています。",
    tags: ["肝臓", "MASLD", "バイオマーカー"],
  },
  {
    date: "2025.08",
    title: "膵がん早期診断の多施設共同研究が始動",
    summary: "全国10施設と共同で、膵がんの超早期診断を目指した前向き研究を開始しました。EUS-FNAとリキッドバイオプシーを組み合わせた新たな診断アルゴリズムを検証します。",
    tags: ["膵臓", "早期診断", "多施設共同"],
  },
  {
    date: "2025.05",
    title: "腸内細菌叢とIBDの関連に関する大規模研究成果を発表",
    summary: "炎症性腸疾患患者1,000名を対象とした腸内細菌叢の包括的解析結果がNature Communicationsに掲載されました。新たな治療標的候補を複数同定しています。",
    tags: ["IBD", "腸内細菌", "消化管"],
  },
]

export default function TopicsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">Research Topics</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">研究トピックス</h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="最新の研究ニュース" enTitle="Latest Research News" />
          <div className="flex flex-col gap-6">
            {topics.map((topic) => (
              <article key={topic.title} className="rounded-2xl border border-border bg-card p-6">
                <time className="text-xs text-muted-foreground">{topic.date}</time>
                <h2 className="mt-2 font-serif text-lg font-bold text-primary">{topic.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{topic.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-teal/10 px-3 py-0.5 text-xs text-teal">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
