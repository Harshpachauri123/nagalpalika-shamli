'use client'

import { ChevronRight, Users, Leaf, Zap, Award, ShieldCheck } from 'lucide-react'

export default function ChairpersonProfile() {
  const activities = [
    {
      date: '12 OCT',
      title: 'Water Supply Infrastructure Meeting',
      description: 'Reviewed new water treatment and pipeline distribution facility plans for Shamli Wards.',
    },
    {
      date: '05 OCT',
      title: 'Swachh Shamli Cleanliness Campaign',
      description: 'Launched door-to-door waste segregation and sanitation drive across all 25 wards.',
    },
    {
      date: '28 SEP',
      title: 'Digital Citizen Services Portal',
      description: 'Inaugurated 100% online property tax assessment and civic grievance portal.',
    },
    {
      date: '20 SEP',
      title: 'Streetlight & Road Infrastructure Review',
      description: 'Inspected smart LED lighting and ongoing road resurfacing projects in Central Shamli.',
    },
  ]

  return (
    <div 
      style={{ backgroundColor: "#e2f3db" }}
      className="relative w-full min-h-screen py-8 border-b border-emerald-200 font-sans selection:bg-[#4da826] selection:text-white antialiased overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-[#4da826]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-300/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-xs font-bold text-[#2f5320] uppercase tracking-wider mb-6">
          <span className="hover:text-[#4da826] cursor-pointer transition-colors">Home</span>
          <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
          <span className="hover:text-[#4da826] cursor-pointer transition-colors">Leadership</span>
          <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[#1b430b] font-extrabold">Chairperson&apos;s Profile</span>
        </div>

        {/* Top Header Badge & Main Title */}
        <div className="mb-8 border-b border-emerald-300/80 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-white/90 text-[#1b430b] border border-emerald-300 shadow-xs mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4da826]" /> 
            Executive Leadership • Nagar Palika Parishad Shamli
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1b430b] tracking-tight font-serif">
            Chairperson&apos;s Profile
          </h1>
          <p className="text-sm md:text-base text-[#2f5320] font-medium mt-2">
            Leadership and vision for the sustainable development of Shamli City.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Biography Card Block */}
            <div className="bg-white/95 backdrop-blur-md border border-emerald-200/80 rounded-3xl overflow-hidden shadow-xl shadow-emerald-950/5 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Portrait */}
                <div className="bg-linear-to-br from-[#1b430b] to-[#2f5320] h-80 md:h-auto flex items-center justify-center p-6 relative">
                  <div className="w-48 h-48 rounded-2xl border-2 border-emerald-300/50 bg-emerald-900/40 flex items-center justify-center overflow-hidden shadow-md">
                    <img 
                      src="/chairmanperson.png" 
                      alt="Smt. Mudita Sharma" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback icon if image path is invalid
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <Users className="w-20 h-20 text-emerald-200" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1 text-xs font-bold uppercase text-[#4da826] tracking-wider mb-1">
                    <Award className="w-3.5 h-3.5" /> Leadership Desk
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1b430b] mb-1">
                     --------- ----------
                  </h2>
                  <p className="text-sm text-[#4da826] font-bold uppercase tracking-wide mb-4">
                    Honorable Chairperson, Nagar Palika Parishad, Shamli
                  </p>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                    Dedicated to civic advancement, urban renewal, and citizen-centric governance in Shamli.
                  </p>

                  <h4 className="font-extrabold text-[#1b430b] text-xs uppercase tracking-wider mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-semibold">
                      <span className="w-2 h-2 bg-[#4da826] rounded-full" />
                      Swachh Survekshan & Sanitation Management
                    </li>
                    <li className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-semibold">
                      <span className="w-2 h-2 bg-[#4da826] rounded-full" />
                      Urban Infrastructure & Water Supply
                    </li>
                    <li className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-semibold">
                      <span className="w-2 h-2 bg-[#4da826] rounded-full" />
                      Transparent Digital Governance & E-Services
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Biography Text Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-[#1b430b] mb-4 border-b border-emerald-100 pb-2 flex items-center gap-2">
                <span className="w-2 h-5 bg-[#4da826] rounded-full" />
                Biography
              </h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                <strong className="text-slate-900 font-semibold">Smt.-------</strong> serves as the Honorable Chairperson of <strong className="text-slate-900 font-semibold">Nagar Palika Parishad, Shamli</strong>. With a visionary approach toward public service, she is committed to reforming civic administration and ensuring modern infrastructure for every resident.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                Under her guidance, Nagar Palika Parishad Shamli has spearheaded widespread sanitation drives, efficient LED street lighting projects, automated water pipeline systems, and streamlined online grievance registration to elevate the quality of life across all 25 wards of Shamli.
              </p>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-normal">
                Her vision for Shamli focuses on transforming it into a clean, green, digitally powered, and economically vibrant municipal model in North India.
              </p>
            </div>

            {/* Recent Activities Timeline */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-[#1b430b] mb-6 border-b border-emerald-100 pb-2 flex items-center gap-2">
                <span className="w-2 h-5 bg-[#4da826] rounded-full" />
                Recent Executive Activities
              </h3>
              <div className="space-y-6">
                {activities.map((activity, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6">
                    <div className="relative flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#eef8ea] border-2 border-[#4da826] flex items-center justify-center font-extrabold text-[#1b430b] text-xs text-center px-2 shadow-xs">
                        {activity.date}
                      </div>
                      {idx < activities.length - 1 && (
                        <div className="w-0.5 h-12 bg-emerald-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <h4 className="font-bold text-slate-900 text-base md:text-lg mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 font-medium">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Chairperson's Note */}
            <div className="bg-white/95 backdrop-blur-md border-l-4 border-[#4da826] rounded-3xl p-6 border border-emerald-200/80 shadow-sm">
              <h4 className="font-bold text-[#1b430b] text-sm uppercase tracking-wider mb-3">Chairperson&apos;s Message</h4>
              <blockquote className="text-xs md:text-sm text-slate-700 italic border-l-2 border-emerald-300 pl-3 leading-relaxed">
                &quot;Our solemn promise is to deliver transparent, responsive, and equitable municipal governance to every resident of Shamli. Together, we are building a clean, modern, and thriving town.&quot;
              </blockquote>
              <p className="text-xs font-extrabold text-[#1b430b] mt-4">
                — Smt. Mudita Sharma
              </p>
              <span className="text-[10px] text-[#2f5320] font-semibold block">Chairperson, NPP Shamli</span>
            </div>

            {/* Vision Grid */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-emerald-200/80 shadow-sm">
              <h4 className="font-extrabold text-[#1b430b] text-sm uppercase tracking-wider mb-4">Shamli Vision & Goals</h4>
              <div className="space-y-3">
                <div className="bg-[#f0f9ed] border border-emerald-200 rounded-2xl p-4 transition-all hover:border-[#4da826]">
                  <Leaf className="w-7 h-7 text-[#4da826] mb-2" />
                  <h5 className="font-extrabold text-[#1b430b] text-sm mb-0.5">
                    Swachh Shamli
                  </h5>
                  <p className="text-xs text-[#2f5320] font-medium">
                    100% door-to-door waste segregation & recycling
                  </p>
                </div>

                <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 transition-all hover:border-[#4da826]">
                  <Zap className="w-7 h-7 text-emerald-700 mb-2" />
                  <h5 className="font-extrabold text-[#1b430b] text-sm mb-0.5">
                    Modern Infrastructure
                  </h5>
                  <p className="text-xs text-[#2f5320] font-medium">
                    Smart LED streetlights & paved roads in all 25 wards
                  </p>
                </div>

                <div className="bg-teal-50/60 border border-teal-200 rounded-2xl p-4 transition-all hover:border-teal-400">
                  <ShieldCheck className="w-7 h-7 text-teal-700 mb-2" />
                  <h5 className="font-extrabold text-[#1b430b] text-sm mb-0.5">
                    Digital Governance
                  </h5>
                  <p className="text-xs text-teal-900 font-medium">
                    Online tax payments & 24/7 civic grievance resolution
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
