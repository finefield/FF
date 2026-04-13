"use client"

import Link from "next/link"
import Image from "next/image"
import { SectionHeading } from "@/components/layout/section-heading"
import { useScrollReveal } from "@/hooks/use-scroll-animation"
import { ArrowRight, GraduationCap, User, CheckCircle2, Building2, Microscope, Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CareerPage() {
  const ref = useScrollReveal()

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

      {/* 当教室の後期研修 */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] text-gold font-bold uppercase">Residency Training</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-tight mb-8">当教室の後期研修</h2>
          </div>

          <div className="reveal">
            <div className="space-y-6 max-w-4xl">
              <ul className="space-y-3">
                {[
                  "2〜4年を基本として行う。",
                  "一般市中病院と大規模中核病院を含めた2施設で研修を行う。",
                  "どの施設で研修しても、消化器内科医として基本となる知識・技術を身につける。",
                  "内科専門医などの取得を遅延なく達成する。",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-text-sub leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* 一般市中病院 */}
              <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <h4 className="font-bold text-navy text-sm mb-3 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-teal" />
                  一般市中病院では…
                </h4>
                <ul className="space-y-2 text-sm text-text-sub">
                  <li className="flex items-start gap-2">
                    <span className="text-teal mt-1.5">•</span>
                    <span>チーム医療のリーダーとして任せられる部分が大きいため、医師として必要不可欠な責任感や判断力が醸成される。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal mt-1.5">•</span>
                    <span>消化器に限らない、内科全般の診療経験と知識を獲得できる。</span>
                  </li>
                </ul>
              </div>

              {/* 大規模中核病院 */}
              <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
                <h4 className="font-bold text-navy text-sm mb-3 flex items-center gap-2">
                  <Stethoscope className="h-4 w-4 text-navy" />
                  大規模中核病院では…
                </h4>
                <ul className="space-y-2 text-sm text-text-sub">
                  <li className="flex items-start gap-2">
                    <span className="text-navy mt-1.5">•</span>
                    <span>各領域の専門医による、ハイレベルな指導を受ける。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy mt-1.5">•</span>
                    <span>消化器内科に特化して集中的に技術の習得を行う。</span>
                  </li>
                </ul>
              </div>

              {/* ハイライトメッセージ */}
              <div className="rounded-xl bg-gold/10 border-2 border-gold/30 p-5">
                <p className="text-sm text-navy leading-relaxed font-medium">
                  研修施設が変わっても、効率よく効果的な研修ができるように、<br />
                  <strong className="text-gold">各施設に研修担当を設置し、運営委員会で情報を共有します。</strong><br />
                  一人前の消化器内科医になれるよう、教室をあげてサポートします！！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 当教室入門後のキャリア形成 */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-0.5 bg-gold" />
              <span className="text-[10px] tracking-[0.25em] text-gold font-bold uppercase">Career Formation</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy leading-tight mb-8">当教室入門後のキャリア形成</h2>
          </div>

          {/* キャリアパス図 */}
          <div className="reveal mb-12">
            <Image
              src="/images/career/career-paths.png"
              alt="当教室入門後のキャリア形成"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl shadow-lg bg-white p-4 md:p-6"
            />
          </div>

          {/* 3つのルート説明 */}
          <div className="reveal grid md:grid-cols-3 gap-6">
            {/* 大学教員・がんセンタールート */}
            <div className="rounded-2xl bg-white border border-border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/10">
                  <Microscope className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-[15px]">大学教員・がんセンタールート</h3>
                  <p className="text-xs text-text-sub">研究・教育の最前線へ</p>
                </div>
              </div>
              <p className="text-sm text-text-sub leading-relaxed">
                大学教員・がんセンタースタッフとして、<strong className="text-navy">臨床・研究・教育の最前線</strong>を担当！！
                海外留学の機会もあります。
              </p>
            </div>

            {/* 大規模中核病院ルート */}
            <div className="rounded-2xl bg-white border border-border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10">
                  <Stethoscope className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-[15px]">大規模中核病院ルート</h3>
                  <p className="text-xs text-text-sub">専門領域のエキスパートへ</p>
                </div>
              </div>
              <p className="text-sm text-text-sub leading-relaxed">
                大規模中核病院で、<strong className="text-navy">専門領域を一手に担い、後進の指導にあたる</strong>！！
              </p>
            </div>

            {/* 一般市中病院ルート */}
            <div className="rounded-2xl bg-white border border-border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                  <Building2 className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-[15px]">一般市中病院ルート</h3>
                  <p className="text-xs text-text-sub">地域医療のリーダーへ</p>
                </div>
              </div>
              <p className="text-sm text-text-sub leading-relaxed">
                一般市中病院で、<strong className="text-navy">専門領域に加え、消化器全般をレベルアップ</strong>！！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ロールモデル */}
      <section className="py-16 md:py-24">
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
            ].map((model) => (
              <div key={model.name} className="reveal-child overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-teal-light">
                {/* カードヘッダー */}
                <div className="bg-gradient-to-br from-[#0C2340] to-[#163559] p-6 relative overflow-hidden">
                  <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full border border-white/5" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-light shrink-0">
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
            ))}
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
              当教室で<span className="text-gold-light">キャリアを築く</span>ということ
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
