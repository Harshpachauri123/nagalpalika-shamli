'use client'

import { Mail, MapPin, MessageCircle, Phone, Share2, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#eef8ea] text-[#1b430b] border-t-4 border-[#4da826] pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4 mb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Column 1: Description and Social Links */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-[#275c13]">
              Nagar Palika Parishad, Shamli
            </h3>
            <p className="mb-4 text-sm text-[#2f5320]/90 leading-relaxed">
              Dedicated to serving our citizens with transparency, efficiency, and
              digital governance excellence.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="rounded-full bg-white p-2 text-[#4da826] shadow-sm transition hover:bg-[#4da826] hover:text-white"
                title="Share"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 text-[#4da826] shadow-sm transition hover:bg-[#4da826] hover:text-white"
                title="Message"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-2 text-[#4da826] shadow-sm transition hover:bg-[#4da826] hover:text-white"
                title="Connect"
              >
                <Zap className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-[#275c13]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="font-medium text-[#2f5320] transition hover:text-[#4da826] hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/staff"
                  className="font-medium text-[#2f5320] transition hover:text-[#4da826] hover:underline"
                >
                  Staff
                </Link>
              </li>
              <li>
                <Link
                  href="/publicgrievance"
                  className="font-medium text-[#2f5320] transition hover:text-[#4da826] hover:underline"
                >
                  Public Grievance
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-[#2f5320] transition hover:text-[#4da826] hover:underline"
                >
                  Government Disclaimers
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-[#2f5320] transition hover:text-[#4da826] hover:underline"
                >
                  Help Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-[#275c13]">Contact Us</h4>
            <div className="space-y-3 text-sm text-[#2f5320]">
              <div className="flex gap-2.5">
                <MapPin className="h-5 w-5 shrink-0 text-[#4da826]" />
                <p>Nagar Palika Parishad, Station Road, Shamli - 247776</p>
              </div>
              <div className="flex gap-2.5">
                <Phone className="h-5 w-5 shrink-0 text-[#4da826]" />
                <p>+91 5724-222-111</p>
              </div>
              <div className="flex gap-2.5">
                <Mail className="h-5 w-5 shrink-0 text-[#4da826]" />
                <p>info@shamliparishad.gov.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#dcecd5] pt-6 text-center text-xs text-[#3d632f]">
        <p suppressHydrationWarning className="mb-1 font-medium">
          &copy; {new Date().getFullYear()} Nagar Palika Parishad, Shamli. All rights reserved. | Official Government Website
        </p>
        <p suppressHydrationWarning className="text-[#517a42]">
          Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        <p className="mt-2 font-semibold text-[#275c13]">
          Hosted By - SDV Edutech Pvt. Ltd.
        </p>
      </div>
    </footer>
  )
}
