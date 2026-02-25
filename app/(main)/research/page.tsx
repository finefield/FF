import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "研究グループ紹介",
  description: "横浜市立大学消化器内科学教室の研究グループをご紹介します。",
}

const groups = [
  {
    name: "消化管グループ",
    nameEn: "Gastrointestinal Group",
    lead: "山田 一郎（准教授）",
    themes: ["消化管がんの分子生物学的研究", "内視鏡AI診断システムの開発", "炎症性腸疾患（IBD）の病態解明と新規治療", "消化管粘膜免疫の基礎研究"],
    description: "食道から大腸までの消化管疾患を対象に、基礎研究と臨床研究の両面からアプローチしています。特に内視鏡AIの開発では、国際的にも注目される成果を上げています。",
  },
  {
    name: "肝臓グループ",
    nameEn: "Hepatology Group",
    lead: "佐藤 二郎（講師）",
    themes: ["ウイルス性肝炎の治療最適化", "MASLD/MASHの病態解明", "肝がん免疫療法のメカニズム研究", "肝線維化の非侵襲的評価法の開発"],
    description: "肝臓疾患の診断から治療まで、最先端の研究に取り組んでいます。特にMASLD/MASH研究と肝がん免疫療法は、複数の国際誌に研究成果を発表しています。",
  },
  {
    name: "胆膵グループ",
    nameEn: "Biliary-Pancreatic Group",
    lead: "高橋 三郎（講師）",
    themes: ["膵がんの早期診断バイオマーカー", "ERCPの新規技術開発", "胆道がんのゲノム解析", "EUS-FNA診断精度の向上"],
    description: "胆道・膵臓疾患は早期診断が困難な領域ですが、新規バイオマーカーの探索やEUS関連技術の革新に取り組み、診断率の向上を目指しています。",
  },
]

export default function ResearchPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Research Groups
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            研究グループ紹介
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col gap-8">
            {groups.map((group) => (
              <article key={group.name} className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="font-[family-name:var(--font-playfair-display)] text-xs tracking-wider text-teal">{group.nameEn}</p>
                <h2 className="mt-1 font-serif text-2xl font-bold text-primary">{group.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">グループリーダー: {group.lead}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
                <div className="mt-4">
                  <p className="text-xs font-medium text-foreground mb-2">主な研究テーマ:</p>
                  <ul className="flex flex-col gap-1.5">
                    {group.themes.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/research/publications" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all">
              論文・業績一覧を見る <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
