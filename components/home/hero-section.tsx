"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-[90vh] items-center bg-[#0C2340] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Accent glow */}
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#147A85]/10 blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-[#C4923A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* English label */}
          <p
            className="text-sm tracking-[0.3em] text-[#C4923A] transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
            }}
          >
            YOKOHAMA CITY UNIVERSITY
          </p>

          {/* Main copy */}
          <h1
            className="mt-4 font-serif text-3xl font-bold leading-snug text-white md:text-5xl md:leading-tight transition-all duration-700 delay-200 text-balance"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            消化器の最前線で、
            <br />
            横浜から世界へ。
          </h1>

          {/* Sub copy */}
          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg transition-all duration-700 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            臨床・研究・教育の三つを高いレベルで追求できる環境。
            <br className="hidden md:block" />
            50以上の連携病院で、あなたのキャリアを広げます。
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <Link
              href="/recruit/visit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C4923A] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#E8B96A] hover:gap-3"
            >
              見学・入局相談を申込む
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/recruit"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              入局・研修案内を見る
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
        <span className="text-[10px] tracking-widest">SCROLL</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  )
}
