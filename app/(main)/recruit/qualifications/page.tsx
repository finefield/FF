import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Award, TrendingUp, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "専門医・資格取得実績",
  description: "当教室の専門医・資格取得実績をご紹介します。",
}

const qualifications = [
  { name: "消化器病専門医", rate: "95%", period: "平均取得年数: 入局5年目" },
  { name: "消化器内視鏡専門医", rate: "92%", period: "平均取得年数: 入局6年目" },
  { name: "肝臓専門医", rate: "88%", period: "平均取得年数: 入局7年目" },
  { name: "総合内科専門医", rate: "100%", period: "平均取得年数: 入局4年目" },
  { name: "がん治療認定医", rate: "85%", period: "平均取得年数: 入局7年目" },
]

const supports = [
  "専門医試験対策の定期勉強会",
  "模擬試験・過去問の共有",
  "試験前の集中講座",
  "学会参加費の補助制度",
  "試験合格者によるアドバイス会",
  "教科書・参考書の貸し出し",
]

export default function QualificationsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Qualifications
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            専門医・資格取得実績
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="資格取得実績" enTitle="Achievement" align="center" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {qualifications.map((q) => (
              <div key={q.name} className="rounded-xl border border-border bg-card p-6 text-center">
                <Award className="mx-auto h-8 w-8 text-gold" />
                <h3 className="mt-3 font-serif text-base font-bold text-primary">{q.name}</h3>
                <p className="mt-2 font-[family-name:var(--font-playfair-display)] text-3xl font-bold text-teal">
                  {q.rate}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{q.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="資格取得サポート体制" enTitle="Support System" align="center" />
          <div className="grid gap-3 md:grid-cols-2">
            {supports.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-lg bg-card p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-teal" />
                <span className="text-sm text-foreground">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl bg-card border border-border p-6 text-center">
            <TrendingUp className="mx-auto h-8 w-8 text-gold" />
            <p className="mt-3 font-serif text-lg font-bold text-primary">
              過去5年間の専門医試験合格率
            </p>
            <p className="mt-2 font-[family-name:var(--font-playfair-display)] text-5xl font-bold text-gold">
              95<span className="text-2xl">%</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">全国平均を大きく上回る合格率です</p>
          </div>
        </div>
      </section>
    </div>
  )
}
