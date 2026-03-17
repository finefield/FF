"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { newsItems } from "@/lib/data/site-data"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

const categoryColors: Record<string, string> = {
  "受賞": "bg-gold/10 text-gold",
  "お知らせ": "bg-teal/10 text-teal",
  "論文": "bg-navy/10 text-navy",
  "説明会": "bg-gold/10 text-gold",
  "学会": "bg-teal/10 text-teal",
  "イベント": "bg-secondary/10 text-secondary",
}

const INITIAL_DISPLAY_COUNT = 7

export default function NewsPage() {
  const [showAll, setShowAll] = useState(false)
  const displayedNews = showAll ? newsItems : newsItems.slice(0, INITIAL_DISPLAY_COUNT)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0C2340] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-[#C4923A]">
            News & Updates
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            NEWS・お知らせ
          </h1>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="お知らせ一覧" enTitle="All News" />
          <div className="flex flex-col divide-y divide-border">
            {displayedNews.map((item) => (
              <Link 
                key={item.id} 
                href={item.href}
                className="group flex flex-col gap-2 py-5 transition-colors hover:bg-off-white md:flex-row md:items-center md:gap-4 md:rounded-lg md:px-4"
              >
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
                <h2 className="flex-1 text-sm font-medium text-foreground transition-colors group-hover:text-teal">
                  {item.title}
                </h2>
                <ArrowRight className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-teal md:block" />
              </Link>
            ))}
          </div>

          {/* Show All / Collapse Button */}
          {newsItems.length > INITIAL_DISPLAY_COUNT && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-navy shadow-sm transition-colors hover:bg-off-white"
              >
                {showAll ? (
                  <>
                    閉じる
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    全てを表示（残り{newsItems.length - INITIAL_DISPLAY_COUNT}件）
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
