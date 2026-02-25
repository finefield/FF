"use client"

import { useCountUp } from "@/hooks/use-count-up"

export function StatsSection() {
  const { count, ref } = useCountUp(50, 2000)

  return (
    <section className="bg-[#163559] py-14 md:py-16">
      <div
        ref={ref}
        className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center"
      >
        <p className="font-serif text-[4.5rem] font-bold leading-none text-gold md:text-[6rem]">
          {count}
          <span className="text-3xl md:text-4xl">+</span>
        </p>
        <p className="mt-3 text-lg font-bold tracking-wide text-white md:text-xl">
          {"連携・協力病院数"}
        </p>
        <p className="mt-2 text-sm text-white/60">
          {"神奈川県内最大規模のネットワーク"}
        </p>
        <div className="mt-5 h-[2px] w-16 bg-gold/40" />
      </div>
    </section>
  )
}
