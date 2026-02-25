import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { ArrowRight, FileText, Send, ClipboardCheck, Stethoscope, RotateCcw } from "lucide-react"

export const metadata: Metadata = {
  title: "紹介・逆紹介の流れ",
  description:
    "横浜市立大学消化器内科への患者さんの紹介・逆紹介の手順をご案内します。",
}

const referralSteps = [
  {
    icon: FileText,
    step: "01",
    title: "診療情報提供書の作成",
    description:
      "患者さんの症状・経過・検査結果等を記載した診療情報提供書（紹介状）をご作成ください。所定の書式はございません。",
  },
  {
    icon: Send,
    step: "02",
    title: "地域連携室への連絡",
    description:
      "地域連携室にお電話またはFAXにてご連絡ください。ご希望の受診日時を調整いたします。緊急の場合は直接お電話ください。",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "予約確認・受診",
    description:
      "予約日時が確定しましたら、患者さんに紹介状と予約票をお渡しください。当日は受付にて紹介状をご提出いただきます。",
  },
  {
    icon: Stethoscope,
    step: "04",
    title: "専門的な検査・治療",
    description:
      "消化器内科専門医が詳細な検査・診察を行い、治療方針を決定します。検査結果・治療経過は随時ご報告いたします。",
  },
  {
    icon: RotateCcw,
    step: "05",
    title: "逆紹介・フォローアップ",
    description:
      "治療が安定した段階で、詳細な診療報告書とともに紹介元の先生にお戻しします。必要に応じて定期的な併診も可能です。",
  },
]

const documents = [
  {
    title: "診療情報提供書（紹介状）",
    description: "所定の書式なし。患者さんの病歴・検査結果・ご依頼内容をご記載ください。",
  },
  {
    title: "検査データ",
    description: "血液検査・画像検査（CT/MRI/内視鏡等）のデータがあればご同封ください。",
  },
  {
    title: "保険証・お薬手帳",
    description: "患者さんにお持ちいただくようご案内ください。",
  },
]

export default function ReferralPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Referral Process
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            紹介・逆紹介の流れ
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            地域の先生方からの患者さんのご紹介をスムーズに受け付ける体制を整えています。
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="紹介から逆紹介までの流れ"
            enTitle="Step by Step"
            align="center"
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:block" />
            <div className="flex flex-col gap-8">
              {referralSteps.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.step} className="flex gap-4 md:gap-6">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="rounded-xl border border-border bg-card p-5 flex-1">
                      <p className="text-xs font-bold text-gold">
                        STEP {s.step}
                      </p>
                      <h3 className="mt-1 font-serif text-base font-bold text-primary">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="ご紹介時にご用意いただくもの"
            enTitle="Required Documents"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-base font-bold text-primary">
                  {doc.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {doc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading title="ご紹介にあたってのお願い" enTitle="Notes" />
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
            <ul className="flex flex-col gap-3">
              {[
                "緊急性の高い症例については、直接お電話にてご相談ください。",
                "紹介状がなくても対応可能な場合がありますので、まずはお問い合わせください。",
                "内視鏡検査のご予約は地域連携室で直接お取りいただけます。",
                "逆紹介後も、ご不明な点がございましたらお気軽にご相談ください。",
              ].map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-alt py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-xl font-bold text-primary">
            ご紹介のお問い合わせ
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            地域連携室が窓口となり、スムーズなご紹介をサポートいたします。
          </p>
          <Link
            href="/cooperation/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-light"
          >
            連絡先を確認する
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
