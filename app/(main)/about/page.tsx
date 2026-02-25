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
                前田 愼 <span className="ml-2 text-base font-normal text-text-sub">主任教授</span>
              </p>

              <div className="mt-6 flex flex-col gap-5 text-[15px] leading-[1.9] text-text-sub">
                <p>
                  横浜市立大学消化器内科学教室ホームページへようこそ
                </p>
                <p>
                  私たちの教室は横浜市立大学附属病院および附属市民総合医療センターの大学病院に所属する医師と神奈川を中心とする多くの関連病院に所属する医師で構成されています。若い医師を中心にいくつかの大きな目標を掲げて、日々精進しています。この医師集団が一丸となって、ある方向性をもって、医療・研究に取り組めば、多くのことが成し遂げられるはずです。そして、広く医療の発展に貢献できると信じています。
                </p>

                {/* 3つの目標 */}
                <div className="rounded-xl border border-border bg-off-white p-6">
                  <ol className="flex flex-col gap-2 font-serif text-base font-bold text-navy">
                    <li>{'1. 高い医療技術の提供と地域医療への貢献'}</li>
                    <li>{'2. リサーチマインドの育成'}</li>
                    <li>{'3. 教育の充実'}</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-foreground">高い医療技術の提供と地域医療への貢献</h3>
                  <p className="mt-2">
                    神奈川県内唯一の公立大学である本学には、大学病院、協力病院とともに近隣地域の医療を充実させることが求められています。特にがん診療などの難病に対する診断・治療における高度な医療が求められています。私たちの教室では両大学病院、神奈川県立がんセンターなどで最先端の医療を学んだ医師たちをさらに地域の中核病院へ配置することによって、その目的の達成に向かい努力しております。
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-foreground">リサーチマインドの育成</h3>
                  <p className="mt-2">
                    私たちの教室の目標とする医師像は医学を探求する力を有する消化器内科医であり、すなわちscientific gastroenterologistです。臨床を行っていく上で、研究心を持つことは極めて重要です。私たち臨床医が、日常診療の中から出てくる疑問点について自らが研究することの重要性を私たちの教室から発信していきたいと考えています。
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-foreground">教育の充実</h3>
                  <p className="mt-2">
                    消化器疾患は日常診療で遭遇する機会の多い疾患群であり、医学部学生が学んでおくべきことは多いと考えられます。診療上重要な疾患群、治療法、診断学に重きを置いた教育が必要です。大学院教育の充実は教室の発展において最重要な課題です。テーマの選択は臨床現場に直結するような研究を行わせたいと考えています。
                  </p>
                </div>

                <p className="font-serif text-base text-foreground">
                  教室全体としての目標とともに、個人を尊重し、それぞれの個性、やる気、キャリアに出来る限り沿った医師生活を送っていただけることも重要な目標としています。若い先生を中心にした活気あふれる教室です。是非、我々と一緒に消化器内科学を究めませんか？
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 略歴 ---- */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Profile</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
              前田 愼 教授 略歴
            </h2>
          </div>

          <div className="reveal mt-10 grid gap-8 lg:grid-cols-2">
            {/* 経歴 */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-navy">経歴</h3>
              <dl className="mt-5 flex flex-col gap-3 text-sm text-text-sub">
                {[
                  ["1993年3月", "北海道大学医学部医学科卒業"],
                  ["1993年6月", "東京大学医学部附属病院内科研修医"],
                  ["1995年6月", "東京大学医学部附属病院第二内科医員"],
                  ["1996年4月", "東京大学大学院医学系研究科博士課程入学"],
                  ["2000年3月", "同 修了"],
                  ["2001年9月", "米国カリフォルニア州立大学サンディエゴ校研究員"],
                  ["2005年4月", "朝日生命成人病研究所丸の内病院 消化器科部長"],
                  ["2008年9月", "東京大学医学部附属病院 消化器内科助教"],
                  ["2008年12月", "東京大学医学部附属病院 消化器内科特任講師"],
                  ["2010年4月", "横浜市立大学医学部 消化器内科 主任教授"],
                ].map(([year, desc]) => (
                  <div key={year} className="flex gap-4">
                    <dt className="w-24 shrink-0 font-medium text-foreground">{year}</dt>
                    <dd>{desc}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 研究テーマ + 所属学会 */}
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-navy">研究テーマ</h3>
                <ol className="mt-5 flex flex-col gap-2.5 text-sm text-text-sub">
                  {[
                    "炎症性腸疾患の病態解明と新規分子標的薬の開発",
                    "消化器癌新規マウスモデルの確立",
                    "癌発生・進展におけるストレス応答シグナルの関与",
                    "慢性炎症から発癌へのメカニズムの解明",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-xs font-bold text-teal">{i + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-navy">所属学会・資格等</h3>
                <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-text-sub sm:grid-cols-2">
                  {[
                    "日本内科学会（認定内科医）",
                    "日本消化器病学会（専門医・学会評議員）",
                    "日本消化器内視鏡学会（専門医・指導医）",
                    "日本肝臓学会（専門医）",
                    "日本膵臓学会",
                    "日本大腸肛門学会",
                    "日本癌学会",
                    "がん治療認定医",
                    "日本ヘリコバクター学会（認定医・評議員）",
                    "日本消化管学会（胃腸科認定医）",
                    "日本分子生物学会",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 主な業績 */}
          <div className="reveal mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-navy">
              主な業績
              <span className="ml-2 text-sm font-normal text-text-sub">英文原著 I.F. {'>'} 7</span>
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {[
                { authors: "Nakagawa H, ... Maeda S.", title: "Loss of liver E-cadherin induces sclerosing cholangitis and promotes carcinogenesis.", journal: "Proc Natl Acad Sci U S A", year: "2014" },
                { authors: "Hayakawa Y, ... Maeda S, Koike K.", title: "Apoptosis signal-regulating kinase 1 and cyclin D1 compose a positive feedback loop contributing to tumor growth in gastric cancer.", journal: "Proc Natl Acad Sci U S A", year: "2011" },
                { authors: "Sakamoto K, ... Maeda S.", title: "IkappaB kinase beta regulates gastric carcinogenesis via IL-1 expression.", journal: "Gastroenterology", year: "2010" },
                { authors: "Maeda S, Kamata H, ... Karin M.", title: "IKKb couples hepatocyte death to cytokine-driven compensatory proliferation that promotes chemical hepatocarcinogenesis.", journal: "Cell", year: "2005" },
                { authors: "Maeda S, Hsu LC, ... Karin M.", title: "Nod2 mutation in Crohn's disease potentiates NF-kappaB activity and IL-1beta processing.", journal: "Science", year: "2005" },
                { authors: "Naugler WE, ... Maeda S, ... Karin M.", title: "Gender disparity in liver cancer due to sex differences in MyD88-dependent IL-6 production.", journal: "Science", year: "2007" },
                { authors: "Kamata H, ... Maeda S, ... Karin M.", title: "Reactive oxygen species promote TNFa-induced cell death and sustained JNK activation by oxidizing MAP kinase phosphatases.", journal: "Cell", year: "2005" },
                { authors: "Sakurai T, ... Maeda S, ... Karin M.", title: "Hepatocyte necrosis induced by oxidative stress and IL-1 alpha release mediate carcinogen-induced compensatory proliferation and liver tumorigenesis.", journal: "Cancer Cell", year: "2008" },
              ].map((pub, i) => (
                <div key={i} className="flex gap-4 rounded-lg border border-border/50 bg-off-white p-4 text-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy/10 text-xs font-bold text-navy">{i + 1}</span>
                  <div>
                    <p className="text-text-sub"><span className="font-medium text-foreground">{pub.authors}</span> {pub.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      <span className="font-medium italic">{pub.journal}</span> ({pub.year})
                    </p>
                  </div>
                </div>
              ))}
              <p className="mt-2 text-center text-xs text-muted-foreground">
                他、Cell, Science, Nature Medicine, PNAS, Gastroenterology, Hepatology 等に多数掲載（全42報 / I.F. {'>'} 7）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 教室をもっと知る ---- */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">
              Learn More
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              教室をもっと知る
            </h2>
          </div>

          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/about/history",
                icon: (
                  <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                ),
                iconBg: "bg-teal/10",
                title: "教室の沿革",
                desc: "1949年の内科学教室設立から現在まで、消化器内科学教室の歩みをご紹介します。",
                cta: "沿革を見る",
              },
              {
                href: "/about/staff",
                icon: (
                  <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                ),
                iconBg: "bg-gold/10",
                title: "スタッフ紹介",
                desc: "教授・准教授から大学院生まで、各分野のエキスパートが揃う教室メンバーを紹介します。",
                cta: "スタッフを見る",
              },
              {
                href: "/research",
                icon: (
                  <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.341 4.023A2.25 2.25 0 0 1 15.523 20H8.477a2.25 2.25 0 0 1-2.136-1.477L5 14.5m14 0H5" />
                  </svg>
                ),
                iconBg: "bg-navy/10",
                title: "研究紹介",
                desc: "消化管・肝臓・胆膵の3グループを中心とした研究テーマと最新の成果をご紹介します。",
                cta: "研究を見る",
              },
              {
                href: "/research/publications",
                icon: (
                  <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                iconBg: "bg-teal/10",
                title: "論文・業績一覧",
                desc: "国内外の主要ジャーナルに掲載された論文、著書などの業績一覧です。",
                cta: "業績を見る",
              },
              {
                href: "/research/media",
                icon: (
                  <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                  </svg>
                ),
                iconBg: "bg-gold/10",
                title: "学会発表・メディア掲載",
                desc: "国内・国際学会での発表実績や、新聞・テレビなどのメディア掲載情報です。",
                cta: "発表を見る",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="reveal-child group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-sub">
                    {card.desc}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition-all group-hover:gap-3">
                  {card.cta}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-off-white py-16 md:py-20">
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
