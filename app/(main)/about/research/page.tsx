"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, FlaskConical, Microscope, Dna, Beaker, TestTube, ExternalLink, X } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

type ResearchCategory = "clinical" | "basic"
type ResearchGroup = "liver" | "biliary" | "gi"

const categories = [
  { id: "clinical" as const, name: "臨床研究", icon: Beaker },
  { id: "basic" as const, name: "基礎研究", icon: TestTube },
]

const groups = [
  { id: "liver" as const, name: "肝臓グループ", icon: FlaskConical, color: "teal" },
  { id: "biliary" as const, name: "胆膵グループ", icon: Microscope, color: "emerald" },
  { id: "gi" as const, name: "消化管グループ", icon: Dna, color: "blue" },
]

export default function ResearchIntroPage() {
  const [activeCategory, setActiveCategory] = useState<ResearchCategory>("clinical")
  const [activeGroup, setActiveGroup] = useState<ResearchGroup>("liver")
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)
  const ref = useScrollReveal([activeCategory, activeGroup])

  return (
    <div ref={ref}>
      {/* ---- Hero ---- */}
      <section className="relative flex items-center overflow-hidden bg-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="research-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#research-grid)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-white/40" aria-label="パンくず">
            <Link href="/" className="transition-colors hover:text-white/70">HOME</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/about" className="transition-colors hover:text-white/70">教室について</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/70">研究紹介</span>
          </nav>
          <p className="font-serif text-sm tracking-[0.15em] text-white/45 italic">Research Introduction</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-5xl text-balance">
            研究紹介
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            各グループが取り組む臨床研究・基礎研究の活動と成果をご紹介します。
          </p>
        </div>
      </section>

      {/* ---- カテゴリー選択 ---- */}
      <section className="bg-background py-12 md:py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 rounded-xl px-8 py-4 text-base font-medium transition-all ${isActive
                    ? "bg-navy text-white shadow-lg scale-105"
                    : "bg-off-white text-text-sub hover:bg-navy/10 border border-border"
                    }`}
                >
                  <Icon className="h-5 w-5" />
                  {cat.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---- グループカード ---- */}
      <section className="bg-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal grid gap-6 md:grid-cols-3">
            {/* 肝臓グループ */}
            <button
              onClick={() => setActiveGroup("liver")}
              className={`group relative overflow-hidden rounded-2xl p-8 text-center transition-all hover:scale-[1.02] hover:shadow-xl ${activeGroup === "liver"
                ? "ring-4 ring-white/50 shadow-2xl"
                : "hover:ring-2 hover:ring-white/30"
                }`}
              style={{ background: "linear-gradient(to bottom, #1a2332, #2d3a4d)" }}
            >
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/liver-qnlZtQ3XUvbPiTOVFTzhHLHhqbVhx5.png"
                  alt="肝臓"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">肝臓グループ</h3>
              <p className="text-xs tracking-[0.15em] text-white/50 uppercase">Liver Group</p>
            </button>

            {/* 胆膵グループ */}
            <button
              onClick={() => setActiveGroup("biliary")}
              className={`group relative overflow-hidden rounded-2xl p-8 text-center transition-all hover:scale-[1.02] hover:shadow-xl ${activeGroup === "biliary"
                ? "ring-4 ring-white/50 shadow-2xl"
                : "hover:ring-2 hover:ring-white/30"
                }`}
              style={{ background: "linear-gradient(to bottom, #2d3a4d, #3d4a5d)" }}
            >
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/birinary_pan-96MJ0gJS5S2ucKPsJTnH9kwEFnyXIN.png"
                  alt="胆嚢・膵臓"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">胆膵グループ</h3>
              <p className="text-xs tracking-[0.15em] text-white/50 uppercase">Bile & Pancreas Group</p>
            </button>

            {/* 消化管グループ */}
            <button
              onClick={() => setActiveGroup("gi")}
              className={`group relative overflow-hidden rounded-2xl p-8 text-center transition-all hover:scale-[1.02] hover:shadow-xl ${activeGroup === "gi"
                ? "ring-4 ring-white/50 shadow-2xl"
                : "hover:ring-2 hover:ring-white/30"
                }`}
              style={{ background: "linear-gradient(to bottom, #1a3a3a, #2a4a4a)" }}
            >
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gastro-zHezX86Iaa3POo6ovjfnQ4zziktalm.png"
                  alt="消化管"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-1">消化管グループ</h3>
              <p className="text-xs tracking-[0.15em] text-white/50 uppercase">Gastrointestinal Tract Group</p>
            </button>
          </div>
        </div>
      </section>

      {/* ---- 研究内容 ---- */}
      <section className="bg-off-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {activeCategory === "clinical" && activeGroup === "liver" && <ClinicalLiver />}
          {activeCategory === "clinical" && activeGroup === "biliary" && <ClinicalBiliary />}
          {activeCategory === "clinical" && activeGroup === "gi" && <ClinicalGI />}
          {activeCategory === "basic" && activeGroup === "liver" && <BasicLiver />}
          {activeCategory === "basic" && activeGroup === "biliary" && <BasicBiliary />}
          {activeCategory === "basic" && activeGroup === "gi" && <BasicGI />}
        </div>
      </section>

      {/* ---- リンクセクション ---- */}
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="reveal text-center">
            <h2 className="font-serif text-xl font-bold text-navy md:text-2xl">
              関連ページ
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
              >
                診療の特色（グループ紹介）
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/research/publications"
                className="inline-flex items-center gap-2 rounded-lg border border-navy px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
              >
                論文・業績一覧
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
    </div>

      {/* 画像モーダル */ }
  {
    modalImage && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={() => setModalImage(null)}
      >
        <button
          onClick={() => setModalImage(null)}
          className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          aria-label="閉じる"
        >
          <X className="h-6 w-6" />
        </button>
        <div
          className="relative max-h-[90vh] max-w-[90vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={modalImage.src}
            alt={modalImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
          <p className="mt-2 text-center text-sm text-white/80">{modalImage.alt}</p>
        </div>
      </div>
    )
  }
    </div >
  )
}

/* ====================================
   臨床研究 - 肝臓グループ
   ==================================== */
function ClinicalLiver() {
  return (
    <div className="space-y-6">
      <div className="reveal">
        <h3 className="font-serif text-xl font-bold text-navy md:text-2xl flex items-center gap-3">
          <Microscope className="h-6 w-6 text-teal" />
          臨床研究 - 肝臓グループ
        </h3>
      </div>

      {/* これまでの研究内容 */}
      <div className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-lg text-navy border-l-4 border-teal pl-3 mb-6">これまでの研究内容</h4>

        {/* C型肝炎 */}
        <div className="mb-8">
          <h5 className="font-bold text-base text-navy mb-4">C型肝炎</h5>

          <div className="space-y-6">
            {/* 論文1 */}
            <div className="bg-off-white rounded-lg p-4">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/21149925/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors font-medium text-sm"
              >
                <span>Hydroxyurea Suppresses HCV Replication in Humans: A Phase I Trial of Oral Hydroxyurea in Chronic Hepatitis C Patients</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
              <p className="text-xs text-text-sub mt-1">
                Akito Nozaki, Kazushi Numata, Manabu Morimoto, Masaaki Kondo, Kazuya Sugimori, Satoshi Morita, Eiji Miyajima, Masanori Ikeda, Nobuyuki Kato, Shin Maeda, Katsuaki Tanaka
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Antivir Ther. 2010;15(8):1179-83. doi: 10.3851/IMP1668.</p>
              <p className="text-sm leading-[1.8] text-text-sub mt-3">
                ジェノタイプ2のC型肝炎においてIL28B SNPがPEG-IFNリバビリン併用療法の治療効果に影響するハイドロキシウレア経口投与でHCVの複製が抑制されることを国内第1相試験で示しました。
              </p>
            </div>

            {/* 論文2 */}
            <div className="bg-off-white rounded-lg p-4">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/32128704/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors font-medium text-sm"
              >
                <span>The Effectiveness and Safety of Glecaprevir/Pibrentasvir in Chronic Hepatitis C Patients with Refractory Factors in the Real World: A Comprehensive Analysis of a Prospective Multicenter Study</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
              <p className="text-xs text-text-sub mt-1">
                Akito Nozaki, Masanori Atsukawa, Chisa Kondo, Hidenori Toyoda, Makoto Chuma, Makoto Nakamuta, Haruki Uojima, Koichi Takaguchi, Hiroki Ikeda, Tsunamasa Watanabe, Shintaro Ogawa, Norio Itokawa, Taeang Arai, Atsushi Hiraoka, Toru Asano, Shinichi Fujioka, Tadashi Ikegami, Toshihide Shima, Chikara Ogawa, Takehiro Akahane, Noritomo Shimada, Shinya Fukunishi, Hiroshi Abe, Akihito Tsubota, Takuya Genda, Hironao Okubo, Shigeru Mikami, Asahiro Morishita, Akio Moriya, Joji Tani, Yoshihiko Tachi, Naoki Hotta, Toru Ishikawa, Takeshi Okanoue, Yasuhito Tanaka, Takashi Kumada, Katsuhiko Iwakiri, Shin Maeda, KTK49 Liver Study Group
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">Hepatol Int. 2020 Mar;14(2):225-238. doi: 10.1007/s12072-020-10019-z.</p>
              <p className="text-sm leading-[1.8] text-text-sub mt-3">
                国内多施設共同研究により、グレカプレビル・ピブレンタスビル併用療法を施行した1439例について解析した。その結果、治癒（SVR12）は1439例中1397例（97.1%）で達成され、治療完遂1410例では1397例（99.1%）で達成され非常に有効な治療と考察された。さらに、多変量解析の結果、経口抗ウイルス剤（DAAs）の既治療およびジェノタイプ3（特に3b）が有意な治療抵抗因子として抽出された。
              </p>

              {/* 図表 */}
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div>
                  <button
                    onClick={() => setModalImage({ src: "/images/research-intro/patient-characteristics.png", alt: "患者背景（N=1439）" })}
                    className="block w-full cursor-zoom-in hover:opacity-90 transition-opacity"
                  >
                    <img
                      src="/images/research-intro/patient-characteristics.png"
                      alt="Background characteristics of the patients"
                      className="w-full h-auto rounded-lg border border-border"
                    />
                  </button>
                  <p className="mt-1 text-xs text-muted-foreground text-center">患者背景（N=1439）</p>
                </div>
                <div>
                  <button
                    onClick={() => setModalImage({ src: "/images/research-intro/svr12-analysis.png", alt: "SVR12達成率" })}
                    className="block w-full cursor-zoom-in hover:opacity-90 transition-opacity"
                  >
                    <img
                      src="/images/research-intro/svr12-analysis.png"
                      alt="SVR12 analysis"
                      className="w-full h-auto rounded-lg border border-border"
                    />
                  </button>
                  <p className="mt-1 text-xs text-muted-foreground text-center">SVR12達成率</p>
                </div>
                <div>
                  <button
                    onClick={() => setModalImage({ src: "/images/research-intro/non-svr12-factors.png", alt: "non-SVR12関連因子の解析" })}
                    className="block w-full cursor-zoom-in hover:opacity-90 transition-opacity"
                  >
                    <img
                      src="/images/research-intro/non-svr12-factors.png"
                      alt="Analyses of factors associated with non-SVR12"
                      className="w-full h-auto rounded-lg border border-border"
                    />
                  </button>
                  <p className="mt-1 text-xs text-muted-foreground text-center">non-SVR12関連因子の解析</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 肝癌 */}
        <div>
          <h5 className="font-bold text-base text-navy mb-4">肝癌</h5>

          <div className="space-y-5">
            {/* 超音波関係 */}
            <div className="bg-off-white rounded-lg p-4">
              <h6 className="font-medium text-sm text-navy mb-3">超音波関係</h6>
              <ul className="text-sm space-y-2">
                <li>
                  <span className="text-text-sub">造影超音波による肝腫瘍（肝癌、肝転移、血管腫瘍）の鑑別診断</span>
                  <span className="ml-2 text-xs">
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/27278173" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/17072951" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/14563903" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">3</a>
                  </span>
                </li>
                <li>
                  <span className="text-text-sub">造影超音波による穿刺治療のアシストと治療効果判定</span>
                  <span className="ml-2 text-xs">
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/12490493" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/18314518" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>
                  </span>
                </li>
                <li>
                  <span className="text-text-sub">3次元��影超音波の肝腫瘍診断と治療効果判定における有用性</span>
                  <span className="ml-2 text-xs">
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/20440851" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/19361941" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/19321671" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">3</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/19221060" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">4</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/19098197" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">5</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/18930616" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">6</a>
                  </span>
                </li>
                <li>
                  <span className="text-text-sub">融合画像による腫瘍検出能の向上と穿刺治療のアシストと治療効果判定</span>
                  <span className="ml-2 text-xs">
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/22197088" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/22194485" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>
                  </span>
                </li>
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pubmed/27033867" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal/80">ソナゾイド超音波造影剤の造影モードによる検討</a>
                </li>
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pubmed/23769188" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal/80">造影超音波によるTACEの早期治療効果判定</a>
                </li>
                <li>
                  <span className="text-text-sub">造影超音波による早期肝がんと再生結節の診断</span>
                  <span className="ml-2 text-xs">
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/24176532" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/26099473" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/27771842" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">3</a>
                  </span>
                </li>
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pubmed/28034569" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal/80">造影超音波での多血性病変のラジオ波熱凝固療法の局所再発率の検討</a>
                </li>
                <li>
                  <span className="text-text-sub">肝癌における集束超音波治療</span>
                  <span className="ml-2 text-xs">
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/23728304" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/21945355" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/21339057" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">3</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/21306847" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">4</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/20015603" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">5</a>
                  </span>
                </li>
              </ul>
            </div>

            {/* 肝炎ウイルスと肝発癌 */}
            <div className="bg-off-white rounded-lg p-4">
              <span className="text-text-sub text-sm">肝炎ウイルスと肝発癌、肝癌再発の関与</span>
              <span className="ml-2 text-xs">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/19554391" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/18854000" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>
              </span>
            </div>

            {/* 肝動注療法 */}
            <div className="bg-off-white rounded-lg p-4">
              <span className="text-text-sub text-sm">肝動注療法</span>
              <span className="ml-2 text-xs">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/25495751" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/21501224" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>,{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/20688778" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">3</a>
              </span>
            </div>

            {/* 分子標的治療 */}
            <div className="bg-off-white rounded-lg p-4">
              <h6 className="font-medium text-sm text-navy mb-3">分子標的治療</h6>
              <ul className="text-sm space-y-2">
                <li>
                  <span className="text-text-sub">肝癌分子標的薬sorafenibの日本人における初期投与量の検討</span>
                  <span className="ml-2 text-xs">
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/24802232" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/21348907" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>
                  </span>
                </li>
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/pubmed/25472913" target="_blank" rel="noopener noreferrer" className="text-text-sub hover:text-teal hover:underline">最新の分子標的治療</a>
                  <span className="text-text-sub mx-2">/</span>
                  <a href="https://www.ncbi.nlm.nih.gov/pubmed/24689883" target="_blank" rel="noopener noreferrer" className="text-text-sub hover:text-teal hover:underline">Sorafenib併用ラジオ波熱凝固療法の焼灼範囲の検討</a>
                </li>
              </ul>
            </div>

            {/* 造影超音波による膵腫瘍、胆嚢病変の鑑別診断 */}
            <div className="bg-off-white rounded-lg p-4">
              <span className="text-text-sub text-sm">造影超音波による膵腫瘍、胆嚢病変の鑑別診断</span>
              <span className="ml-2 text-xs">
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/12216764" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">1</a>,{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/14992356" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">2</a>,{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/17526608" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">3</a>,{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pubmed/24711063" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">4</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 現在進行中の研究 */}
      <div className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-lg text-navy border-l-4 border-teal pl-3 mb-6">現在進行中の研究</h4>

        <div className="mb-6">
          <h5 className="font-bold text-base text-navy mb-3">C型肝炎</h5>
          <ul className="text-sm text-text-sub space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-teal">①</span>
              <span>Direct acting antivirals（DAAs）併用療法の前向き観察研究（多施設共同試験）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal">②</span>
              <a href="https://upload.umin.ac.jp/cgi-open-bin/ctr/ctr_view.cgi?recptno=R000023156" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal/80">
                Effect of Sofosbuvir or Ledipasvir/Sofosbuvir Therapy on Liver Fibrosis in Japanese Patients with Hepatitis C Virus Infection（多施設共同試験）
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-base text-navy mb-3">肝癌、超音波</h5>
          <ul className="text-sm text-text-sub space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-teal">①</span>
              <span>集束超音波治療またはラジオ波熱凝固療法における呼吸追従機能の検討</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal">②</span>
              <span>3次元超音波を参照にした超音波との融合画像</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal">③</span>
              <span>体幹部定位放射線治療の造影超音波所見</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal">④</span>
              <span>早期肝癌のラジオ波熱凝固療法の局所再発率の検討</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal">⑤</span>
              <span>体幹部定位放射線治療とラジオ波熱凝固療法の局所再発率の比較</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal">⑥</span>
              <a href="https://upload.umin.ac.jp/cgi-open-bin/ctr/ctr.cgi?function=brows&action=brows&type=summary&recptno=R000007270&language=J" target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal/80">
                進行肝細胞患者を対象にしたソラフェニブ治療とシスプラチン肝動注先行治療のランダム化第II相試験
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal">⑦</span>
              <span>ウイルス制御下における肝発癌の特性</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ====================================
   臨床研究 - 胆膵グループ
   ==================================== */
function ClinicalBiliary() {
  return (
    <div className="space-y-6">
      <div className="reveal">
        <h3 className="font-serif text-xl font-bold text-navy md:text-2xl flex items-center gap-3">
          <Microscope className="h-6 w-6 text-emerald-600" />
          臨床研究 - 胆膵グループ
        </h3>
      </div>

      <div className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-lg text-navy border-l-4 border-emerald-500 pl-3 mb-6">進行中の臨床研究</h4>

        <ul className="space-y-4">
          {/* JCOG1202 */}
          <li className="bg-off-white rounded-lg p-4">
            <a
              href="http://www.jcog.jp/document/1202.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 underline hover:text-emerald-500 text-sm font-medium"
            >
              根治切除後胆道癌に対する術後補助療法としてのS-1療法の第III相試験（JCOG1202）
            </a>
            <p className="text-sm leading-[1.8] text-text-sub mt-2">
              化学療法未治療薬の遠隔転移を有する膵癌に対するL-OHP+CPT-11+5FU/l-LV併用療法 modified regimen（mFFX）の第II相試験
            </p>
          </li>

          {/* JCOG1113 */}
          <li className="bg-off-white rounded-lg p-4">
            <a
              href="http://www.jcog.jp/document/1113.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 underline hover:text-emerald-500 text-sm font-medium"
            >
              進行胆道癌を対象としたゲムシタビン+シスプラチン併用療法（GC療法）とゲムシタビン+S-1併用療法（GS療法）の第III相比較試験（JCOG1113）の附随研究
            </a>
            <p className="text-sm leading-[1.8] text-text-sub mt-2">
              良悪性胆管狭窄に対する胆管内埋め込み型プラスチックステントの有用性と安全性についての多施設共同前向き研究
            </p>
          </li>

          {/* JCOG1213 */}
          <li className="bg-off-white rounded-lg p-4">
            <a
              href="http://www.jcog.jp/document/1213.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 underline hover:text-emerald-500 text-sm font-medium"
            >
              JCOG1213: 消化管・肝胆膵原発の切除不能・再発神経内分泌癌（NEC）を対象としたエトポシド/シスプラチン（EP）療法とイリノテカン/シスプラチン（IP）療法のランダム化比較試験
            </a>
            <p className="text-sm leading-[1.8] text-text-sub mt-2">
              膵癌・乳癌・卵巣癌・前立腺癌いずれかの家族歴を有する、または、乳癌・卵巣癌・前立腺癌いずれかの既往歴を有する、遠隔転移を伴う膵癌を対象としたゲムシタビン/オキサリプラチン療法（GEMOX療法）の多施設共同第II相試験
            </p>
          </li>

          {/* JCOG1407 */}
          <li className="bg-off-white rounded-lg p-4">
            <a
              href="http://www.jcog.jp/document/1407.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 underline hover:text-emerald-500 text-sm font-medium"
            >
              局所進行膵癌を対象としたmodified FOLFIRINOX療法とゲムシタビン+ナブパクリタキセル併用療法のランダム化第II相試験（JCOG1407）
            </a>
            <ul className="text-sm leading-[1.8] text-text-sub mt-2 space-y-1">
              <li>・76歳以上の切除非適応膵癌患者に対する非手術療法の前向き観察研究</li>
              <li>・切除不能・再発膵腺扁平上皮癌に対する化学療法の治療成績に関する多施設共同後ろ向き観察研究</li>
            </ul>
          </li>

          {/* JCOG1202A1 */}
          <li className="bg-off-white rounded-lg p-4">
            <a
              href="http://www.jcog.jp/general/privacy/notice_1202A1_20170524.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 underline hover:text-emerald-500 text-sm font-medium"
            >
              胆道癌の術後補助療法における薬剤感受性予測因子に関する探索的研究（JCOG1202A1）
            </a>
            <ul className="text-sm leading-[1.8] text-text-sub mt-2 space-y-1">
              <li>・十二指腸狭窄を有する切除不能膵腺癌を対象とした初回化学療法導入前の狭窄解除方法に関する多施設共同後ろ向き観察研究</li>
              <li>・胆膵領域の腫瘍性疾患における血中遊離遺伝子の解析</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

/* ====================================
   臨床研究 - 消化管グループ
   ==================================== */
function ClinicalGI() {
  return (
    <div className="space-y-6">
      <div className="reveal">
        <h3 className="font-serif text-xl font-bold text-navy md:text-2xl flex items-center gap-3">
          <Microscope className="h-6 w-6 text-blue-600" />
          臨床研究 - 消化管グループ
        </h3>
      </div>

      {/* 胃発癌抑制治療 */}
      <div className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-lg text-navy border-l-4 border-blue-500 pl-3 mb-6">
          胃発癌抑制治療の開発についての研究
        </h4>

        {/* A. ヘリコバクター・ピロリ菌除菌 */}
        <div className="mb-8">
          <h5 className="font-bold text-base text-navy mb-4">A. ヘリコバクター・ピロリ菌除菌</h5>
          <p className="text-sm leading-[1.8] text-text-sub mb-4">
            ヘリコバクター・ピロリ除菌治療に関する特定臨床研究を積極的に実施し、現在実施中の特定臨床研究数はヘリコバクター・ピロリ除菌治療に関するものとして<strong className="text-blue-600">国内最多（7研究）</strong>です。ヘリコバクター学会ガイドライン作成委員としてガイドライン作成に関与しています。
          </p>

          <div className="bg-off-white rounded-lg p-4 mb-4">
            <h6 className="font-medium text-sm text-navy mb-3">これまでの研究内容（論文報告済）</h6>
            <ul className="text-sm text-text-sub space-y-2 list-decimal list-inside">
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/29271026/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ヘリコバクターピロリ一次除菌治療におけるクラリスロマイシン耐性を考慮したPCAB群とPPI群の無作為化比較試験（文献1）
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/30151994/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ヘリコバクターピロリ三次除菌治療としてのPPIとPCABの無作為化比較試験（文献2）
                </a>
              </li>
              <li>
                ペニシリンアレルギー患者におけるボノプラザン・クラリスロマイシン・メトロニダゾールでの除菌治療（
                <a href="https://pubmed.ncbi.nlm.nih.gov/29181022/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">文献3</a>,{" "}
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5885344/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">文献4</a>）
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/28566587/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ヘリコバクター��ピロリ除菌治療 多施設前向きコホート研究（文献5）
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/33850058/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ヘリコバクター除菌治療に関するレビュー論文（文献6）
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/33553672/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ペニシリンアレルギー患者に対するボノプラザン・メトロニダゾール・シタフロキサシンでの救済除菌治療（文献7）
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/36660051/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  一次除菌におけるボノプラザンと高用量アモキシシリン2剤治療の単群前向き介入試験（文献8）
                </a>
              </li>
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/37685510/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  CAM耐性ヘリコバクター・ピロリ一次除菌におけるP-CAB/AMPC/MNZのP-CAB/AMPC/CAMに対する優越性を検討する多施設前向き研究（文献9）
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-off-white rounded-lg p-4 mb-4">
            <h6 className="font-medium text-sm text-navy mb-3">これまでの研究内容（研究終了）</h6>
            <ul className="text-sm text-text-sub space-y-1 list-disc list-inside">
              <li>ヘリコバクターピロリ除菌判定における遠隔診療の効果を病院ベースと比較するランダム化比較試験</li>
              <li>培養感受性に基づくヘリコバクターピロリ四次除菌治療の探索的臨床研究</li>
              <li>若年者におけるsequential治療（VA-VMS）とVAM治療を比較するRCT</li>
              <li>大学生に対するVAMによるピロリ除菌</li>
              <li>大学生尿ピロリ検査とアンケート調査</li>
              <li>ヘリコバクターピロリ一次除菌治療におけるVonoprazan/AMPC/MNZとVonoprazan/AMPC/CAMの多施設共同無作為化比較試験</li>
            </ul>
          </div>

          <div className="bg-off-white rounded-lg p-4">
            <h6 className="font-medium text-sm text-navy mb-3">現在進行中の研究（募集中）</h6>
            <p className="text-xs text-text-sub mb-2 font-medium">＜特定臨床研究＞</p>
            <ul className="text-sm text-text-sub space-y-2 list-decimal list-inside mb-3">
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031190031" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ボノプラザン、アモキシシリン、及びシタフロキサシン7日間でのヘリコバクターピロリ救済治療の耐性情報別の除菌成功率の検討（jRCTs031190031）
                </a>
              </li>
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031200128" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ボノプラザン・高用量アモキシシリンの2剤治療とボノプラザン・アモキシシリン・クラリスロマイシンの3剤治療でのヘリコバクターピロリ除菌を比較する多施設ランダム化比較試験（jRCTs031200128）
                </a>
              </li>
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031200154" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ラスクフロキサシン・アモキシシリン・ボノプラザンによるヘリコバクターピロリ救済除菌治療の単群前向き介入試験（jRCTs031200154）
                </a>
              </li>
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031200239" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  非透析慢性腎臓病を有するヘリコバクターピロリ感染者に対して、ボノプラザン、クラリスロマイシン、メトロニダゾールによる除菌治療の有効性と安全性を検討する単群介入試験（jRCTs031200239）
                </a>
              </li>
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031200237" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  末期腎不全に対して透析を施行しているヘリコバクターピロリ感染者に対するボノプラザン・減量アモキシシリン・クラリスロマイシン除菌治療の有効性及び安全性を検討する単群介入研究（jRCTs031200237）
                </a>
              </li>
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031200171" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ペニシリンアレルギー患者に対するボノプラザン、クラリスロマイシン、メトロニダゾール1週間でのヘリコバクターピロリ除菌治療の耐性情報別の除菌成功率を検討する探索的単群介入試験（jRCTs031200171）
                </a>
              </li>
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031220504" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ボノプラザン・リファブチン・メトロニダゾールによる救済除菌治療の探索的臨床試験（jRCTs031220504）
                </a>
              </li>
            </ul>
            <p className="text-xs text-text-sub mb-2 font-medium">＜特定臨床研究以外＞</p>
            <ul className="text-sm text-text-sub space-y-2 list-decimal list-inside" start={8}>
              <li>ヘリコバクターピロリ二次除菌治療におけるVAMとRAMの多施設共同無作為化比較試験</li>
              <li>Helicobacter pylori薬剤耐性に関する研究</li>
              <li>PCABを用いたCAM耐性ヘリコバクター・ピロリ除菌における尿素呼気試験偽陰性率の検討</li>
            </ul>
          </div>
        </div>

        {/* B. 胃発癌メカニズム */}
        <div className="mb-8">
          <h5 className="font-bold text-base text-navy mb-4">B. 胃発癌メカニズム・リスクに関する研究</h5>

          <div className="bg-off-white rounded-lg p-4 mb-4">
            <h6 className="font-medium text-sm text-navy mb-3">これまでの研究内容（論文報告済）</h6>
            <ul className="text-sm text-text-sub space-y-2 list-decimal list-inside">
              <li>
                <a href="https://pubmed.ncbi.nlm.nih.gov/38034056/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  内視鏡的腸上皮化生に基づく早期胃癌内視鏡治療後の異時発生胃癌リスクの評価（文献10）
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-off-white rounded-lg p-4">
            <h6 className="font-medium text-sm text-navy mb-3">現在実施中の研究</h6>
            <ul className="text-sm text-text-sub space-y-2 list-decimal list-inside">
              <li>胃細菌叢メタゲノム解析による尿素呼気試験陽性・便ピロリ抗原検査陰性の原因検索</li>
              <li>早期胃癌内視鏡治療後の内視鏡的胃炎における胃細菌叢の検討</li>
              <li>未分化型胃癌の発生機序に関する免疫組織化学的及び遺伝子学的検討</li>
            </ul>
          </div>
        </div>

        {/* C. 胃発癌抑制治療開発 */}
        <div>
          <h5 className="font-bold text-base text-navy mb-4">C. ヘリコバクター・ピロリ菌除菌以外の胃発癌抑制治療開発</h5>

          <div className="bg-off-white rounded-lg p-4">
            <h6 className="font-medium text-sm text-navy mb-3">現在実施中の研究</h6>
            <p className="text-xs text-text-sub mb-2 font-medium">＜特定臨床研究＞</p>
            <ul className="text-sm text-text-sub space-y-2 list-decimal list-inside">
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031210319" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  早期胃がん内視鏡治療後患者におけるベルベリン投与による胃粘膜の腸上皮化生改善を評価する探索的ランダム化比較試験（jRCTs031210319）
                </a>
              </li>
              <li>
                <a href="https://jrct.niph.go.jp/latest-detail/jRCTs031230207" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">
                  ボノプラザン、メトロニダゾール、シタフロキサシンでの胃細菌叢除菌による胃癌抑制効果を腸上皮化生改善により評価する探索的介入試験（jRCTs031230207）
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ====================================
   基礎研究 - 肝臓グループ
   ==================================== */
function BasicLiver() {
  return (
    <div className="space-y-6">
      <div className="reveal">
        <h3 className="font-serif text-xl font-bold text-navy md:text-2xl flex items-center gap-3">
          <Microscope className="h-6 w-6 text-teal" />
          基礎研究 - 肝臓グループ
        </h3>
      </div>

      {/* これまでの研究内容 */}
      <div className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-lg text-navy border-l-4 border-teal pl-3 mb-6">これまでの研究内容</h4>

        <div className="mb-8">
          <h5 className="font-bold text-base text-navy mb-4">C型肝炎</h5>
          <ul className="text-sm space-y-3">
            <li>
              <a
                href="http://www.jbc.org/content/278/12/10162.long"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>HCV E2エンベロープ蛋白質が母乳に多く含まれるラクトフェリンと結合する</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
            <li>
              <a
                href="http://cancerres.aacrjournals.org/content/64/4/1307.long"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>HCVコア蛋白質が肝細胞のマイクロサテライト不安定性を促進する</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://link.springer.com/article/10.1007%2Fs00705-010-0624-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>In vitroにおいてハイドロキシウレアがHCV RNAの複製を抑制する</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/24127561"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>Sequence Analysis of Hepatitis C Virus From Patients With Relapse After a Sustained Virological Response: Relapse or Reinfection?</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/23467599"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>Important Factors in Reliable Determination of Hepatitis C Virus Genotype by Use of 5&apos; Untranslated Region</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-base text-navy mb-4">肝癌</h5>
          <ul className="text-sm space-y-3">
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/15989949"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>肝癌の炎症発癌における NF-kappaBの役割</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/12500205"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>肝細胞癌の多段階発癌における遺伝子発現解析；早期肝癌におけるHSP70の関与</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/24130164"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>肝癌進展におけるHeat shock factor 1の役割</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.ncbi.nlm.nih.gov/pubmed/15464244"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal/80 hover:underline inline-flex items-start gap-1.5 transition-colors"
              >
                <span>肝細胞癌の肝内転移における分子機構；細胞接着分子cortactinの役割</span>
                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 現在進行中の研究 */}
      <div className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-lg text-navy border-l-4 border-teal pl-3 mb-6">現在進行中の研究</h4>

        <div className="mb-6">
          <h5 className="font-bold text-base text-navy mb-3">C型肝炎</h5>
          <ul className="text-sm text-text-sub space-y-2 list-disc list-inside">
            <li>Ledipasvir/Sofosbuvir or Ribavirin/Sofosbuvir療法failureの遺伝子解析</li>
            <li>HCV RNAにおけるRNA-RNA interactionの解析</li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-base text-navy mb-3">肝癌</h5>
          <ul className="text-sm text-text-sub space-y-2 list-disc list-inside">
            <li>肝癌治療標的としてのストレス関連遺伝子Heat shock factor 1シグナルの解析</li>
            <li>肝癌における血中microRNAの解析</li>
            <li>肝発癌における高脂肪食負荷の役割</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ====================================
   基礎研究 - 胆膵グループ
   ==================================== */
function BasicBiliary() {
  return (
    <div className="space-y-6">
      <div className="reveal">
        <h3 className="font-serif text-xl font-bold text-navy md:text-2xl flex items-center gap-3">
          <Microscope className="h-6 w-6 text-emerald-600" />
          基礎研究 - 胆膵グループ
        </h3>
      </div>

      <div className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-lg text-navy border-l-4 border-emerald-500 pl-3 mb-6">研究内容</h4>

        <div className="space-y-6">
          {/* 研究1 */}
          <div className="bg-off-white rounded-lg p-4">
            <h5 className="font-medium text-sm text-navy mb-3">膵特異的遺伝子改変マウスを用いた膵腫瘍の悪性化メカニズムの解明</h5>
            <div className="space-y-4">
              <div className="text-sm">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/28837246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-500 hover:underline inline-flex items-start gap-1.5 transition-colors font-medium"
                >
                  <span>c-Jun N-terminal Kinase in Pancreatic Tumor Stroma Augments Tumor Development in Mice</span>
                  <ExternalLink className="h-3 w-3 flex-shrink-0 mt-0.5" />
                </a>
                <p className="text-xs text-text-sub mt-1">Takeshi Sato, Wataru Shibata, Yohko Hikiba, et al.</p>
                <p className="text-xs text-muted-foreground mt-0.5">Cancer Sci. 2017 Nov;108(11):2156-2165.</p>
              </div>
              <div className="text-sm">
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/31526907/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-500 hover:underline inline-flex items-start gap-1.5 transition-colors font-medium"
                >
                  <span>Loss of Pancreatic E-Cadherin Causes Pancreatitis-Like Changes and Contributes to Carcinogenesis</span>
                  <ExternalLink className="h-3 w-3 flex-shrink-0 mt-0.5" />
                </a>
                <p className="text-xs text-text-sub mt-1">Yoshihiro Kaneta, Takeshi Sato, Yohko Hikiba, et al.</p>
                <p className="text-xs text-muted-foreground mt-0.5">Cell Mol Gastroenterol Hepatol. 2020;9(1):105-119.</p>
              </div>
            </div>
          </div>

          {/* 研究2 */}
          <div className="bg-off-white rounded-lg p-4">
            <h5 className="font-medium text-sm text-navy mb-3">胆道癌、膵癌における血中遊離遺伝子の解析</h5>
            <div className="text-sm">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/31746520/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-500 hover:underline inline-flex items-start gap-1.5 transition-colors font-medium"
              >
                <span>Quantitative Monitoring of Circulating Tumor DNA in Patients With Advanced Pancreatic Cancer Undergoing Chemotherapy</span>
                <ExternalLink className="h-3 w-3 flex-shrink-0 mt-0.5" />
              </a>
              <p className="text-xs text-text-sub mt-1">Makoto Sugimori, Kazuya Sugimori, Hiromi Tsuchiya, et al.</p>
              <p className="text-xs text-muted-foreground mt-0.5">Cancer Sci. 2020 Jan;111(1):266-278.</p>
            </div>
          </div>

          {/* 研究3 */}
          <div className="bg-off-white rounded-lg p-4">
            <h5 className="font-medium text-sm text-navy mb-3">次世代型シークエンサーを用いた膵癌、胆道癌の網羅的遺伝子解析と治療抵抗性メカニズムの解明</h5>
            <div className="text-sm">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/27895743/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-500 hover:underline inline-flex items-start gap-1.5 transition-colors font-medium"
              >
                <span>Diagnosis of Pancreatic Lesions Collected by Endoscopic Ultrasound-Guided Fine-Needle Aspiration Using Next-Generation Sequencing</span>
                <ExternalLink className="h-3 w-3 flex-shrink-0 mt-0.5" />
              </a>
              <p className="text-xs text-text-sub mt-1">Eri Kameta, Kazuya Sugimori, Takashi Kaneko, et al.</p>
              <p className="text-xs text-muted-foreground mt-0.5">Oncol Lett. 2016 Nov;12(5):3875-3881.</p>
            </div>
          </div>

          {/* 研究4 */}
          <div className="bg-off-white rounded-lg p-4">
            <h5 className="font-medium text-sm text-navy mb-3">胆膵癌個別化医療実現のための3次元腫瘍バンクの構築</h5>
            <p className="text-sm text-text-sub mb-3">
              患者由来のオルガノイドを樹立・パネル化し、薬剤感受性試験や遺伝子解析を行うことで、個々の患者に最適な治療法の選択を目指しています。
            </p>
            <div className="mt-4">
              <img
                src="/images/research-intro/organoid-bank.jpg"
                alt="胆膵オルガノイドバンク研究"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ====================================
   基礎研究 - 消化管グループ
   ==================================== */
function BasicGI() {
  return (
    <div className="space-y-6">
      <div className="reveal">
        <h3 className="font-serif text-xl font-bold text-navy md:text-2xl flex items-center gap-3">
          <Microscope className="h-6 w-6 text-blue-600" />
          基礎研究 - 消化管グループ
        </h3>
      </div>

      <div className="reveal rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
        <h4 className="font-bold text-lg text-navy border-l-4 border-blue-500 pl-3 mb-6">研究内容</h4>

        <div className="space-y-6">
          {/* 研究1 */}
          <div className="bg-off-white rounded-lg p-4">
            <h5 className="font-medium text-sm text-navy mb-3">ISX（intestine specific homeobox）の腸上皮化生及び胃発癌における役割</h5>
            <p className="text-sm text-text-sub">
              腸上皮化生は胃癌の前癌病変として知られています。ISXの発現と機能を解析し、胃発癌における役割を明らかにする研究を行っています。
            </p>
          </div>

          {/* 研究2 */}
          <div className="bg-off-white rounded-lg p-4">
            <h5 className="font-medium text-sm text-navy mb-3">早期胃癌におけるアミノ酸代謝変動メカニズムの解明に関する研究</h5>
            <p className="text-sm text-text-sub">
              癌細胞は正常細胞と異なる代謝プロファイルを持つことが知られています。早期胃癌におけるアミノ酸代謝の変動を解析し、新規診断マーカーや治療標的の同定を目指しています。
            </p>
          </div>

          {/* 研究3 */}
          <div className="bg-off-white rounded-lg p-4">
            <h5 className="font-medium text-sm text-navy mb-3">胃オルガノイド培養系を用いた胃発癌モデルの作製</h5>
            <p className="text-sm text-text-sub mb-4">
              胃腺窩の3次元オルガノイド培養を行い、各種遺伝子の改変操作により、ex-vivoでの発癌モデルの構築を試みています。
            </p>
            <div className="mt-4">
              <img
                src="/images/research-intro/gastric-organoid.jpg"
                alt="胃3次元オルガノイド培養（マウス）"
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-xs text-muted-foreground text-center">
                胃3次元オルガノイド培養（マウス）<br />
                左：control　右：oncogene強制発現したもの。オルガノイド内部の充実化とbuddingの増加を認める。
              </p>
            </div>
          </div>

          {/* 研究4 */}
          <div className="bg-off-white rounded-lg p-4">
            <h5 className="font-medium text-sm text-navy mb-3">次世代型シークエンサー解析を用いた新規胃癌モデルマウスの創出</h5>
            <p className="text-sm text-text-sub leading-[1.8] mb-4">
              次世代型シークエンサーを用いて早期胃癌組織・進行胃癌組織、及び背景胃粘膜に対する網羅的遺伝子解析を行うことで胃発癌に重要なdriver mutationを明らかにするとともに、それらの背景間質組織の解析から腫瘍促進的に働く間質環境因子の同定を試みます。更には、それらを外挿することで、pre-clinicalな新規胃癌モデルマウスの創出を行います。
            </p>
            <div className="mt-4">
              <img
                src="/images/research-intro/gastric-cancer-model.jpg"
                alt="次世代型シークエンサーを用いた新規胃癌モデルマウスの創出"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
