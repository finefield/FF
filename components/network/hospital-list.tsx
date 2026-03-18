"use client"

import { useState } from "react"
import { Building2, User, ExternalLink } from "lucide-react"

type HospitalCategory = "all" | "hub" | "affiliate"

interface StaffMember {
  role: string
  name: string
}

interface Hospital {
  name: string
  category: "hub" | "affiliate"
  staff: StaffMember[]
  url?: string
}

const hospitals: Hospital[] = [
  // 拠点病院
  {
    name: "横浜市立大学附属病院",
    category: "hub",
    url: "https://www.yokohama-cu.ac.jp/fukuhp/index.html",
    staff: [
      { role: "主任教授", name: "前田 愼" },
      { role: "教授（医学教育学）", name: "稲森 正彦" },
      { role: "臨床検査部 部長", name: "桐越 博之" },
    ],
  },
  {
    name: "横浜市立大学附属市民総合医療センター",
    category: "hub",
    url: "https://www.yokohama-cu.ac.jp/urahp/index.html",
    staff: [
      { role: "診療教授・部長・肝疾患医療センター長", name: "森本 学" },
      { role: "准教授・IBDセンター 部長", name: "国崎 玲子" },
      { role: "准教授・輸血部 部長・臨床研究部 部長", name: "野﨑 昭人" },
      { role: "准教授・内視鏡部 部長", name: "平澤 欣吾" },
    ],
  },
  {
    name: "神奈川県立がんセンター",
    category: "hub",
    url: "https://kcch.kanagawa-pho.jp/",
    staff: [
      { role: "部長（肝胆膵）", name: "上野 誠" },
      { role: "部長（消化管）", name: "町田 望" },
      { role: "部長（内視鏡）", name: "滝沢 耕平" },
    ],
  },
  // 協力病院
  {
    name: "横浜南共済病院",
    category: "affiliate",
    url: "https://minamikyousai.kkr.or.jp/",
    staff: [{ role: "主任部長", name: "近藤 正晃" }],
  },
  {
    name: "横浜市南部病院",
    category: "affiliate",
    url: "https://www.nanbu.saiseikai.or.jp/",
    staff: [{ role: "主任部長", name: "杉森 一哉" }],
  },
  {
    name: "藤沢市民病院",
    category: "affiliate",
    url: "https://fujisawacity-hosp.jp/",
    staff: [{ role: "副院長/医療安全管理部長", name: "岩瀬 滋" }],
  },
  {
    name: "横浜保土ヶ谷中央病院",
    category: "affiliate",
    url: "https://hodogaya.jcho.go.jp/",
    staff: [{ role: "副院長", name: "中馬 誠" }],
  },
  {
    name: "横浜掖済会病院",
    category: "affiliate",
    url: "https://www.yokohama-ekisaikai.com/",
    staff: [{ role: "院長", name: "内藤 実" }],
  },
  {
    name: "県立足柄上病院",
    category: "affiliate",
    url: "https://ashigarakami.kanagawa-pho.jp/",
    staff: [
      { role: "院長", name: "川名 一朗" },
      { role: "院長補佐　部長", name: "國司 洋佑" },
    ],
  },
  {
    name: "横須賀市立市民病院",
    category: "affiliate",
    url: "https://yokosuka-shimin.jp/index.html",
    staff: [{ role: "副院長", name: "小松 和人" }],
  },
  {
    name: "秦野赤十字病院",
    category: "affiliate",
    staff: [{ role: "副院長", name: "後藤 亨" }],
  },
  {
    name: "大和市立病院",
    category: "affiliate",
    url: "https://www.yamatocity-mh.jp/",
    staff: [],
  },
  {
    name: "大森赤十字病院",
    category: "affiliate",
    url: "https://omori.jrc.or.jp/",
    staff: [{ role: "部長", name: "井田 智則" }],
  },
]

const categoryLabel: Record<HospitalCategory, string> = {
  all: "すべて",
  hub: "拠点病院",
  affiliate: "協力病院",
}

export function HospitalList() {
  const [filter, setFilter] = useState<HospitalCategory>("all")

  const filtered =
    filter === "all" ? hospitals : hospitals.filter((h) => h.category === filter)
  const hubCount = hospitals.filter((h) => h.category === "hub").length
  const affiliateCount = hospitals.filter((h) => h.category === "affiliate").length

  return (
    <div>
      {/* フィルタータブ */}
      <div className="mb-8 flex flex-wrap gap-2">
        {(Object.keys(categoryLabel) as HospitalCategory[]).map((key) => {
          const count =
            key === "all"
              ? hospitals.length
              : key === "hub"
                ? hubCount
                : affiliateCount
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === key
                  ? "bg-teal text-white shadow-md"
                  : "bg-off-white text-text-sub hover:bg-border"
              }`}
            >
              {categoryLabel[key]}
              <span className="ml-1.5 text-xs opacity-70">({count})</span>
            </button>
          )
        })}
      </div>

      {/* 病院カード */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((hospital) => {
          const CardWrapper = hospital.url ? "a" : "div"
          const cardProps = hospital.url
            ? { href: hospital.url, target: "_blank", rel: "noopener noreferrer" }
            : {}

          return (
            <CardWrapper
              key={hospital.name}
              {...cardProps}
              className={`group block rounded-xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                hospital.category === "hub"
                  ? "border-gold/30 bg-gold/5"
                  : "border-border bg-card"
              } ${hospital.url ? "cursor-pointer" : ""}`}
            >
              <div className="mb-3 flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    hospital.category === "hub"
                      ? "bg-gold/15"
                      : "bg-teal/10"
                  }`}
                >
                  <Building2
                    className={`h-5 w-5 ${
                      hospital.category === "hub" ? "text-gold" : "text-teal"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-foreground leading-snug">
                      {hospital.name}
                    </h3>
                    {hospital.url && (
                      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </div>
                  <span
                    className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                      hospital.category === "hub"
                        ? "bg-gold/10 text-gold"
                        : "bg-teal/10 text-teal"
                    }`}
                  >
                    {hospital.category === "hub" ? "拠点病院" : "協力病院"}
                  </span>
                </div>
              </div>

              {hospital.staff.length > 0 && (
                <div className="mt-3 space-y-2 border-t border-border/50 pt-3">
                  {hospital.staff.map((member) => (
                    <div key={member.name} className="flex items-start gap-2">
                      <User className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {member.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardWrapper>
          )
        })}
      </div>
    </div>
  )
}
