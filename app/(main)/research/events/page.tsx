import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Calendar, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "学会・イベント情報",
  description: "当教室が参加・開催する学会やイベントの情報です。",
}

const upcoming = [
  { date: "2026.04.10-12", name: "第112回日本消化器病学会総会", place: "東京", type: "学会" },
  { date: "2026.05.15-17", name: "DDW 2026", place: "Washington D.C.", type: "国際学会" },
  { date: "2026.06.20", name: "教室内研究発表会", place: "横浜市立大学", type: "教室内" },
  { date: "2026.07.08-10", name: "第62回日本肝臓学会総会", place: "大阪", type: "学会" },
  { date: "2026.09.18-20", name: "APASL 2026", place: "Bangkok", type: "国際学会" },
  { date: "2026.11.05-08", name: "JDDW 2026", place: "福岡", type: "学会" },
]

const past = [
  { date: "2026.02.15", name: "第15回肝臓病教室", place: "横浜市立大学附属病院" },
  { date: "2025.11.15-17", name: "JDDW 2025", place: "神戸" },
  { date: "2025.10.05", name: "地域連携セミナー 第20回", place: "横浜市立大学" },
]

export default function EventsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">Events</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">学会・イベント情報</h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="今後の予定" enTitle="Upcoming Events" />
          <div className="flex flex-col gap-4 mb-16">
            {upcoming.map((e) => (
              <div key={e.name} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                  <Calendar className="h-6 w-6 text-teal" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-sm font-bold text-primary">{e.name}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <span className="text-xs text-muted-foreground">{e.date}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {e.place}
                    </span>
                  </div>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                  e.type === "国際学会" ? "bg-gold/10 text-gold" : e.type === "学会" ? "bg-teal/10 text-teal" : "bg-muted text-muted-foreground"
                }`}>
                  {e.type}
                </span>
              </div>
            ))}
          </div>

          <SectionHeading title="過去のイベント" enTitle="Past Events" />
          <div className="flex flex-col gap-3">
            {past.map((e) => (
              <div key={e.name} className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 p-4">
                <span className="shrink-0 text-xs text-muted-foreground">{e.date}</span>
                <span className="text-sm text-muted-foreground">{e.name}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                  <MapPin className="h-3 w-3" /> {e.place}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
