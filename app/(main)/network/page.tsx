import { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { HospitalList } from "@/components/network/hospital-list"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "協力病院の紹介 | 横浜市立大学 消化器内科学教室",
  description:
    "横浜市立大学消化器内科学教室の拠点病院・協力病院をご紹介します。2大学病院と県立がんセンターを基軸に、地域の中核病院と連携して診療・教育・研究を行っています。",
}

export default function NetworkPage() {
  return (
    <main>
      {/* ヒーロー */}
      <section className="relative bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-5">
          <nav
            className="mb-6 text-sm text-white/50"
            aria-label="パンくずリスト"
          >
            <Link href="/" className="transition-colors hover:text-white/70">
              HOME
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-white/80">協力病院の紹介</span>
          </nav>
          <p className="mb-3 font-serif text-sm uppercase tracking-widest text-gold-light">
            Affiliated Hospitals
          </p>
          <h1 className="font-serif text-3xl font-bold leading-tight text-white text-balance md:text-4xl lg:text-5xl">
            協力病院の紹介
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            当教室は、横浜市立大学附属病院・附属市民総合医療センターの2大学病院と神奈川県立がんセンターを基軸とし、
            地域の大規模・中規模中核病院や県内外の多くの関連施設と連携して、診療・教育・研究を行っています。
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/60">
            より良い医療の提供と、消化器内科学の更なる発展を目指し、日々、研鑽を積んでいます。
          </p>
        </div>
      </section>

      {/* 病院一覧 */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            enTitle="Affiliated Hospitals"
            title="拠点病院・協力病院一覧"
            subtitle="各施設の責任者と役職をご紹介します。"
            align="center"
          />
          <div className="mt-10">
            <HospitalList />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-serif text-2xl font-bold text-white text-balance md:text-3xl">
            このネットワークの中で、
            <br className="hidden md:block" />
            あなたのキャリアを描きませんか。
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/60">
            まずは教室見学から。連携病院の雰囲気や研修環境を直接ご確認いただけます。
            お気軽にご相談ください。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/recruit/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              見学・入局相談を申込む
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/recruit/voice"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 font-medium text-white transition-all hover:bg-white/10"
            >
              先輩医師のVoiceを読む
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
