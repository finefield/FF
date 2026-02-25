"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-animation"
import { ArrowRight, Stethoscope, Microscope, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

/* ── 3つのキャリアルートデータ ── */
const routes = [
  {
    id: "clinical",
    label: "臨床重点ルート",
    icon: Stethoscope,
    color: "teal",
    tagline: "内視鏡・IVRのエキスパートとして\n最前線で臨床をリードする道",
    goal: "大学病院部長 / 基幹病院消化器センター長",
    steps: [
      { year: "1-2年目", title: "初期臨床研修", desc: "内科全般のローテーションで基盤を構築。2年目に消化器内科を重点的に経験。", tag: "附属病院 / センター病院" },
      { year: "3-5年目", title: "後期研修（専攻医）", desc: "内科専門医を取得しながら、上下部内視鏡・ERCPなど基本手技を習得。", tag: "大学病院 + 関連病院ローテーション" },
      { year: "6-8年目", title: "臨床フェロー", desc: "消化器専門医取得。ESD・ERCP等の高難度手技の修練を積む。大学院進学も可。", tag: "大学病院 / がんセンター" },
      { year: "9-12年目", title: "スタッフ / 関連病院", desc: "内視鏡指導医として後進を育成。関連病院での部長職や大学での講師を目指す。", tag: "基幹病院部長 / 大学講師" },
      { year: "13年目-", title: "指導的立場", desc: "内視鏡センター長や消化器内科部長として診療体制を統括。", tag: "大学准教授 / 病院部門長" },
    ],
  },
  {
    id: "research",
    label: "研究重点ルート",
    icon: Microscope,
    color: "navy",
    tagline: "消化器領域の未知に挑み\n世界に成果を発信する研究者の道",
    goal: "大学教授 / 研究所主任研究員",
    steps: [
      { year: "1-2年目", title: "初期臨床研修", desc: "初期研修中に学会発表を経験し、リサーチマインドを育てる。", tag: "附属病院 / センター病院" },
      { year: "3-5年目", title: "後期研修 + 大学院入学", desc: "専攻医と並行して大学院に進学。臨床研究・基礎研究のテーマを設定。", tag: "大学病院 + 大学院" },
      { year: "6-8年目", title: "大学院・博士取得", desc: "博士論文をまとめ学位を取得。国際学会での発表やトップジャーナルへの投稿。", tag: "大学院 / 国内留学" },
      { year: "9-12年目", title: "海外留学・ポスドク", desc: "海外一流ラボでの研究経験。グローバルなネットワークを構築。", tag: "海外研究機関 (1-3年)" },
      { year: "13年目-", title: "独立研究者", desc: "帰国後、自身の研究室を主宰。PI（研究責任者）として大型研究費を獲得。", tag: "大学准教授・教授 / 研究所PI" },
    ],
  },
  {
    id: "community",
    label: "開業・地域医療ルート",
    icon: Building2,
    color: "gold",
    tagline: "大学で培った専門性を活かし\n地域に根差した医療を提供する道",
    goal: "消化器内科クリニック院長 / 地域中核病院部長",
    steps: [
      { year: "1-2年目", title: "初期臨床研修", desc: "幅広い症例を経験し、全人的な医療の視点を養う。", tag: "附属病院 / センター病院" },
      { year: "3-5年目", title: "後期研修（専攻医）", desc: "内科専門医取得。内視鏡の基本手技をしっかりと身につける。", tag: "大学病院 + 関連病院" },
      { year: "6-8年目", title: "消化器専門医取得", desc: "消化器専門医・内視鏡専門医を取得。関連病院でマネジメント経験を積む。", tag: "関連病院" },
      { year: "9-12年目", title: "開業準備 / 地域中核", desc: "経営や在宅医療の知識を修得。開業場所の選定やクリニック設計を計画。", tag: "基幹病院 / 開業準備" },
      { year: "13年目-", title: "開業 / 院長", desc: "大学病院との連携を維持しながら、地域のかかりつけ消化器専門医として活躍。", tag: "クリニック院長 / 地域中核病院" },
    ],
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; light: string; dot: string; tab: string; tabActive: string }> = {
  teal: {
    bg: "bg-teal/10",
    text: "text-teal",
    border: "border-teal/30",
    light: "bg-teal/5",
    dot: "bg-teal",
    tab: "hover:bg-teal/10 hover:text-teal",
    tabActive: "bg-teal text-white shadow-lg",
  },
  navy: {
    bg: "bg-navy/10",
    text: "text-navy",
    border: "border-navy/30",
    light: "bg-navy/5",
    dot: "bg-navy",
    tab: "hover:bg-navy/10 hover:text-navy",
    tabActive: "bg-navy text-white shadow-lg",
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold/30",
    light: "bg-gold/5",
    dot: "bg-gold",
    tab: "hover:bg-gold/10 hover:text-gold",
    tabActive: "bg-gold text-white shadow-lg",
  },
}

export default function CareerPage() {
  const ref = useScrollReveal()
  const [activeRoute, setActiveRoute] = useState("clinical")
  const current = routes.find((r) => r.id === activeRoute)!
  const colors = colorMap[current.color]
  const Icon = current.icon

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="bg-[#0C2340] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-[#C4923A] uppercase">
            Career Path &amp; Role Models
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
            キャリアパス・ロールモデル
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            当教室では、あなたの目標に合わせた3つのキャリアルートを用意しています。
            臨床・研究・地域医療――どの道を選んでも、一流の環境と手厚いサポートがあります。
          </p>
        </div>
      </section>

      {/* 3つのキャリアルート */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal">
            <SectionHeading
              title="3つのキャリアルート"
              enTitle="Career Routes"
              align="center"
              subtitle="入局後のキャリアは大きく3つ。あなたの志向に合ったルートを選び、途中での方向転換も柔軟に対応します。"
            />
          </div>

          {/* タブ切替 */}
          <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
            {routes.map((route) => {
              const RouteIcon = route.icon
              const c = colorMap[route.color]
              const isActive = activeRoute === route.id
              return (
                <button
                  key={route.id}
                  onClick={() => setActiveRoute(route.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all",
                    isActive ? c.tabActive : `bg-muted text-muted-foreground ${c.tab}`
                  )}
                >
                  <RouteIcon className="h-4 w-4" />
                  {route.label}
                </button>
              )
            })}
          </div>

          {/* ルート詳細 */}
          <div className="mt-12">
            {/* キャッチコピー + ゴール */}
            <div className={cn("reveal rounded-2xl p-8 md:p-10 text-center", colors.light, `border ${colors.border}`)}>
              <div className={cn("mx-auto flex h-16 w-16 items-center justify-center rounded-2xl", colors.bg)}>
                <Icon className={cn("h-8 w-8", colors.text)} />
              </div>
              <p className="mt-5 whitespace-pre-line font-serif text-xl font-bold text-foreground md:text-2xl">
                {current.tagline}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {"目指すゴール: "}
                <span className={cn("font-bold", colors.text)}>{current.goal}</span>
              </p>
            </div>

            {/* タイムライン */}
            <div className="relative mt-12 ml-4 border-l-2 border-border pl-8 md:ml-8 md:pl-12">
              {current.steps.map((step, i) => (
                <div
                  key={step.year}
                  className="reveal relative pb-12 last:pb-0"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* ドット */}
                  <div
                    className={cn(
                      "absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-background md:-left-[calc(3rem+5px)]",
                      colors.dot
                    )}
                  />
                  {/* 年次ラベル */}
                  <span className={cn("inline-block rounded-full px-3 py-1 text-xs font-bold", colors.bg, colors.text)}>
                    {step.year}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                  <span className="mt-2 inline-block rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {step.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ロールモデル */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal">
            <SectionHeading
              title="先輩医師のキャリア実例"
              enTitle="Role Models"
              align="center"
              subtitle="実際に当教室で歩んだキャリアの例をご紹介します。"
            />
          </div>
          <div className="reveal-stagger grid gap-6 md:grid-cols-3">
            {[
              {
                name: "A先生",
                year: "入局12年目",
                position: "大学准教授・内視鏡センター副部長",
                route: "臨床重点ルート",
                routeColor: "teal",
                message: "内視鏡の技術を極めたいという思いで入局しました。丁寧な指導のおかげで、今では自分が教える立場に。日々新しい技術に触れる環境にやりがいを感じています。",
              },
              {
                name: "B先生",
                year: "入局8年目",
                position: "海外留学中（肝臓研究）",
                route: "研究重点ルート",
                routeColor: "navy",
                message: "大学院で肝臓の基礎研究に取り組み、博士号取得後に海外留学。自分の研究が国際誌に掲載された時の喜びは格別でした。",
              },
              {
                name: "C先生",
                year: "入局15年目",
                position: "消化器内科クリニック院長",
                route: "開業・地域医療ルート",
                routeColor: "gold",
                message: "大学で培った内視鏡技術と専門知識を活かし、地域で開業。大学との連携を続けながら、かかりつけ医として患者さんに寄り添っています。",
              },
            ].map((model) => {
              const mc = colorMap[model.routeColor]
              return (
                <div key={model.name} className="reveal-child rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className={cn("flex h-14 w-14 items-center justify-center rounded-full", mc.bg)}>
                      <span className={cn("font-serif text-lg font-bold", mc.text)}>
                        {model.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-serif text-base font-bold text-foreground">{model.name}</p>
                      <p className="text-xs text-muted-foreground">{model.year} / {model.position}</p>
                    </div>
                  </div>
                  <span className={cn("mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold", mc.bg, mc.text)}>
                    {model.route}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {model.message}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C2340] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-white md:text-3xl text-balance">
            あなたのキャリアを一緒に考えませんか？
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            見学やオンライン相談で、実際の教室の雰囲気やキャリアの相談ができます。
            どのルートが自分に合うか、気軽にご相談ください。
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/recruit/visit"
              className="inline-flex items-center gap-2 rounded-lg bg-[#C4923A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
            >
              見学・相談を申し込む
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/recruit/voice"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              先輩医師のVoice
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
