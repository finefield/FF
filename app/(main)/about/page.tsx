"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

export default function AboutPage() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* ---- Hero ---- */}
      <section className="relative flex items-center overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-white/40" aria-label="パンくず">
            <Link href="/" className="transition-colors hover:text-white/70">HOME</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/70">教室について</span>
          </nav>
          <p className="font-serif text-sm tracking-[0.15em] text-white/45 italic">About Us</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl text-balance">
            教室について
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            横浜市立大学 医学部 消化器内科学教室の理念、歩み、
            そして教室を支えるスタッフをご紹介します。
          </p>
        </div>
      </section>

      {/* ---- 教授挨拶 ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal grid items-start gap-12 md:grid-cols-5">
            {/* 写真 */}
            <div className="flex justify-center md:col-span-2 md:justify-start">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-muted shadow-lg aspect-[3/4]">
                <div className="flex h-full items-center justify-center bg-gradient-to-b from-navy/5 to-teal/5">
                  <div className="text-center">
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-navy/10">
                      <span className="font-serif text-4xl text-navy/30">前</span>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground">教授写真</p>
                  </div>
                </div>
              </div>
            </div>

            {/* テキスト */}
            <div className="md:col-span-3">
              <p className="font-serif text-sm tracking-wider text-muted-foreground italic">
                Message from Professor
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
                教授挨拶
              </h2>
              <p className="mt-6 font-serif text-xl font-bold text-foreground md:text-2xl">
                前田 愼 <span className="ml-2 text-base font-normal text-text-sub">教授</span>
              </p>

              <div className="mt-6 flex flex-col gap-4 text-[15px] leading-[1.9] text-text-sub">
                <p>
                  横浜市立大学消化器内科学教室のホームページをご覧いただき、
                  誠にありがとうございます。
                </p>
                <p>
                  当教室は、食道・胃・小腸・大腸・肝臓・胆嚢・膵臓に至る
                  消化器疾患全般を対象に、最先端の診療・研究・教育を行っています。
                  「患者さんに最善の医療を提供する」という理念のもと、
                  大学病院ならではの高度医療と、地域に根ざした温かい医療の
                  両立を目指しています。
                </p>
                <p>
                  研究面では、消化器がんの早期診断・新規治療法の開発、
                  肝疾患の病態解明、炎症性腸疾患の治療最適化など、
                  幅広い分野で世界に発信する研究を進めています。
                  年間100本を超える論文発表、80件以上の学会発表は、
                  教室員一人ひとりの努力の結晶です。
                </p>
                <p>
                  教育面では、次世代の消化器内科医の育成に力を注いでいます。
                  50以上の連携病院ネットワークを活かし、
                  充実した研修プログラムと温かいチームの雰囲気のなかで、
                  若い医師が成長できる環境を整えています。
                </p>
                <p>
                  「消化器の最前線で、横浜から世界へ。」
                  この言葉を胸に、共に医療の未来を切り拓く仲間をお待ちしています。
                </p>
              </div>

              {/* 略歴 */}
              <div className="mt-10 rounded-xl border border-border bg-off-white p-6">
                <h3 className="font-serif text-sm font-bold text-navy">略歴</h3>
                <dl className="mt-4 flex flex-col gap-3 text-sm text-text-sub">
                  {[
                    ["1990年", "横浜市立大学医学部 卒業"],
                    ["1996年", "同大学大学院医学研究科 修了（医学博士）"],
                    ["1998年", "米国国立衛生研究所（NIH）留学"],
                    ["2005年", "横浜市立大学附属病院 准教授"],
                    ["2020年", "横浜市立大学大学院医学研究科 消化器内科学 教授（現職）"],
                  ].map(([year, desc]) => (
                    <div key={year} className="flex gap-4">
                      <dt className="w-20 shrink-0 font-medium text-foreground">{year}</dt>
                      <dd>{desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- ナビゲーション ---- */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">
              Learn More
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              教室をもっと知る
            </h2>
          </div>

          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-2">
            {/* 沿革カード */}
            <Link
              href="/about/history"
              className="reveal-child group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10">
                  <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                  教室の沿革・ミッション
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-sub">
                  1949年の内科学教室設立から現在まで、
                  消化器内科学教室の歩みとミッションをご紹介します。
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition-all group-hover:gap-3">
                沿革を見る
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* スタッフカード */}
            <Link
              href="/about/staff"
              className="reveal-child group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                  スタッフ紹介
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-sub">
                  教授・准教授から大学院生まで、
                  各分野のエキスパートが揃う教室のメンバーを紹介します。
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition-all group-hover:gap-3">
                スタッフを見る
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal rounded-2xl bg-navy p-8 text-center md:p-12">
            <h3 className="font-serif text-xl font-bold text-white md:text-2xl text-balance">
              私たちと一緒に、消化器内科の未来を。
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60">
              見学や入局に関するご相談を随時受け付けています。
              まずはお気軽にお問い合わせください。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/recruit/visit"
                className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-gold-light hover:gap-3"
              >
                見学・入局相談を申込む
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/recruit/voice"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/50 hover:bg-white/5 hover:text-white"
              >
                先輩医師のVoiceを読む
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
