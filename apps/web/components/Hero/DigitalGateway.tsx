"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Coins,
  Droplet,
  FileCheck,
  Filter,
  Hammer,
  HardHat,
  HeartPulse,
  Search,
  ShieldCheck,
  Trash2,
} from "lucide-react"
import { useMemo, useState, type ReactNode } from "react"

interface Department {
  id: string
  category: "infra" | "revenue" | "health"
  name: string
  nameHi: string
  description: string
  icon: ReactNode
  services: string[]
  accent: {
    line: string
    icon: string
    text: string
    dot: string
    badge: string
  }
}

const departments: Department[] = [
  {
    id: "public-works",
    category: "infra",
    name: "Public Works Department",
    nameHi: "लोक निर्माण विभाग",
    description:
      "Road maintenance, drainage networks, street lighting, and civic infrastructure development in Shamli town.",
    icon: <HardHat className="h-6 w-6" />,
    services: [
      "Road Damage Reporting",
      "Trenching Permissions",
      "Street Light Maintenance",
    ],
    accent: {
      line: "from-amber-500 via-orange-500 to-red-500",
      icon: "bg-amber-500/10 text-amber-600 dark:text-amber-400 ring-amber-500/20",
      text: "text-amber-700 dark:text-amber-400",
      dot: "bg-amber-500",
      badge: "border-amber-200 bg-amber-50 text-amber-800",
    },
  },
  {
    id: "revenue",
    category: "revenue",
    name: "Revenue & Property Tax",
    nameHi: "राजस्व एवं गृहकर विभाग",
    description:
      "Property taxation, municipal assessment, land mutation records, and commercial licensing operations.",
    icon: <Coins className="h-6 w-6" />,
    services: [
      "Property Tax Payment",
      "Property Mutation Request",
      "Trade License NOC",
    ],
    accent: {
      line: "from-blue-600 via-indigo-600 to-violet-600",
      icon: "bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-blue-500/20",
      text: "text-blue-700 dark:text-blue-400",
      dot: "bg-blue-600",
      badge: "border-blue-200 bg-blue-50 text-blue-800",
    },
  },
  {
    id: "water",
    category: "infra",
    name: "Water Supply & Sewage",
    nameHi: "जल आपूर्ति एवं जलकल विभाग",
    description:
      "Potable water supply management, pipelines, connection requests, and water meter disputes in Shamli.",
    icon: <Droplet className="h-6 w-6" />,
    services: [
      "New Water Connection",
      "Pipeline Leakage Repair",
      "Water Bill Correction",
    ],
    accent: {
      line: "from-cyan-500 via-sky-500 to-blue-500",
      icon: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 ring-cyan-500/20",
      text: "text-cyan-700 dark:text-cyan-400",
      dot: "bg-cyan-500",
      badge: "border-cyan-200 bg-cyan-50 text-cyan-800",
    },
  },
  {
    id: "sanitation",
    category: "health",
    name: "Sanitation & Solid Waste",
    nameHi: "स्वास्थ्य एवं स्वच्छता विभाग",
    description:
      "Door-to-door garbage collection, street sweeping, community bins, and vector control drives.",
    icon: <Trash2 className="h-6 w-6" />,
    services: [
      "Door-to-Door Waste Drive",
      "Fogging & Spraying Request",
      "Public Dustbin Placement",
    ],
    accent: {
      line: "from-emerald-500 via-teal-500 to-green-600",
      icon: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-emerald-500/20",
      text: "text-emerald-700 dark:text-emerald-400",
      dot: "bg-emerald-500",
      badge: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
  },
  {
    id: "health",
    category: "health",
    name: "Public Health & Registrar",
    nameHi: "जन स्वास्थ्य एवं पंजीकरण",
    description:
      "Vital statistics recording (birth & death certificates), food safety verification, and community health.",
    icon: <HeartPulse className="h-6 w-6" />,
    services: [
      "Birth Certificate Request",
      "Death Registration",
      "Food Safety Inspection NOC",
    ],
    accent: {
      line: "from-rose-500 via-pink-500 to-red-500",
      icon: "bg-rose-500/10 text-rose-600 dark:text-rose-400 ring-rose-500/20",
      text: "text-rose-700 dark:text-rose-400",
      dot: "bg-rose-500",
      badge: "border-rose-200 bg-rose-50 text-rose-800",
    },
  },
  {
    id: "town-planning",
    category: "infra",
    name: "Town Planning & Building",
    nameHi: "नगर नियोजन एवं निर्माण",
    description:
      "Building plan sanctioning, encroachment checks, zoning verification, and town development control.",
    icon: <Hammer className="h-6 w-6" />,
    services: [
      "Building Map Approval",
      "Encroachment Complaint",
      "Zoning Certificate NOC",
    ],
    accent: {
      line: "from-violet-600 via-purple-600 to-indigo-600",
      icon: "bg-violet-500/10 text-violet-600 dark:text-violet-400 ring-violet-500/20",
      text: "text-violet-700 dark:text-violet-400",
      dot: "bg-violet-500",
      badge: "border-violet-200 bg-violet-50 text-violet-800",
    },
  },
]

const overviewStats = [
  {
    value: "06",
    label: "Active Departments",
    icon: Building2,
    color: "text-orange-600 bg-orange-50",
  },
  {
    value: "20+",
    label: "Digital Services",
    icon: CheckCircle2,
    color: "text-blue-600 bg-blue-50",
  },
  {
    value: "24×7",
    label: "Citizen Portal",
    icon: ShieldCheck,
    color: "text-emerald-600 bg-emerald-50",
  },
]

export default function DigitalGateway() {
  const shouldReduceMotion = useReducedMotion()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Filter logic
  const filteredDepartments = useMemo(() => {
    return departments.filter((dept) => {
      const matchesCategory =
        activeCategory === "all" || dept.category === activeCategory
      const matchesSearch =
        dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.nameHi.includes(searchQuery) ||
        dept.services.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        )
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, activeCategory])

  return (
    <section
      id="digital-gateway"
      aria-labelledby="digital-gateway-title"
      className="relative overflow-hidden bg-[#f4faf1] py-20 px-4 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Dynamic Background Blurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute right-[-200px] top-1/2 h-[450px] w-[450px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#1b430b_1px,transparent_1px),linear-gradient(90deg,#1b430b_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            HEADER SECTION
        ========================== */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 24 }
          }
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          {/* Official Location Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-[#1b430b] shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#4da826] animate-pulse" />
            <span>Nagar Palika Parishad, Shamli</span>
            <span aria-hidden="true" className="text-emerald-300">
              •
            </span>
            <span className="text-[#4da826] font-extrabold uppercase tracking-wider">
              Citizen e-Portal
            </span>
          </div>

          <h2
            id="digital-gateway-title"
            className="text-balance text-3xl font-black tracking-tight text-[#1b430b] sm:text-4xl lg:text-5xl"
          >
            Digital Service Gateway
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-[#2f5320] sm:text-base">
            Access municipal e-services, apply for certificates, pay property tax,
            and raise grievances directly to Nagar Palika Parishad Shamli.
          </p>

          {/* Tricolor Accent */}
          <div
            aria-hidden="true"
            className="mx-auto mt-6 flex items-center justify-center gap-1.5"
          >
            <span className="h-1.5 w-12 rounded-full bg-orange-500" />
            <span className="h-1.5 w-6 rounded-full bg-blue-600" />
            <span className="h-1.5 w-4 rounded-full bg-[#4da826]" />
          </div>
        </motion.div>

        {/* =========================
            OVERVIEW STATS
        ========================= */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {overviewStats.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 16 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-emerald-100 ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-black tracking-tight text-[#1b430b]">
                    {item.value}
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* =========================
            SEARCH & CATEGORY FILTERS
        ========================= */}
        <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search service, e.g. 'Property Tax' or 'Birth'..."
              className="w-full rounded-xl border border-emerald-100 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition-all focus:border-[#4da826] focus:bg-white focus:ring-2 focus:ring-[#4da826]/20"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 border-t border-slate-100 pt-3 sm:border-t-0 sm:pt-0">
            {[
              { id: "all", label: "All Departments" },
              { id: "infra", label: "Infrastructure" },
              { id: "revenue", label: "Revenue" },
              { id: "health", label: "Health & Sanitation" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#1b430b] text-white shadow-sm"
                    : "bg-emerald-50 text-[#1b430b] hover:bg-emerald-100 hover:text-[#1b430b]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================
            DEPARTMENT GRID
        ========================= */}
        <AnimatePresence mode="popLayout">
          {filteredDepartments.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="my-12 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#4da826]">
                <Filter className="h-6 w-6" />
              </div>
              <p className="mt-3 text-base font-bold text-[#1b430b]">
                No matching services found
              </p>
              <p className="text-xs text-slate-500">
                Try searching for alternate terms or clear filters.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredDepartments.map((department, index) => (
                <motion.article
                  layout
                  key={department.id}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 20 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion ? 0 : (index % 3) * 0.06,
                  }}
                  className="group relative flex min-h-[410px] flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-900/10 focus-within:ring-2 focus-within:ring-[#4da826]/30"
                >
                  {/* Top Gradient Accent */}
                  <div
                    aria-hidden="true"
                    className={`h-1.5 w-full bg-gradient-to-r ${department.accent.line}`}
                  />

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    {/* Icon & Active Status */}
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:scale-110 ${department.accent.icon}`}
                      >
                        {department.icon}
                      </div>

                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4da826] animate-pulse" />
                        Online
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="mt-5">
                      <p
                        className={`text-xs font-black tracking-wide ${department.accent.text}`}
                      >
                        {department.nameHi}
                      </p>
                      <h3 className="mt-1 text-xl font-bold tracking-tight text-[#1b430b]">
                        {department.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {department.description}
                    </p>

                    {/* Key Services List */}
                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                        Available E-Services
                      </p>

                      <ul className="mt-3 space-y-2">
                        {department.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 sm:text-sm"
                          >
                            <span
                              aria-hidden="true"
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${department.accent.dot}`}
                            />
                            <span className="leading-snug">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto pt-6">
                      <button
                        type="button"
                        className="group/btn inline-flex w-full cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold text-slate-800 transition-all duration-200 hover:border-emerald-300 hover:bg-[#1b430b] hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4da826]"
                      >
                        <span>Access Services</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                        />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* =========================
            FOOTER NOTE
        ========================= */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-2 rounded-2xl border border-emerald-100 bg-white/80 p-4 text-center sm:flex-row backdrop-blur-sm"
        >
          <FileCheck className="h-4 w-4 text-[#4da826]" />
          <p className="text-xs font-semibold text-[#1b430b]">
            Official Portal of Nagar Palika Parishad Shamli, District Shamli, Uttar
            Pradesh.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
