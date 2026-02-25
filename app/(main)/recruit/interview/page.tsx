import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"

export const metadata: Metadata = {
  title: "先輩医師インタビュー",
  description: "当教室で活躍する先輩医師のインタビューをご紹介します。",
}

const interviews = [
  {
    name: "中村 健太",
    year: "入局3年目",
    role: "後期研修医",
    question1: "入局を決めた理由は？",
    answer1: "見学に来た時の教室の雰囲気が決め手でした。先輩方が気さくに話しかけてくれて、ここなら安心して成長できると感じました。消化器内科の幅広さにも魅力を感じました。",
    question2: "日々の研修はどうですか？",
    answer2: "内視鏡の技術指導が丁寧で、少しずつ確実に上達していることを実感しています。カンファレンスでの議論も活発で、毎日新しい学びがあります。",
    question3: "後輩へのメッセージ",
    answer3: "まず見学に来てください。百聞は一見にしかず、教室の温かい雰囲気を肌で感じてもらえると思います。",
  },
  {
    name: "高橋 美穂",
    year: "入局6年目",
    role: "大学院生",
    question1: "なぜ大学院に進学しましたか？",
    answer1: "臨床を続ける中で、目の前の患者さんの治療法を自分で開発したいという思いが芽生えました。教授や指導教官が研究の面白さを教えてくれたのも大きいです。",
    question2: "研究と臨床の両立は？",
    answer2: "大学院生の間は研究に集中できる時間が確保されています。もちろん臨床の感覚も維持できるよう、外来や当直もバランスよく組まれています。",
    question3: "後輩へのメッセージ",
    answer3: "研究にまだ興味がなくても大丈夫です。臨床経験を積む中で、自然と疑問が生まれ、研究への道が開けてきます。まずは臨床に集中してください。",
  },
  {
    name: "山本 大輔",
    year: "入局10年目",
    role: "関連病院 消化器内科医長",
    question1: "関連病院での勤務はどうですか？",
    answer1: "大学で学んだ知識と技術を存分に活かせる環境です。地域の患者さんに直接貢献できることにやりがいを感じています。困ったことがあれば大学に相談できるネットワークも心強いです。",
    question2: "大学での研修で役立っていることは？",
    answer2: "エビデンスに基づいた診療の考え方が身についたこと。それと、内視鏡や超音波の技術は何物にも代えがたい財産です。",
    question3: "後輩へのメッセージ",
    answer3: "消化器内科は手技も多く、日々の達成感が大きい診療科です。横浜市立大学の教室は教育に本当に熱心なので、しっかり成長できますよ。",
  },
  {
    name: "小林 さくら",
    year: "入局4年目",
    role: "専攻医",
    question1: "女性医師として働きやすい環境ですか？",
    answer1: "とても働きやすいです。産休・育休の取得実績もあり、復帰後も柔軟な勤務形態で臨床を続けられます。女性の先輩も多く、ロールモデルが身近にいるのは心強いです。",
    question2: "入局してよかったことは？",
    answer2: "同期の仲間と切磋琢磨できること。勉強会や症例検討会を自主的に開いたり、学会にも一緒に参加しています。プライベートでも仲が良いんです。",
    question3: "後輩へのメッセージ",
    answer3: "性別を問わず、やる気のある人を全力でサポートしてくれる教室です。迷っているなら、ぜひ一度見学にいらしてください。",
  },
]

export default function InterviewPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Interviews
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            先輩医師インタビュー
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80 text-sm">
            当教室で活躍する先輩医師のリアルな声をお届けします。
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex flex-col gap-12">
            {interviews.map((person, i) => (
              <article
                key={person.name}
                className={`rounded-2xl border border-border p-6 md:p-8 ${i % 2 === 0 ? "bg-card" : "bg-section-alt"}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/10">
                    <span className="font-serif text-2xl text-navy/50">{person.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-serif text-xl font-bold text-primary">{person.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {person.role} / {person.year}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {[
                    { q: person.question1, a: person.answer1 },
                    { q: person.question2, a: person.answer2 },
                    { q: person.question3, a: person.answer3 },
                  ].map((qa) => (
                    <div key={qa.q}>
                      <p className="font-serif text-sm font-bold text-secondary">
                        Q. {qa.q}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {qa.a}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
