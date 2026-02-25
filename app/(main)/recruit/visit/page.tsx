"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/layout/section-heading"
import { CheckCircle, MapPin, Clock, Mail } from "lucide-react"

export default function VisitPage() {
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

  if (submitted) {
    return (
      <div>
        <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
              Visit & Consultation
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
              見学・相談申込
            </h1>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal/10">
              <CheckCircle className="h-8 w-8 text-teal" />
            </div>
            <h2 className="mt-4 font-serif text-2xl font-bold text-primary">
              送信が完了しました
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              お申し込みありがとうございます。担当者より2営業日以内にご連絡いたします。
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Visit & Consultation
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            見学・相談申込
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/80 text-sm">
            見学・オンライン相談は随時受け付けております。お気軽にお申し込みください。
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Info sidebar */}
            <div className="lg:col-span-1">
              <SectionHeading title="お申し込みについて" enTitle="Information" />
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <Clock className="h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium text-foreground">見学可能時間</p>
                    <p className="text-xs text-muted-foreground">平日 9:00 - 17:00</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <MapPin className="h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium text-foreground">場所</p>
                    <p className="text-xs text-muted-foreground">横浜市立大学附属病院 消化器内科</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <Mail className="h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-medium text-foreground">お問い合わせ</p>
                    <p className="text-xs text-muted-foreground">gastro@yokohama-cu.ac.jp</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-muted p-4">
                <p className="text-sm font-medium text-foreground">オンライン相談も可能</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  遠方の方やお忙しい方向けに、ZoomやTeamsでのオンライン相談も承っております。
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="font-serif text-xl font-bold text-primary mb-6">申込フォーム</h2>
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
                      placeholder="医学部5年"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
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
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 resize-none"
                      placeholder="聞きたいことやご要望があればご記入ください。"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-gold py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-light md:w-auto md:px-12"
                >
                  申し込む
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
