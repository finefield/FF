import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { Phone, Printer, Mail, Clock, MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "地域連携担当者連絡先",
  description:
    "横浜市立大学消化器内科学教室の地域連携室の連絡先・受付時間をご案内します。",
}

const contacts = [
  {
    icon: Printer,
    label: "電話番号",
    value: "045-XXX-XXXX（地域連携室直通）",
  },
  {
    icon: Fax,
    label: "FAX番号",
    value: "045-XXX-XXXX",
  },
  {
    icon: Mail,
    label: "メールアドレス",
    value: "gastro-renkei@yokohama-cu.ac.jp",
  },
  {
    icon: Clock,
    label: "受付時間",
    value: "平日 8:30 - 17:00（土日祝日を除く）",
  },
  {
    icon: MapPin,
    label: "所在地",
    value: "〒236-0004 横浜市金沢区福浦3-9 横浜市立大学附属病院",
  },
]

const departments = [
  {
    title: "地域連携室",
    description: "患者さんのご紹介・逆紹介の窓口です。予約調整も承ります。",
    phone: "045-XXX-XXXX",
    hours: "平日 8:30 - 17:00",
  },
  {
    title: "消化器内科外来",
    description: "受診に関するお問い合わせはこちらへ。",
    phone: "045-XXX-XXXX",
    hours: "平日 9:00 - 16:30",
  },
  {
    title: "内視鏡センター",
    description: "内視鏡検査の予約・お問い合わせはこちらへ。",
    phone: "045-XXX-XXXX",
    hours: "平日 9:00 - 16:00",
  },
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Contact
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            地域連携担当者連絡先
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            お問い合わせ・ご相談はお気軽にご連絡ください。
          </p>
        </div>
      </section>

      {/* Main Contact Info */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="お問い合わせ先"
            enTitle="Contact Information"
            align="center"
          />
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col gap-6">
              {contacts.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {c.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="各窓口のご案内"
            enTitle="Departments"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {departments.map((dept) => (
              <div
                key={dept.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-base font-bold text-primary">
                  {dept.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {dept.description}
                </p>
                <div className="mt-4 flex flex-col gap-1 text-sm">
                  <p className="flex items-center gap-2 text-foreground">
                    <Phone className="h-3.5 w-3.5 text-teal" />
                    {dept.phone}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    {dept.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-6 text-center">
            <h2 className="font-serif text-xl font-bold text-primary">
              緊急時のご連絡
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              夜間・休日の緊急紹介は、横浜市立大学附属病院の救急外来を通じて
              消化器内科当直医にご連絡ください。
            </p>
            <p className="mt-3 text-lg font-bold text-navy">
              救急外来: 045-XXX-XXXX
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-alt py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Link
            href="/cooperation/referral"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-light"
          >
            紹介・逆紹介の流れを見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
