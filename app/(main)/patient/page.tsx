import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { ArrowRight, Heart, ShieldCheck, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "診療のご案内",
  description: "横浜市立大学消化器内科学教室の診療内容・対応疾患をご紹介します。",
}

const departments = [
  {
    title: "上部消化管",
    diseases: ["食道がん", "胃がん", "胃・十二指腸潰瘍", "逆流性食道炎", "ヘリコバクターピロリ感染症"],
  },
  {
    title: "下部消化管",
    diseases: ["大腸がん", "大腸ポリープ", "炎症性腸疾患（潰瘍性大腸炎・クローン病）", "過敏性腸症候群"],
  },
  {
    title: "肝臓",
    diseases: ["B型・C型肝炎", "肝硬変", "肝細胞がん", "脂肪肝（MASLD/MASH）", "自己免疫性肝疾患"],
  },
  {
    title: "胆道・膵臓",
    diseases: ["胆石症", "胆管がん", "膵がん", "膵炎（急性・慢性）", "IPMN"],
  },
]

const strengths = [
  { icon: Heart, title: "患者さん中心の医療", description: "一人ひとりの状態に合わせた最適な治療方針を、チームで検討します。" },
  { icon: ShieldCheck, title: "最先端の医療技術", description: "内視鏡治療・分子標的治療・免疫療法など、最新の治療を提供します。" },
  { icon: Clock, title: "迅速な対応", description: "緊急時の消化管出血や胆管炎にも24時間体制で対応します。" },
  { icon: Users, title: "チーム医療", description: "外科、放射線科、病理部門と連携した総合的な診療体制です。" },
]

export default function PatientPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-teal to-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-white/70">
            Medical Services
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            診療のご案内
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80 text-sm">
            患者さんに寄り添い、最善の医療を提供いたします。
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="私たちの診療の強み" enTitle="Our Strengths" align="center" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="対応疾患・診療分野" enTitle="Specialties" align="center" />
          <div className="grid gap-6 md:grid-cols-2">
            {departments.map((dept) => (
              <div key={dept.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-primary">{dept.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {dept.diseases.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary">受診をお考えの方へ</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            当科への受診は原則として紹介状が必要です。かかりつけ医にご相談の上、ご紹介状をお持ちください。
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="/patient/flow" className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-light">
              受診の流れを見る <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/patient/diseases" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              疾患・治療の解説
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
