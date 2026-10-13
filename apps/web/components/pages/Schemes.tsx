'use client'

import { ArrowRight, Home, Trash2, ShieldCheck } from 'lucide-react'

export default function Schemes() {
  const schemes = [
    {
      title: 'PM Awas Yojana (Urban)',
      description: 'Providing affordable pucca houses to eligible urban families across Shamli under an inclusive development mission.',
      icon: Home,
      color: 'bg-emerald-50',
      borderColor: 'border-[#4da826]',
      link: 'https://pmay-urban.gov.in/'
    },
    {
      title: 'Swachh Bharat Mission (Urban)',
      description: 'Ensuring scientific waste management, door-to-door waste collection, and 100% sanitation coverage in all 25 wards of Shamli.',
      icon: Trash2,
      color: 'bg-emerald-50',
      borderColor: 'border-[#4da826]',
      link: 'https://swachhbharatmission.gov.in/'
    },
    {
      title: 'Chief Minister Awas Yojana',
      description: 'Extending financial aid and durable housing facilities to marginalized families in Nagar Palika Parishad Shamli.',
      icon: Home,
      color: 'bg-emerald-50',
      borderColor: 'border-[#4da826]',
      link: 'https://upcmo.up.nic.in/'
    },
  ]

  return (
    <div 
      style={{ backgroundColor: "#e2f3db" }}
      className="relative w-full min-h-screen border-b border-emerald-200 font-sans selection:bg-[#4da826] selection:text-white antialiased overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-[#4da826]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-300/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <section className="relative w-full bg-linear-to-r from-[#1b430b] via-[#2f5320] to-[#1b430b] text-white py-14 px-4 shadow-md border-b border-emerald-800">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-white/10 text-emerald-300 border border-emerald-400/40 shadow-xs mb-3 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Welfare & Development • Shamli
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold font-serif tracking-tight mb-3">
            Major Government Schemes
          </h1>
          <p className="text-sm md:text-base text-emerald-100/90 font-medium max-w-2xl leading-relaxed">
            Smart, citizen-focused schemes implemented effectively across Nagar Palika Parishad, Shamli.
          </p>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="relative z-10 w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map((scheme, idx) => {
              const Icon = scheme.icon
              return (
                <div
                  key={idx}
                  className={`bg-white/95 backdrop-blur-md rounded-3xl shadow-sm hover:shadow-xl transition border-l-4 ${scheme.borderColor} border border-emerald-200/80 overflow-hidden flex flex-col justify-between`}
                >
                  <div>
                    <div className={`${scheme.color} p-6 flex items-center gap-4 border-b border-emerald-100`}>
                      <div className="w-14 h-14 bg-white border border-emerald-200 rounded-2xl flex items-center justify-center shrink-0 shadow-xs">
                        <Icon className="w-7 h-7 text-[#4da826]" />
                      </div>
                      <h2 className="text-xl font-extrabold text-[#1b430b]">{scheme.title}</h2>
                    </div>

                    <div className="p-6">
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                        {scheme.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={scheme.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#4da826] hover:text-emerald-700 transition uppercase tracking-wider"
                    >
                      Know More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="relative z-10 w-full pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border-l-4 border-[#4da826] border border-emerald-200/80 shadow-sm">
            <h3 className="text-xl md:text-2xl font-extrabold text-[#1b430b] font-serif mb-3">
              Eligibility & Application Assistance
            </h3>
            <p className="text-slate-700 text-xs md:text-sm leading-relaxed mb-3 font-medium">
              Each government scheme carries specific eligibility criteria and application procedures. Citizens of Shamli can visit the official portals above to review eligibility or register for beneficiary programs.
            </p>
            <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-medium">
              For on-ground registration support, document verification, or inquiries, please visit our municipal helpdesk at Nagar Palika Parishad Shamli during business hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
