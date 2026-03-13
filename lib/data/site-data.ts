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
    date: "2026.02.20",
    category: "説明会",
    title: "2026年度 教室説明会（第1回）を5月10日に開催します。参加申込受付中。",
    href: "/news",
  },
  {
    date: "2026.02.15",
    category: "論文",
    title: "当教室の研究チームによる論文がGastroenterology誌に掲載されました",
    href: "/news",
  },
  {
    date: "2026.02.01",
    category: "学会",
    title: "JDDW 2025にて大学院生 山田太郎先生が若手奨励賞を受賞しました",
    href: "/news",
  },
  {
    date: "2026.01.20",
    category: "説明会",
    title: "オンライン入局相談会を随時開催中。お気軽にお申し込みください。",
    href: "/news",
  },
  {
    date: "2026.01.10",
    category: "論文",
    title: "Hepatology誌にNAFLD関連の多施設共同研究が掲載されました",
    href: "/news",
  },
]
