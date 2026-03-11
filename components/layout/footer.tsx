import Link from "next/link"
import { siteConfig } from "@/lib/data/site-data"
import { MapPin, Phone, Printer, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#070E1A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Column 1: Info */}
          <div className="lg:col-span-2">
            <p className="font-serif text-lg font-bold">{siteConfig.nameShort}</p>
            <p className="mt-1 text-xs tracking-wider text-white/40 font-serif italic">
              {siteConfig.nameEn}
            </p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-white/60">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C4923A]" />
                {siteConfig.address}
              </span>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#C4923A]" />
                TEL: {siteConfig.phone}
              </span>
              <span className="flex items-center gap-2">
                <Printer className="h-4 w-4 shrink-0 text-[#C4923A]" />
                FAX: {siteConfig.fax}
              </span>
            </div>
          </div>

          {/* Column 2: 教室について */}
          <div>
            <p className="mb-4 text-sm font-bold text-[#C4923A]">教室について</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li><Link href="/about" className="transition-colors hover:text-white">教授挨拶</Link></li>
              <li><Link href="/about/history" className="transition-colors hover:text-white">教室の沿革</Link></li>
              <li><Link href="/about/staff" className="transition-colors hover:text-white">スタッフ紹介</Link></li>
              <li><Link href="/research" className="transition-colors hover:text-white">診療の特色</Link></li>
              <li><Link href="/research/publications" className="transition-colors hover:text-white">論文・業績一覧</Link></li>
              <li><Link href="/about/alumni" className="transition-colors hover:text-white">同門会</Link></li>
            </ul>
          </div>

          {/* Column 3: 入局・研修案内 */}
          <div>
            <p className="mb-4 text-sm font-bold text-[#C4923A]">入局・研修案内</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li><Link href="/recruit/education" className="transition-colors hover:text-white">教育・研修の特徴</Link></li>
              <li><Link href="/recruit/career" className="transition-colors hover:text-white">キャリアパス</Link></li>
              <li><Link href="/network" className="transition-colors hover:text-white">連携病院ネットワーク</Link></li>
              <li><Link href="/recruit/voice" className="transition-colors hover:text-white">先輩医師のVoice</Link></li>
              <li><Link href="/recruit/visit" className="transition-colors hover:text-white">見学・入局相談</Link></li>
              <li><Link href="/recruit/faq" className="transition-colors hover:text-white">よくある質問 FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: 協力病院・診療 */}
          <div>
            <p className="mb-4 text-sm font-bold text-[#C4923A]">協力病院の紹介</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li><Link href="/network" className="transition-colors hover:text-white">協力病院一覧</Link></li>
            </ul>

            <p className="mb-4 mt-6 text-sm font-bold text-[#C4923A]">診療のご案内</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li><Link href="/clinical" className="transition-colors hover:text-white">診療内容</Link></li>
            </ul>
          </div>

          {/* Column 5: お知らせ・外部リンク */}
          <div>
            <p className="mb-4 text-sm font-bold text-[#C4923A]">お知らせ</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60">
              <li><Link href="/news" className="transition-colors hover:text-white">ニュース一覧</Link></li>
            </ul>

            <p className="mb-4 mt-6 text-sm font-bold text-[#C4923A]">関連リンク</p>
            <ul className="flex flex-col gap-2.5 text-sm text-white/40">
              <li>
                <a href="https://www.yokohama-cu.ac.jp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-white">
                  横浜市立大学附属病院
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://www.yokohama-cu.ac.jp/urahp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-white">
                  市民総合医療センター
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <div className="flex gap-4 text-xs text-white/30">
            <Link href="/privacy" className="transition-colors hover:text-white/60">プライバシーポリシー</Link>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/60">Facebook</a>
          </div>
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
