import type { Metadata } from "next"
import { SectionHeading } from "@/components/layout/section-heading"
import { Calendar, MapPin, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "地域勉強会・セミナー",
  description:
    "横浜市立大学消化器内科学教室が主催・共催する地域向け勉強会・セミナー情報を掲載しています。",
}

const upcomingEvents = [
  {
    title: "第48回 消化器疾患症例検討会",
    date: "2026年3月15日（日）",
    time: "14:00 - 17:00",
    location: "横浜市立大学附属病院 講堂",
    capacity: "定員50名（先着順）",
    topics: ["MASLD/MASH治療の最新知見", "胆膵内視鏡の進歩", "症例提示・ディスカッション"],
  },
  {
    title: "肝疾患地域連携カンファレンス",
    date: "2026年4月12日（土）",
    time: "15:00 - 17:00",
    location: "横浜市立大学附属病院 カンファレンスルーム",
    capacity: "定員30名",
    topics: ["B型肝炎治療の新展開", "肝がんサーベイランスの実際"],
  },
  {
    title: "IBD地域連携セミナー",
    date: "2026年5月17日（土）",
    time: "14:00 - 16:00",
    location: "TKPガーデンシティ横浜",
    capacity: "定員40名",
    topics: ["炎症性腸疾患の最新治療", "クリニックと病院の連携モデル"],
  },
]

const regularEvents = [
  {
    title: "消化器疾患症例検討会",
    frequency: "隔月開催（奇数月 第3土曜日）",
    description: "地域の先生方と症例を共有し、ディスカッションを行う定例会です。",
  },
  {
    title: "肝疾患カンファレンス",
    frequency: "年4回開催",
    description: "肝炎・肝がんに関する最新情報を共有する勉強会です。",
  },
  {
    title: "内視鏡ハンズオンセミナー",
    frequency: "年2回開催",
    description: "最新の内視鏡手技を実習形式で学ぶセミナーです。",
  },
  {
    title: "消化器内科オープンカンファレンス",
    frequency: "毎月開催",
    description: "当科の症例カンファレンスに地域の先生方もご参加いただけます。",
  },
]

export default function SeminarsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-navy-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-[family-name:var(--font-playfair-display)] text-sm tracking-widest text-gold/80">
            Seminars & Events
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl">
            地域勉強会・セミナー
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">
            地域の先生方と共に学び、消化器診療の質の向上を目指します。
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="今後の開催予定"
            enTitle="Upcoming Events"
            align="center"
          />
          <div className="flex flex-col gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-lg font-bold text-primary">
                  {event.title}
                </h3>
                <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-teal" />
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-teal" />
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-teal" />
                    {event.location}
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-teal" />
                    {event.capacity}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium text-muted-foreground">
                    主なトピック
                  </p>
                  <ul className="mt-1.5 flex flex-col gap-1">
                    {event.topics.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="bg-section-alt py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="定例開催のご案内"
            enTitle="Regular Events"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {regularEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-base font-bold text-primary">
                  {event.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-teal">
                  {event.frequency}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary">
            ご参加方法
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            各勉強会・セミナーへのご参加は事前申込制です。
            地域連携室までお電話またはメールにてお申し込みください。
            参加費は原則無料です。
          </p>
        </div>
      </section>
    </div>
  )
}
