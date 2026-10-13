"use client"

import Link from "next/link"
import { ArrowUpRight, Megaphone } from "lucide-react"

interface Notice {
  id: string
  text: string
  link: string
}

const notices: Notice[] = [
  {
    id: "property-tax",
    text: "संपत्ति कर सूचना: नगर पालिका परिषद शामली में संपत्ति कर के त्वरित भुगतान पर विशेष छूट का लाभ उठाएं।",
    link: "/propertytax",
  },
  {
    id: "water-tax",
    text: "जल कर सूचना: नगर पालिका परिषद शामली नगर वासियों के लिए जल कर भुगतान एवं नए कनेक्शन हेतु ऑनलाइन सुविधा उपलब्ध है।",
    link: "/services",
  },
  {
    id: "recruitment",
    text: "भर्ती सूचना: संविदा सफाई कर्मियों एवं तकनीकी सहायकों के पदों हेतु आवेदन प्रक्रिया जारी है।",
    link: "#news-notices",
  },
  {
    id: "public-meeting",
    text: "सार्वजनिक बैठक सूचना: नगर पालिका परिषद शामली में वार्ड विकास और स्वच्छता समीक्षा बैठक का आयोजन।",
    link: "#news-notices",
  },
  {
    id: "tender",
    text: "टेंडर सूचना: नगर पालिका परिषद शामली नगर क्षेत्र में LED स्ट्रीट लाइट रखरखाव एवं निर्माण कार्यों हेतु निविदाएं आमंत्रित हैं।",
    link: "#news-notices",
  },
]

export default function AnnouncementTicker() {
  return (
    <section
      aria-label="Latest announcements"
      className="relative z-30 w-full overflow-hidden border-y border-[#d6ebd0] bg-[#f0f9ed]"
    >
      <div className="flex min-h-12 flex-col md:flex-row">

        {/* =====================================================
            ANNOUNCEMENT LABEL
        ====================================================== */}

        <div className="relative z-20 flex shrink-0 items-center border-b border-[#d6ebd0] bg-[#4da826] px-4 py-3 md:border-b-0 md:border-r md:px-6">
          <div className="flex items-center gap-2.5">

            {/* Icon */}

            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-white shadow-xs">
              <Megaphone
                aria-hidden="true"
                className="h-4 w-4"
              />
            </div>

            {/* Text */}

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wide text-white">
                Announcements
              </span>

              <span
                aria-hidden="true"
                className="hidden h-1 w-1 rounded-full bg-emerald-200 sm:block"
              />

              <span className="hidden text-[11px] font-medium text-emerald-100 sm:block">
                शामली नवीनतम सूचनाएं
              </span>
            </div>
          </div>

          {/* Right edge separator */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-6 translate-x-full bg-linear-to-r from-[#4da826]/20 to-transparent md:block"
          />
        </div>

        {/* =====================================================
            TICKER
        ====================================================== */}

        <div className="relative flex min-w-0 flex-1 items-center bg-[#f0f9ed]">

          {/* Left fade */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-linear-to-r from-[#f0f9ed] to-transparent"
          />

          {/* Marquee */}

          <div className="group w-full overflow-hidden">

            <div className="announcement-marquee flex w-max items-center py-3 motion-reduce:animate-none">

              {/* First set */}

              <div className="flex shrink-0 items-center gap-10 pr-10">
                {notices.map((notice) => (
                  <NoticeItem
                    key={notice.id}
                    notice={notice}
                  />
                ))}
              </div>

              {/* Duplicate set */}

              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-10 pr-10"
              >
                {notices.map((notice) => (
                  <NoticeItem
                    key={`${notice.id}-duplicate`}
                    notice={notice}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Right fade */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-linear-to-l from-[#f0f9ed] to-transparent"
          />
        </div>
      </div>

      {/* =======================================================
          MARQUEE STYLES
      ======================================================== */}

      <style jsx>{`
        .announcement-marquee {
          animation: announcement-marquee 48s linear infinite;
        }

        .group:hover .announcement-marquee {
          animation-play-state: paused;
        }

        @keyframes announcement-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .announcement-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

/* ============================================================
    NOTICE ITEM
============================================================ */

function NoticeItem({ notice }: { notice: Notice }) {
  return (
    <Link
      href={notice.link}
      className="group/item inline-flex min-w-max items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#1b430b] transition-colors duration-200 hover:bg-white hover:text-[#4da826] hover:shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4da826] focus-visible:ring-offset-2"
    >
      {/* Status indicator */}

      <span
        aria-hidden="true"
        className="h-2 w-2 shrink-0 rounded-full bg-[#4da826]"
      />

      {/* Notice */}

      <span className="leading-5">
        {notice.text}
      </span>

      {/* Arrow */}

      <ArrowUpRight
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 text-[#4da826] transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5"
      />
    </Link>
  )
}
