"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight, MapPin, Calendar, Users, Heart, User, Search, ChevronDown } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

/* ---- 同門会員データ（地域別） ---- */
interface Member {
  name: string
  role: string
  facility: string
  address: string
}

interface Region {
  name: string
  members: Member[]
}

const regions: Region[] = [
  {
    name: "横浜市青葉区",
    members: [
      { facility: "内野医院", name: "内野 大輔", role: "院長", address: "横浜市青葉区市ヶ尾町330" },
      { facility: "昭和大学藤が丘病院", name: "長濵 正亞", role: "診療科長", address: "横浜市青葉区藤が丘1-30" },
    ],
  },
  {
    name: "横浜市旭区",
    members: [
      { facility: "たらお内科・消化器科", name: "多羅尾 和郎", role: "名誉院長", address: "横浜市旭区二俣川2-58-6 大洋ビル3F" },
      { facility: "三井内科医院", name: "三井 このみ", role: "院長", address: "横浜市旭区善部町46-48" },
      { facility: "まつのき内科・内視鏡クリニック", name: "松本 美野里", role: "院長", address: "横浜市旭区二俣川1-5-5 二俣川北口第2ビル5階" },
    ],
  },
  {
    name: "横浜市泉区",
    members: [
      { facility: "緑台クリニック", name: "藤井 隆人", role: "院長", address: "横浜市泉区緑園2-6-11" },
      { facility: "ますむら内科", name: "益村 眞", role: "院長", address: "横浜市泉区白百合3-4-12" },
    ],
  },
  {
    name: "横浜市磯子区",
    members: [
      { facility: "遠藤クリニック", name: "遠藤 雄一", role: "院長", address: "横浜市磯子区洋光台2-8-26" },
      { facility: "きたむら内科クリニック", name: "北村 剛彦", role: "院長", address: "横浜市磯子区磯子3-13" },
    ],
  },
  {
    name: "横浜市神奈川区",
    members: [
      { facility: "薩田内科クリニック", name: "薩田 正之", role: "院長", address: "横浜市神奈川区菅田町2647" },
    ],
  },
  {
    name: "横浜市金沢区",
    members: [
      { facility: "椿ヶ岡医院", name: "東邑 書憲", role: "院長", address: "横浜市金沢区富岡西1-35-15" },
    ],
  },
  {
    name: "横浜市港南区",
    members: [
      { facility: "かわぐち消化器内科", name: "川口 義明", role: "院長", address: "横浜市港南区港南台5-23-30 港南台医療モール3F" },
      { facility: "白土クリニック", name: "白土 一人", role: "院長", address: "横浜市港南区丸山台2-18-5 ニートビル1F" },
      { facility: "せいの内科・内視鏡クリニック", name: "清野 朝博", role: "院長", address: "横浜市港南区丸山台1-5-7" },
      { facility: "長田病院", name: "松井 芳子", role: "副院長", address: "横浜市港南区丸山台2-2-10" },
    ],
  },
  {
    name: "横浜市港北区",
    members: [
      { facility: "新羽あらた内科クリニック", name: "荒田 慎寿", role: "院長", address: "横浜市港北区新羽町2080-1 メディカルモールプラザー3階" },
      { facility: "佐々木内科クリニック", name: "佐々木 賢二", role: "院長", address: "横浜市港北区下田町2丁目16-54" },
      { facility: "中村医院", name: "中村 直樹", role: "院長", address: "横浜市港北区篠原台町4-19" },
    ],
  },
  {
    name: "横浜市瀬谷区",
    members: [
      { facility: "かやま内科クリニック", name: "香山 秀之", role: "院長", address: "横浜市瀬谷区阿久和西3丁目1-13 あくわメディカルヴィレッジ内" },
    ],
  },
  {
    name: "横浜市鶴見区",
    members: [
      { facility: "鶴見東口やはらクリニック", name: "矢原 青", role: "院長", address: "横浜市鶴見区中央1-19-4" },
    ],
  },
  {
    name: "横浜市戸塚区",
    members: [
      { facility: "岡部内科医院", name: "岡部 尚子", role: "副医院長", address: "横浜市戸塚区舞岡町33" },
      { facility: "横浜戸塚駅前内科", name: "芝田 渉", role: "院長", address: "横浜市戸塚区戸塚町4018-1 ザ・パークハウス戸塚フロント2F" },
    ],
  },
  {
    name: "横浜市中区",
    members: [
      { facility: "イチロークリニック", name: "青野 一郎", role: "院長", address: "横浜市中区山田町8-1 フロール山田町第3共同住宅1F" },
      { facility: "うしくぼ消化器・内科", name: "牛窪 利明", role: "院長", address: "横浜市中区翁町1-4-1 アルテマリンウェーブビル2階" },
      { facility: "かながわクリニック", name: "岡崎 博", role: "副所長", address: "横浜市中区元浜町4-32 県民共済馬車道ビル" },
      { facility: "粉川クリニック", name: "粉川 敦史", role: "院長", address: "横浜市中区弁天通4-53-1" },
      { facility: "関内鈴木クリニック", name: "鈴木 亮一", role: "理事長", address: "横浜市中区相生町3-63-1 パークアクシス横濱関内SQUARE 2F" },
      { facility: "横浜掖済会病院", name: "長倉 靖彦", role: "名誉院長", address: "横浜市中区山田町1-2" },
    ],
  },
  {
    name: "横浜市西区",
    members: [
      { facility: "富田内科クリニック", name: "富田 尚彦", role: "院長", address: "横浜市西区藤棚町1丁目58-6" },
      { facility: "横濱ゲートタワー内科", name: "佐々木 智彦", role: "院長", address: "横浜市西区高島1-2-5 横濱ゲートタワー4階" },
    ],
  },
  {
    name: "横浜市保土ヶ谷区",
    members: [
      { facility: "神奈川県労働衛生福祉協会", name: "下山 友", role: "医師", address: "横浜市保土ヶ谷区天王町2-44-9" },
      { facility: "和田町内科クリニック", name: "富永 静男", role: "院長", address: "横浜市保土ケ谷区和田1丁目18-7 和田アストビル2F" },
    ],
  },
  {
    name: "横浜市緑区",
    members: [
      { facility: "長津田健診・透析クリニック", name: "藤田 裕次 / 真丸 祐一", role: "医師", address: "横浜市緑区長津田4-23-1" },
      { facility: "横浜新緑総合病院", name: "塩沢 牧子", role: "医長", address: "横浜市緑区十日市場町1726-7" },
    ],
  },
  {
    name: "横浜市南区",
    members: [
      { facility: "ぬまた内科・消化器内科クリニック阪東橋", name: "沼田 和司", role: "院長", address: "横浜市中区曙町4丁目56 Liberty大通公園 4F" },
      { facility: "大岡医院", name: "星野 真人", role: "院長", address: "横浜市南区大岡2丁目13-15" },
      { facility: "島田内科小児科クリニック", name: "島田 誠", role: "院長", address: "横浜市南区井土ケ谷下町40-2" },
      { facility: "中央健康相談所", name: "中村 三郎", role: "副所長", address: "横浜市南区中村町3-191-7" },
      { facility: "横浜橋クリニック", name: "福田 浩之", role: "院長", address: "横浜市南区浦舟町1-1-14" },
      { facility: "こがね町すこやかクリニック", name: "高 蓮浩", role: "院長", address: "横浜市南区西中町2-31" },
    ],
  },
  {
    name: "川崎市",
    members: [
      { facility: "池内クリニック", name: "池内 孝夫", role: "院長", address: "川崎市麻生区栗平2-1-6 小田急マルシェ栗平1F" },
      { facility: "稲田登戸クリニック", name: "松本 秀平", role: "院長", address: "川崎市多摩区菅北浦4-3-1 オークヒルズ101号" },
      { facility: "はらクリニック", name: "原 浩二", role: "院長", address: "川崎市中原区上小田中6-26-3 2F" },
    ],
  },
  {
    name: "茅ヶ崎市",
    members: [
      { facility: "前田整形外科・内科クリニック", name: "前田 純江", role: "副院長", address: "茅ケ崎市ひばりが丘1-10" },
    ],
  },
  {
    name: "藤沢市",
    members: [
      { facility: "海部胃腸内科医院", name: "海部 大樹", role: "院長", address: "藤沢市藤が岡3-6-10" },
      { facility: "すが内科クリニック", name: "菅 誠", role: "院長", address: "藤沢市湘南台2-8-7 ライオンズマンション湘南台1F" },
      { facility: "西郡医院", name: "西郡 克郎", role: "院長", address: "藤沢市湘南台7丁目50-5" },
    ],
  },
  {
    name: "横須賀市",
    members: [
      { facility: "小磯診療所", name: "磯崎 哲男", role: "院長", address: "横須賀市鴨居2-80-9" },
    ],
  },
  {
    name: "東京都",
    members: [
      { facility: "富士フイルム西麻布内視鏡クリニック", name: "横山 知子", role: "センター長", address: "東京都港区西麻布2-26-30 富士フイルム西麻布ビル1階" },
    ],
  },
  {
    name: "千葉県",
    members: [
      { facility: "我孫子聖仁会病院", name: "田中 康夫", role: "内科部長", address: "千葉県我孫子市柴崎1300" },
    ],
  },
  {
    name: "茨城県",
    members: [
      { facility: "小田内科クリニック", name: "有田 圭介", role: "院長", address: "茨城県つくば市小田2951-5" },
    ],
  },
  {
    name: "山梨県",
    members: [
      { facility: "保坂内科消化器科", name: "保坂 圭", role: "院長", address: "山梨県甲府市中央4-12-26" },
    ],
  },
]

/* ---- 同門会員一覧セクション ---- */
function MemberDirectorySection() {
  const [query, setQuery] = useState("")
  const [expandedRegions, setExpandedRegions] = useState<Set<string>>(new Set())

  const totalMembers = regions.reduce((sum, r) => sum + r.members.length, 0)

  const filtered = useMemo(() => {
    if (!query) return regions
    const q = query.toLowerCase()
    return regions
      .map((r) => ({
        ...r,
        members: r.members.filter(
          (m) =>
            m.name.toLowerCase().includes(q) ||
            m.facility.toLowerCase().includes(q) ||
            m.address.toLowerCase().includes(q)
        ),
      }))
      .filter((r) => r.members.length > 0)
  }, [query])

  const filteredCount = filtered.reduce((sum, r) => sum + r.members.length, 0)

  const toggleRegion = (name: string) => {
    setExpandedRegions((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const expandAll = () => {
    setExpandedRegions(new Set(filtered.map((r) => r.name)))
  }

  const collapseAll = () => {
    setExpandedRegions(new Set())
  }

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal">
          <p className="font-serif text-sm tracking-wider text-muted-foreground italic">
            Member Directory
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
            同門会員・関連施設一覧
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-sub">
            神奈川県内を中心に、全国各地で活躍する同門会員の施設情報です。
            施設名・氏名・住所で検索できます。
          </p>
        </div>

        {/* 検索 + 統計 + 開閉ボタン */}
        <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="施設名・氏名・住所で検索"
                className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 sm:w-72"
              />
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">
              {query ? `${filteredCount}件 / ` : ""}{totalMembers}施設
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-text-sub transition-colors hover:bg-off-white"
            >
              すべて展開
            </button>
            <button
              onClick={collapseAll}
              className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-text-sub transition-colors hover:bg-off-white"
            >
              すべて閉じる
            </button>
          </div>
        </div>

        {/* 地域別アコーディオン */}
        <div className="reveal-stagger mt-8 space-y-3">
          {filtered.map((region) => {
            const isExpanded = expandedRegions.has(region.name) || !!query
            return (
              <div
                key={region.name}
                className="reveal-child overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <button
                  onClick={() => toggleRegion(region.name)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-off-white"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-teal" />
                    <span className="text-sm font-bold text-foreground">{region.name}</span>
                    <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-medium text-teal">
                      {region.members.length}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="border-t border-border">
                    {region.members.map((member, i) => (
                      <div
                        key={member.name + member.facility}
                        className={`flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-6 ${
                          i % 2 === 0 ? "bg-card" : "bg-off-white/50"
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:w-52 sm:shrink-0">
                          <User className="h-3.5 w-3.5 shrink-0 text-navy/50" />
                          <span className="text-sm font-semibold text-foreground">{member.name}</span>
                          <span className="rounded bg-navy/8 px-1.5 py-0.5 text-[10px] font-medium text-navy">
                            {member.role}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-foreground sm:w-56 sm:shrink-0">
                          {member.facility}
                        </p>
                        <p className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 shrink-0" />
                          {member.address}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            該当する施設・会員が見つかりませんでした。
          </p>
        )}
      </div>
    </section>
  )
}

export default function AlumniPage() {
  const ref = useScrollReveal()

  const totalMembers = regions.reduce((sum, r) => sum + r.members.length, 0)
  const totalRegions = regions.length

  return (
    <div ref={ref}>
      {/* ---- Hero ---- */}
      <section className="relative flex items-center overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="alumni-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#alumni-grid)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-white/40" aria-label="パンくず">
            <Link href="/" className="transition-colors hover:text-white/70">HOME</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/about" className="transition-colors hover:text-white/70">教室について</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/70">同門会</span>
          </nav>
          <p className="font-serif text-sm tracking-[0.15em] text-white/45 italic">Alumni Association</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl text-balance">
            同門会
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            横浜市立大学 消化器内科学教室の同門会は、教室OB・OGの
            絆を深め、学術交流と親睦を目的とした組織です。
          </p>
        </div>
      </section>

      {/* ---- 同門会について ---- */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">About</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
              同門会について
            </h2>
          </div>

          <div className="reveal mt-10 grid items-start gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-5 text-[15px] leading-[1.9] text-text-sub">
              <p>
                横浜市立大学 消化器内科学教室の同門会は、旧第2内科、旧第3内科、
                消化器内科学教室のいずれかに所属していた先生を中心として形成されており、
                神奈川県内を中心に全国各地で活躍するOB・OGが会員として所属しています。
              </p>
              <p>
                同門会は単なる親睦団体にとどまらず、若手医師のキャリア相談や
                多施設共同研究のネットワーク基盤としても重要な役割を果たしています。
                地元神奈川での診療や開業を志す医師にとって、大きな支えとなっています。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, number: `${totalMembers}+`, label: "同門会員施設", color: "text-navy", bg: "bg-navy/10" },
                { icon: Calendar, number: "年1回", label: "総会・学術講演会", color: "text-teal", bg: "bg-teal/10" },
                { icon: MapPin, number: `${totalRegions}`, label: "地域をカバー", color: "text-gold", bg: "bg-gold/10" },
                { icon: Heart, number: "75年+", label: "教室の歴史", color: "text-teal", bg: "bg-teal/10" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <p className={`mt-4 font-serif text-2xl font-bold ${stat.color}`}>{stat.number}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- 活動内容 ---- */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Activities</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line-center">
              主な活動内容
            </h2>
          </div>

          <div className="reveal-stagger mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "年次総会・学術講演会",
                desc: "毎年秋に開催される同門会総会では、教室の活動報告に加え、著名な講師を招いた特別講演や、会員による研究発表を行っています。最新の消化器病学のトピックスを共有する貴重な場です。",
                color: "border-t-navy",
              },
              {
                title: "同門会誌の発行",
                desc: "年1回発行の同門会誌では、教室の研究成果、会員の近況報告、関連病院の紹介などを掲載しています。遠方の会員とも情報を共有し、教室とのつながりを維持する大切な媒体です。",
                color: "border-t-teal",
              },
              {
                title: "キャリア支援・交流",
                desc: "若手医師のキャリア形成を支援するため、OB・OGによるメンタリングや、開業・転職相談なども同門ネットワークを通じて行っています。世代を超えた交流が教室の強みです。",
                color: "border-t-gold",
              },
            ].map((activity) => (
              <div
                key={activity.title}
                className={`reveal-child rounded-2xl border border-t-4 ${activity.color} border-border bg-card p-8 shadow-sm`}
              >
                <h3 className="font-serif text-lg font-bold text-foreground">{activity.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-sub">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 同門会員・関連施設一覧 ---- */}
      <MemberDirectorySection />

      {/* ---- 同門会組織 ---- */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <p className="font-serif text-sm tracking-wider text-muted-foreground italic">Organization</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl heading-gold-line">
              同門会組織
            </h2>
          </div>

          <div className="reveal mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["会長", "多羅尾 和郎（たらお内科・消化器科 名誉院長）"],
                  ["副会長", "（会員より選出）"],
                  ["幹事", "前田 愼（消化器内科学教室 主任教授）"],
                  ["会計", "（教室スタッフより選出）"],
                  ["監査", "（会員より選出）"],
                ].map(([role, name], i) => (
                  <tr key={role} className={i % 2 === 0 ? "bg-card" : "bg-off-white"}>
                    <td className="w-32 px-6 py-4 font-medium text-navy md:w-40">{role}</td>
                    <td className="px-6 py-4 text-text-sub">{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="reveal mt-8 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="font-serif text-base font-bold text-navy">入会について</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-sub">
              横浜市立大学 消化器内科学教室に在籍された方（大学院生・研究生を含む）は、
              どなたでも同門会にご入会いただけます。入会をご希望の方は、教室事務局までお問い合わせください。
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm text-text-sub">
              <p>
                <span className="font-medium text-foreground">連絡先：</span>
                横浜市立大学 消化器内科学教室 同門会事務局
              </p>
              <p>
                <span className="font-medium text-foreground">TEL：</span>045-787-2640
              </p>
              <p>
                <span className="font-medium text-foreground">E-mail：</span>gastro@yokohama-cu.ac.jp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal rounded-2xl bg-navy p-8 text-center md:p-12">
            <h3 className="font-serif text-xl font-bold text-white md:text-2xl text-balance">
              教室について、もっと知りたい方へ
            </h3>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60">
              教室の沿革やスタッフ紹介、研究活動など、
              さまざまな角度から教室をご紹介しています。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-[#C4923A] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#E8B96A] hover:gap-3"
              >
                教室についてTOPへ
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about/staff"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/50 hover:bg-white/5 hover:text-white"
              >
                スタッフ紹介を見る
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
