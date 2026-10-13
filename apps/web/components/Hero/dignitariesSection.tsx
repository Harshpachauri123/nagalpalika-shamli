"use client"

import React from "react"
import { Award, ShieldCheck } from "lucide-react"

interface Dignitary {
  id: string
  name: string
  designation: string
  image: string
}

export default function DignitariesSection() {
  const dignitariesList: Dignitary[] = [
    {
      id: "1",
      name: "Hon. Shri Yogi Adityanath",
      designation: "Chief Minister, Uttar Pradesh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFm8hmbwanzZMT0OGeYJT-fyKujZoRGsGHGjsdCqSQfg&s=10",
    },
    {
      id: "2",
      name: "Shri Arvind Kumar Sharma",
      designation: "Minister of Urban Development, UP",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccuweW9do7mqLcHMMcW3eRvoX65bVC3oWdKmQ-xqRjA&s=10",
    },
    {
      id: "3",
      name: "Shri Rakesh Rathore Guru",
      designation: "State Minister of Urban Development, UP",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnVLNIphcD463NPf9HTUAQsytvLyQR9lcEfQnUqxUGw&s=10",
    },
    {
      id: "4",
      name: "",
      designation: "Chairperson, Nagar Palika Parishad, Shamli, UP",
      image: "/chairmanperson.png",
    },
    {
      id: "5",
      name: "",
      designation: "Executive Officer, Nagar Palika Parishad, Shamli, UP",
      image: "/executiveclerk.png",
    },
  ]

  return (
    <section 
      style={{ backgroundColor: "#e2f3db" }}
      className="relative overflow-hidden px-4 py-16 font-sans md:px-8 border-b border-emerald-200"
    >
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4da826]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Mini Heading */}
        <div className="mb-8 flex items-center justify-between border-b border-emerald-300/80 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl bg-[#4da826]/10 p-2 text-[#4da826] border border-emerald-300">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="text-base font-extrabold tracking-tight text-[#1b430b] md:text-lg">
              Patronage and Executive Leadership{" "}
              <span className="text-xs font-semibold text-[#4da826]">
                (Leadership Board)
              </span>
            </h2>
          </div>
          <span className="hidden text-xs font-semibold text-[#2f5320] sm:inline-block">
            Nagar Palika Parishad Shamli • Official Desk
          </span>
        </div>

        {/* Main Strip Container - Grid Layout */}
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-emerald-200 bg-white/95 backdrop-blur-md shadow-xl shadow-emerald-950/5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 divide-y divide-emerald-100 sm:divide-y-0 sm:divide-x">
          {dignitariesList.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-center p-6 text-center transition-all duration-300 hover:bg-emerald-50/70"
            >
              {/* Image Box */}
              <div className="relative mb-4 h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-emerald-200 bg-emerald-50 shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name || "Officer"}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/25 via-transparent to-transparent" />
                
                {/* Official Icon Badge */}
                <div className="absolute right-1.5 bottom-1.5 rounded-full bg-[#4da826] p-1 text-white shadow-md">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              {/* Text Details */}
              <div className="flex flex-1 flex-col justify-center space-y-1">
                <h3 className="text-sm font-bold tracking-tight text-[#1b430b] transition-colors group-hover:text-[#4da826]">
                  {item.name || "N/A"}
                </h3>
                <p className="text-xs leading-relaxed font-medium text-[#2f5320]">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
