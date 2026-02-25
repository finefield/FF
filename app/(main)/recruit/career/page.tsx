import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Microscope, Stethoscope, GraduationCap, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "キャリアパス・ロールモデル",
  description: "消化器内科医としてのキャリアパスとロールモデルをご紹介します。",
}

const careerPaths = [
  {
    icon: Stethoscope,
    title: "臨床のスペシャリスト",
    description: "内視鏡やIVRのエキスパートとして、大学病院や基幹病院で最先端の臨床医療をリードします。",
    examples: ["大学病院 准教授・講師", "基幹病院 消化器内科部長", "内視鏡センター長"],
  },
  {
    icon: Microscope,
    title: "研究者・アカデミア",
    description: "基礎研究・臨床研究を通じて、消化器領域の新たな知見を世界に発信する研究者の道です。",
    examples: ["大学教授", "研究所 主任研究員", "海外大学での研究職"],
  },
  {
    icon: GraduationCap,
    title: "教育者・指導医",
    description: "次世代の消化器内科医を育成する教育のスペシャリストとして活躍します。",
    examples: ["臨床研修指導医", "医学教育センター", "専門医試験委員"],
  },
  {
    icon: Building,
    title: "開業医・地域医療",
    description: "大学での経験を活かし、地域に根差した消化器内科クリニックを開業する道も開かれています。",
    examples: ["消化器内科クリニック開業", "健診センター", "地域の中核医療機関"],
  },
]

const roleModels = [
  {
    name: "佐藤 花子",
    year: "入局12年目",
    position: "大学准教授・内視鏡センター副部長",
    path: "臨床のスペシャリスト",
    message: "内視鏡の技術を極めたいという思いで入局しました。丁寧な指導のおかげで、今では自分が教える立場に。日々新しい技術に触れる環境にやりがいを感じています。",
  },
  {
    name: "鈴木 一郎",
    year: "入局8年目",
    position: "基幹病院 消化器内科医長",
    path: "臨床 + 研究の両立",
    message: "関連病院での豊富な臨床経験と、大学での研究の機会が同時に得られました。留学経験も自分を大きく成長させてくれた貴重な機会でした。",
  },
  {
    name: "田中 美咲",
    year: "入局5年目",
    position: "大学院生・肝臓グループ",
    path: "研究者",
    message: "大学院で肝臓の基礎研究に取り組んでいます。自分の研究が国際誌に掲載された時の喜びは格別です。ワークライフバランスも保ちながら研究に集中できています。",
  },
]

export default function CareerPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Career Path
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            キャリアパス・ロールモデル
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="4つのキャリアルート"
            enTitle="Career Routes"
            align="center"
            subtitle="当教室では、あなたの目標に合わせた多様なキャリアパスを用意しています。"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {careerPaths.map((path) => {
              const Icon = path.icon
              return (
                <div key={path.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary">{path.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{path.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {path.examples.map((ex) => (
                      <span key={ex} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="ロールモデル紹介"
            enTitle="Role Models"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {roleModels.map((model) => (
              <div key={model.name} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/10">
                    <span className="font-serif text-lg text-navy/50">{model.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-serif text-base font-bold text-primary">{model.name}</p>
                    <p className="text-xs text-muted-foreground">{model.year}</p>
                  </div>
                </div>
                <span className="inline-block rounded-full bg-teal/10 px-3 py-0.5 text-xs font-medium text-teal">
                  {model.path}
                </span>
                <p className="mt-2 text-xs text-muted-foreground">{model.position}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{model.message}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
