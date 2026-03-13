export const siteConfig = {
  name: "横浜市立大学 医学部 消化器内科学教室",
  nameShort: "消化器内科学教室",
  nameEn: "Yokohama City University · Gastroenterology",
  university: "横浜市立大学 医学部",
  address: "〒236-0004 神奈川県横浜市金沢区福浦3-9",
  phone: "045-787-2640",
  fax: "045-784-3546",
  email: "gastro@yokohama-cu.ac.jp",
}

export const navItems = [
  {
    label: "教室について",
    href: "/about",
    children: [
      { label: "教授挨拶", href: "/about" },
      { label: "教室の沿革", href: "/about/history" },
      { label: "スタッフ紹介", href: "/about/staff" },
      { label: "診療の特色（グループ紹介）", href: "/research" },
      { label: "論文・業績一覧", href: "/research/publications" },
      { label: "同門会", href: "/about/alumni" },
    ],
  },
  {
    label: "入局・研修案内",
    href: "/recruit",
    children: [
      { label: "教育・研修の特徴", href: "/recruit/education" },
      { label: "キャリアパス・ロールモデル", href: "/recruit/career" },
      { label: "先輩医師のVoice", href: "/recruit/voice" },
      { label: "見学・入局相談", href: "/recruit/visit" },
      { label: "よくある質問 FAQ", href: "/recruit/faq" },
    ],
  },
  {
    label: "協力病院の紹介",
    href: "/network",
  },
  {
    label: "診療のご案内",
    href: "/clinical",
  },
  {
    label: "お知らせ",
    href: "/news",
  },
  {
    label: "見学・相談を申し込む",
    href: "/recruit/visit",
    isButton: true,
  },
]

export const stats = [
  { number: 50, suffix: "+", label: "連携・協力病院数", sublabel: "神奈川県内最大規模のネットワーク" },
  { number: 100, suffix: "+", label: "年間論文投稿数", sublabel: "国内外の主要ジャーナルに継続掲載" },
  { number: 80, suffix: "+", label: "年間学会発表件数", sublabel: "国内・国際学会での積極的な発信" },
  { number: 30, suffix: "+", label: "メディア・報道掲載", sublabel: "社会から注目される研究成果" },
]

export const newsItems = [
  {
    id: "2026-03-08-ikeda",
    date: "2026.03.08",
    category: "論文",
    title: "池田 良輔先生（附属病院・助教）の論文が掲載されました",
    href: "/news/2026-03-08-ikeda",
  },
  {
    id: "2026-03-03-michibata",
    date: "2026.03.03",
    category: "論文",
    title: "道端 信貴先生（横須賀市立市民病院）の論文が掲載されました",
    href: "/news/2026-03-03-michibata",
  },
  {
    id: "2026-02-16-seminar",
    date: "2026.02.16",
    category: "説明会",
    title: "2026年度 教室説明会・オンライン相談会",
    href: "/news/2026-02-16-seminar",
  },
  {
    id: "2026-02-15-miwa",
    date: "2026.02.15",
    category: "論文",
    title: "三輪 治生先生（センター病院・講師）の論文が掲載されました",
    href: "/news/2026-02-15-miwa",
  },
  {
    id: "2026-02-14-sano",
    date: "2026.02.14",
    category: "論文",
    title: "佐野 裕亮先生（国立がんセンター中央病院）の論文が掲載されました",
    href: "/news/2026-02-14-sano",
  },
  {
    id: "2026-02-08-shibui",
    date: "2026.02.08",
    category: "論文",
    title: "渋井 俊祐先生（北里研究所）の論文が掲載されました",
    href: "/news/2026-02-08-shibui",
  },
  {
    id: "2026-02-05-miwa2",
    date: "2026.02.05",
    category: "論文",
    title: "三輪 治生先生（センター病院・講師）の論文が掲載されました",
    href: "/news/2026-02-05-miwa2",
  },
]
