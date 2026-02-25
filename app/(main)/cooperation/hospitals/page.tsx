import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Building2, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "協力病院ネットワーク",
  description:
    "横浜市立大学消化器内科学教室の協力病院・関連施設のネットワークをご紹介します。",
}

const hospitals = [
  {
    name: "横浜市立大学附属 市民総合医療センター",
    area: "横浜市南区",
    type: "基幹病院",
    features: ["救急対応", "内視鏡センター", "肝疾患センター"],
  },
  {
    name: "横浜市立みなと赤十字病院",
    area: "横浜市中区",
    type: "連携病院",
    features: ["消化器内科", "内視鏡治療"],
  },
  {
    name: "済生会横浜市南部病院",
    area: "横浜市港南区",
    type: "連携病院",
    features: ["消化器センター", "地域医療"],
  },
  {
    name: "藤沢市民病院",
    area: "藤沢市",
    type: "連携病院",
    features: ["消化器内科", "内視鏡治療"],
  },
  {
    name: "横須賀共済病院",
    area: "横須賀市",
    type: "連携病院",
    features: ["消化器センター", "救急対応"],
  },
  {
    name: "小田原市立病院",
    area: "小田原市",
    type: "連携病院",
    features: ["消化器内科", "地域がん拠点病院"],
  },
  {
    name: "横浜労災病院",
    area: "横浜市港北区",
    type: "連携病院",
    features: ["消化器内科", "内視鏡検査"],
  },
  {
    name: "国際親善総合病院",
    area: "横浜市泉区",
    type: "連携病院",
    features: ["消化器内科", "地域密着型"],
  },
]

export default function HospitalsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Hospital Network
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            協力病院ネットワーク
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            神奈川県内を中心に広がる関連施設・協力病院のネットワークです。
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="充実したネットワーク"
            enTitle="Network Overview"
            align="center"
            subtitle="当教室は神奈川県を中心に多くの関連病院・連携施設とネットワークを構築しています。各施設に教室員を派遣し、地域医療の充実に貢献しています。"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hospitals.map((h) => (
              <div
                key={h.name}
                className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-medium text-teal">
                      {h.type}
                    </span>
                    <h3 className="mt-2 font-serif text-base font-bold text-primary">
                      {h.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {h.area}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {h.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-md bg-section-alt px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-section-alt py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            上記は主な関連施設の一部です。研修希望の方は、各施設での研修プログラムについても
            ご相談を承りますので、お気軽にお問い合わせください。
          </p>
        </div>
      </section>
    </div>
  )
}
