"use client"

import Link from "next/link"
import { ArrowRight, Building2, MessageSquare, Map } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

const cards = [
  {
    rank: "1",
    label: "NETWORK",
    labelJa: "連携病院",
    icon: Building2,
    borderColor: "#147A85",
    title: "50以上の連携病院。キャリアの選択肢が広い。",
    body: "神奈川県内最大規模の連携病院ネットワーク。大学病院から地域の中核病院まで、自分の志向に合わせて研修先を選べます。",
    badge: "50+ 施設",
    cta: "連携病院を見る",
    href: "/network",
  },
  {
    rank: "2",
    label: "VOICE",
    labelJa: "先輩の声",
    icon: MessageSquare,
    borderColor: "#C4923A",
    title: "先輩医師たちは、ここをどう選んだのか。",
    body: "実際に入局した先輩医師の言葉が、一番リアルな情報です。それぞれの専門・キャリア・入局理由を紹介します。",
    badge: null,
    cta: "先輩のVoiceを読む",
    href: "/recruit/voice",
    avatars: [
      { name: "田中 A先生", dept: "肝臓グループ" },
      { name: "佐藤 B先生", dept: "胆膵グループ" },
      { name: "鈴木 C先生", dept: "消化管グループ" },
    ],
  },
  {
    rank: "3",
    label: "MODEL",
    labelJa: "ロールモデル",
    icon: Map,
    borderColor: "#0C2340",
    title: "入局後の10年を、具体的に描ける。",
    body: "臨床・研究・教育・地域医療リーダー。当教室にはさまざまなキャリアパスがあります。あなたの10年後を一緒にデザインしましょう。",
    badge: null,
    cta: "キャリアパスを見る",
    href: "/recruit/career",
    timeline: ["入局", "専門医取得", "論文・学会", "多様な選択肢"],
  },
]

export function RecruitFocusSection() {
  const ref = useScrollReveal()

  return (
    <section id="recruit-focus" className="bg-[#F4F7FA] py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <h2 className="font-serif text-2xl font-bold text-[#0C2340] md:text-3xl text-balance heading-gold-line-center">
            ここで働く未来を、想像してみてください。
          </h2>
          <p className="mt-5 text-sm text-[#7A8FA8]">
            研修医アンケートで特に参考になった情報トップ3
          </p>
        </div>

        {/* 3 cards */}
        <div className="grid gap-8 md:grid-cols-3 reveal-stagger">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.label}
                className="reveal-child group flex flex-col rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden"
              >
                {/* Top colored border */}
                <div className="h-1" style={{ backgroundColor: card.borderColor }} />

                <div className="flex flex-1 flex-col p-7">
                  {/* Label row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F7FA]">
                      <Icon className="h-5 w-5" style={{ color: card.borderColor }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-[#7A8FA8]">
                        {card.label}
                      </p>
                      <p className="text-xs text-[#7A8FA8]">{card.labelJa}</p>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0C2340] leading-snug">
                    {card.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#3D5168]">
                    {card.body}
                  </p>

                  {/* Badge */}
                  {card.badge && (
                    <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#147A85]/10 px-4 py-1.5">
                      <span className="font-serif text-lg font-bold text-[#147A85]">{card.badge.split(" ")[0]}</span>
                      <span className="text-xs text-[#147A85]">{card.badge.split(" ")[1]}</span>
                    </div>
                  )}

                  {/* Avatar preview for Voice */}
                  {card.avatars && (
                    <div className="mt-4 flex gap-3">
                      {card.avatars.map((a) => (
                        <div key={a.name} className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0C2340]/10 text-xs font-bold text-[#0C2340]">
                            {a.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[#192533]">{a.name}</p>
                            <p className="text-[10px] text-[#7A8FA8]">{a.dept}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Timeline preview for Model */}
                  {card.timeline && (
                    <div className="mt-4 flex items-center gap-0">
                      {card.timeline.map((step, i) => (
                        <div key={step} className="flex items-center">
                          <div className="flex flex-col items-center">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0C2340] text-[9px] font-bold text-white">
                              {i + 1}
                            </div>
                            <p className="mt-1 text-[10px] text-[#3D5168] whitespace-nowrap">{step}</p>
                          </div>
                          {i < card.timeline.length - 1 && (
                            <div className="mx-1 mt-[-14px] h-[2px] w-6 bg-[#DCE4EE] md:w-4" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C4923A] transition-all group-hover:gap-3"
                  >
                    {card.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
