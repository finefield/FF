"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, FileText, BookOpen, PenTool, Presentation, Award } from "lucide-react"
import { SectionHeading } from "@/components/layout/section-heading"
import publicationsData from "@/lib/data/publications.json"

interface Section {
  section: string
  entries: string[]
}

interface YearData {
  year: number
  source_file: string
  sections: Section[]
}

const data = publicationsData as { years: YearData[] }

const years = data.years.map((y) => y.year).sort((a, b) => b - a)

const sectionIcons: Record<string, React.ReactNode> = {
  "原著論文(症例報告を含む)": <FileText className="h-4 w-4" />,
  "原著論文（症例報告を含む）": <FileText className="h-4 w-4" />,
  "総説": <BookOpen className="h-4 w-4" />,
  "著書": <PenTool className="h-4 w-4" />,
  "学会等発表": <Presentation className="h-4 w-4" />,
  "研究助成金": <Award className="h-4 w-4" />,
}

function PublicationSection({ section, entries }: { section: string; entries: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayCount = 5
  const hasMore = entries.length > displayCount
  const displayedEntries = isExpanded ? entries : entries.slice(0, displayCount)

  const icon = sectionIcons[section] || <FileText className="h-4 w-4" />

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border bg-muted/30 px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </span>
        <h3 className="font-bold text-foreground">{section}</h3>
        <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {entries.length}件
        </span>
      </div>
      <div className="divide-y divide-border/50">
        {displayedEntries.map((entry, i) => {
          // 先頭の「・」を削除
          const cleanEntry = entry.startsWith("・") ? entry.slice(1) : entry
          return (
            <div key={i} className="px-5 py-3">
              <p className="text-sm leading-relaxed text-foreground/90">{cleanEntry}</p>
            </div>
          )
        })}
      </div>
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-center gap-2 border-t border-border bg-muted/20 py-3 text-sm font-medium text-primary transition-colors hover:bg-muted/40"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              閉じる
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              もっと見る（残り{entries.length - displayCount}件）
            </>
          )}
        </button>
      )}
    </div>
  )
}

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState(years[0])

  const yearData = data.years.find((y) => y.year === selectedYear)

  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Publications
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            論文・業績一覧
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="年度別業績一覧" enTitle="Publications by Year" />

          {/* 年度選択タブ */}
          <div className="mb-10 flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {year}年度
              </button>
            ))}
          </div>

          {/* 選択年度のセクション表示 */}
          {yearData && (
            <div className="space-y-6">
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-navy/5 px-4 py-3">
                <span className="text-2xl font-bold text-navy">{selectedYear}</span>
                <span className="text-sm text-muted-foreground">年度 業績集</span>
              </div>
              {yearData.sections.map((section, i) => (
                <PublicationSection
                  key={i}
                  section={section.section}
                  entries={section.entries}
                />
              ))}
            </div>
          )}

          <p className="mt-12 text-center text-sm text-muted-foreground">
            ※ 各年度のPDFファイルは教室事務局にお問い合わせください。
          </p>
        </div>
      </section>
    </div>
  )
}
