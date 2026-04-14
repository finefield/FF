// 横浜市立大学 消化器内科学教室 - TOPページ
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { RecruitFocusSection } from "@/components/home/recruit-focus-section"
import { ResearchSection } from "@/components/home/research-section"
import { EventSection } from "@/components/home/event-section"
import { ProfessorSection } from "@/components/home/professor-section"
import { NewsSection } from "@/components/home/news-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <RecruitFocusSection />
      <ResearchSection />
      <EventSection />
      <ProfessorSection />
      <NewsSection />
    </main>
  )
}
