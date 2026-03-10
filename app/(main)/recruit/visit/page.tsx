"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Clock, Mail, Phone, ExternalLink, Building2, ChevronDown, CheckCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

/* ---- 関連施設データ ---- */
const affiliatedFacilities = [
  { name: "横浜市立大学附属病院", href: "/network#hub" },
  { name: "横浜市立大学附属市民総合医療センター", href: "/network#hub" },
  { name: "神奈川県立がんセンター", href: "/network#hub" },
  { name: "横浜南共済病院", href: "/network#affiliate" },
  { name: "横浜市南部病院", href: "/network#affiliate" },
  { name: "藤沢市民病院", href: "/network#affiliate" },
  { name: "横浜保土ヶ谷中央病院", href: "/network#affiliate" },
  { name: "横浜掖済会病院", href: "/network#affiliate" },
  { name: "県立足柄上病院", href: "/network#affiliate" },
  { name: "横須賀市立市民病院", href: "/network#affiliate" },
  { name: "秦野赤十字病院", href: "/network#affiliate" },
  { name: "大和市立病院", href: "/network#affiliate" },
  { name: "大森赤十字病院", href: "/network#affiliate" },
  { name: "川崎市立井田病院", href: "/network#affiliate" },
]

export default function VisitPage() {
  const ref = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    affiliation: "",
    year: "",
    preferredDate: "",
    type: "visit",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div ref={ref}>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[#0C2340] py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-[#C4923A] italic">
              Visit & Consultation
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
              見学・入局相談
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
              消化器内科学は、必要不可欠な多くの臓器にまたがる、重要かつ大変やりがいのある領域です。
              当教室では、目覚ましい発展を遂げる消化器内科領域の診療・研究に関して、
              最先端に位置する教育を受けることが可能です。
              当教室で、医師として充実した人生を過ごして頂くことを、教室員一同、心から願っています。
            </p>
          </div>

          {/* Quick Links */}
          <div className="reveal-stagger mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#seminar"
              className="reveal-child flex items-center gap-2 rounded-full bg-[#C4923A] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#E8B96A] hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              教室説明会
            </a>
            <a
              href="#online"
              className="reveal-child flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" />
              オンライン相談会
            </a>
            <a
              href="#facilities"
              className="reveal-child flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              <Building2 className="h-4 w-4" />
              関連施設メッセージ
            </a>
          </div>
        </div>
      </section>

      {/* ---- 2026年度 教室説明会 ---- */}
      <section id="seminar" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <p className="font-serif text-sm tracking-wider text-[#2A8B8B] italic">
              Information Session
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#0C2340] md:text-3xl heading-gold-line">
              2026年度 教室説明会・オンライン相談会
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* 第1回 教室説明会 */}
            <div className="reveal rounded-2xl border-2 border-[#C4923A]/30 bg-gradient-to-b from-[#C4923A]/5 to-transparent p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C4923A]/15">
                  <Calendar className="h-6 w-6 text-[#C4923A]" />
                </div>
                <div>
                  <span className="rounded-full bg-[#C4923A] px-3 py-1 text-xs font-bold text-white">
                    ハイブリッド開催
                  </span>
                </div>
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                第1回 教室説明会
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                消化器内科医を志している方、当教室に少しでも興味がある方は、この機会にぜひご参加ください。
                説明会の後半で専攻医の先生方に気軽に質問いただけるお時間も用意しております。
                待遇面や施設の内情など気になることはなんでも質問していただき参考にしていただければ幸いです。
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#C4923A]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">開催日時</p>
                    <p className="text-sm text-muted-foreground">2026年3月19日（木）19:00〜</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C4923A]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">会場</p>
                    <p className="text-sm text-muted-foreground">
                      横浜市立大学みなとみらいサテライトキャンパス<br />
                      横浜ランドマークタワー7F
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-[#C4923A]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">オンライン</p>
                    <p className="text-sm text-muted-foreground">
                      ZOOM参加をご希望の方には、開催前日にURLを送付いたします
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScaoiaQDuL1atz63gYTYWs-fOdCjSUgBr9hUp11q5xryMvOfA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C4923A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
              >
                事前登録はこちら
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* オンライン相談会 */}
            <div id="online" className="reveal rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2A8B8B]/10">
                  <ExternalLink className="h-6 w-6 text-[#2A8B8B]" />
                </div>
                <div>
                  <span className="rounded-full bg-[#2A8B8B] px-3 py-1 text-xs font-bold text-white">
                    オンライン開催
                  </span>
                </div>
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-foreground">
                第2回 教室オンライン相談会
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                こちらは説明会よりは小規模で開催させていただいており、毎月開催しております。
                運営委員長との個別相談の場として考えております。
                当教室に少しでも興味がある方は、この機会にぜひご利用ください。
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#2A8B8B]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">開催日時</p>
                    <p className="text-sm text-muted-foreground">2026年2月19日（木）19:00〜</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-[#2A8B8B]" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">形式</p>
                    <p className="text-sm text-muted-foreground">
                      ZOOMでの開催（現地開催はございません）<br />
                      開催前日に参加者へURLをメールでお送りします
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfoDAmNUKdLXiH3PDX07Be8UHqkAJyZgf9TVdklTg5-ATWiiA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#2A8B8B] px-6 py-3 text-sm font-bold text-[#2A8B8B] transition-colors hover:bg-[#2A8B8B] hover:text-white"
              >
                事前申込はこちら
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* 過去の説明会の様子 */}
          <div className="reveal mt-12 rounded-2xl bg-[#F4F7FA] p-8">
            <h3 className="font-serif text-lg font-bold text-foreground">
              2025年度 教室説明会（現地開催）の様子
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              多くの皆様にご参加いただきました。説明会では、教室の特徴、研修プログラム、キャリアパスについてご説明し、
              専攻医との座談会も実施しています。
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="aspect-video rounded-lg bg-border/50" />
              <div className="aspect-video rounded-lg bg-border/50" />
              <div className="aspect-video rounded-lg bg-border/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- お問い合わせ先 ---- */}
      <section className="bg-[#0C2340] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-[#C4923A] italic">
              Contact
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
              お問い合わせ先
            </h2>
          </div>

          <div className="reveal mt-10 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">所在地</p>
                <p className="mt-2 text-sm text-white/90">
                  〒236-0004<br />
                  横浜市金沢区福浦3-9<br />
                  横浜市立大学 医学部<br />
                  臨床研究棟4F 消化器内科学教室
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/50">教室運営委員長</p>
                <p className="mt-2 text-sm text-white/90">
                  入江 邦泰（いりえ くにやす）
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="mailto:k_irie@yokohama-cu.ac.jp"
                    className="flex items-center gap-2 text-sm text-[#C4923A] hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    k_irie@yokohama-cu.ac.jp
                  </a>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Phone className="h-4 w-4" />
                    045-787-2800（代表）
                  </div>
                  <p className="text-xs text-white/50">PHS: 5476</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 関連施設からのメッセージ ---- */}
      <section id="facilities" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal">
            <p className="font-serif text-sm tracking-wider text-[#2A8B8B] italic">
              Messages from Affiliated Facilities
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#0C2340] md:text-3xl heading-gold-line">
              関連施設からのメッセージ
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              当教室への入局を志す先生方へ、各関連施設からのメッセージです。
              各施設をクリックすると、詳細ページへジャンプします。
            </p>
          </div>

          <div className="reveal-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {affiliatedFacilities.map((facility, index) => (
              <Link
                key={facility.name}
                href={facility.href}
                className={`reveal-child group flex items-center gap-3 rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  index < 3
                    ? "border-[#C4923A]/30 bg-gradient-to-r from-[#C4923A]/5 to-transparent"
                    : "border-border bg-card"
                }`}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  index < 3 ? "bg-[#C4923A]/15" : "bg-[#2A8B8B]/10"
                }`}>
                  <Building2 className={`h-5 w-5 ${index < 3 ? "text-[#C4923A]" : "text-[#2A8B8B]"}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground group-hover:text-[#0C2340] truncate">
                    {facility.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {index < 3 ? "拠点病院" : "協力病院"}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 申込フォーム ---- */}
      <section className="bg-[#F4F7FA] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <p className="font-serif text-sm tracking-wider text-[#2A8B8B] italic">
              Application Form
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#0C2340] md:text-3xl">
              見学・相談 申込フォーム
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              見学・オンライン相談は随時受け付けております。お気軽にお申し込みください。
            </p>
          </div>

          {submitted ? (
            <div className="reveal mt-12 mx-auto max-w-md text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2A8B8B]/10">
                <CheckCircle className="h-8 w-8 text-[#2A8B8B]" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
                送信が完了しました
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                お申し込みありがとうございます。担当者より2営業日以内にご連絡いたします。
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-10 lg:grid-cols-3">
              {/* Info sidebar */}
              <div className="reveal lg:col-span-1">
                <div className="space-y-4">
                  <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <Clock className="h-5 w-5 shrink-0 text-[#2A8B8B]" />
                    <div>
                      <p className="text-sm font-medium text-foreground">見学可能時間</p>
                      <p className="text-xs text-muted-foreground">平日 9:00 - 17:00</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <MapPin className="h-5 w-5 shrink-0 text-[#2A8B8B]" />
                    <div>
                      <p className="text-sm font-medium text-foreground">見学場所</p>
                      <p className="text-xs text-muted-foreground">横浜市立大学附属病院 消化器内科</p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <Mail className="h-5 w-5 shrink-0 text-[#2A8B8B]" />
                    <div>
                      <p className="text-sm font-medium text-foreground">お問い合わせ</p>
                      <p className="text-xs text-muted-foreground">k_irie@yokohama-cu.ac.jp</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-xl bg-card border border-border p-4">
                  <p className="text-sm font-medium text-foreground">オンライン相談も可能</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    遠方の方やお忙しい方向けに、ZoomやTeamsでのオンライン相談も承っております。
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="reveal lg:col-span-2">
                <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-6">申込フォーム</h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                        お名前 <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[#2A8B8B] focus:ring-2 focus:ring-[#2A8B8B]/20"
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                        メールアドレス <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[#2A8B8B] focus:ring-2 focus:ring-[#2A8B8B]/20"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
                        電話番号
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[#2A8B8B] focus:ring-2 focus:ring-[#2A8B8B]/20"
                        placeholder="090-1234-5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="affiliation" className="mb-1 block text-sm font-medium text-foreground">
                        所属・大学名 <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="affiliation"
                        name="affiliation"
                        type="text"
                        required
                        value={formData.affiliation}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[#2A8B8B] focus:ring-2 focus:ring-[#2A8B8B]/20"
                        placeholder="○○大学医学部"
                      />
                    </div>
                    <div>
                      <label htmlFor="year" className="mb-1 block text-sm font-medium text-foreground">
                        学年・研修年次
                      </label>
                      <input
                        id="year"
                        name="year"
                        type="text"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[#2A8B8B] focus:ring-2 focus:ring-[#2A8B8B]/20"
                        placeholder="医学部5年 / 初期研修2年目"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="mb-1 block text-sm font-medium text-foreground">
                        申込種別 <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[#2A8B8B] focus:ring-2 focus:ring-[#2A8B8B]/20"
                      >
                        <option value="visit">見学（来院）</option>
                        <option value="online">オンライン相談</option>
                        <option value="both">どちらでも</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="mb-1 block text-sm font-medium text-foreground">
                        希望日
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[#2A8B8B] focus:ring-2 focus:ring-[#2A8B8B]/20"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
                        ご質問・メッセージ
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-[#2A8B8B] focus:ring-2 focus:ring-[#2A8B8B]/20 resize-none"
                        placeholder="聞きたいことやご要望があればご記入ください。"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-lg bg-[#C4923A] py-3 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A] md:w-auto md:px-12"
                  >
                    申し込む
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
