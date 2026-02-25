"use client"

import { FileText, Presentation, Tv } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

const items = [
  {
    icon: FileText,
    label: "論文",
    number: "100+",
    unit: "本/年",
    detail: "Hepatology・Gut・Gastroenterology 等の主要ジャーナルに継続掲載",
  },
  {
    icon: Presentation,
    label: "学会",
    number: "80+",
    unit: "件/年",
    detail: "DDW・EASL・AASLD・日本消化器病学会等の国内外主要学会",
  },
  {
    icon: Tv,
    label: "メディア",
    number: "30+",
    unit: "件",
    detail: "全国紙・専門誌・TV出演等、社会から注目される研究成果",
  },
]

export function ResearchSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-[#0C2340] py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-14 reveal">
          <h2 className="font-serif text-2xl font-bold text-white md:text-3xl text-balance">
            論文・学会・メディア、数字が証明する研究力。
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-[#C4923A]" />
        </div>

        <div className="grid gap-6 md:grid-cols-3 reveal-stagger">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="reveal-child group relative rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10 overflow-hidden"
              >
                {/* Top gradient border on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to right, #C4923A, #147A85)" }}
                />

                <div className="flex items-center gap-3 mb-5">
                  <Icon className="h-5 w-5 text-[#1DA8B8]" />
                  <span className="text-sm font-bold tracking-wider text-white/60">{item.label}</span>
                </div>

                <p className="font-serif text-4xl font-bold text-[#E8B96A]">
                  {item.number}
                  <span className="ml-1 text-base font-normal text-white/50">{item.unit}</span>
                </p>

                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  {item.detail}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
