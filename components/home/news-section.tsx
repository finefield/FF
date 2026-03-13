"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { newsItems } from "@/lib/data/site-data"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

const categoryColors: Record<string, string> = {
  "お知らせ": "bg-[#147A85]/10 text-[#147A85]",
  "研究": "bg-[#0C2340]/10 text-[#0C2340]",
  "論文": "bg-[#0C2340]/10 text-[#0C2340]",
  "学会": "bg-[#147A85]/10 text-[#147A85]",
  "説明会": "bg-[#C4923A]/10 text-[#C4923A]",
  "イベント": "bg-[#C4923A]/10 text-[#C4923A]",
  "受賞": "bg-[#C4923A]/10 text-[#C4923A]",
}

export function NewsSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-white py-16 md:py-20 border-b border-[#DCE4EE]" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between mb-10 reveal">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#C4923A] uppercase">
              News & Topics
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#0C2340] md:text-3xl">
              お知らせ・最新情報
            </h2>
            <div className="mt-3 h-[3px] w-10 bg-[#C4923A]" />
          </div>
          <Link
            href="/news"
            className="hidden items-center gap-1 text-sm font-bold text-[#C4923A] transition-all hover:gap-2 md:flex"
          >
            すべて見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-[#DCE4EE] reveal">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col gap-2 py-4 transition-colors hover:bg-[#F4F7FA] md:flex-row md:items-center md:gap-6 md:px-4 md:rounded-lg"
            >
              <time className="shrink-0 text-sm text-[#7A8FA8]">
                {item.date}
              </time>
              <span
                className={`inline-flex w-fit shrink-0 rounded-full px-3 py-0.5 text-xs font-medium ${
                  categoryColors[item.category] || "bg-[#F4F7FA] text-[#7A8FA8]"
                }`}
              >
                {item.category}
              </span>
              <span className="text-sm text-[#192533] group-hover:text-[#147A85] transition-colors">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/news"
          className="mt-6 flex items-center justify-center gap-1 text-sm font-bold text-[#C4923A] transition-all hover:gap-2 md:hidden"
        >
          すべて見る
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
