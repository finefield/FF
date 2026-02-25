import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "よくある質問",
  description: "入局に関するよくある質問と回答をまとめました。",
}

const faqs = [
  {
    question: "入局の条件はありますか？",
    answer: "初期臨床研修を修了された方（修了見込みを含む）であれば、出身大学を問わず歓迎いたします。内科専門研修プログラムに参加していただく形が一般的です。",
  },
  {
    question: "見学はいつでもできますか？",
    answer: "平日の9時〜17時で随時受け付けております。事前に見学申込フォームからお申し込みください。オンライン相談も可能です。",
  },
  {
    question: "他大学出身でも大丈夫ですか？",
    answer: "もちろんです。当教室には多くの他大学出身者が在籍しており、出身大学による差別は一切ありません。",
  },
  {
    question: "研修中の給与・待遇はどうですか？",
    answer: "大学病院および関連病院の規定に基づく給与が支給されます。関連病院での研修時はその病院の給与体系が適用されます。詳細は見学時にお伝えいたします。",
  },
  {
    question: "女性医師へのサポートは？",
    answer: "産休・育休の取得実績があり、復帰後は短時間勤務や外来専従など柔軟な勤務形態を選択できます。女性指導医・先輩医師も多数在籍しています。",
  },
  {
    question: "大学院に進学できますか？",
    answer: "はい、多くの教室員が大学院に進学しています。臨床をしながらの社会人大学院も可能で、研究テーマは指導教官と相談して決めます。",
  },
  {
    question: "海外留学の機会はありますか？",
    answer: "過去5年間で8名が海外留学を経験しています。留学先の紹介や手続きのサポートも教室で行っています。",
  },
  {
    question: "当直の頻度はどのくらいですか？",
    answer: "大学病院では月に4〜5回程度ですが、チーム体制で負担を分散しています。関連病院によって異なりますが、働き方改革を推進しており、適切な当直体制を整えています。",
  },
]

export default function FAQPage() {
  return (
    <div>
      <section className="bg-[#0C2340] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-serif text-sm tracking-widest text-[#C4923A]">
            FAQ
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            よくある質問
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading title="入局に関するQ&A" enTitle="Questions & Answers" />
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-foreground transition-colors hover:text-secondary">
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-xs font-bold text-teal">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-border px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                      A
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-[#F4F7FA] p-6 text-center">
            <p className="font-serif text-lg font-bold text-primary">
              その他のご質問がある方へ
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              お気軽に見学・相談フォームからご連絡ください。
            </p>
            <Link
              href="/recruit/visit"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#C4923A] px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
            >
              見学・相談を申し込む <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
