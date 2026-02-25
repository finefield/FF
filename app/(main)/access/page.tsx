import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { MapPin, Train, Bus, Car, Phone, Clock, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "アクセス・リンク",
  description:
    "横浜市立大学附属病院 消化器内科へのアクセス情報・交通案内をご紹介します。",
}

const accessInfo = [
  {
    icon: Train,
    method: "電車でお越しの方",
    details: [
      "京浜急行「金沢八景駅」下車 → シーサイドライン乗換 → 「市大医学部駅」下車 徒歩1分",
      "シーサイドライン「市大医学部駅」直結",
    ],
  },
  {
    icon: Bus,
    method: "バスでお越しの方",
    details: [
      "JR「新杉田駅」よりバス約15分 「市大病院前」下車",
      "京浜急行「金沢八景駅」よりバス約10分 「市大病院前」下車",
    ],
  },
  {
    icon: Car,
    method: "お車でお越しの方",
    details: [
      "首都高速湾岸線「幸浦IC」より約5分",
      "横浜横須賀道路「朝比奈IC」より約10分",
      "病院駐車場あり（有料）",
    ],
  },
]

const relatedLinks = [
  { title: "横浜市立大学", url: "https://www.yokohama-cu.ac.jp/" },
  { title: "横浜市立大学 医学部", url: "https://www-user.yokohama-cu.ac.jp/~medicine/" },
  { title: "横浜市立大学附属病院", url: "https://www.yokohama-cu.ac.jp/fukuhp/" },
  { title: "横浜市立大学附属 市民総合医療センター", url: "https://www.yokohama-cu.ac.jp/urahp/" },
  { title: "日本消化器病学会", url: "https://www.jsge.or.jp/" },
  { title: "日本消化器内視鏡学会", url: "https://www.jges.net/" },
  { title: "日本肝臓学会", url: "https://www.jsh.or.jp/" },
]

export default function AccessPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Access & Links
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            {"アクセス\u30FB\u30EA\u30F3\u30AF"}
          </h1>
        </div>
      </section>

      {/* Address */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="所在地" enTitle="Location" align="center" />
          <div className="rounded-xl border border-border bg-card p-6 text-center md:p-8">
            <MapPin className="mx-auto h-8 w-8 text-teal" />
            <p className="mt-4 font-serif text-lg font-bold text-primary">
              横浜市立大学附属病院 消化器内科
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              〒236-0004 神奈川県横浜市金沢区福浦3-9
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-teal" />
                045-XXX-XXXX（代表）
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-teal" />
                受付 平日 8:30 - 17:00
              </span>
            </div>
          </div>

          {/* Map embed placeholder */}
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <div className="relative aspect-video w-full bg-section-alt">
              <iframe
                title="横浜市立大学附属病院 地図"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.6!2d139.646!3d35.339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5qiq5rWc5biC56uL5aSn5a2m6ZmE5bGe55eF6Zmi!5e0!3m2!1sja!2sjp!4v1!5m2!1sja!2sjp"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Access Methods */}
      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="交通案内" enTitle="Directions" align="center" />
          <div className="flex flex-col gap-6">
            {accessInfo.map((a) => {
              const Icon = a.icon
              return (
                <div
                  key={a.method}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-primary">
                      {a.method}
                    </h3>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {a.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="関連リンク" enTitle="Related Links" align="center" />
          <div className="grid gap-3 md:grid-cols-2">
            {relatedLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.title}
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
