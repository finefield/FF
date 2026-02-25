import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { ArrowRight, FlaskConical, BookOpen, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "研究紹介",
  description: "入局希望者向けの研究活動紹介ページです。",
}

const themes = [
  {
    title: "消化管領域",
    description: "炎症性腸疾患の病態解明、消化管がんの早期診断・治療法の開発に取り組んでいます。",
    topics: ["内視鏡AI診断", "IBDの新規治療", "消化管がんゲノム解析"],
  },
  {
    title: "肝臓領域",
    description: "ウイルス性肝炎、MASLD/MASHの病態研究、肝がんの新規治療法の開発を行っています。",
    topics: ["肝線維化バイオマーカー", "MASLD/MASH研究", "肝がん免疫療法"],
  },
  {
    title: "胆膵領域",
    description: "膵がんの早期診断法、胆道がんの分子標的治療、ERCPの新規技術開発を推進しています。",
    topics: ["膵がん早期診断", "胆道がん分子標的治療", "EUS-FNA技術革新"],
  },
]

const researchStats = [
  { icon: FlaskConical, number: "120+", label: "年間論文数" },
  { icon: BookOpen, number: "15+", label: "年間国際学会発表" },
  { icon: Globe, number: "8", label: "海外留学実績（過去5年）" },
]

export default function RecruitResearchPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Research Overview
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            研究紹介
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80 text-sm">
            入局後の研究環境と主要な研究テーマをご紹介します。
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {researchStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                  <Icon className="h-8 w-8 text-teal" />
                  <p className="mt-3 font-[family-name:var(--font-playfair-display)] text-3xl font-bold text-gold">{stat.number}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>

          <SectionHeading title="主要研究テーマ" enTitle="Research Themes" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {themes.map((theme) => (
              <div key={theme.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-primary">{theme.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{theme.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {theme.topics.map((topic) => (
                    <span key={topic} className="rounded-full bg-teal/10 px-3 py-1 text-xs text-teal">{topic}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/research" className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-all hover:gap-3">
              研究業績の詳細を見る <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
