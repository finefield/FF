import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Calendar, Users, BookOpen, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "肝臓病教室のご案内",
  description: "患者さんと地域の方を対象とした肝臓病教室の開催情報です。",
}

const schedule = [
  { date: "2026年3月15日（土）", topic: "脂肪肝と生活習慣 - MASLD/MASHの最新情報", speaker: "肝臓グループ 田中医師" },
  { date: "2026年5月17日（土）", topic: "B型・C型肝炎の最新治療", speaker: "肝臓グループ 山田医師" },
  { date: "2026年7月19日（土）", topic: "肝臓がんの早期発見と治療", speaker: "肝臓グループ 佐藤医師" },
  { date: "2026年9月20日（土）", topic: "お薬と肝臓 - 薬剤性肝障害について", speaker: "薬剤部 高橋薬剤師" },
]

export default function LiverSchoolPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-teal to-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-white/70">
            Liver School
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            肝臓病教室のご案内
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80 text-sm">
            患者さんやご家族、地域の方を対象に、肝臓の病気について学ぶ教室を開催しています。
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="flex gap-3 rounded-xl border border-border bg-card p-5">
              <Calendar className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-serif text-sm font-bold text-primary">開催頻度</p>
                <p className="mt-1 text-sm text-muted-foreground">年4回（3月・5月・7月・9月）</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl border border-border bg-card p-5">
              <MapPin className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-serif text-sm font-bold text-primary">会場</p>
                <p className="mt-1 text-sm text-muted-foreground">横浜市立大学附属病院 講堂</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl border border-border bg-card p-5">
              <Users className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-serif text-sm font-bold text-primary">対象</p>
                <p className="mt-1 text-sm text-muted-foreground">患者さん・ご家族・地域の方どなたでも</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl border border-border bg-card p-5">
              <BookOpen className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-serif text-sm font-bold text-primary">参加費</p>
                <p className="mt-1 text-sm text-muted-foreground">無料（事前予約不要）</p>
              </div>
            </div>
          </div>

          <SectionHeading title="今年度のスケジュール" enTitle="Schedule" />
          <div className="flex flex-col gap-4">
            {schedule.map((s) => (
              <div key={s.date} className="rounded-xl border border-border bg-card p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
                  <span className="shrink-0 rounded-full bg-teal/10 px-4 py-1 text-sm font-medium text-teal">
                    {s.date}
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-bold text-primary">{s.topic}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">講師: {s.speaker}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
