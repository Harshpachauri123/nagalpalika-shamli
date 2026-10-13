import React from 'react';
import { 
  MapPin, Users, Milestone, TrendingUp, BookOpen, Building2, Calendar, CheckCircle, ArrowUpRight, ShieldCheck 
} from 'lucide-react';

export const AboutShamliSection: React.FC = () => {
  const stats = [
    { icon: <Users className="w-5 h-5 text-[#4da826]" />, label: "कुल जनसंख्या", value: "110k+", desc: "25 प्रशासनिक वार्डों में" },
    { icon: <TrendingUp className="w-5 h-5 text-emerald-600" />, label: "प्रशासनिक वार्ड", value: "25 वार्ड", desc: "शहरी स्थानीय निकाय" },
    { icon: <Milestone className="w-5 h-5 text-teal-600" />, label: "औसत ऊँचाई", value: "248 मीटर", desc: "समुद्र तल से" },
    { icon: <BookOpen className="w-5 h-5 text-amber-600" />, label: "साक्षरता दर", value: "81.60%", desc: "जिला मानक" },
  ];

  // Official UP Urban local body graphic/emblem placeholder
  const localGraphicUrl = "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053023.png";

  return (
    <section 
      style={{ backgroundColor: "#e2f3db" }}
      className="relative w-full py-20 px-6 md:px-14 border-b border-emerald-200 font-sans selection:bg-[#4da826] selection:text-white antialiased overflow-hidden"
    >
      
      {/* Colorful Light Green Background Ambient Glows */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-[#4da826]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-300/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-green-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="border-b border-emerald-300/70 pb-8 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-[#4da826]/10 text-[#1b430b] border border-emerald-300 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4da826]" /> आधिकारिक दस्तावेज़ (Official Documentation)
            </span>
          </div>

          <nav className="text-xs text-[#2f5320] font-bold uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="hover:text-[#4da826] cursor-pointer transition-colors">मुख्य पृष्ठ</span>
            <span className="text-emerald-400">/</span>
            <span className="text-[#1b430b]">नगर पालिका परिषद शामली</span>
          </nav>
          
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#1b430b] tracking-tight font-serif">
            नगर पालिका परिषद शामली के बारे में
          </h3>
          <p className="text-sm md:text-base text-[#2f5320] font-medium mt-3 max-w-3xl leading-relaxed">
            शामली शहर, जिला शामली, उत्तर प्रदेश की नागरिक, भौगोलिक और जनसांख्यिकीय प्रोफ़ाइल।
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Card */}
            <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm hover:shadow-xl hover:border-[#4da826] transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#4da826] to-emerald-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <h4 className="text-sm font-extrabold text-[#1b430b] uppercase tracking-wider mb-4 flex items-center gap-2.5">
                <span className="w-2 h-5 bg-[#4da826] rounded-full shadow-xs" />
                अवलोकन एवं धरोहर (Overview & Heritage)
              </h4>
              
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
                <strong className="text-slate-900 font-semibold">नगर पालिका परिषद शामली</strong>, उत्तर प्रदेश के <strong className="text-slate-900 font-semibold">शामली जिले</strong> का प्रमुख प्रशासनिक एवं नागरिक निकाय है। दिल्ली-सहारनपुर कॉरिडोर (राष्ट्रीय राजमार्ग-709B) पर रणनीतिक रूप से स्थित, शामली पश्चिमी उत्तर प्रदेश का एक प्रमुख औद्योगिक, गुड़/चीनी व्यापारिक और कृषि उत्पाद वितरण केंद्र है।
              </p>
              
              <div className="bg-[#f0f9ed] border border-emerald-200 rounded-2xl p-5 flex items-start gap-4 text-sm text-slate-700 transition-colors hover:bg-emerald-100/50">
                <div className="p-2.5 rounded-xl bg-[#4da826] text-white shadow-sm shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#1b430b] block mb-1 text-sm tracking-tight font-bold">भौगोलिक स्थिति (Geographical Location)</strong>
                  <span className="text-[#2f5320] leading-relaxed">शामली शहर राष्ट्रीय राजधानी क्षेत्र (NCR) में <strong className="text-slate-900">29.45°N 77.32°E</strong> पर स्थित है, जो मेरठ, मुजफ्फरनगर और पानीपत से सीधे जुड़ा हुआ है।</span>
                </div>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="group relative bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-emerald-500 to-teal-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <h4 className="text-sm font-extrabold text-[#1b430b] uppercase tracking-wider mb-4 flex items-center gap-2.5">
                <span className="w-2 h-5 bg-emerald-600 rounded-full shadow-xs" />
                अवसंरचना एवं क्षेत्रीय अर्थव्यवस्था (Infrastructure & Economy)
              </h4>
              
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
                शामली अपने विशाल गुड़ बाज़ार (Jaggery Market) और रिम-ट्यूब निर्माण उद्योगों के लिए राष्ट्रीय स्तर पर प्रसिद्ध है। शामली जंक्शन रेलवे स्टेशन और एक्सप्रेसवे कनेक्टिविटी के ज़रिए यह शहर दिल्ली, हरिद्वार, पानीपत और सहारनपुर से सीधे जुड़ा हुआ है।
              </p>
              
              <div className="flex flex-wrap gap-2.5 pt-1">
                {['NH-709B एक्सप्रेसवे कॉरिडोर', 'शामली गुड़ मंडी', 'रेलवे जंक्शन कनेक्टिविटी', '25 नागरिक वार्ड', 'स्मार्ट स्ट्रीट लाइट व्यवस्था'].map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 text-xs font-bold bg-[#eef8ea] text-[#1b430b] border border-emerald-300 px-3.5 py-2 rounded-xl shadow-2xs transition-transform hover:scale-105">
                    <CheckCircle className="w-3.5 h-3.5 text-[#4da826]" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Grid Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-emerald-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-emerald-100 text-[#1b430b] rounded-2xl flex items-center justify-center mb-5 border border-emerald-200 shadow-2xs">
                    <Building2 className="w-5 h-5 text-[#4da826]" />
                  </div>
                  <h5 className="font-extrabold text-[#1b430b] text-sm uppercase tracking-wider mb-2">शिक्षा एवं स्वास्थ्य</h5>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    वी.वी. इंटर कॉलेज, राजकीय महाविद्यालय शामली और जिला अस्पताल नागरिक एवं शैक्षणिक आवश्यकताओं को कुशलतापूर्वक पूरा करते हैं।
                  </p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-emerald-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-5 border border-amber-200 shadow-2xs">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h5 className="font-extrabold text-[#1b430b] text-sm uppercase tracking-wider mb-2">नागरिक प्रशासन</h5>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    नगर पालिका परिषद शामली अपने <strong className="text-slate-900 font-semibold">25 वार्डों</strong> में स्वच्छता, पेयजल आपूर्ति, गृह कर संकलन एवं जन-शिकायत निवारण का डिजिटल संचालन करती है।
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            
            {/* Visual Frame Box */}
            <div className="bg-white/95 backdrop-blur-md border border-emerald-200/80 rounded-3xl p-5 shadow-sm">
              <span className="text-xs font-black text-[#2f5320] uppercase tracking-widest block mb-3 px-1">
                आधिकारिक प्रतीक (Official Emblem)
              </span>
              <div className="w-full h-52 rounded-2xl overflow-hidden bg-slate-100 relative shadow-inner group">
                <img 
                  src={localGraphicUrl} 
                  alt="Nagar Palika Parishad Shamli Official Visual" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold tracking-wide flex items-center gap-1">
                    सत्यापित शासकीय संपत्ति <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Enterprise Dashboard Box */}
            <div className="bg-linear-to-b from-[#1b430b] to-[#0f2806] text-white rounded-3xl p-6 shadow-2xl border border-emerald-800/60 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#4da826]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-emerald-800/60 pb-4 mb-5">
                <span className="text-xs uppercase font-black tracking-widest text-emerald-300">
                  जनसंख्या एवं सांख्यिकी (Stats)
                </span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              
              <div className="space-y-3.5">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 transition-all hover:bg-white/15">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-900/80 border border-white/10 shadow-2xs">
                        {stat.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-100 block tracking-tight">{stat.label}</span>
                        <span className="text-[11px] font-medium text-emerald-200 block mt-0.5">{stat.desc}</span>
                      </div>
                    </div>
                    <span className="text-sm font-black text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-700/50">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Sex Ratio Progress Container */}
              <div className="mt-6 pt-5 border-t border-emerald-800/60">
                <div className="flex justify-between items-center text-xs mb-2.5">
                  <span className="font-bold text-emerald-100">लिंगानुपात (Sex Ratio)</span>
                  <span className="font-extrabold text-emerald-300 bg-white/10 px-2 py-0.5 rounded-md">882 ♀ / 1000 ♂</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/10">
                  <div className="bg-linear-to-r from-emerald-400 to-[#4da826] h-full rounded-full w-[88.2%] shadow-sm" />
                </div>
              </div>

              <div className="mt-5 p-4 bg-white/10 rounded-2xl text-center border border-white/10">
                <span className="text-[10px] uppercase font-black tracking-widest text-emerald-300 block">जिला क्षेत्राधिकार</span>
                <span className="text-sm md:text-base font-extrabold text-white block mt-0.5 tracking-tight">शामली, उत्तर प्रदेश</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutShamliSection;
