"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-animation"

export function ProfessorSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-[#F4F7FA] py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="reveal grid items-center gap-12 md:grid-cols-2">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg aspect-[3/4]">
              <Image
                src="/images/staff/maeda-shin.png"
                alt="前田 愼 教授"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-serif text-sm tracking-wider text-[#7A8FA8] italic">
              Message from Professor
            </p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-[#0C2340] md:text-3xl heading-gold-line">
              教授挨拶
            </h2>
            <p className="mt-5 font-serif text-xl font-bold text-[#192533] md:text-2xl">
              前田 愼 教授
            </p>
            <p className="mt-5 text-[15px] leading-[1.9] text-[#3D5168]">
              横浜市立大学消化器内科学教室は、肝臓・胆膵・消化管の三領域を柱に、
              臨床と研究を高いレベルで両立させてきました。
              50以上の連携病院ネットワークを活かし、
              豊富な症例経験と最先端の研究環境を若手医師に提供しています。
            </p>
            <p className="mt-3 text-[15px] leading-[1.9] text-[#3D5168]">
              「消化器の最前線で、横浜から世界へ。」
              この言葉を胸に、共に医療の未来を切り拓く仲間をお待ちしています。
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#C4923A] transition-all hover:gap-3"
            >
              教授挨拶・略歴を読む
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
