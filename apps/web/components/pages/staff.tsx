"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  Award,
  Calendar,
  CheckCircle2,
  Eye,
  Landmark,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react"
import { useState } from "react"

type TabType = "welcome" | "vision" | "mission"

type MissionTarget = { title: string; desc: string }

type OfficerRowProps = {
  id: string
  roleTitle: string
  designation: string
  name: string
  subText: string
  imgSrc: string
  term: string
  status: string
  welcomeQuote: string
  welcomeText1: string
  welcomeText2: string
  visionTitle: string
  visionDesc: string
  visionPoints: string[]
  missionDesc: string
  missionTargets: MissionTarget[]
  theme: string
  iconTheme: string
}

function OfficerRow({ data }: { data: OfficerRowProps }) {
  const [activeTab, setActiveTab] = useState<TabType>("welcome")

  const tabs = [
    { id: "welcome" as const, label: "संदेश", english: "Message", icon: <Quote className="h-4 w-4" /> },
    { id: "vision" as const, label: "दृष्टिकोण", english: "Vision", icon: <Eye className="h-4 w-4" /> },
    { id: "mission" as const, label: "मिशन", english: "Mission", icon: <Target className="h-4 w-4" /> },
  ]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Profile card */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.45 }}
            className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-emerald-200/80 bg-white/95 p-6 shadow-[0_15px_45px_rgba(22,101,52,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_25px_55px_rgba(22,101,52,0.12)]"
          >
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${data.theme}`} />
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-green-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-lime-300/20 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

            <div className="relative z-10 flex h-full flex-col items-center text-center">
              <div className={`relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-[30px] bg-gradient-to-br ${data.iconTheme} text-white shadow-xl transition-transform duration-500 group-hover:scale-105`}>
                {data.imgSrc ? (
                  <img src={data.imgSrc} alt={data.name} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <Landmark className="h-14 w-14" />
                )}
                <div className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-xl border-4 border-white bg-white text-emerald-600 shadow-md">
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-emerald-800">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                {data.roleTitle}
              </div>
              <h3 className="mt-4 font-serif text-xl font-black tracking-tight text-[#14532d]">{data.name}</h3>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.12em] text-orange-600">{data.designation}</p>
              <p className="mt-1 text-[10px] font-semibold text-slate-500">{data.subText}</p>

              <div className="mt-6 grid w-full grid-cols-2 gap-3">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-3">
                  <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">Status</p>
                  <p className="mt-1 text-[10px] font-bold text-[#14532d]">{data.status}</p>
                </div>
                <div className="rounded-xl border border-lime-200 bg-lime-50/80 p-3">
                  <p className="text-[9px] font-black uppercase tracking-wider text-slate-500">Term</p>
                  <p className="mt-1 text-[10px] font-bold text-[#14532d]">{data.term}</p>
                </div>
              </div>

              <div className="mt-auto w-full pt-6">
                <div className="flex items-center justify-center gap-2 rounded-xl border border-orange-100 bg-linear-to-r from-orange-50 to-amber-50 px-3 py-3">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-orange-500" />
                  <span className="text-[9px] font-bold text-orange-800">Nagar Palika Parishad Shamli</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Information panel */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="relative overflow-hidden rounded-[28px] border border-emerald-200/80 bg-white/95 shadow-[0_15px_45px_rgba(22,101,52,0.07)] transition-shadow duration-300 hover:shadow-[0_25px_55px_rgba(22,101,52,0.12)]"
          >
            <div className={`h-1.5 bg-gradient-to-r ${data.theme}`} />
            <div className="border-b border-emerald-100 px-5 pt-5 md:px-7">
              <div className="flex gap-2 overflow-x-auto pb-4">
                {tabs.map((tab) => {
                  const active = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={active}
                      className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-[10px] font-black tracking-wide transition-all duration-300 ${active ? `bg-gradient-to-r ${data.iconTheme} text-white shadow-md` : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"}`}
                    >
                      {tab.icon}<span>{tab.label}</span><span className="hidden opacity-80 sm:inline">({tab.english})</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="min-h-[350px] px-5 py-6 md:px-7 md:py-7">
              <AnimatePresence mode="wait" initial={false}>
                {activeTab === "welcome" && (
                  <motion.div key="welcome" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="space-y-5">
                    <div className="relative overflow-hidden rounded-2xl border border-orange-200/80 bg-linear-to-br from-orange-50 via-white to-amber-50 p-5">
                      <Quote className="absolute -right-2 -top-3 h-20 w-20 rotate-180 text-orange-300/20" />

                      <div className="relative flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange-400 to-amber-500 text-white shadow-md"><Quote className="h-4 w-4" /></div>
                        <p className="font-serif text-sm leading-7 font-bold italic text-[#14532d]">“{data.welcomeQuote}”</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-xs leading-7 font-medium text-slate-600 md:text-sm">{data.welcomeText1}</p>
                      {data.welcomeText2 && <p className="text-xs leading-7 font-medium text-slate-600 md:text-sm">{data.welcomeText2}</p>}
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-linear-to-r from-emerald-50 to-lime-50 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><CheckCircle2 className="h-5 w-5" /></div>
                      <div><p className="text-xs font-black text-emerald-800">जनसेवा एवं पारदर्शिता</p><p className="mt-1 text-[10px] font-medium text-slate-600">Citizen-Centric Administration</p></div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "vision" && (
                  <motion.div key="vision" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="space-y-5">
                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 text-white shadow-md"><Eye className="h-5 w-5" /></div>

                      <div><p className="text-[9px] font-black uppercase tracking-widest text-emerald-700">Our Vision</p><h4 className="text-sm font-black text-[#14532d] md:text-base">{data.visionTitle}</h4></div>
                    </div>

                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5"><p className="text-xs leading-7 font-medium text-slate-600 md:text-sm">{data.visionDesc}</p></div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {data.visionPoints.map((item, index) => (
                        <motion.div
                          key={item} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: index * 0.04 }} className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-[#f7fcf7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50">

                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-green-700 text-white"><span className="text-[9px] font-black">{String(index + 1).padStart(2, "0")}</span></div>
                          <span className="text-xs leading-5 font-semibold text-slate-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "mission" && (
                  <motion.div key="mission" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 text-white shadow-md"><Target className="h-5 w-5" /></div>
                      <div><p className="text-[9px] font-black uppercase tracking-widest text-orange-600">Our Mission</p><h4 className="text-sm font-black text-[#14532d] md:text-base">प्रमुख लक्ष्य एवं उद्देश्य</h4></div>
                    </div>
                    <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-5"><p className="text-xs leading-7 font-medium text-slate-600 md:text-sm">{data.missionDesc}</p></div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      {data.missionTargets.map((item, index) => (
                        <motion.div key={item.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: index * 0.05 }} className="group/target relative overflow-hidden rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md">
                          <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${data.theme}`} />
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover/target:bg-emerald-100">{index === 0 ? <Users className="h-4 w-4" /> : index === 1 ? <Landmark className="h-4 w-4" /> : <Award className="h-4 w-4" />}</div>
                          <h5 className="mt-3 text-xs font-black text-[#14532d]">{item.title}</h5>
                          <p className="mt-2 text-[10px] leading-5 font-medium text-slate-600">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-3 border-t border-emerald-100 bg-emerald-50/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-7">
              
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4 shrink-0 text-emerald-700" /><span className="text-[10px] font-semibold text-slate-600">कार्यालय: नगर पालिका परिषद शामली, उत्तर प्रदेश</span></div>

              <div className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /><span className="text-[9px] font-black uppercase tracking-wider text-emerald-800">Municipal Administration</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

/* =========================================================
   MAIN STAFF SECTION
========================================================= */

export default function Staff() {
  const leadersData: OfficerRowProps[] = [
    {
      id: "chairperson",
      roleTitle: "निर्वाचित अध्यक्ष",
      designation: "अध्यक्ष (Chairperson)",
      name: "अध्यक्ष का नाम ",
      subText: "नगर पालिका परिषद शामली",
      imgSrc: "",
      term: "निर्वाचित कार्यकाल",
      status: "अध्यक्ष कार्यालय",
      theme: "from-emerald-500 via-green-600 to-teal-700",
      iconTheme: "from-emerald-500 to-green-700",
      welcomeQuote: "स्वच्छ, सुंदर, सुरक्षित और विकसित शामली का निर्माण करना तथा प्रत्येक नागरिक तक बेहतर मूलभूत सुविधाएं पहुंचाना हमारी प्राथमिकता है।",
      welcomeText1: "नगर पालिका परिषद शामली की ओर से सभी नागरिकों का हार्दिक स्वागत है। हमारा उद्देश्य नगर के प्रत्येक क्षेत्र में स्वच्छता, बेहतर सड़कें, पेयजल, जल निकासी, प्रकाश व्यवस्था तथा अन्य आवश्यक नागरिक सुविधाओं को सुदृढ़ करना है।",
      welcomeText2: "नागरिकों की सहभागिता, पारदर्शी प्रशासन और योजनाबद्ध विकास के माध्यम से शामली को स्वच्छ एवं व्यवस्थित नगर बनाने की दिशा में निरंतर प्रयास करना हमारी प्राथमिकता है। हम नागरिकों की आवश्यकताओं को ध्यान में रखते हुए नगर की सुविधाओं में सुधार के लिए प्रतिबद्ध हैं।",
      visionTitle: "स्वच्छ, हरित एवं विकसित शामली",
      visionDesc: "शामली को स्वच्छ, हरित, सुव्यवस्थित और आधुनिक नागरिक सुविधाओं से युक्त नगर के रूप में विकसित करना, जहां नागरिकों को बेहतर जीवन स्तर और सुगम नगर सेवाएं प्राप्त हों।",
      visionPoints: [
        "नगर के प्रमुख मार्गों और सार्वजनिक स्थानों का बेहतर रखरखाव।",
        "स्वच्छ पेयजल और प्रभावी जल निकासी व्यवस्था को बढ़ावा देना।",
        "स्वच्छता, कचरा प्रबंधन और पर्यावरण संरक्षण पर ध्यान देना।",
        "सड़कों और सार्वजनिक स्थानों पर बेहतर प्रकाश व्यवस्था।",
        "डिजिटल माध्यम से नागरिक सेवाओं को अधिक सुलभ बनाना।",
        "विकास कार्यों में नागरिक सहभागिता और पारदर्शिता को बढ़ावा देना।",
      ],
      missionDesc: "नगर के सभी क्षेत्रों में मूलभूत सुविधाओं को बेहतर बनाने, नागरिक समस्याओं के समाधान और नगर पालिका सेवाओं को सरल एवं सुलभ बनाने के लिए प्रभावी प्रयास करना।",
      missionTargets: [
        { title: "मूलभूत सुविधाएं", desc: "सड़क, पेयजल, जल निकासी और सार्वजनिक प्रकाश जैसी आवश्यक नागरिक सुविधाओं को बेहतर बनाने पर ध्यान देना।" },
        { title: "स्वच्छ एवं हरित शामली", desc: "नियमित सफाई, कचरा प्रबंधन और सार्वजनिक स्थलों की स्वच्छता को बढ़ावा देना।" },
        { title: "नागरिक कल्याण", desc: "नागरिकों को नगर पालिका सेवाओं की जानकारी देना और शिकायतों के समाधान की प्रक्रिया को अधिक सुगम बनाना।" },
      ],
    },
    {
      id: "eo",
      roleTitle: "प्रशासनिक नेतृत्व",
      designation: "अधिशासी अधिकारी (Executive Officer)",
      name: "अधिशासी अधिकारी का नाम ",
      subText: "नगर पालिका परिषद शामली",
      imgSrc: "",
      term: "शासकीय नियुक्ति",
      status: "प्रशासनिक कार्यालय",
      theme: "from-teal-500 via-emerald-600 to-green-700",
      iconTheme: "from-teal-500 to-emerald-700",
      welcomeQuote: "जवाबदेह प्रशासन, समयबद्ध कार्यवाही और नागरिकों को बेहतर सेवाएं उपलब्ध कराना हमारी कार्यप्रणाली का महत्वपूर्ण हिस्सा है।",
      welcomeText1: "नगर पालिका परिषद शामली के प्रशासनिक कार्यालय का उद्देश्य नगर पालिका के दैनिक कार्यों, विकास योजनाओं और नागरिक सेवाओं का व्यवस्थित संचालन सुनिश्चित करना है। नागरिकों को आवश्यक सेवाओं के संबंध में सही जानकारी एवं मार्गदर्शन उपलब्ध कराने पर विशेष ध्यान दिया जाता है।",
      welcomeText2: "नागरिक शिकायतों पर नियमानुसार कार्यवाही, कार्यालयीन प्रक्रियाओं में सुधार, स्वच्छता व्यवस्था और विकास कार्यों के प्रभावी संचालन के माध्यम से नगर प्रशासन को अधिक पारदर्शी और जवाबदेह बनाने का प्रयास किया जाता है।",
      visionTitle: "पारदर्शी एवं जवाबदेह नगर प्रशासन",
      visionDesc: "एक ऐसी प्रशासनिक व्यवस्था विकसित करना जिसमें नागरिक सेवाएं स्पष्ट प्रक्रियाओं, उचित समय-सीमा और प्रभावी निगरानी के साथ उपलब्ध हों।",
      visionPoints: [
        "नागरिक आवेदनों और शिकायतों की उचित निगरानी।",
        "नगर विकास कार्यों का नियमानुसार संचालन।",
        "कार्यालयीन प्रक्रियाओं को सरल एवं व्यवस्थित बनाना।",
        "स्वच्छता एवं सार्वजनिक सुविधाओं की निगरानी।",
        "डिजिटल नागरिक सेवाओं को प्रोत्साहित करना।",
        "प्रशासनिक कार्यों में जवाबदेही और पारदर्शिता।",
      ],
      missionDesc: "नगर पालिका परिषद के दैनिक प्रशासन, नागरिक शिकायतों, विकास कार्यों और सेवा वितरण की प्रक्रियाओं को प्रभावी एवं व्यवस्थित बनाए रखना।",
      missionTargets: [
        { title: "प्रभावी प्रशासन", desc: "कार्यालयीन कार्यों और नगर विकास संबंधी प्रक्रियाओं का नियमानुसार संचालन।" },
        { title: "विकास कार्य", desc: "स्वीकृत विकास कार्यों की प्रगति की निगरानी और संबंधित विभागों के बीच समन्वय।" },
        { title: "शिकायत निवारण", desc: "नागरिक शिकायतों को संबंधित विभाग तक पहुंचाना और नियमानुसार उनके निस्तारण की निगरानी।" },
      ],
    },
    {
      id: "office",
      roleTitle: "कार्यालय प्रशासन",
      designation: "कार्यालय एवं नागरिक सेवा केंद्र",
      name: "नगर पालिका परिषद कार्यालय",
      subText: "शामली, उत्तर प्रदेश",
      imgSrc: "",
      term: "नियमित प्रशासन",
      status: "कार्यालय सहायता",
      theme: "from-lime-500 via-emerald-500 to-teal-600",
      iconTheme: "from-lime-500 to-emerald-700",
      welcomeQuote: "नागरिक सुविधा, सरल प्रक्रियाएं और बेहतर सेवा वितरण एक व्यवस्थित नगर प्रशासन की आधारशिला हैं।",
      welcomeText1: "नगर पालिका परिषद शामली का कार्यालय नागरिकों को विभिन्न नगर सेवाओं, आवेदन प्रक्रियाओं और आवश्यक दस्तावेजों के संबंध में जानकारी एवं मार्गदर्शन उपलब्ध कराने में महत्वपूर्ण भूमिका निभाता है।",
      welcomeText2: "कर संबंधी सेवाओं, प्रमाण पत्रों, नागरिक आवेदनों और अन्य कार्यालयीन प्रक्रियाओं को निर्धारित नियमों के अनुसार व्यवस्थित, सुलभ और पारदर्शी बनाने का प्रयास किया जाता है।",
      visionTitle: "सुगम नागरिक सेवाएं",
      visionDesc: "ऐसी सेवा व्यवस्था को बढ़ावा देना जिसमें नागरिकों को सही जानकारी, स्पष्ट प्रक्रिया और आवश्यक सहायता आसानी से मिल सके।",
      visionPoints: [
        "नागरिकों को आवेदन प्रक्रिया की स्पष्ट जानकारी।",
        "आवश्यक दस्तावेजों के संबंध में उचित मार्गदर्शन।",
        "कार्यालयीन अभिलेखों का व्यवस्थित रखरखाव।",
        "नगर पालिका सेवाओं तक आसान पहुंच।",
        "ऑनलाइन सेवाओं के उपयोग को प्रोत्साहन।",
        "नागरिकों के साथ विनम्र और सहयोगात्मक व्यवहार।",
      ],
      missionDesc: "नागरिकों को आवश्यक जानकारी और मार्गदर्शन प्रदान करना तथा नगर पालिका कार्यालय की प्रक्रियाओं को अधिक व्यवस्थित और सुविधाजनक बनाने में सहयोग करना।",
      missionTargets: [
        { title: "नागरिक सहायता", desc: "आवेदन, दस्तावेजों और नगर पालिका सेवाओं के बारे में आवश्यक जानकारी देना।" },
        { title: "व्यवस्थित अभिलेख", desc: "कार्यालयीन रिकॉर्ड और आवेदनों का निर्धारित प्रक्रियाओं के अनुसार रखरखाव।" },
        { title: "सरल प्रक्रिया", desc: "नागरिकों को उपलब्ध सेवाओं और संबंधित कार्यालयों तक सही मार्गदर्शन देना।" },
      ],
    },
  ]

  const trustItems = [
    { icon: <ShieldCheck className="h-4 w-4" />, title: "पारदर्शी प्रशासन", text: "Transparent Governance", theme: "from-emerald-500 to-green-700" },
    { icon: <Users className="h-4 w-4" />, title: "नागरिक सर्वोपरि", text: "Citizen First", theme: "from-orange-400 to-amber-600" },
    { icon: <Landmark className="h-4 w-4" />, title: "नगर पालिका परिषद", text: "Shamli, Uttar Pradesh", theme: "from-lime-500 to-emerald-700" },
  ]

  return (
    <section id="about-us" className="relative isolate overflow-hidden bg-gradient-to-br from-[#eaf8ed] via-[#f7fcf7] to-[#e4f5e7] px-4 py-16 font-sans sm:px-6 md:px-8 md:py-24">
      {/* Light-green background pattern */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.045]" style={{ backgroundImage: "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full bg-emerald-300/25 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-lime-300/25 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-green-300/20 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-10 right-1/4 h-[350px] w-[350px] rounded-full bg-orange-200/20 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div className="group mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-800 shadow-sm backdrop-blur-xl transition-all hover:border-emerald-300 hover:bg-emerald-50">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-700 text-white shadow-sm transition-transform group-hover:rotate-12"><Sparkles className="h-3.5 w-3.5" /></span>
            नगर पालिका परिषद शामली
          </div>
          <h2 className="font-serif text-3xl font-black tracking-tight text-[#14532d] sm:text-4xl md:text-5xl">
            Leadership &amp; <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">Administration</span>
          </h2>
          <p className="mt-3 text-sm font-bold text-slate-600 md:text-base">अध्यक्ष एवं प्रशासनिक अधिकारी</p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 font-medium text-slate-600 md:text-base">
            नगर पालिका परिषद शामली के नेतृत्व एवं प्रशासनिक व्यवस्था से संबंधित संदेश, दृष्टिकोण और नागरिक सुविधाओं के विकास हेतु प्रमुख उद्देश्य।
          </p>
          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1.5 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-200 bg-orange-50"><Sparkles className="h-3.5 w-3.5 text-orange-500" /></span>
            <span className="h-1.5 w-14 rounded-full bg-gradient-to-r from-lime-500 to-emerald-600" />
          </div>
        </motion.div>

        {/* Officers */}
        <div className="space-y-8 md:space-y-10">
          {leadersData.map((leader, index) => (
            <motion.div key={leader.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.04 }} transition={{ duration: 0.45, delay: index * 0.05 }}>
              <OfficerRow data={leader} />
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.45 }} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12">
          {trustItems.map((item) => (
            <div key={item.title} className="group flex items-center gap-3 rounded-2xl border border-emerald-200/80 bg-white/85 px-4 py-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.theme} text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>{item.icon}</div>
              <div><p className="text-[10px] font-black text-[#14532d]">{item.title}</p><p className="mt-1 text-[9px] font-medium text-slate-500">{item.text}</p></div>
            </div>
          ))}
        </motion.div>

        {/* Governing identity */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.4 }} className="mt-5 overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-100/80 via-white/90 to-lime-100/80 px-5 py-4 text-center shadow-sm">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
            <MapPin className="h-4 w-4 text-emerald-700" />
            <span className="text-[10px] font-bold text-slate-700">नगर पालिका परिषद शामली, उत्तर प्रदेश</span>
            <span className="hidden h-1 w-1 rounded-full bg-emerald-500 sm:block" />
            <span className="text-[9px] font-semibold text-slate-500">Official Municipal Administration Portal</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
