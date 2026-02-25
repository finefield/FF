import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, MessageSquareQuote, Route, GraduationCap, HelpCircle, CalendarCheck } from "lucide-react"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "入局・研修案内",
  description:
    "横浜市立大学消化器内科学教室への入局をお考えの医学生・研修医の方へ。教育・研修・キャリアパス・先輩の声などをご紹介します。",
}

const sections = [
  {
    icon: GraduationCap,
    label: "EDUCATION",
    title: "教育・研修の特徴",
    description:
      "経験豊富な指導医による個別指導体制。内視鏡・超音波の手技から高度な研究手法まで、段階的に学べる教育プログラムを用意しています。",
    href: "/recruit/education",
    color: "teal" as const,
  },
  {
    icon: Building2,
    label: "NETWORK",
    rank: "1",
    title: "連携病院ネットワーク",
    description:
      "神奈川県内最大規模の50以上の連携・協力病院。大学病院から地域の中核病院まで、自分の志向に合わせて研修先を選べます。",
    href: "/network",
    color: "teal" as const,
  },
  {
    icon: Route,
    label: "CAREER",
    rank: "3",
    title: "キャリアパス・ロールモデル",
    description:
      "臨床のスペシャリスト、研究者、教育者、地域医療リーダー。入局後の10年を具体的に描ける多彩なキャリアルートを紹介します。",
    href: "/recruit/career",
    color: "navy" as const,
  },
  {
    icon: MessageSquareQuote,
    label: "VOICE",
    rank: "2",
    title: "先輩医師のVoice",
    description:
      "実際に入局した先輩医師のリアルな声。なぜこの教室を選んだのか、入局後の印象、後輩へのメッセージを聞きました。",
    href: "/recruit/voice",
    color: "gold" as const,
  },
  {
    icon: CalendarCheck,
    label: "VISIT",
    title: "見学・入局相談",
    description:
      "教室の雰囲気やカリキュラムを実際に体感していただけます。オンライン相談も可能です。まず話を聞くだけでも大歓迎です。",
    href: "/recruit/visit",
    color: "gold" as const,
  },
  {
    icon: HelpCircle,
    label: "FAQ",
    title: "よくある質問",
    description:
      "入局の条件、給与・待遇、女性医師のサポート、大学院進学、海外留学など、よくいただく質問にお答えします。",
    href: "/recruit/faq",
    color: "navy" as const,
  },
]

const colorMap = {
  teal: {
    border: "border-t-[#147A85]",
    icon: "bg-[#147A85]/10 text-[#147A85] group-hover:bg-[#147A85] group-hover:text-white",
    badge: "bg-[#147A85]/10 text-[#147A85]",
  },
  gold: {
    border: "border-t-[#C4923A]",
    icon: "bg-[#C4923A]/10 text-[#C4923A] group-hover:bg-[#C4923A] group-hover:text-white",
    badge: "bg-[#C4923A]/10 text-[#C4923A]",
  },
  navy: {
    border: "border-t-[#0C2340]",
    icon: "bg-[#0C2340]/10 text-[#0C2340] group-hover:bg-[#0C2340] group-hover:text-white",
    badge: "bg-[#0C2340]/10 text-[#0C2340]",
  },
}

export default function RecruitPage() {
  return (
    <div>
      {/* Hero banner */}
      <section className="bg-[#0C2340] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-[#C4923A]">
            Recruitment Guide
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
            あなたのキャリアを、ここで描こう。
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 leading-relaxed">
            横浜市立大学消化器内科学教室は、あなたの成長を全力でサポートします。
            ここには、挑戦できる環境と、支え合える仲間がいます。
          </p>
          <nav className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">
              HOME
            </Link>
            <span>{'>'}</span>
            <span className="text-white/80">入局・研修案内</span>
          </nav>
        </div>
      </section>

      {/* Section list */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="入局・研修案内"
            enTitle="For Residents & Students"
            align="center"
          />
          <p className="mx-auto -mt-4 mb-12 max-w-2xl text-center text-sm leading-relaxed text-[#7A8FA8]">
            研修医・医学生の方が知りたい情報を、6つのカテゴリーでまとめています。
            アンケートで特に反響の大きかったテーマにはランキングバッジを付けています。
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon
              const colors = colorMap[section.color]
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className={`group relative flex flex-col rounded-xl border border-[#DCE4EE] border-t-4 ${colors.border} bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1`}
                >
                  {section.rank && (
                    <span
                      className={`absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${colors.badge}`}
                    >
                      {section.rank}位
                    </span>
                  )}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${colors.icon}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-[10px] font-bold tracking-widest text-[#7A8FA8] uppercase">
                    {section.label}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-bold text-[#192533]">
                    {section.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#3D5168]">
                    {section.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C4923A] transition-all group-hover:gap-2">
                    詳しく見る <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C2340] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-white md:text-3xl text-balance">
            まずは見学から始めませんか？
          </h2>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            教室の雰囲気やカリキュラムを実際に体感していただけます。
            オンライン相談も可能です。お気軽にお問い合わせください。
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/recruit/visit"
              className="inline-flex items-center gap-2 rounded-lg bg-[#C4923A] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
            >
              見学・相談を申し込む
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/recruit/faq"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              よくある質問を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
