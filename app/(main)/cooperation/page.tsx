import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { ArrowRight, Handshake, FileText, Phone, Building2, GraduationCap, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "地域連携のご案内",
  description:
    "横浜市立大学消化器内科学教室の地域連携についてご紹介します。病診連携・紹介・逆紹介・勉強会情報などを掲載しています。",
}

const links = [
  {
    icon: FileText,
    title: "紹介・逆紹介の流れ",
    description: "患者さんの紹介・逆紹介の手順や必要書類についてご案内します。",
    href: "/cooperation/referral",
  },
  {
    icon: Phone,
    title: "地域連携担当者連絡先",
    description: "お問い合わせ・ご相談は地域連携室までお気軽にご連絡ください。",
    href: "/cooperation/contact",
  },
  {
    icon: Building2,
    title: "協力病院ネットワーク",
    description: "当教室と連携する関連施設・協力病院のネットワークをご紹介します。",
    href: "/cooperation/hospitals",
  },
  {
    icon: GraduationCap,
    title: "地域勉強会・セミナー",
    description: "地域の先生方を対象とした勉強会・症例検討会の開催情報です。",
    href: "/cooperation/seminars",
  },
  {
    icon: Users,
    title: "同門会・関連施設",
    description: "同門会の活動や関連施設の情報を掲載しています。",
    href: "/cooperation/alumni",
  },
]

const features = [
  {
    title: "迅速な紹介受付",
    description:
      "地域の先生方からのご紹介を迅速に受け付け、専門的な検査・治療を提供いたします。",
  },
  {
    title: "丁寧な逆紹介",
    description:
      "治療経過を詳細にご報告し、安心して患者さんを地域でフォローいただけるよう連携します。",
  },
  {
    title: "定期的な情報共有",
    description:
      "症例検討会や地域勉強会を定期開催し、最新の知見を共有しています。",
  },
]

export default function CooperationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Regional Cooperation
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            地域連携のご案内
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            地域の医療機関と手を携え、患者さんに切れ目のない医療を提供します。
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="病診連携の理念"
            enTitle="Our Mission"
            align="center"
          />
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Handshake className="h-12 w-12 text-teal" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              横浜市立大学消化器内科学教室は、地域の医療機関と緊密に連携し、
              患者さんに最適な医療を提供することを使命としています。
              大学病院ならではの高度な検査・治療と、地域のかかりつけ医による
              きめ細やかなフォローアップを組み合わせることで、
              患者さんの生活の質の向上を目指しています。
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-base font-bold text-primary">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="各種ご案内"
            enTitle="Information"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {links.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors group-hover:text-teal-light">
                    詳しく見る
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary">
            ご連携・ご相談について
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            患者さんのご紹介やお問い合わせは、地域連携室までお気軽にご連絡ください。
          </p>
          <div className="mt-6">
            <Link
              href="/cooperation/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-light"
            >
              連絡先を確認する
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
