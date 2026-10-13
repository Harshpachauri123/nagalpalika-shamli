'use client'

import { CheckCircle2, Award, Users, TrendingUp, ShieldCheck } from 'lucide-react'

export default function AboutUs() {
  const departments = [
    { icon: '🏗️', name: 'Public Works (लोक निर्माण)', id: 'public-works' },
    { icon: '🏛️', name: 'Property Tax (गृह कर)', id: 'property-tax' },
    { icon: '💧', name: 'Water Supply (जलकल विभाग)', id: 'water-supply' },
    { icon: '🚿', name: 'Sanitation (स्वास्थ्य एवं स्वच्छता)', id: 'sanitation' },
    { icon: '👶', name: 'Birth & Death Registry (जन्म-मृत्यु)', id: 'birth-health' },
  ]

  const statistics = [
    { value: '100+', label: 'YEARS OF SERVICE' },
    { value: '25', label: 'ADMINISTRATIVE WARDS' },
    { value: '110K+', label: 'CITIZENS SERVED' },
    { value: '100%', label: 'DIGITAL GOVERNANCE' },
  ]

  const milestones = [
    {
      year: '1920s',
      title: 'Civic Formation',
      description: 'Establishment of local municipal administration in Shamli, laying the foundation for urban civic services.',
    },
    {
      year: '1970s',
      title: 'Industrial & Trade Expansion',
      description: 'Rapid growth of Shamli as a major trade center for jaggery (gur) and iron rim-tube manufacturing in North India.',
    },
    {
      year: '2011',
      title: 'District Headquarters',
      description: 'Shamli elevated to full district status, transforming Nagar Palika Parishad Shamli into a vital administrative hub.',
    },
    {
      year: '2023',
      title: 'Digital E-Governance',
      description: 'Full rollout of online property tax payment, digital birth/death certificate issuance, and citizen portals.',
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

      {/* Hero Section */}
      <section 
        className="relative w-full bg-cover bg-right flex items-center overflow-hidden border-b border-emerald-300/80"
        style={{
          backgroundImage: 'url(/clock-tower.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          minHeight: '340px',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#1b430b]/95 via-[#1b430b]/85 to-[#1b430b]/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full py-16">
          <div className="text-white max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-white/10 text-emerald-300 border border-emerald-400/40 shadow-xs mb-3 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Official Municipal Portal • Shamli
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 font-serif">
              About Nagar Palika Parishad, Shamli
            </h1>
            <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-medium">
              Dedicated to continuous urban growth, public health, transparent governance, and modern infrastructure for the citizens of Shamli, Uttar Pradesh.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Departments */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-emerald-200/80 shadow-md p-6 sticky top-24">
              <h3 className="font-extrabold text-base text-[#1b430b] uppercase tracking-wider mb-4 border-b border-emerald-100 pb-2 flex items-center gap-2">
                <span className="w-2 h-4 bg-[#4da826] rounded-full" />
                Municipal Departments
              </h3>
              <div className="space-y-2">
                {departments.map((dept) => (
                  <button
                    suppressHydrationWarning
                    key={dept.id}
                    className="w-full text-left flex items-center gap-3 p-3 rounded-2xl border border-transparent hover:border-emerald-200 hover:bg-[#eef8ea] transition text-slate-700 hover:text-[#1b430b] font-medium"
                  >
                    <span className="text-xl">{dept.icon}</span>
                    <span className="text-xs md:text-sm font-semibold">{dept.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Mission & Vision */}
            <section className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm">
              <div className="text-center mb-8">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#4da826]">
                  Our Philosophy & Objectives
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#1b430b] tracking-tight mt-1 font-serif">
                  Our Mission & Vision
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-[#f0f9ed] p-6 rounded-2xl border-l-4 border-[#4da826] border border-emerald-200/80 shadow-xs">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#4da826] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-base text-[#1b430b] mb-1">
                        Unwavering Transparency
                      </h3>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                        Ensuring all civic processes, tender allocations, and public funds are 100% accessible and accountable to the citizens of Shamli.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f0f9ed] p-6 rounded-2xl border-l-4 border-emerald-600 border border-emerald-200/80 shadow-xs">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-extrabold text-base text-[#1b430b] mb-1">
                        Sustainable Urban Growth
                      </h3>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                        Pioneering modern urban infrastructure, automated waste collection, and LED lighting while preserving local environmental heritage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-emerald-100">
                {statistics.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-[#eef8ea] rounded-2xl border border-emerald-200/60">
                    <div className="text-2xl md:text-3xl font-extrabold text-[#1b430b] mb-1">
                      {stat.value}
                    </div>
                    <p className="text-[10px] md:text-xs font-bold text-[#2f5320] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Historical Milestones */}
            <section className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm">
              <div className="text-center mb-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#4da826]">
                  Legacy & Evolution
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#1b430b] tracking-tight mt-1 font-serif">
                  Historical Milestones
                </h2>
              </div>

              <div className="relative">
                {/* Timeline bar */}
                <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-emerald-200" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {milestones.map((milestone, idx) => (
                    <div key={idx} className="text-center relative">
                      <div className="flex justify-center mb-3">
                        <div className="w-5 h-5 bg-[#4da826] rounded-full border-4 border-white shadow-md z-10" />
                      </div>
                      <h3 className="font-extrabold text-sm text-[#4da826] mb-0.5">{milestone.year}</h3>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">{milestone.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Administrative Hierarchy */}
            <section className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm">
              <div className="text-center mb-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#4da826]">
                  Governance Framework
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#1b430b] tracking-tight mt-1 font-serif">
                  Administrative Hierarchy
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-[#f0f9ed] border border-emerald-200 rounded-2xl p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl border border-emerald-300 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Users className="w-6 h-6 text-[#4da826]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-[#2f5320] uppercase tracking-wider mb-0.5">
                        Elected Head
                      </p>
                      <h3 className="font-extrabold text-base text-[#1b430b] mb-1">
                        Hon&apos;ble Chairperson
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        ------------ — Political head responsible for policy formulation and direct public welfare.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f0f9ed] border border-emerald-200 rounded-2xl p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl border border-emerald-300 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Award className="w-6 h-6 text-[#4da826]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-[#2f5320] uppercase tracking-wider mb-0.5">
                        Administration
                      </p>
                      <h3 className="font-extrabold text-base text-[#1b430b] mb-1">
                        Executive Officer (EO)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Shri Ramendra Singh — Administrative head overseeing execution of board resolutions and municipal operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-emerald-200 rounded-2xl p-5">
                  <h3 className="font-extrabold text-sm text-[#1b430b] mb-1">
                    🏥 Health & Sanitation Wing
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Managing door-to-door waste collection, drain cleaning, vector control, and public health across 25 wards.
                  </p>
                </div>

                <div className="bg-white border border-emerald-200 rounded-2xl p-5">
                  <h3 className="font-extrabold text-sm text-[#1b430b] mb-1">
                    💰 Revenue & Tax Division
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Budgeting, digital assessment, and automated collection of property tax and municipal dues.
                  </p>
                </div>

                <div className="md:col-span-2 bg-linear-to-r from-[#1b430b] to-[#2f5320] text-white rounded-2xl p-6 shadow-md border border-emerald-800">
                  <h3 className="font-extrabold text-base mb-1 flex items-center gap-2">
                    🏗️ Engineering & Infrastructure Works
                  </h3>
                  <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">
                    Responsible for road construction, smart LED street lighting, water pipeline network expansion, and municipal park maintenance.
                  </p>
                </div>

              </div>
            </section>

            {/* City Pride Gallery */}
            <section className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#4da826]">
                    Shamli Landmarks
                  </span>
                  <h2 className="text-xl md:text-3xl font-extrabold text-[#1b430b] font-serif">
                    City Pride & Culture
                  </h2>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-slate-600 mb-6 font-medium">
                Glimpses of Shamli district&apos;s trade hubs, civic landmarks, and municipal infrastructure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-48 bg-linear-to-br from-emerald-600 to-[#1b430b] rounded-2xl overflow-hidden flex items-center justify-center text-white text-center p-4 shadow-sm">
                  <p className="font-bold text-sm">Industrial & Gur Mandi Hub</p>
                </div>
                <div className="h-48 bg-linear-to-br from-[#4da826] to-emerald-800 rounded-2xl overflow-hidden flex items-center justify-center text-white text-center p-4 shadow-sm">
                  <p className="font-bold text-sm">Municipal Public Parks</p>
                </div>
                <div className="h-48 bg-linear-to-br from-teal-700 to-[#1b430b] rounded-2xl overflow-hidden flex items-center justify-center text-white text-center p-4 shadow-sm">
                  <p className="font-bold text-sm">Shamli Junction & Civic Square</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
