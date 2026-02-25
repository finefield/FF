import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "疾患・治療の解説",
  description: "消化器内科で取り扱う主な疾患と治療法についてわかりやすく解説します。",
}

const diseases = [
  {
    category: "食道・胃の疾患",
    items: [
      { name: "逆流性食道炎", description: "胃酸が食道に逆流し、胸やけや胸痛を引き起こす疾患です。生活習慣の改善と薬物療法で多くの場合改善します。" },
      { name: "胃がん", description: "日本人に多いがんの一つです。早期発見により内視鏡治療で根治が可能な場合があります。定期的な検診が重要です。" },
      { name: "胃・十二指腸潰瘍", description: "ストレスやピロリ菌感染が原因で胃や十二指腸の粘膜が損傷する疾患です。除菌治療と薬物療法が有効です。" },
    ],
  },
  {
    category: "大腸の疾患",
    items: [
      { name: "大腸がん", description: "大腸に発生する悪性腫瘍です。早期発見が重要で、内視鏡検査による精密検査を推奨しています。" },
      { name: "炎症性腸疾患（IBD）", description: "潰瘍性大腸炎やクローン病などの慢性炎症性疾患です。最新の生物学的製剤を用いた治療を行っています。" },
    ],
  },
  {
    category: "肝臓の疾患",
    items: [
      { name: "B型・C型肝炎", description: "ウイルス感染による肝臓の炎症です。現在は非常に効果的な抗ウイルス薬が開発されており、高い確率で治癒が期待できます。" },
      { name: "肝細胞がん", description: "肝臓に発生するがんです。外科手術、ラジオ波焼灼術、分子標的治療など、複数の治療法を組み合わせて対応します。" },
      { name: "脂肪肝（MASLD/MASH）", description: "過栄養や生活習慣に関連する肝疾患です。生活指導と定期的な経過観察が重要です。" },
    ],
  },
  {
    category: "胆道・膵臓の疾患",
    items: [
      { name: "膵がん", description: "早期発見が困難ながんですが、最新の画像診断技術と治療法を駆使して、早期診断・治療に取り組んでいます。" },
      { name: "胆石症", description: "胆嚢や胆管にできる結石です。ERCPによる内視鏡的結石除去術など、低侵襲な治療を行っています。" },
    ],
  },
]

export default function DiseasesPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-teal to-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-white/70">
            Diseases & Treatments
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            疾患・治療の解説
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80 text-sm">
            消化器内科で取り扱う主な疾患と治療法をわかりやすくご説明します。
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col gap-12">
            {diseases.map((group) => (
              <div key={group.category}>
                <SectionHeading title={group.category} />
                <div className="flex flex-col gap-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="rounded-xl border border-border bg-card p-5">
                      <h3 className="font-serif text-base font-bold text-primary">{item.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl bg-muted p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              ※ 上記は一般的な解説です。実際の症状や治療方針は患者さんの状態によって異なりますので、詳しくは担当医にご相談ください。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
