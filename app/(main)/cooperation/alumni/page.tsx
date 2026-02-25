import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Users, Calendar, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "同門会・関連施設",
  description:
    "横浜市立大学消化器内科学教室の同門会活動や関連施設の情報を掲載しています。",
}

const activities = [
  {
    title: "同門会総会",
    description:
      "年に1回開催する同門会の総会です。教室の活動報告、研究発表、懇親会を通じて、同門のつながりを深めます。",
    schedule: "毎年6月（横浜市内で開催）",
  },
  {
    title: "若手の会",
    description:
      "入局10年以内の若手同門メンバーによる交流会です。キャリア相談や情報交換を行います。",
    schedule: "年2回開催",
  },
  {
    title: "同門ニュースレター",
    description:
      "教室の最新情報、人事異動、研究成果、メンバーの近況などをお届けするニュースレターです。",
    schedule: "年2回発行",
  },
]

const facilities = [
  {
    category: "大学関連施設",
    items: [
      "横浜市立大学附属病院",
      "横浜市立大学附属 市民総合医療センター",
      "横浜市立大学 先端医科学研究センター",
    ],
  },
  {
    category: "神奈川県内 関連病院",
    items: [
      "横浜市立みなと赤十字病院",
      "済生会横浜市南部病院",
      "藤沢市民病院",
      "横須賀共済病院",
      "小田原市立病院",
      "横浜労災病院",
      "国際親善総合病院",
      "横浜南共済病院",
    ],
  },
  {
    category: "研究協力機関",
    items: [
      "理化学研究所",
      "国立がん研究センター",
      "国立国際医療研究センター",
    ],
  },
]

export default function AlumniPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Alumni & Affiliates
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            同門会・関連施設
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            同門のつながりを大切にし、消化器内科学の発展に共に貢献します。
          </p>
        </div>
      </section>

      {/* About Alumni */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="同門会について"
            enTitle="Alumni Association"
            align="center"
          />
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Users className="h-12 w-12 text-teal" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              横浜市立大学消化器内科学教室同門会は、当教室に在籍した全ての医師で
              構成される親睦・学術団体です。現在約200名を超えるメンバーが、
              大学病院、関連病院、開業医として全国で活躍しています。
              同門のネットワークを通じて、卒後教育、研究協力、
              地域医療の充実に取り組んでいます。
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="同門会の活動"
            enTitle="Activities"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {activities.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <Calendar className="h-8 w-8 text-gold" />
                <h3 className="mt-3 font-serif text-base font-bold text-primary">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
                <p className="mt-3 text-xs font-medium text-teal">
                  {a.schedule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Facilities */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="関連施設"
            enTitle="Affiliated Institutions"
            align="center"
          />
          <div className="flex flex-col gap-8">
            {facilities.map((group) => (
              <div key={group.category}>
                <h3 className="font-serif text-lg font-bold text-primary">
                  {group.category}
                </h3>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
                    >
                      <Building2 className="h-4 w-4 shrink-0 text-navy" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-section-alt py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-xl font-bold text-primary">
            同門会に関するお問い合わせ
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            同門会の活動や入会については、教室事務局までお問い合わせください。
          </p>
          <p className="mt-2 text-sm font-medium text-foreground">
            Email: gastro-alumni@yokohama-cu.ac.jp
          </p>
        </div>
      </section>
    </div>
  )
}
