"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/data/site-data"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0C2340]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-xs tracking-wide text-white/60 font-sans">
            横浜市立大学 医学部
          </span>
          <span className="font-serif text-lg font-bold text-white leading-tight md:text-xl">
            消化器内科学教室
          </span>
        </Link>

        {/* Right: Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="メインナビゲーション">
          {navItems.filter((item) => !("isButton" in item && item.isButton)).map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  "text-white/80 hover:text-white",
                  pathname.startsWith(item.href) && item.href !== "/"
                    ? "text-white"
                    : ""
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full z-50 min-w-56 rounded-lg border border-white/10 bg-[#0C2340]/95 backdrop-blur-md p-2 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {navItems.filter((item) => "isButton" in item && item.isButton).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="ml-3 rounded-lg bg-[#C4923A] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-[#0C2340]/98 backdrop-blur-md px-4 py-4 lg:hidden"
          aria-label="モバイルナビゲーション"
        >
          {navItems.filter((item) => !("isButton" in item && item.isButton)).map((item) => (
            <div key={item.label} className="border-b border-white/10 last:border-b-0">
              {item.children ? (
                <>
                  <button
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-white/90"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform text-white/50",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="pb-3 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-white/60 transition-colors hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-white/90"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          {navItems.filter((item) => "isButton" in item && item.isButton).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="mt-4 block rounded-lg bg-[#C4923A] py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#E8B96A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
