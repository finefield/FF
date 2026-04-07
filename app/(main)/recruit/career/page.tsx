"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/layout/section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-animation"
import { ArrowRight, Stethoscope, Microscope, Building2, Target, GraduationCap, User } from "lucide-react"
import { cn } from "@/lib/utils"

/* ── 3つのキャリアルートデータ ── */
const routes = [
  {
    id: "clinical",
    label: "臨床重点ルート",
    icon: Stethoscope,
    color: "teal",
    tagline: "内視鏡・IVRのエキスパートとして最前線で臨床をリードする道",
    catch: "高度な手技と豊富な症例数で、消化器診療の第一線に立ちます。",
    goal: "大学病院部長 / 基幹病院 消化器センター長",
    steps: [
      { year: "1-2年目", label: "初期・後期研修", title: "消化器内科の基礎を構築", desc: "内科全般のローテーションで基盤を固めながら、上下部内視鏡・腹部超音波など消化器内科の基本手技を習得。", place: "附属病院 / 市民総合医療センター / 連携病院" },
      { year: "3-5年目", label: "専門医取得期", title: "内科専門医・消化器病専門医の取得", desc: "大学病院と関連病院のローテーションで症例数を効率的に積み上げ、内科専門医・消化器病専門医を取得。ERCP・ESDなど高難度手技の修練も開始。", place: "大学病院 + 関連病院ローテーション" },
      { year: "6-8年目", label: "臨床フェロー期", title: "高難度手技の修練・肝臓/消化管/胆膵の専門特化", desc: "消化器病専門医取得後、肝臓・胆膵・消化管の3グループの中から専門領域を選択。神奈川県立がんセンターでの最先端がん診療も経験可能。大学院進学も選択肢のひとつ。", place: "大学病院 / がんセンター / 専門施設" },
      { year: "9年目以降", label: "指導的立場へ", title: "後進育成・部門リーダーへ", desc: "内視鏡指導医として後進を育成。連携病院での部長職・大学での講師・准教授を目指します。当教室の同門ネットワークが強力なサポートになります。", place: "基幹病院部長 / 大学講師・准教授" },
    ],
  },
  {
    id: "research",
    label: "研究重点ルート",
    icon: Microscope,
    color: "navy",
    tagline: "基礎・臨床研究で学術的な成果を出し、国内外から注目される研究者への道",
    catch: "年間100本超の論文実績が示す通り、研究環境は充実しています。",
    goal: "大学教授・准教授 / 国際研究者",
    steps: [
      { year: "1-3年目", label: "臨床基盤の構築", title: "臨床研修と研究テーマの模索", desc: "まず臨床の基礎を固めながら、指導医とともに研究テーマを探索。肝臓・胆膵・消化管の各グループの研究活動に触れ、自分の興味を絞り込む。", place: "附属病院 / 市民総合医療センター" },
      { year: "3-6年目", label: "大学院・学位取得", title: "博士号（医学）の取得", desc: "大学院に進学し、基礎研究または臨床研究で学位取得。50以上の連携病院を活用した多施設共同研究で、質の高いデータを収集。国内外の学術誌への投稿・掲載を目指す。", place: "横浜市立大学大学院 / 連携施設" },
      { year: "7-9年目", label: "国際展開", title: "海外留学・国際学会発表", desc: "学位取得後、海外の研究機関への留学も積極的にサポート。DDW・EASLをはじめとする国際学会での発表経験を積み、グローバルな研究者ネットワークを構築。", place: "海外研究機関 / 国際学会（DDW・EASL等）" },
      { year: "10年目以降", label: "研究リーダーへ", title: "独立した研究グループの運営", desc: "大学のスタッフ（助教・講師・准教授）として、独自の研究グループを率いる立場へ。若手の指導と自身の研究を両立し、消化器領域の学術的発展に貢献します。", place: "大学教員（助教〜准教授・教授）" },
    ],
  },
  {
    id: "community",
    label: "開業・地域医療ルート",
    icon: Building2,
    color: "gold",
    tagline: "大学病院で培った専門性を地域に還元",
    catch: "かかりつけ医として患者に寄り添い、横浜・神奈川の消化器医療を支えます。大学との連携も継続できます。",
    goal: "クリニック院長 / 地域中核病院 消化器内科部長",
    steps: [
      { year: "1-5年目", label: "専門性の習得", title: "消化器内科の基礎〜専門医取得", desc: "大学病院・連携病院でのローテーションで幅広い症例を経験。内科専門医・消化器病専門医を取得しながら、地域で必要とされる内視鏡技術を中心に磨く。", place: "附属病院 / 連携病院（地域中核病院含む）" },
      { year: "5-10年目", label: "地域連携の実践", title: "連携病院での中堅医として活躍", desc: "50以上の連携病院の中から、地域医療に根ざした施設での勤務を選択。消化器内科医・地域の医療連携の中心として経験を積む。多施設共同研究への参加も継続可能。", place: "連携病院（地域中核・地域密着）" },
      { year: "10年目以降", label: "地域のリーダーへ", title: "開業・診療部長・地域医療のリーダー", desc: "培った専門性を活かして開業、または地域病院の消化器内科部長として診療体制を牽引。横浜市立大学の同門ネットワークと連携しながら、地域消化器医療の質向上に貢献。", place: "クリニック院長 / 地域病院部長" },
    ],
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; light: string; dot: string; tab: string; tabActive: string; header: string }> = {
  teal: {
    bg: "bg-teal/10",
    text: "text-teal",
    border: "border-teal/30",
    light: "bg-teal/5",
    dot: "bg-teal",
    tab: "hover:border-teal hover:text-teal",
    tabActive: "bg-navy text-white border-navy",
    header: "from-[#0C2340] to-[#163559]",
  },
  navy: {
    bg: "bg-navy/10",
    text: "text-navy",
    border: "border-navy/30",
    light: "bg-navy/5",
    dot: "bg-navy",
    tab: "hover:border-navy hover:text-navy",
    tabActive: "bg-navy text-white border-navy",
    header: "from-[#0C2340] to-[#163559]",
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold/30",
    light: "bg-gold/5",
    dot: "bg-gold",
    tab: "hover:border-gold hover:text-gold",
    tabActive: "bg-navy text-white border-navy",
    header: "from-[#0C2340] to-[#163559]",
  },
}

export default function CareerPage() {
  const ref = useScrollReveal()
  const [activeRoute, setActiveRoute] = useState("clinical")
  const current = routes.find((r) => r.id === activeRoute)!
  const colors = colorMap[current.color]

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0C2340] via-[#163559] to-[#0D2C45] py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_50%,rgba(20,122,133,0.15)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-2 text-xs text-white/40 mb-5">
            <Link href="/" className="hover:text-gold-light transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/recruit" className="hover:text-gold-light transition-colors">入局・研修案内</Link>
            <span>/</span>
            <span className="text-white/65">キャリアパス・ロールモデル</span>
          </div>
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-6 h-0.5 bg-gold" />
            <span className="text-[10px] tracking-[0.26em] text-gold font-bold uppercase">Career Path &amp; Role Models</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            入局後の<span className="text-gold-light">10年</span>を、<br />具体的に描ける。
          </h1>
          <p className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-xl">
            臨床・研究・地域医療──どの道を選んでも、一流の環境と手厚いサポートがあります。
            後期研修途中・終了後の入局も大歓迎です。
          </p>
        </div>
      </section>

      {/* Intro Message */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal rounded-2xl bg-white border border-border p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-start">
              <div className="hidden md:flex h-20 w-20 items-center justify-center rounded-full bg-navy shrink-0">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] text-gold font-bold uppercase mb-2.5">Message to Senior Residents</p>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-navy leading-snug mb-4">
                  後期研修途中・終了後の<br className="hidden sm:block" />入局をお考えの皆様へ
                </h2>
                <div className="space-y-4 text-sm md:text-[15px] text-text-sub leading-relaxed">
                  <p>
                    消化器内科医として市中病院等で研修中の皆様は、日々、幅広い疾患や治療手技を学んでいることと思います。そんな皆様の中には、後期研修終了後のステップアップとして、<strong className="text-navy font-bold">「臨床で一つの分野を極めたい」「臨床研究で学位を取得したい」「基礎研究を学んでみたい」</strong>というご希望をお持ちの方も多いのではないでしょうか。
                  </p>
                  <p>
                    当教室では、附属病院の基礎研究と臨床研究、市民総合医療センターの消化管・肝臓・胆膵グループにおける専門的治療と臨床研究、神奈川県立がんセンターの消化管・肝胆膵各グループにおける最先端のがん診療、といった形で専門教育を受けることが可能です。
                  </p>
                  <p>
                    また消化器内科にとらわれず、<strong className="text-navy font-bold">内科全般を研修したい方</strong>には、県内の関連施設で総合診療と一体となった診療を経験することもできます。もちろん他大学・教室外の施設から来た先生も「横浜市立大学消化器内科学教室の一員」として責任ある立場で活躍しており、出身大学等の垣根の心配は無用です。
                  </p>
                  <p>
                    消化器内科医としての更なるレベルアップのために、内科医としての守備範囲を広げるために、当教室は<strong className="text-navy font-bold">多くの選択肢</strong>をご用意できます。ぜひお気軽に施設見学や教室説明会にお越しください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3つのキャリアルート */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] text-gold font-bold uppercase">Career Routes</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-tight mb-2.5">3つのキャリアルート</h2>
            <p className="text-sm text-text-sub leading-relaxed max-w-xl mb-10">
              入局後のキャリアは大きく3つ。途中での方向転換も柔軟に対応します。あなたの志向に合ったルートを選んでください。
            </p>
          </div>

          {/* タブ切替 */}
          <div className="reveal flex flex-wrap gap-2 mb-8">
            {routes.map((route) => {
              const RouteIcon = route.icon
              const isActive = activeRoute === route.id
              return (
                <button
                  key={route.id}
                  onClick={() => setActiveRoute(route.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-bold border-2 transition-all",
                    isActive 
                      ? "bg-navy border-navy text-white" 
                      : "bg-off-white border-border text-text-sub hover:border-teal hover:text-teal"
                  )}
                >
                  <RouteIcon className="h-4 w-4" />
                  {route.label}
                </button>
              )
            })}
          </div>

          {/* ルートヘッダー */}
          <div className="reveal rounded-2xl bg-gradient-to-br from-[#0C2340] to-[#163559] p-8 md:p-10 mb-7 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full border border-gold/10" />
            <p className="text-[10px] tracking-[0.2em] text-gold-light font-bold uppercase mb-2">目指すゴール</p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2 leading-snug">{current.label}</h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xl mb-3">
              {current.tagline}。{current.catch}
            </p>
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-md px-4 py-2">
              <Target className="h-4 w-4 text-gold-light" />
              <span className="text-sm text-gold-light font-bold">{current.goal}</span>
            </div>
          </div>

          {/* タイムライン */}
          <div className="relative pl-6 md:pl-0">
            {/* 縦線 */}
            <div className="absolute left-6 md:left-6 top-5 bottom-5 w-0.5 bg-gradient-to-b from-navy via-teal to-gold" />
            
            <div className="space-y-4">
              {current.steps.map((step, i) => (
                <div
                  key={step.year}
                  className="reveal group flex gap-5 items-start py-4"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* ドット */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-[3px] border-navy text-center transition-all group-hover:bg-navy group-hover:text-white group-hover:border-teal group-hover:scale-110">
                    <span className="text-[11px] font-bold leading-tight text-navy group-hover:text-white">
                      {step.year.split("年目")[0]}<br />年目
                    </span>
                  </div>
                  
                  {/* カード */}
                  <div className="flex-1 rounded-xl bg-white border border-border p-5 shadow-sm transition-all group-hover:border-teal-light group-hover:shadow-md">
                    <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded bg-navy text-white tracking-wide mb-2">
                      {step.label}
                    </span>
                    <h4 className="font-bold text-navy text-[15px] mb-1.5">{step.title}</h4>
                    <p className="text-sm text-text-sub leading-relaxed mb-1">{step.desc}</p>
                    <p className="text-xs text-teal font-medium">{step.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ロールモデル */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] text-gold font-bold uppercase">Role Models</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-tight mb-2.5">先輩医師のキャリア実例</h2>
            <p className="text-sm text-text-sub leading-relaxed max-w-xl mb-10">
              実際に当教室で歩んだキャリアの例をご紹介します。
            </p>
          </div>
          <div className="reveal-stagger grid gap-6 md:grid-cols-3">
            {[
              {
                name: "平成19年卒先生",
                year: "福島県立医科大学卒",
                position: "横浜市立大学附属病院",
                route: "臨床重点ルート",
                routeColor: "teal",
                message: "医師6年目で入門しセンター病院でESDを中心に研鑽を積み、現在は附属病院で後進の指導にも携われるように。「外様」を感じたことは一度もありません。",
                voiceId: "v6",
              },
              {
                name: "平成29年卒先生",
                year: "理化学研究所",
                position: "先端医化学研究センター",
                route: "研究重点ルート",
                routeColor: "navy",
                message: "自身がクローン病患者として、IBDを治す医師になりたいと入局。現在は大学院生として理化学研究所へ国内留学し、腸内細菌と炎症性疾患の研究に従事しています。",
                voiceId: "v8",
              },
              {
                name: "平成18年卒先生",
                year: "藤沢市民病院",
                position: "消化器内科",
                route: "開業・地域医療ルート",
                routeColor: "gold",
                message: "子育てと常勤医を両立。結婚・出産後も急性期病院で勤務を続け、子供達に「頑張って働いているのを分かってくれている」と実感。やりたい事を追求することは決して悪いことではありません。",
                voiceId: "v3",
              },
            ].map((model) => {
              const mc = colorMap[model.routeColor]
              return (
                <div key={model.name} className="reveal-child overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-teal-light">
                  {/* カードヘッダー */}
                  <div className="bg-gradient-to-br from-[#0C2340] to-[#163559] p-6 relative overflow-hidden">
                    <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full border border-white/5" />
                    <div className="flex items-center gap-4">
                      <div className={cn("flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-light shrink-0")}>
                        <User className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-[15px]">{model.name}</p>
                        <p className="text-xs text-white/50">{model.year} / {model.position}</p>
                        <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-gold/25 text-gold-light tracking-wide">
                          {model.route}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* カードボディ */}
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-text-sub border-l-[3px] border-gold pl-3 italic mb-4">
                      「{model.message}」
                    </p>
                    <Link
                      href={`/recruit/voice#${model.voiceId}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:text-teal-light transition-colors"
                    >
                      もっとみる
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Points */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] text-gold font-bold uppercase">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-2.5">
              当教室で<span className="text-gold-light">キャリアを築く</span>というこ���
            </h2>
            <p className="text-sm text-white/55 leading-relaxed max-w-xl mb-10">
              多様な選択肢と充実した環境が、あなたの成長を支えます。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: "🏥", title: "出身大学は問いません", desc: "他大学・教室外の施設から来た先生も「横浜市立大学消化器内科学教室の一員」として責任ある立場で活躍しています。出身校の垣根は一切ありません。" },
              { icon: "🗺️", title: "50以上の連携病院から選べる", desc: "神奈川県内最大規模のネットワーク。大学病院・地域中核病院・がんセンターなど、自分の志向に合った研修先を選択できます。" },
              { icon: "🔄", title: "途中でのルート変更もOK", desc: "臨床から研究へ、研究から地域医療へ──柔軟な対応が可能です。入局後に目標が変わっても、指導医と相談しながらベストなキャリアパスを設計できます。" },
            ].map((pt) => (
              <div key={pt.title} className="reveal rounded-xl bg-white/[0.04] border border-white/[0.07] p-7 transition-all hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-xl">
                <span className="text-3xl mb-3 block">{pt.icon}</span>
                <h3 className="font-bold text-white text-[15px] mb-2">{pt.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal rounded-2xl bg-navy p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-gold/10" />
            <p className="text-[10px] tracking-[0.22em] text-gold-light font-bold uppercase mb-4 relative z-10">Join Our Team</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-snug mb-3 relative z-10">
              あなたのキャリアを、<br />一緒に<span className="text-gold-light">考えませんか</span>？
            </h2>
            <p className="text-sm text-white/55 leading-relaxed max-w-lg mx-auto mb-8 relative z-10">
              見学やオンライン相談で、実際の教室の雰囲気やキャリアの相談ができます。
              「少し話を聞きたい」という段階でも大歓迎です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 relative z-10">
              <Link
                href="/recruit/visit"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-gold-light hover:text-navy hover:-translate-y-0.5 hover:shadow-lg"
              >
                見学・相談を申し込む
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/recruit/voice"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-medium text-white/75 transition-all hover:border-white/50 hover:text-white hover:bg-white/5"
              >
                先輩医師のVoice
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
