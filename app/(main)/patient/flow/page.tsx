import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { MapPin, Phone, Clock, Train } from "lucide-react"

export const metadata: Metadata = {
  title: "受診の流れ・アクセス",
  description: "横浜市立大学附属病院消化器内科への受診の流れとアクセス情報です。",
}

const steps = [
  { step: 1, title: "かかりつけ医に相談", description: "まずはかかりつけの先生にご相談ください。当科への紹介状をご準備いただきます。" },
  { step: 2, title: "予約・紹介状の送付", description: "かかりつけ医から当院の地域連携センターに予約のご連絡と紹介状の送付をいただきます。" },
  { step: 3, title: "来院・受付", description: "予約日に紹介状・保険証・お薬手帳をご持参の上、1階総合受付にお越しください。" },
  { step: 4, title: "診察・検査", description: "担当医が診察を行い、必要に応じて血液検査、内視鏡検査、画像検査等をご案内します。" },
  { step: 5, title: "治療方針のご説明", description: "検査結果を踏まえ、患者さんとご相談の上で最適な治療方針を決定します。" },
]

export default function FlowPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-teal to-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-white/70">
            Visit Guide & Access
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            受診の流れ・アクセス
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading title="受診までの流れ" enTitle="Flow" align="center" />
          <div className="relative">
            <div className="absolute left-6 top-0 h-full w-0.5 bg-border md:left-8" />
            <div className="flex flex-col gap-8">
              {steps.map((s) => (
                <div key={s.step} className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-white text-sm font-bold md:h-16 md:w-16 md:text-base">
                    {s.step}
                  </div>
                  <div className="flex-1 rounded-xl border border-border bg-card p-5">
                    <h3 className="font-serif text-base font-bold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="アクセス・外来情報" enTitle="Access" align="center" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-4">交通アクセス</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <Train className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium text-foreground">電車でお越しの方</p>
                    <p className="text-xs text-muted-foreground">京急線「金沢八景駅」よりシーサイドライン「市大医学部駅」下車 徒歩1分</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium text-foreground">所在地</p>
                    <p className="text-xs text-muted-foreground">〒236-0004 神奈川県横浜市金沢区福浦3-9</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium text-foreground">予約電話</p>
                    <p className="text-xs text-muted-foreground">045-787-2640（消化器内科外来）</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-4">外来診療時間</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium text-foreground">受付時間</p>
                    <p className="text-xs text-muted-foreground">午前 8:30 - 11:00（初診）/ 午前 8:30 - 11:30（再診）</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-lg border border-border">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-3 py-2 text-left font-medium text-foreground">曜日</th>
                      <th className="px-3 py-2 text-left font-medium text-foreground">午前</th>
                      <th className="px-3 py-2 text-left font-medium text-foreground">午後</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["月", "火", "水", "木", "金"].map((day) => (
                      <tr key={day} className="border-t border-border">
                        <td className="px-3 py-2 font-medium text-foreground">{day}</td>
                        <td className="px-3 py-2 text-muted-foreground">一般外来</td>
                        <td className="px-3 py-2 text-muted-foreground">専門外来（予約制）</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">※ 土日祝日は休診です。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
