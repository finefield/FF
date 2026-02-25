import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "患者向けQ&A",
  description: "患者さんからよく寄せられるご質問と回答をまとめました。",
}

const faqs = [
  { q: "予約なしでも受診できますか？", a: "当科は原則予約制です。かかりつけ医から紹介状をいただいた上で、地域連携センターを通じてご予約をお取りください。" },
  { q: "紹介状は必要ですか？", a: "はい、紹介状をお持ちいただくことを推奨しています。紹介状がない場合、選定療養費（税込7,700円）が別途かかります。" },
  { q: "内視鏡検査は痛いですか？", a: "鎮静剤を使用した苦痛の少ない内視鏡検査を行っています。検査中はほとんど痛みを感じない方が多いです。ご希望に応じてお選びいただけます。" },
  { q: "セカンドオピニオンを受けられますか？", a: "はい、セカンドオピニオン外来を設けております。他院での診断・治療方針について、当科の専門医の意見をお聞きいただけます。" },
  { q: "入院期間はどのくらいですか？", a: "疾患や治療内容によって異なります。内視鏡治療の場合、多くは2-4日程度です。詳しくは担当医にご相談ください。" },
  { q: "駐車場はありますか？", a: "病院の有料駐車場をご利用いただけます。外来受診の場合、一定時間の割引がございます。" },
]

export default function PatientQAPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-teal to-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-white/70">
            Patient Q&A
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            患者さん向けQ&A
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading title="よくあるご質問" enTitle="Frequently Asked Questions" />
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-foreground hover:text-secondary">
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-xs font-bold text-teal">Q</span>
                    {faq.q}
                  </span>
                  <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-border px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">A</span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
