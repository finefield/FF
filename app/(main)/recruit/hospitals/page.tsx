import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Building2, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "協力病院ネットワーク",
  description: "当教室の協力病院ネットワークをご紹介します。",
}

const hospitals = [
  { name: "横浜市立市民病院", area: "横浜市", type: "基幹型", beds: 650 },
  { name: "横浜市立みなと赤十字病院", area: "横浜市", type: "基幹型", beds: 634 },
  { name: "横浜南共済病院", area: "横浜市", type: "協力型", beds: 565 },
  { name: "藤沢市民病院", area: "藤沢市", type: "協力型", beds: 536 },
  { name: "横須賀共済病院", area: "横須賀市", type: "協力型", beds: 740 },
  { name: "小田原市立病院", area: "小田原市", type: "協力型", beds: 417 },
  { name: "平塚市民病院", area: "平塚市", type: "協力型", beds: 416 },
  { name: "大和市立病院", area: "大和市", type: "協力型", beds: 403 },
  { name: "神奈川県立がんセンター", area: "横浜市", type: "専門研修", beds: 415 },
  { name: "国立がん研究センター中央病院", area: "東京都", type: "専門研修", beds: 578 },
]

export default function HospitalsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Hospital Network
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            協力病院ネットワーク
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="関連施設一覧"
            enTitle="Affiliated Hospitals"
            subtitle="神奈川県を中心に、40以上の関連病院で幅広い臨床経験を積むことができます。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {hospitals.map((h) => (
              <div key={h.name} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Building2 className="h-6 w-6 text-navy/50" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-sm font-bold text-primary">{h.name}</h3>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {h.area}
                    </span>
                    <span className="text-xs text-muted-foreground">{h.beds}床</span>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                  {h.type}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            ※ 上記は主要な関連病院の一部です。その他にも多数の施設と連携しています。
          </p>
        </div>
      </section>
    </div>
  )
}
