import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { RecruitFocusSection } from "@/components/home/recruit-focus-section"
import { ResearchSection } from "@/components/home/research-section"
import { EventSection } from "@/components/home/event-section"
import { ProfessorSection } from "@/components/home/professor-section"
import { NewsSection } from "@/components/home/news-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RecruitFocusSection />
      <ResearchSection />
      <EventSection />
      <ProfessorSection />
      <NewsSection />
    </>
  )
}
