import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  enTitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  enTitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" && "text-center",
        className
      )}
    >
      {enTitle && (
        <p
          className="font-serif text-sm tracking-widest text-teal uppercase mb-2"
        >
          {enTitle}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-2xl font-bold text-primary md:text-3xl text-balance",
          align === "center" ? "heading-gold-line-center" : "heading-gold-line"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
