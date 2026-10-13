'use client'

import {
  ArrowRight,
  FileText,
  AlertCircle,
  Scale,
  MapPin,
  FileCheck,
  DollarSign,
  Award,
  ShieldCheck
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'etender',
      title: 'E-Tender & Procurement',
      description: 'Access live tenders, download procurement documents & participate online in municipal projects.',
      icon: FileText,
      link: '#'
    },
    {
      id: 'grievance',
      title: 'Public Grievance Redressal',
      description: 'Submit complaints, track grievance resolution in real-time across all 25 wards of Shamli.',
      icon: AlertCircle,
      link: '#'
    },
    {
      id: 'rti',
      title: 'Right to Information (RTI)',
      description: 'Submit RTI applications online & access public disclosures for complete governance transparency.',
      icon: Scale,
      link: '#'
    },
    {
      id: 'wards',
      title: 'Wards & Zoning Map',
      description: 'Check ward boundaries, zonal details, and localized administrative contact information.',
      icon: MapPin,
      link: '#'
    },
    {
      id: 'charter',
      title: 'Citizen Charter',
      description: 'View service delivery timelines, officer responsibilities, and citizen rights in Shamli Parishad.',
      icon: FileCheck,
      link: '#'
    },
    {
      id: 'tax',
      title: 'Property Tax & Dues',
      description: 'Check property tax dues, self-assess property, generate challans, and pay online instantly.',
      icon: DollarSign,
      link: '#'
    },
    {
      id: 'certificate',
      title: 'Birth / Death Certificates',
      description: 'Apply for official birth/death certificates, track application status, and download digital approvals.',
      icon: Award,
      link: '#'
    }
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
        className="relative w-full min-h-[320px] bg-cover bg-center flex items-center border-b border-emerald-800 shadow-md"
        style={{
          backgroundImage: 'url(/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#1b430b]/95 via-[#1b430b]/85 to-[#2f5320]/70 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full py-14">
          <div className="text-white max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-white/10 text-emerald-300 border border-emerald-400/40 shadow-xs mb-3 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Citizen Services • Shamli
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-serif tracking-tight mb-3">
              Municipal Services
            </h1>
            <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-medium">
              Nagar Palika Parishad Shamli offers citizen-centric, transparent, and technology-driven digital services ensuring effective governance and better urban living.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative bg-white/95 backdrop-blur-md border border-emerald-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#4da826] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-[#eef8ea] border border-emerald-200 rounded-2xl flex items-center justify-center group-hover:bg-[#4da826] group-hover:border-[#4da826] transition-all duration-300 shadow-xs">
                      <Icon className="w-7 h-7 text-[#4da826] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#1b430b] mb-2 group-hover:text-[#4da826] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                </div>

                <a
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4da826] group-hover:text-emerald-700 transition-colors uppercase tracking-wider"
                >
                  Access Service <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            )
          })}
        </div>

        {/* Call to Action Section */}
        <section className="mt-16 bg-linear-to-r from-[#1b430b] via-[#2f5320] to-[#1b430b] rounded-3xl p-10 md:p-14 text-white text-center shadow-lg relative overflow-hidden border border-emerald-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4da826]/20 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 font-serif tracking-tight">Need Citizen Assistance?</h2>
          <p className="text-emerald-100/90 text-sm md:text-base mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Our dedicated municipal helpdesk at Nagar Palika Parishad Shamli is here to assist you with queries, applications, and civic services.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#4da826] hover:bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-bold transition-all shadow-md text-sm border border-emerald-400/40"
          >
            Contact Helpdesk
          </a>
        </section>

      </div>
    </div>
  )
}
