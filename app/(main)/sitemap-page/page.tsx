import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "サイトマップ",
  description: "横浜市立大学消化器内科学教室 公式サイトの全ページ一覧です。",
}

const sitemapData = [
  {
    title: "教室紹介",
    links: [
      { label: "教授挨拶", href: "/about" },
      { label: "教室の沿革・ミッション", href: "/about/history" },
      { label: "スタッフ紹介", href: "/about/staff" },
    ],
  },
  {
    title: "入局希望の方",
    links: [
      { label: "入局のすすめ", href: "/recruit" },
      { label: "教育・研修の特徴", href: "/recruit/education" },
      { label: "キャリアパス", href: "/recruit/career" },
      { label: "先輩医師インタビュー", href: "/recruit/interview" },
      { label: "資格取得実績", href: "/recruit/qualifications" },
      { label: "研究紹介", href: "/recruit/research" },
      { label: "協力病院ネットワーク", href: "/recruit/hospitals" },
      { label: "見学・相談申込", href: "/recruit/visit" },
      { label: "よくある質問", href: "/recruit/faq" },
    ],
  },
  {
    title: "患者・地域の方",
    links: [
      { label: "診療のご案内", href: "/patient" },
      { label: "受診の流れ・アクセス", href: "/patient/flow" },
      { label: "疾患・治療の解説", href: "/patient/diseases" },
      { label: "肝臓病教室", href: "/patient/liver-school" },
      { label: "臨床研究・治験", href: "/patient/clinical-research" },
      { label: "患者向けQ&A", href: "/patient/qa" },
    ],
  },
  {
    title: "研究業績",
    links: [
      { label: "研究グループ紹介", href: "/research" },
      { label: "論文・業績", href: "/research/publications" },
      { label: "受賞・メディア掲載", href: "/research/awards" },
      { label: "研究トピックス", href: "/research/topics" },
      { label: "English Page", href: "/research/english" },
      { label: "学会・イベント", href: "/research/events" },
    ],
  },
  {
    title: "地域連携",
    links: [
      { label: "病診連携のご案内", href: "/cooperation" },
      { label: "紹介・逆紹介の流れ", href: "/cooperation/referral" },
      { label: "地域連携担当者連絡先", href: "/cooperation/contact" },
      { label: "協力病院ネットワーク", href: "/cooperation/hospitals" },
      { label: "地域勉強会・セミナー", href: "/cooperation/seminars" },
      { label: "同門会・関連施設", href: "/cooperation/alumni" },
    ],
  },
  {
    title: "その他",
    links: [
      { label: "NEWS・お知らせ", href: "/news" },
      { label: "アクセス・リンク", href: "/access" },
      { label: "プライバシーポリシー", href: "/privacy" },
    ],
  },
]

export default function SitemapPageContent() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Sitemap
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            サイトマップ
          </h1>
        </div>
      </section>

      {/* Sitemap */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="font-serif text-lg font-bold text-primary transition-colors hover:text-secondary"
            >
              トップページ
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sitemapData.map((group) => (
              <div key={group.title}>
                <h2 className="font-serif text-base font-bold text-primary">
                  {group.title}
                </h2>
                <div className="mt-2 h-0.5 w-8 bg-gold" />
                <ul className="mt-3 flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-secondary"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
