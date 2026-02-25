import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { FlaskConical, ShieldCheck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "臨床研究・治験について",
  description: "当科で実施している臨床研究・治験に関する情報を掲載しています。",
}

const studies = [
  { title: "進行膵がんに対する新規免疫療法の第II相試験", status: "募集中", field: "膵臓" },
  { title: "炎症性腸疾患患者を対象とした腸内細菌叢解析研究", status: "募集中", field: "消化管" },
  { title: "MASLD/MASHに対する新規治療薬の第III相試験", status: "募集中", field: "肝臓" },
  { title: "早期胃がんに対するAI支援内視鏡診断の多施設共同研究", status: "実施中", field: "消化管" },
  { title: "肝細胞がんに対する新規分子標的薬の治験", status: "実施中", field: "肝臓" },
]

export default function ClinicalResearchPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-teal to-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-white/70">
            Clinical Research
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            臨床研究・治験について
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
              <FlaskConical className="h-8 w-8 text-teal" />
              <h3 className="mt-3 font-serif text-sm font-bold text-primary">臨床研究とは</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">新しい治療法や診断法の有効性・安全性を確認するための医学研究です。</p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
              <ShieldCheck className="h-8 w-8 text-teal" />
              <h3 className="mt-3 font-serif text-sm font-bold text-primary">安全性の確保</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">倫理審査委員会の承認を得た上で、患者さんの安全を最優先に実施しています。</p>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
              <Users className="h-8 w-8 text-teal" />
              <h3 className="mt-3 font-serif text-sm font-bold text-primary">患者さんの権利</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">参加は完全に自由意思です。いつでも同意を撤回でき、通常の診療に影響はありません。</p>
            </div>
          </div>

          <SectionHeading title="現在実施中の臨床研究・治験" enTitle="Ongoing Studies" />
          <div className="flex flex-col gap-4">
            {studies.map((s) => (
              <div key={s.title} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
                <div className="flex-1">
                  <h3 className="font-serif text-sm font-bold text-primary">{s.title}</h3>
                  <span className="mt-1 inline-block text-xs text-muted-foreground">{s.field}</span>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${s.status === "募集中" ? "bg-teal/10 text-teal" : "bg-muted text-muted-foreground"}`}>
                  {s.status}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            ※ 臨床研究・治験への参加をご希望の方は、担当医にお申し出ください。詳細をご説明いたします。
          </p>
        </div>
      </section>
    </div>
  )
}
