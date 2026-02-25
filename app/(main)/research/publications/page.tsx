"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/layout/section-heading"

const publications: Record<string, { title: string; authors: string; journal: string; year: string }[]> = {
  "2026": [
    { title: "Artificial Intelligence-Assisted Detection of Early Gastric Cancer in Endoscopic Images", authors: "Yamada I, Tanaka M, Sato J, et al.", journal: "Gastroenterology", year: "2026" },
    { title: "Novel Biomarkers for Early Detection of Pancreatic Cancer", authors: "Takahashi S, Suzuki K, Nakamura H, et al.", journal: "Gut", year: "2026" },
    { title: "Long-term Outcomes of Direct-Acting Antiviral Therapy in Hepatitis C Patients", authors: "Sato J, Kobayashi M, Ito T, et al.", journal: "Hepatology", year: "2026" },
  ],
  "2025": [
    { title: "Gut Microbiome Alterations in Inflammatory Bowel Disease: A Multi-Center Study", authors: "Tanaka M, Yamada I, Watanabe K, et al.", journal: "Nature Communications", year: "2025" },
    { title: "EUS-Guided Tissue Acquisition: Optimizing Diagnostic Yield", authors: "Takahashi S, Endo Y, Morita K, et al.", journal: "Gastrointestinal Endoscopy", year: "2025" },
    { title: "MASLD/MASH: New Classification and Treatment Strategies", authors: "Sato J, Tanaka M, et al.", journal: "Journal of Hepatology", year: "2025" },
    { title: "Endoscopic Submucosal Dissection for Superficial Esophageal Cancer", authors: "Yamada I, Ito T, et al.", journal: "Endoscopy", year: "2025" },
  ],
  "2024": [
    { title: "Immune Checkpoint Inhibitors in Hepatocellular Carcinoma: Real-World Data", authors: "Sato J, Nakamura H, et al.", journal: "Liver International", year: "2024" },
    { title: "Risk Factors for Post-ERCP Pancreatitis: A Prospective Study", authors: "Takahashi S, Yamada I, et al.", journal: "Pancreatology", year: "2024" },
    { title: "Deep Learning Model for Colorectal Polyp Classification", authors: "Tanaka M, Suzuki K, et al.", journal: "Digestive Endoscopy", year: "2024" },
  ],
}

const years = Object.keys(publications).sort((a, b) => Number(b) - Number(a))

export default function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState(years[0])

  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">
            Publications
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            論文・業績
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="年度別論文一覧" enTitle="Papers by Year" />

          <div className="mb-8 flex gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {year}年
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {publications[selectedYear].map((pub, i) => (
              <article key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-medium text-primary leading-relaxed">{pub.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{pub.authors}</p>
                <p className="mt-1 text-xs font-medium italic text-secondary">{pub.journal} ({pub.year})</p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            ※ 上記は代表的な論文の一部です。詳細な業績リストについてはお問い合わせください。
          </p>
        </div>
      </section>
    </div>
  )
}
