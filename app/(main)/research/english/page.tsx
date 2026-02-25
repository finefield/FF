import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "English Page",
  description: "Department of Gastroenterology, Yokohama City University School of Medicine",
}

export default function EnglishPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold">English</p>
          <h1 className="mt-3 font-[family-name:var(--font-playfair-display)] text-3xl font-bold text-white md:text-4xl">
            Department of Gastroenterology
          </h1>
          <p className="mt-2 text-white/80 text-sm">Yokohama City University School of Medicine</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading title="About Our Department" enTitle="Overview" />
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
            <p>
              The Department of Gastroenterology at Yokohama City University School of Medicine is dedicated to advancing the field of gastroenterology through cutting-edge research, comprehensive clinical care, and rigorous medical education. Our department covers the full spectrum of gastrointestinal, hepatic, and biliary-pancreatic diseases.
            </p>
            <p className="mt-4">
              Founded as part of one of Japan&apos;s leading public medical universities, our department has a long tradition of excellence in both clinical practice and academic research. We are committed to translating our research findings into improved patient outcomes and contributing to the global advancement of gastroenterology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold text-gold">120+</p>
              <p className="mt-1 text-sm text-muted-foreground">Publications per Year</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold text-gold">50+</p>
              <p className="mt-1 text-sm text-muted-foreground">Faculty Members</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="font-[family-name:var(--font-playfair-display)] text-3xl font-bold text-gold">40+</p>
              <p className="mt-1 text-sm text-muted-foreground">Affiliated Hospitals</p>
            </div>
          </div>

          <div className="mt-12">
            <SectionHeading title="Research Focus Areas" enTitle="Research" />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "Gastrointestinal", topics: ["AI-assisted endoscopy", "IBD pathogenesis", "GI cancer genomics"] },
                { title: "Hepatology", topics: ["Viral hepatitis", "MASLD/MASH", "HCC immunotherapy"] },
                { title: "Biliary-Pancreatic", topics: ["Pancreatic cancer biomarkers", "Advanced ERCP techniques", "Biliary cancer genomics"] },
              ].map((area) => (
                <div key={area.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-serif text-base font-bold text-primary">{area.title}</h3>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {area.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <SectionHeading title="Contact" enTitle="Get in Touch" />
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-teal" />
                  <p className="text-sm text-muted-foreground">3-9 Fukuura, Kanazawa-ku, Yokohama, Kanagawa 236-0004, Japan</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal" />
                  <p className="text-sm text-muted-foreground">+81-45-787-2640</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal" />
                  <p className="text-sm text-muted-foreground">gastro@yokohama-cu.ac.jp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
