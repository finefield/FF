"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Calendar, Tag, Building2 } from "lucide-react"

/* ---- ニュース詳細データ ---- */
interface NewsDetail {
  id: string
  date: string
  category: string
  title: string
  // 論文用
  paperTitle?: string
  authors?: string
  journalCitation?: string
  journalUrl?: string
  abstract?: {
    background?: string
    methods?: string
    results?: string
    conclusion?: string
  }
  comment?: {
    author: string
    text: string
  }
  // 一般用
  content?: string
  author?: string
  affiliation?: string
  journal?: string
}

const newsDetails: Record<string, NewsDetail> = {
  "2026-03-08-ikeda": {
    id: "2026-03-08-ikeda",
    date: "2026.03.08",
    category: "論文",
    title: "池田良輔先生（附属・助教）の論文が掲載されました",
    paperTitle: "Feasibility of Endoscopic Closure Method Using Low Cost Clips With Thread for Post Gastric Endoscopic Submucosal Dissection: A Pilot Study",
    authors: "Ryosuke Ikeda, Hiroaki Kaneko, Hiroki Sato, Yuto Matsuoka, Tomomi Hamaguchi, Aya Ikeda, Yoshihiro Goda, Soichiro Sue, Kuniyasu Irie, Shin Maeda",
    journalCitation: "JGH Open. 2026 Feb 27;10(3):e70376.",
    journalUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12949335/",
    abstract: {
      background: "胃内視鏡的粘膜下層剥離術（ESD）における内視鏡的縫合は、遅発性出血の予防に有用である。これまでに様々な縫合方法が報告されているが、その費用は依然として大きな課題となっている。本パイロットスタディでは、低コストの内視鏡的縫合（LoCC）法を開発し、その実現可能性と費用対効果を評価した。",
      methods: "2024年9月から2025年7月の間にESDを受けた18名の胃病変20個を後方視的に解析した。粘膜欠損の閉鎖は、従来のクリップと糸を用いて粘膜縁を近づけるLoCC法を用いて行った。主要評価項目は完全閉鎖率とした。副次評価項目は、閉鎖時間、使用したクリップの数とその費用、術後1日目の持続閉鎖率、および遅発性出血の発生率とした。",
      results: "病変の90.0%（18/20）で完全閉鎖が達成され、85.0%（17/20）で術後1日目に持続閉鎖が得られた。閉鎖時間の中央値は17.5分（四分位範囲[IQR]：12.3〜24.0）、クリップ数の中央値は20個（IQR：15〜23）、費用の中央値は131.8米ドル（IQR：98.8〜151.5）であった。遅発性出血は認められなかった。",
      conclusion: "LoCC法は、他の閉鎖法と比較して、良好な技術的実現性を示し、ESD後潰瘍の閉鎖を費用対効果の高い方法で行うことができる。この方法は、高価な器具を必要とせずに高い閉鎖成功率と持続的な閉鎖率を達成しており、日常臨床において実用的かつ実現可能な閉鎖法となる可能性を示唆している。",
    },
    comment: {
      author: "池田良輔",
      text: `今回低コストのEZclipを用いた胃ESD後潰瘍の縫縮法の実現可能性を検討した論文を報告致しました。

昨今、胃ESD後潰瘍の縫縮は学会でもtopicではありますが、ROLMのためのSure clip、Mantis clip、EHS、OTSCなどいずれも高額であり、せっかく胃ESDを行って出血予防に縫縮までしたのに縫縮にコストをかけた結果、最終的に診療報酬が赤字になってしまうというジレンマが問題です。

この背景を元になるべく縫縮のコストをかけず、かつ縫縮がしばらく維持されるような方法として、EZclipとナイロンを使用して縫縮したLow-cost clip closure method (LoCC method)を考案し、その実現可能性を検証致しました。

結果としては縫縮成功率は90％、翌日の縫縮維持は85％と他の縫縮法と比べてもまずまず良好な成績となりました。またコストは中央値19,500円であり、これをSure clipで行うROLMで行った場合は50,500円程度と、約1/3の費用で行う事ができました。

手技自体もある程度の慣れは必要ですがそこまで複雑ではないので、今まで縫縮をしたくてもSure clipをたくさん使うのに値段的に抵抗があったり、Sure clipを大量に常備していない施設でも選択肢として考えてもいいかもしれません。ぜひ検討頂けましたら幸いです。

なお今回の報告は私自身の中で10本目と一つの区切りの論文でした。コンセプト作りから症例集め、論文作成まで、ゼロから始めてこうして形にできた事に達成感を感じつつも、附属にいる間でぎりぎりacceptされた事に安堵しております。

もちろん私自身だけで達成できた訳ではなく、改めて縫縮時に快く協力して頂いた内視鏡室の看護師の皆様、そしていつも論文作成に御助言を頂いている前田教授にこの場を借りて深くお礼を申し上げます。`,
    },
  },
  "2026-03-03-michibata": {
    id: "2026-03-03-michibata",
    date: "2026.03.03",
    category: "論文",
    title: "道端 信貴先生（横須賀市立市民病院）の論文が掲載されました",
    author: "道端 信貴",
    affiliation: "横須賀市立市民病院",
    content: `道端 信貴先生（横須賀市立市民病院）の論文が掲載されました。

横須賀市立市民病院での臨床経験に基づく症例研究として、消化器内視鏡診療における新知見を報告しています。

地域の基幹病院として質の高い医療を提供しながら、学術活動にも積極的に取り組んでいます。`,
    journal: "Digestive Endoscopy",
  },
  "2026-02-16-seminar": {
    id: "2026-02-16-seminar",
    date: "2026.02.16",
    category: "説明会",
    title: "2026年度 教室説明会・オンライン相談会",
    content: `2026年度の教室説明会・オンライン相談会を開催いたします。

【教室説明会（ハイブリッド開催）】
日時：2026年3月19日（水）18:00〜
場所：横浜市立大学附属病院 + オンライン（Zoom）

【オンライン入局相談会】
日時：2026年2月19日（水）19:00〜
形式：Zoom（個別相談可）

当教室での研修や入局に興味をお持ちの方は、ぜひご参加ください。
事前申込は下記Google Formsよりお願いいたします。

参加申込：https://forms.gle/xxxxx

お問い合わせ：
横浜市立大学 消化器内科学教室
担当：入江 邦泰（運営委員長）
E-mail: gastro@yokohama-cu.ac.jp
TEL: 045-787-2640`,
  },
  "2026-02-15-miwa": {
    id: "2026-02-15-miwa",
    date: "2026.02.15",
    category: "論文",
    title: "三輪 治生先生（センター病院・講師）の論文が掲載されました",
    author: "三輪 治生",
    affiliation: "横浜市立大学附属市民総合医療センター・講師",
    content: `三輪 治生先生（センター病院・講師）の論文が掲載されました。

三輪先生は消化管領域、特に内視鏡診断・治療を専門とし、多数の学術論文を発表されています。
本論文では、ESD（内視鏡的粘膜下層剥離術）に関する最新の知見を報告しています。

センター病院 消化器病センターでは、年間500件以上のESDを実施しており、豊富���症例経験に基づく質の高い研究を行っています。`,
    journal: "Gastrointestinal Endoscopy",
  },
  "2026-02-14-sano": {
    id: "2026-02-14-sano",
    date: "2026.02.14",
    category: "論文",
    title: "佐野 裕亮先生（国立がんセンター中央病院）の論文が掲載されました",
    author: "佐野 裕亮",
    affiliation: "国立がん研究センター中央病院",
    content: `佐野 裕亮先生（国立がんセンター中央病院）の論文が掲載されました。

国立がん研究センター中央病院にて、消化器がんの診断・治療に関する最先端の研究に従事されています。
本論文では、消化器がんに対する新規治療法の開発と臨床応用について報告しています。

当教室出身の先生方が、国内トップレベルの施設で活躍されています。`,
    journal: "Cancer Research",
  },
  "2026-02-08-shibui": {
    id: "2026-02-08-shibui",
    date: "2026.02.08",
    category: "論文",
    title: "渋井 俊祐先生（北里研究所）の論文が掲載されました",
    author: "渋井 俊祐",
    affiliation: "北里研究所",
    content: `渋井 俊祐先生（北里研究所）の論文が掲載されました。

北里研究所での研究活動として、基礎研究と臨床応用の橋渡し研究（トランスレーショナルリサーチ）に取り組んでいます。
本論文では、消化器疾患の病態解明に関する新知見を報告しています。

研究志向の先生方のキャリアパスとして、研究所での活躍も当教室の特色の一つです。`,
    journal: "Journal of Gastroenterology",
  },
  "2026-02-05-miwa2": {
    id: "2026-02-05-miwa2",
    date: "2026.02.05",
    category: "論文",
    title: "三輪 治生先生（センター病院・講師）の論文が掲載されました",
    author: "三輪 治生",
    affiliation: "横浜市立大学附属市民総合医療センター・講師",
    content: `三輪 治生先生（センター病院・講師）の論文が掲載されました。

三輪先生は当教室で最も多くの論文を発表している医師の一人であり、消化管内視鏡領域における研究活動を精力的に行っています。
本論文では、早期消化管がんの内視鏡診断に関する新たな知見を報告しています。

センター病院での豊富な臨床経験を学術活動に還元し、後進の指導にも力を入れています。`,
    journal: "Endoscopy",
  },
}

const newsOrder = [
  "2026-03-08-ikeda",
  "2026-03-03-michibata",
  "2026-02-16-seminar",
  "2026-02-15-miwa",
  "2026-02-14-sano",
  "2026-02-08-shibui",
  "2026-02-05-miwa2",
]

const categoryColors: Record<string, string> = {
  "受賞": "bg-[#C4923A]/10 text-[#C4923A]",
  "お知らせ": "bg-[#147A85]/10 text-[#147A85]",
  "論文": "bg-[#0C2340]/10 text-[#0C2340]",
  "説明会": "bg-[#C4923A]/10 text-[#C4923A]",
  "学会": "bg-[#147A85]/10 text-[#147A85]",
  "イベント": "bg-gray-100 text-gray-600",
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const news = newsDetails[slug]

  if (!news) {
    notFound()
  }

  // Prev/Next navigation
  const currentIndex = newsOrder.indexOf(slug)
  const prevSlug = currentIndex > 0 ? newsOrder[currentIndex - 1] : null
  const nextSlug = currentIndex < newsOrder.length - 1 ? newsOrder[currentIndex + 1] : null

  // 論文形式かどうか
  const isPaper = !!news.paperTitle

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0C2340] py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            お知らせ一覧に戻る
          </Link>
          <div className="mt-5">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                categoryColors[news.category] || "bg-gray-100 text-gray-600"
              }`}
            >
              {news.category}
            </span>
            <h1 className="mt-3 font-serif text-xl font-bold leading-relaxed text-white md:text-2xl">
              {news.title}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/50">
              <Calendar className="h-4 w-4" />
              {news.date}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4">
          {isPaper ? (
            /* 論文形式のレイアウト */
            <article className="rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* 論文タイトル・著者・ジャーナル */}
              <div className="border-b border-gray-100 p-6 md:p-8">
                <h2 className="font-serif text-lg font-bold leading-relaxed text-[#0C2340] md:text-xl">
                  {news.paperTitle}
                </h2>
                {news.authors && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {news.authors}
                  </p>
                )}
                {news.journalCitation && (
                  <div className="mt-4">
                    {news.journalUrl ? (
                      <a
                        href={news.journalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#147A85] transition-colors hover:text-[#0C2340] hover:underline"
                      >
                        {news.journalCitation}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-[#147A85]">
                        {news.journalCitation}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Abstract */}
              {news.abstract && (
                <div className="border-b border-gray-100 p-6 md:p-8">
                  <h3 className="flex items-center gap-2 text-base font-bold text-[#0C2340]">
                    <span className="inline-block h-5 w-1 rounded-full bg-[#C4923A]" />
                    Abstract
                  </h3>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-600">
                    {news.abstract.background && (
                      <div>
                        <p className="font-semibold text-[#0C2340]">背景と目的</p>
                        <p className="mt-1">{news.abstract.background}</p>
                      </div>
                    )}
                    {news.abstract.methods && (
                      <div>
                        <p className="font-semibold text-[#0C2340]">方法</p>
                        <p className="mt-1">{news.abstract.methods}</p>
                      </div>
                    )}
                    {news.abstract.results && (
                      <div>
                        <p className="font-semibold text-[#0C2340]">結果</p>
                        <p className="mt-1">{news.abstract.results}</p>
                      </div>
                    )}
                    {news.abstract.conclusion && (
                      <div>
                        <p className="font-semibold text-[#0C2340]">結論</p>
                        <p className="mt-1">{news.abstract.conclusion}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* コメント */}
              {news.comment && (
                <div className="p-6 md:p-8">
                  <h3 className="flex items-center gap-2 text-base font-bold text-[#0C2340]">
                    <span className="inline-block h-5 w-1 rounded-full bg-[#147A85]" />
                    {news.comment.author}先生のコメント
                  </h3>
                  <div className="mt-4 rounded-xl bg-gray-50 p-5">
                    {news.comment.text.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="mb-3 text-sm leading-relaxed text-gray-600 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                    <p className="mt-4 text-right text-sm font-medium text-gray-500">
                      （{news.comment.author}）
                    </p>
                  </div>
                </div>
              )}
            </article>
          ) : (
            /* 一般形式のレイアウト */
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
              <div className="text-sm leading-relaxed text-gray-600">
                {news.content?.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {news.author && (
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">著者：</span>
                    {news.author}
                  </p>
                  {news.affiliation && (
                    <p className="mt-1 text-sm text-gray-500">
                      <span className="font-medium text-gray-700">所属：</span>
                      {news.affiliation}
                    </p>
                  )}
                </div>
              )}
            </article>
          )}

          {/* Prev / Next Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {prevSlug ? (
              <Link
                href={`/news/${prevSlug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#0C2340]"
              >
                <ChevronLeft className="h-4 w-4" />
                Prev
              </Link>
            ) : (
              <div />
            )}
            {nextSlug ? (
              <Link
                href={`/news/${nextSlug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#0C2340]"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
