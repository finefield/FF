"use client"

import Link from "next/link"
import { ArrowRight, Activity, Shield, Stethoscope, Microscope, HeartPulse, Scan } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

const groups = [
  {
    name: "消化管グループ",
    nameEn: "Gastrointestinal Group",
    color: "bg-teal",
    icon: Activity,
    areas: [
      "食道がん・胃がん・大腸がんの内視鏡診断と治療",
      "炎症性腸疾患（IBD：潰瘍性大腸炎・クローン病）",
      "機能性消化管障害（GERD・機能性ディスペプシア・IBS）",
      "消化管出血・ポリープの内視鏡治療",
      "小腸疾患（カプセル内視鏡・バルーン内視鏡）",
    ],
    strengths: [
      "最新の拡大内視鏡・NBI・AIを用いた精密診断",
      "ESD（内視鏡的粘膜下層剥離術）の豊富な実績",
      "IBD専門外来と生物学的製剤による最新治療",
    ],
    description:
      "食道から大腸までの消化管疾患全般を対象に、内視鏡診断・治療を中心とした高度な医療を提供しています。特に早期がんの内視鏡治療（ESD）では年間200例以上の実績があり、炎症性腸疾患（IBD）の診療では専門外来を設置し、最新の生物学的製剤を含む包括的な治療を行っています。",
  },
  {
    name: "肝臓グループ",
    nameEn: "Hepatology Group",
    color: "bg-gold",
    icon: Shield,
    areas: [
      "ウイルス性肝炎（B型・C型）の抗ウイルス治療",
      "MASLD/MASH（脂肪性肝疾患）の診断と治療",
      "肝硬変の合併症管理（食道静脈瘤・腹水・肝性脳症）",
      "肝細胞がんの集学的治療（TACE・RFA・分子標的薬・免疫療法）",
      "自己免疫性肝疾患（AIH・PBC・PSC）",
    ],
    strengths: [
      "フィブロスキャン等の非侵襲的肝線維化評価",
      "肝がんに対する免疫チェックポイント阻害薬の豊富な使用経験",
      "MASLD/MASH研究の国際的な多施設共同研究参画",
    ],
    description:
      "ウイルス性肝炎から脂肪性肝疾患、肝硬変、肝がんまで、肝臓疾患全般の診断と治療を行っています。近年はMASLD/MASH（脂肪性肝疾患）が急増しており、最新の非侵襲的診断法を活用した早期発見と生活指導を重視しています。肝がん治療では分子標的薬・免疫療法を含む集学的治療を実施し、多施設共同研究にも積極的に参画しています。",
  },
  {
    name: "胆膵グループ",
    nameEn: "Biliary-Pancreatic Group",
    color: "bg-navy-sub",
    icon: Microscope,
    areas: [
      "膵がん・胆管がん・胆嚢がんの診断と化学療法",
      "ERCP（内視鏡的逆行性胆管膵管造影）による胆管結石治療",
      "超音波内視鏡（EUS）を用いた精密検査・組織診断",
      "胆管炎・膵炎の急性期管理と治療",
      "膵嚢胞性疾患（IPMN等）の経過観察と治療方針",
    ],
    strengths: [
      "EUS-FNA（超音波内視鏡下穿刺吸引術）による確実な組織診断",
      "難治性胆管狭窄へのERCPインターベンション",
      "膵がん早期診断を目指したバイオマーカー研究",
    ],
    description:
      "胆道・膵臓は「沈黙の臓器」と呼ばれ、疾患の早期発見が難しい領域です。当グループでは超音波内視鏡（EUS）やERCPを駆使した高精度の診断と、最新の化学療法・内視鏡治療を組み合わせた包括的な医療を提供しています。膵がんの早期診断に向けた研究にも積極的に取り組んでいます。",
  },
]

const facilities = [
  {
    name: "横浜市立大学附属病院",
    role: "高度急性期医療の提供",
    beds: "674床",
    features: ["がんゲノム医療中核拠点病院", "特定機能病院", "高度救命救急センター併設"],
  },
  {
    name: "附属市民総合医療センター",
    role: "地域の中核的高度医療",
    beds: "726床",
    features: ["横浜市南西部の基幹病院", "救命救急センター", "総合周産期母子医療センター"],
  },
  {
    name: "神奈川県立がんセンター",
    role: "がん専門医療の拠点",
    beds: "415床",
    features: ["都道府県がん診療連携拠点病院", "がんゲノム医療拠点病院", "陽子線治療施設"],
  },
]

export default function ClinicalPage() {
  const sectionRef = useScrollReveal()

  return (
    <div ref={sectionRef}>
      {/* Hero */}
      <section className="bg-navy py-16 pt-28 md:py-20 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-gold-light">
            Clinical Services
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl text-balance">
            診療のご紹介
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            横浜市立大学 消化器内科学教室では、消化管・肝臓・胆膵の3グループ体制で、
            食道から大腸、肝臓、胆道・膵臓まで消化器疾患全般の高度な診療を行っています。
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal text-center">
            <h2 className="font-serif text-2xl font-bold text-primary heading-gold-line-center md:text-3xl">
              3つの専門グループ体制
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-text-sub">
              当教室の消化器内科は、消化管・肝臓・胆膵の3つの専門グループに分かれ、
              それぞれの領域で高度な診療・研究を行っています。各グループが密に連携し、
              患者さん一人ひとりに最適な治療を提供します。
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 reveal-stagger">
            {[
              { icon: Stethoscope, label: "消化管", count: "ESD 200+例/年", color: "text-teal" },
              { icon: HeartPulse, label: "肝臓", count: "MASLD研究で国際共同研究", color: "text-gold" },
              { icon: Scan, label: "胆膵", count: "EUS-FNA 高精度診断", color: "text-navy-sub" },
            ].map((item) => (
              <div
                key={item.label}
                className="reveal-child flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
                <p className="mt-3 font-serif text-lg font-bold text-primary">{item.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Groups */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col gap-12">
            {groups.map((group, i) => (
              <article key={group.name} className="reveal rounded-2xl border border-border bg-card overflow-hidden">
                {/* Top color bar */}
                <div className={`h-1.5 ${group.color}`} />
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${group.color}/10`}>
                      <group.icon className={`h-6 w-6 ${group.color === "bg-teal" ? "text-teal" : group.color === "bg-gold" ? "text-gold" : "text-navy-sub"}`} />
                    </div>
                    <div>
                      <p className="font-serif text-xs tracking-wider text-muted-foreground">
                        {group.nameEn}
                      </p>
                      <h3 className="mt-0.5 font-serif text-xl font-bold text-primary md:text-2xl">
                        {group.name}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-text-sub">
                    {group.description}
                  </p>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {/* Areas */}
                    <div>
                      <p className="text-xs font-bold tracking-wide text-primary">
                        主な診療領域
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {group.areas.map((area) => (
                          <li key={area} className="flex items-start gap-2 text-sm text-text-sub">
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${group.color}`} />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Strengths */}
                    <div>
                      <p className="text-xs font-bold tracking-wide text-primary">
                        当教室の強み
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {group.strengths.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-text-sub">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-widest text-gold-light">
              Affiliated Hospitals
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
              診療拠点
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              当教室の診療は、3つの主要拠点病院を中心に行われています。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 reveal-stagger">
            {facilities.map((f) => (
              <div
                key={f.name}
                className="reveal-child rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-serif text-lg font-bold text-white">
                  {f.name}
                </h3>
                <p className="mt-1 text-xs text-gold-light">{f.role}</p>
                <p className="mt-3 text-sm text-white/60">
                  病床数: {f.beds}
                </p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center reveal">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl text-balance">
            より詳しい診療情報をお求めの方へ
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-sub">
            患者さんの受診に関するご案内は、各拠点病院のホームページをご覧ください。
            医療関係者の方は、地域医療連携窓口までお気軽にお問い合わせください。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/network"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold-light"
            >
              協力病院の紹介 <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-muted"
            >
              研究グループ紹介 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
