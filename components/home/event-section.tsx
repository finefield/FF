"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Monitor, Stethoscope, MapPin, Phone } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"
import { siteConfig } from "@/lib/data/site-data"

const events = [
  {
    icon: Calendar,
    title: "2026年度 教室説明会（第2回）",
    date: "    date: "2026年5月22日(金) 19:00〜",
    place: "横浜市立大学みなとみらいサテライトキャンパス　横浜ランドマークタワー7F",
    status: "申込受付中",
  },
  {
    icon: Monitor,
    title: "オンライン入局相談会",
    date: "随時受付",
    place: "Zoom（お申し込み後にURLをお送りします）",
    status: "随時開催",
  },
  {
    icon: Stethoscope,
    title: "病院見学",
    date: "随時受付",
    place: "横浜市立大学附属病院ほか各連携病院",
    status: "随時受付",
  },
]

export function EventSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 reveal">
          <h2 className="font-serif text-2xl font-bold text-[#0C2340] md:text-3xl heading-gold-line">
            説明会・見学のご案内
          </h2>
          <p className="mt-4 text-sm text-[#7A8FA8]">
            まず話を聞くだけでも大歓迎です。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Event cards - 3 cols */}
          <div className="flex flex-col gap-5 lg:col-span-3 reveal-stagger">
            {events.map((ev) => {
              const Icon = ev.icon
              return (
                <div
                  key={ev.title}
                  className="reveal-child flex items-start gap-5 rounded-xl border border-[#DCE4EE] bg-white p-6 transition-all hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#147A85]/10">
                    <Icon className="h-5 w-5 text-[#147A85]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-bold text-[#192533]">{ev.title}</h3>
                      <span className="shrink-0 rounded-full bg-[#C4923A]/10 px-3 py-0.5 text-xs font-bold text-[#C4923A]">
                        {ev.status}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-[#3D5168]">{ev.date}</p>
                    <p className="text-sm text-[#7A8FA8]">{ev.place}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA box - 2 cols */}
          <div className="lg:col-span-2 reveal">
            <div className="rounded-xl bg-[#0C2340] p-8 text-white">
              <h3 className="font-serif text-xl font-bold leading-snug">
                まずは見学から。
                <br />
                気軽にご相談ください。
              </h3>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/recruit/visit"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#C4923A] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
                >
                  見学・入局相談を申込む
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/news"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  説明会スケジュールを見る
                </Link>
                <Link
                  href="/recruit/voice"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  先輩医師のVoiceを読む
                </Link>
              </div>

              <div className="mt-6 border-t border-white/15 pt-5 text-sm text-white/50">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C4923A]" />
                  {siteConfig.address}
                </p>
                <p className="mt-1.5 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#C4923A]" />
                  TEL: {siteConfig.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
