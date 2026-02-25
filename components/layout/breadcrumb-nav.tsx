"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

const pathLabels: Record<string, string> = {
  about: "教室紹介",
  history: "沿革・ミッション",
  staff: "スタッフ紹介",
  recruit: "入局希望の方",
  education: "教育・研修の特徴",
  career: "キャリアパス",
  interview: "先輩医師インタビュー",
  qualifications: "資格取得実績",
  research: "研究業績",
  hospitals: "協力病院ネットワーク",
  visit: "見学・相談申込",
  faq: "よくある質問",
  patient: "患者・地域の方",
  flow: "受診の流れ",
  diseases: "疾患・治療の解説",
  "liver-school": "肝臓病教室",
  "clinical-research": "臨床研究・治験",
  qa: "Q&A",
  publications: "論文・業績",
  awards: "受賞・メディア掲載",
  topics: "研究トピックス",
  english: "English",
  events: "学会・イベント",
  cooperation: "地域連携",
  referral: "紹介・逆紹介の流れ",
  contact: "連絡先",
  seminars: "勉強会・セミナー",
  alumni: "同門会・関連施設",
  news: "NEWS",
  access: "アクセス",
  privacy: "プライバシーポリシー",
  "sitemap-page": "サイトマップ",
}

export function BreadcrumbNav() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label = pathLabels[segment] || segment
    const isLast = index === segments.length - 1

    return { href, label, isLast }
  })

  return (
    <nav
      aria-label="パンくずリスト"
      className="mx-auto max-w-7xl px-4 py-3"
    >
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        <li className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1 transition-colors hover:text-secondary">
            <Home className="h-3 w-3" />
            <span>ホーム</span>
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            {crumb.isLast ? (
              <span className="font-medium text-foreground">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="transition-colors hover:text-secondary"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
