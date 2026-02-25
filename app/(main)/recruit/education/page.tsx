import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { GraduationCap, Target, Award, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "教育・研修の特徴",
  description: "横浜市立大学消化器内科学教室の教育・研修プログラムの特徴をご紹介します。",
}

const programs = [
  {
    year: "1-2年目",
    title: "基礎臨床研修",
    items: ["消化器内科一般の基礎習得", "上部消化管内視鏡検査の基本手技", "腹部超音波検査の基本", "学会発表（地方会）"],
  },
  {
    year: "3-4年目",
    title: "専門研修",
    items: ["消化器病専門医取得を目指した研修", "下部消化管内視鏡検査", "ERCP, EUS等の高度手技への導入", "論文執筆指導"],
  },
  {
    year: "5-6年目",
    title: "サブスペシャリティ研修",
    items: ["専門分野（肝臓・胆膵・消化管）の深化", "海外留学の機会", "臨床研究の立案・実施", "国際学会での発表"],
  },
  {
    year: "7年目以降",
    title: "指導医・リーダーシップ",
    items: ["後進の指導", "研究グループのリーダー", "関連病院での部長職", "独立した研究者・臨床医として活躍"],
  },
]

const highlights = [
  {
    icon: GraduationCap,
    title: "段階的なカリキュラム",
    description: "基礎から高度な手技まで、段階的に習得できる教育プログラムを構築しています。",
  },
  {
    icon: Target,
    title: "個別指導体制",
    description: "一人ひとりの進度と目標に合わせた指導体制で、確実なスキルアップをサポートします。",
  },
  {
    icon: Award,
    title: "高い資格取得率",
    description: "専門医・指導医の資格取得率は95%以上。試験対策も充実しています。",
  },
  {
    icon: Clock,
    title: "ワークライフバランス",
    description: "効率的な当直体制と適切な休暇取得を推進し、長く活躍できる環境を整えています。",
  },
]

export default function EducationPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Education & Training
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            教育・研修の特徴
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="教育プログラムの特徴"
            enTitle="Program Highlights"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="研修カリキュラム"
            enTitle="Curriculum"
            align="center"
            subtitle="年次ごとの研修内容と到達目標をご紹介します。"
          />
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:block" />
            <div className="flex flex-col gap-8">
              {programs.map((program, i) => (
                <div
                  key={program.year}
                  className={`relative flex flex-col gap-4 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 md:w-1/2" />
                  <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 h-8 w-8 items-center justify-center rounded-full bg-gold text-accent-foreground text-xs font-bold z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 md:w-1/2">
                    <div className="rounded-xl border border-border bg-card p-6">
                      <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                        {program.year}
                      </span>
                      <h3 className="mt-2 font-serif text-lg font-bold text-primary">
                        {program.title}
                      </h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {program.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
