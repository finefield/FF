import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "横浜市立大学消化器内科学教室のプライバシーポリシーです。",
}

const sections = [
  {
    title: "1. 個人情報の定義",
    content:
      "本ポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別できる情報を指します。",
  },
  {
    title: "2. 個人情報の収集",
    content:
      "当教室では、見学・相談申込フォーム等を通じて、お名前、メールアドレス、電話番号、所属等の個人情報をお預かりする場合があります。これらの情報は、ご本人の同意を得た上で、適法かつ公正な手段により収集いたします。",
  },
  {
    title: "3. 個人情報の利用目的",
    content:
      "収集した個人情報は、以下の目的にのみ利用いたします。\n- 見学・相談のお申し込みへの対応\n- 勉強会・セミナーの開催案内\n- お問い合わせへの回答\n- 教室運営に関する統計資料の作成（個人を特定しない形式）",
  },
  {
    title: "4. 個人情報の第三者提供",
    content:
      "当教室は、法令に基づく場合を除き、ご本人の事前の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "5. 個人情報の管理",
    content:
      "当教室は、個人情報の正確性及び安全性を確保するため、情報セキュリティ対策を実施し、個人情報への不正アクセス、紛失、破壊、改ざん及び漏えいの防止に努めます。",
  },
  {
    title: "6. Cookieの使用について",
    content:
      "本サイトでは、利用者の利便性向上やアクセス解析のためにCookieを使用する場合があります。Cookieの使用を望まない場合は、ブラウザの設定で無効にすることが可能です。",
  },
  {
    title: "7. ポリシーの変更",
    content:
      "本ポリシーは、法令の改正やサイト運営方針の変更に伴い、予告なく改定する場合があります。改定後のポリシーは、本ページに掲載した時点で効力を生じるものとします。",
  },
  {
    title: "8. お問い合わせ",
    content:
      "個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。\n横浜市立大学 医学部 消化器内科学教室\nメール: gastro@yokohama-cu.ac.jp",
  },
]

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Privacy Policy
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-10 text-sm leading-relaxed text-muted-foreground">
            横浜市立大学消化器内科学教室（以下「当教室」）は、個人情報の重要性を認識し、
            その適切な保護と管理に努めてまいります。本サイトにおける個人情報の取り扱いについて、
            以下のとおりプライバシーポリシーを定めます。
          </p>
          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-base font-bold text-primary">
                  {s.title}
                </h2>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {s.content}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            制定日: 2026年2月23日
          </p>
        </div>
      </section>
    </div>
  )
}
