"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight, Building2, GraduationCap, Microscope, Heart, Users, BookOpen, Globe } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"
import { useCountUp } from "@/hooks/use-count-up"

export default function EducationPage() {
  const ref = useScrollReveal()

  return (
    <div ref={ref}>
      {/* ---- Hero ---- */}
      <section className="relative flex items-center overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="edu-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#edu-grid)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-white/40" aria-label="パンくず">
            <Link href="/" className="transition-colors hover:text-white/70">HOME</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/recruit" className="transition-colors hover:text-white/70">入局・研修案内</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/70">教育・研修の特徴</span>
          </nav>
          <p className="font-serif text-sm tracking-[0.15em] text-white/45 italic">Education & Training</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl text-balance">
            教育と研修の特徴
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            神奈川県最大規模の連携ネットワークと3つの専門教育機関で、
            消化器内科医としてのキャリアを全力でサポートします。
          </p>
        </div>
      </section>

      {/* ---- 1. 教室について ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">1</span>
              <p className="font-serif text-sm tracking-wider text-muted-foreground italic">About Our Department</p>
            </div>
            <h2 className="mt-3 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
              横浜市立大学 消化器内科学教室について
            </h2>
          </div>

          <div className="reveal mt-10 grid gap-10 md:grid-cols-5">
            <div className="flex flex-col gap-5 text-[15px] leading-[1.9] text-text-sub md:col-span-3">
              <p>
                横浜市立大学医学部の歴史は、明治4年に全国で2番目に開院された洋式病院を起源としています。
                これが、横浜共立病院、県立十全病院（明治7年）、市立十全病院を経て、
                今日の横浜市立大学医学部へと発展してきました。
              </p>
              <p>
                本学の消化器内科領域は、以前は旧第2内科消化器グループ、旧第3内科消化器グループに分かれておりました。
                しかしながら、近年加速する医療の高度化に対応するため、消化器内科領域を一本化する措置がとられ、
                2009年に、旧第2内科、旧第3内科の消化器グループが統合する形で、
                「消化器内科学教室」が設立しました。
              </p>
              <p>
                2010年に前田 愼 現主任教授が赴任し、現在では、横浜市立大学附属病院、
                横浜市立大学附属市民総合医療センターの2大学病院を中心に神奈川県内外の多くの関連施設で
                <strong className="text-foreground">100名を超える教室員</strong>が診療、研究、教育を精力的に行っています。
              </p>
            </div>
            <div className="flex flex-col gap-4 md:col-span-2">
              {[
                { label: "設立", value: "2009年", sub: "旧第2・第3内科を統合" },
                { label: "教室員数", value: "100名+", sub: "県内外の関連施設で活躍" },
                { label: "大学病院", value: "2施設", sub: "附属病院・センター病院" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                  <p className="mt-1 font-serif text-2xl font-bold text-navy">{item.value}</p>
                  <p className="mt-0.5 text-xs text-text-sub">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- 2. 内科専門医新制度 ---- */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">2</span>
              <p className="font-serif text-sm tracking-wider text-muted-foreground italic">New Board Certification</p>
            </div>
            <h2 className="mt-3 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
              内科専門医新制度への取り組み
            </h2>
          </div>

          <div className="reveal mt-10 flex flex-col gap-6 text-[15px] leading-[1.9] text-text-sub">
            <p>
              2018年4月より、新しい内科専門医制度が開始されました。
              大学では、附属病院を基幹病院とする「横浜市立大学内科専門医育成プログラムF」と、
              センター病院を基幹病院とする「横浜市立大学内科専門医育成プログラムC」が開始され、
              各科が関連施設と連携し3年間の研修プログラムを組んでいます。
            </p>
            <p>
              その特徴の1つは、<strong className="text-foreground">サブスペシャリティー研修を主としたプログラム</strong>であり、
              当教室でも多くの施設と連携して卒後3年目から消化器領域を中心とした研修を行い、
              早期の内科専門医と消化器専門医の取得を目指したものとなっています。
            </p>
            <p>
              また、もう1つの特徴は、大学2病院以外に
              <strong className="text-foreground">関連7施設が専門研修プログラムを有する基幹病院に登録されている</strong>ことです。
              これにより、2大学病院を中心としたさまざまな組み合わせで研修をすることが可能となっています。
            </p>
          </div>

          {/* プログラム2つの比較 */}
          <div className="reveal-stagger mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                name: "プログラムF",
                base: "横浜市立大学附属病院",
                color: "border-t-navy",
                icon: Building2,
              },
              {
                name: "プログラムC",
                base: "附属市民総合医療センター",
                color: "border-t-teal",
                icon: Building2,
              },
            ].map((prog) => (
              <div
                key={prog.name}
                className={`reveal-child rounded-2xl border border-t-4 ${prog.color} border-border bg-card p-6 shadow-sm`}
              >
                <div className="flex items-center gap-3">
                  <prog.icon className="h-5 w-5 text-navy" />
                  <h3 className="font-serif text-lg font-bold text-foreground">{prog.name}</h3>
                </div>
                <p className="mt-2 text-sm text-text-sub">基幹病院：{prog.base}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-sub">
                  卒後3年目から消化器領域を中心に3年間の体系的な研修を実施。
                  関連施設との連携により、多様な症例を経験可能です。
                </p>
              </div>
            ))}
          </div>

          {/* 関連施設の強み */}
          <div className="reveal mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h3 className="font-serif text-base font-bold text-navy">充実した研修施設ネットワーク</h3>
            <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-text-sub">
              <p>
                当教室では、<strong className="text-foreground">神奈川県内の一般病床数上位20施設のうち6施設を関連施設</strong>としており、
                これらの教育施設から研修先を選んで頂くことができます。
                各関連施設では、消化器内科部長を教室所属医師が担当しており、
                消化器内科スタッフのうち多数を教室員が占める形で派遣しています。
              </p>
              <p>
                このため、内科専攻医として過ごす3年間で、効率よく内科専門医を取得するとともに、
                消化器内科医として必要な治療処置などを経験できるよう、教室員全体でバックアップすることが可能です。
                研修先を異動する際にも、各内科領域の経験症例数や消化器内科医としての習熟度、
                希望する研修内容について、各部長や教室員が情報を共有することにより、計画的な研修が可能となります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 3. 豊富な専門教育機関 ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">3</span>
              <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Specialized Institutions</p>
            </div>
            <h2 className="mt-3 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
              豊富な専門教育機関
            </h2>
          </div>

          <div className="reveal mt-8 text-[15px] leading-[1.9] text-text-sub">
            <p>
              消化器内科医を志す皆様に、入門する教室を選ぶ上で、最も重視して欲しい点は、
              消化器内科領域の研究や専門的治療を学ぶ機会がどの程度選択できるかという点です。
              当教室では、横浜市大附属病院、横浜市大附属市民総合医療センター、
              神奈川県立がんセンターという<strong className="text-foreground">3つの専門機関</strong>を中心に、
              様々な形で消化器内科医としてレベルアップする機会を提供することができます。
            </p>
          </div>

          {/* 3施設カード */}
          <div className="reveal-stagger mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "横浜市立大学附属病院",
                color: "border-l-[#C4923A]",
                tagColor: "bg-[#C4923A]/10 text-[#C4923A]",
                desc: "前田教授、芝田准教授の指導のもと消化器関連の基礎研究を実施。関連施設を含めた多施設共同試験をはじめとした臨床研究も行っています。",
                focus: "基礎研究 + 臨床研究",
              },
              {
                name: "附属市民総合医療センター",
                color: "border-l-teal",
                tagColor: "bg-teal/10 text-teal",
                desc: "県下有数の診療実績を誇り、消化器病センターの医師全員が当教室に所属。消化管・肝臓・胆膵の3領域に分かれて、高度な診療や臨床研究を実施しています。",
                focus: "高度診療 + 臨床研究",
                stats: [
                  { label: "ESD", value: "517件/年" },
                  { label: "TACE", value: "199件/年" },
                  { label: "RFA", value: "70件/年" },
                  { label: "ERCP", value: "602件/年" },
                  { label: "EUS", value: "529件/年" },
                ],
              },
              {
                name: "神奈川県立がんセンター",
                color: "border-l-navy",
                tagColor: "bg-navy/10 text-navy",
                desc: "大川病院長、森本院長補佐主導のもと、消化管・肝胆膵の各領域に分かれて、内視鏡治療や多数の臨床試験（化学療法）をはじめとした最新のがん診療を学ぶことができます。",
                focus: "がん診療 + 臨床試験",
              },
            ].map((facility) => (
              <div
                key={facility.name}
                className={`reveal-child rounded-2xl border border-border ${facility.color} border-l-4 bg-card p-6 shadow-sm`}
              >
                <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold ${facility.tagColor}`}>
                  {facility.focus}
                </span>
                <h3 className="mt-3 font-serif text-lg font-bold text-foreground">{facility.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-sub">{facility.desc}</p>
                {"stats" in facility && facility.stats && (
                  <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
                    {facility.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="font-serif text-lg font-bold text-navy">{s.value}</p>
                        <p className="text-[11px] text-muted-foreground">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="reveal mt-8 text-sm leading-relaxed text-text-sub">
            <p>
              消化器内科の専門領域は、大別すると、消化管領域、肝臓領域、胆膵領域に分かれており、
              それぞれ高度な治療処置や薬物療法の進歩が目覚ましい分野です。
              当教室に入門し、内科専門医を取得した後は、原則として個々の希望に応じて、
              これらの専門領域を習得し、学位取得を目指すことが可能です。
            </p>
          </div>
        </div>
      </section>

      {/* ---- 4. 地域医療を担う人材の育成 ---- */}
      <section className="bg-off-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">4</span>
              <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Community Medicine</p>
            </div>
            <h2 className="mt-3 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
              地域医療を担う人材の育成
            </h2>
          </div>

          <div className="reveal mt-10 grid gap-10 md:grid-cols-5">
            <div className="flex flex-col gap-5 text-[15px] leading-[1.9] text-text-sub md:col-span-3">
              <p>
                今後訪れる超高齢化社会を迎えるにあたり、消化器内科の医師は
                専門家（specialist）や研究者（scientist）としてだけではなく、
                <strong className="text-foreground">総合医（generalist）としての振る舞いも要求</strong>されており、
                新専門医制度もこれを色濃く反映した内容となっております。
              </p>
              <p>
                当教室の関連病院には消化器内科としてだけでなく内科医としての成長を促す中規模市中病院も充実しており、
                これらの病院では消化器内科部長はもちろん、管理職にも当教室の医局員が多く関わり、
                地域医療に貢献しています。
              </p>
              <p>
                当教室では専門機関、大規模市中病院、中規模市中病院が互いに連携し、
                後期研修期間を含めて様々な医療機関で研修を行っていただくことによって、
                <strong className="text-foreground">「形だけではなく真の意味での内科専門医、消化器内科専門医」</strong>を育成します。
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-serif text-base font-bold text-navy">管理職に就く教室員（例）</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { name: "池田 院長補佐", facility: "秦野赤十字病院" },
                    { name: "加藤 副院長", facility: "足柄上病院" },
                    { name: "小松 副院長", facility: "横須賀市民病院" },
                    { name: "斎藤 副院長", facility: "横浜掖済会病院" },
                    { name: "内藤 統括診療部長", facility: "保土ヶ谷中央病院" },
                  ].map((person) => (
                    <div key={person.name} className="flex items-center gap-3 rounded-lg bg-off-white p-3">
                      <Heart className="h-4 w-4 shrink-0 text-teal" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{person.name}</p>
                        <p className="text-xs text-muted-foreground">{person.facility}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 5. キャリアプラン ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">5</span>
              <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Career Plan</p>
            </div>
            <h2 className="mt-3 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
              個人のニーズに合わせたキャリアプランの提供
            </h2>
          </div>

          <div className="reveal mt-10 flex flex-col gap-5 text-[15px] leading-[1.9] text-text-sub">
            <p>
              若い先生方は目の前にある興味や勤務先に関心が向かいがちですが、医師としての生活は数十年にも及びます。
              <strong className="text-foreground">長きにわたるシームレスなキャリアプランの提供</strong>は
              所属する教室員にとって、極めて重要であると考えています。
            </p>
            <p>
              当教室では内科専門医、消化器専門医の取得、そして学位取得を基本といたしますが、
              その後のキャリアプランに関しても積極的に対応していきます。
            </p>
          </div>

          <div className="reveal-stagger mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BookOpen, title: "大学での学術活動の継続", color: "bg-navy/10 text-navy" },
              { icon: Globe, title: "国内外留学", color: "bg-teal/10 text-teal" },
              { icon: Building2, title: "地域基幹病院への就職", color: "bg-[#C4923A]/10 text-[#C4923A]" },
              { icon: Heart, title: "開業への準備", color: "bg-teal/10 text-teal" },
            ].map((item) => (
              <div key={item.title} className="reveal-child flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-8 rounded-2xl border border-teal/20 bg-teal/5 p-6 md:p-8">
            <h3 className="font-serif text-base font-bold text-teal">女性医師のキャリア支援</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-sub">
              当教室には<strong className="text-foreground">20名以上の女性医師</strong>が所属しておりますが、
              女性の妊娠、出産に対しても、柔軟に対応し、消化器内科医としてのキャリアを継続することに力を入れております。
              各個人の方向性を尊重し、その希望に応じたプランの提供が、
              上記に述べたような人材や関連施設などにより可能です。
            </p>
          </div>
        </div>
      </section>

      {/* ---- 6. 伝統と若さに支えられた教室 ---- */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <p className="font-serif text-sm tracking-[0.15em] text-white/45 italic">Tradition & Youth</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-white md:text-3xl">
              伝統と若さに支えられた教室
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-[#C4923A]" />
          </div>

          <div className="reveal mt-10 grid gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-5 text-[15px] leading-[1.9] text-white/70">
              <p>
                当教室が存立する背景には、これまで横浜市大の関連施設で消化器内科の発展に携わってきた
                多くの先生方の存在があります。現在、旧第2内科、旧第3内科、消化器内科学教室のいずれかに
                所属していた先生を中心として、「消化器内科学教室同門会」が形成されており、
                <strong className="text-white">266名に及ぶ同門会員</strong>が所属しております。
              </p>
              <p>
                また、当教室では、卒後20年以上のベテラン医師、卒後10-20年の中堅医師、
                卒後10年以内の若手医師がバランスよく所属することにより、充実した診療、教育を可能としています。
              </p>
              <p>
                特に皆様の直近の先輩となる卒後3-6年目の若手医師は、
                現在<strong className="text-white">30名</strong>が各関連施設で切磋琢磨しながら消化器内科医としての道を歩んでおります。
                これら学年の近い若手医師は、皆様の良き相談相手になってくれる頼れる存在です。
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { value: "266名", label: "同門会員数", icon: Users },
                { value: "30名", label: "卒後3-6年目の若手医師", icon: GraduationCap },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#C4923A]/20">
                    <stat.icon className="h-7 w-7 text-[#C4923A]" />
                  </div>
                  <div>
                    <p className="font-serif text-3xl font-bold text-white">{stat.value}</p>
                    <p className="mt-0.5 text-sm text-white/50">{stat.label}</p>
                  </div>
                </div>
              ))}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-bold text-white/80">民主的な教室運営</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  当教室では教室の運営や人事について、大学からのトップダウンの形ではなく、
                  各関連施設の部長を中心とした「運営委員会」での話し合いにより決定しています。
                  皆様が消化器内科医として目指すべきものが見つかった時、
                  または医師として様々な形で壁にぶつかったときには、
                  各施設の上司だけではなく、教授以下運営委員会をはじめとする教室員が協力して対応いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 締めメッセージ ---- */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal rounded-2xl border border-[#C4923A]/20 bg-[#C4923A]/5 p-8 md:p-12">
            <p className="mx-auto max-w-3xl text-center text-[15px] leading-[1.9] text-text-sub">
              消化器内科学は、人間の生存に欠かせない多くの臓器にまたがっており、重要かつ大変やりがいのある領域です。
              当教室では、目覚ましい発展を遂げる消化器内科領域の診療・研究に関して、
              最先端に位置する教育を受けることが可能です。
              <strong className="text-foreground">
                ぜひ、当教室へ入門していただき、医師として充実した人生を過ごして頂くことを、教室員一同、心から願っています。
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal rounded-2xl bg-navy p-8 text-center md:p-12">
            <h3 className="font-serif text-xl font-bold text-white md:text-2xl text-balance">
              見学・入局のご相談はお気軽に
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60">
              教室の雰囲気を知りたい方、キャリアについて相談したい方、
              まずはお気軽にお問い合わせください。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/recruit/visit"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C4923A] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#E8B96A] hover:gap-3"
              >
                見学・相談を申し込む
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/recruit/career"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/50 hover:bg-white/5 hover:text-white"
              >
                キャリアパスを見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
