"use client"

import { useScrollReveal } from "@/hooks/use-scroll-animation"

export function IntroSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-white py-20 md:py-28" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 text-center reveal">
        <p className="text-[15px] leading-[2] text-[#3D5168]">
          消化器内科は、胃・腸・肝臓・胆嚢・膵臓と対象臓器が幅広く、
          内科・腫瘍内科ともに患者数が最も多い領域のひとつです。
          横浜市立大学消化器内科学教室では、消化管・肝臓・胆膵の各分野の専門家が集結し、
          臨床と研究を高いレベルで両立できる体制を整えています。
        </p>
        <p className="mt-5 text-[15px] leading-[2] text-[#3D5168]">
          最先端の医療技術と温かいチーム医療で、患者さんに寄り添いながら、
          世界に通じる研究成果を発信し続けています。
        </p>
      </div>
    </section>
  )
}
