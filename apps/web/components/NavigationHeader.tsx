'use client'

import { Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const primaryLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chairman', path: '/chairman' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const secondaryLinks = [
  { name: 'About', path: '/about' },
  { name: 'Department', path: '/department' },
  { name: 'Our Services', path: '/services' },
  { name: 'Public Grievance', path: '/publicgrievance' },
  { name: 'Schemes', path: '/schemes' },
  { name: 'Staff', path: '/staff' },
  { name: 'Property Tax', path: '/propertytax' },
]

export default function NavigationHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMobileMenuOpen])

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Main Header - Parrot Green Background */}
      <div className="w-full bg-[#4da826]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 xl:gap-8 xl:py-4">
          
          {/* Logo and Title */}
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 xl:flex-initial">
            <img 
              src="/governmentlogo.png" 
              alt="Nagar Palika Logo" 
              className="h-12 w-12 shrink-0 drop-shadow-sm sm:h-14 sm:w-14 xl:h-18 xl:w-18" 
            />
            <div className="min-w-0">
              <h1 className="text-sm leading-tight font-bold text-white drop-shadow sm:text-lg xl:text-2xl">
                Nagar Palika Parishad, Shamli
              </h1>
              <p className="text-[11px] leading-tight font-medium text-emerald-100 sm:text-sm xl:text-base">
                Shamli, Uttar Pradesh, India
              </p>
            </div>
          </div>

          {/* Primary Navigation Links */}
          <nav className="hidden items-center gap-2 xl:flex" aria-label="Primary navigation">
            {primaryLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`cursor-pointer rounded-md px-4 py-2 text-base font-semibold transition md:text-lg ${
                  isActive(link.path)
                    ? 'bg-emerald-900/40 text-white'
                    : 'text-white hover:bg-emerald-700/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden max-w-xs flex-1 items-center gap-2 rounded-lg bg-white/90 px-3 py-2 xl:flex backdrop-blur-sm">
            <Search className="h-4 w-4 text-emerald-800" />
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-emerald-500/50 text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Secondary Navbar - Cream/Beige Background with Green Text */}
      <nav className="hidden w-full border-b border-[#d8d3bf] bg-[#ebe8d8] xl:block" aria-label="Services navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-center overflow-x-auto whitespace-nowrap px-4 py-0 text-lg font-bold text-[#4da826]">
          {secondaryLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block cursor-pointer border-r border-[#d8d3bf] px-6 py-2.5 transition first:border-l ${
                isActive(link.path) 
                  ? 'bg-[#dcd7bf] text-[#2d6b15] font-extrabold' 
                  : 'hover:bg-[#dfd9c4] hover:text-[#39821a]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden" id="mobile-navigation">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-slate-950/50 backdrop-blur-sm"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 flex h-dvh w-[min(22rem,88vw)] flex-col overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 bg-[#4da826] px-5 py-4 text-white">
              <span className="text-lg font-bold">Navigation</span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition hover:bg-emerald-700"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4">
              <Search className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
              <input
                suppressHydrationWarning
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile navigation">
              {[...primaryLinks, ...secondaryLinks].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md px-3 py-3 text-base font-semibold transition ${
                    isActive(link.path)
                      ? 'bg-[#4da826] text-white'
                      : 'text-[#4da826] hover:bg-[#ebe8d8]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
