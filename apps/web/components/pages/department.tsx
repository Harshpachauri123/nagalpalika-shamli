import React from 'react';
import { 
  HardHat, 
  MonitorPlay, 
  Receipt, 
  HeartPulse, 
  Lightbulb, 
  Droplet, 
  Scale, 
  Users,
  ShieldCheck
} from 'lucide-react';

const DepartmentsSection = () => {
  // Nagar Palika Parishad, Shamli - Municipal Departments Data
  const departments = [
    {
      title: "Public Works Department",
      shortTitle: "Public Works",
      desc: "Manages road construction, drainage systems, paving, and municipal infrastructure projects in Shamli.",
      icon: <HardHat className="w-8 h-8 text-[#4da826]" />,
      bgImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "IT & E-Governance",
      shortTitle: "IT Department",
      desc: "Powers online citizen portals, property tax systems, birth/death registrations, and digital services.",
      icon: <MonitorPlay className="w-8 h-8 text-[#4da826]" />,
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Property & Revenue Tax",
      shortTitle: "Property Tax",
      desc: "Responsible for municipal tax collection, property assessments, and transparent budget generation.",
      icon: <Receipt className="w-8 h-8 text-[#4da826]" />,
      bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Health & Sanitation",
      shortTitle: "Sanitation Wing",
      desc: "Oversees door-to-door waste collection, city cleanliness, fogging, and public health in 25 wards.",
      icon: <HeartPulse className="w-8 h-8 text-[#4da826]" />,
      bgImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Street Lighting Wing",
      shortTitle: "Street Light",
      desc: "Deploys energy-efficient smart LED streetlights across major roads, markets, and ward streets in Shamli.",
      icon: <Lightbulb className="w-8 h-8 text-[#4da826]" />,
      bgImage: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Water Supply (Jalkal)",
      shortTitle: "Water Supply",
      desc: "Maintains overhead tanks, pipeline network, and ensures clean drinking water supply to all households.",
      icon: <Droplet className="w-8 h-8 text-[#4da826]" />,
      bgImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Legal & Regulatory Dept",
      shortTitle: "Law Dept",
      desc: "Handles legal compliance, municipal bye-laws, property documentation, and court proceedings.",
      icon: <Scale className="w-8 h-8 text-[#4da826]" />,
      bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Establishment & Admin",
      shortTitle: "Establishment",
      desc: "Oversees municipal staff administration, recruitment, payroll, and internal operational workflows.",
      icon: <Users className="w-8 h-8 text-[#4da826]" />,
      bgImage: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section 
      style={{ backgroundColor: "#e2f3db" }}
      className="relative w-full py-20 px-4 md:px-8 border-b border-emerald-200 font-sans antialiased overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-[#4da826]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-300/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-white/90 text-[#1b430b] border border-emerald-300 shadow-xs mb-3 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#4da826]" />
            Nagar Palika Parishad Shamli • Executive Divisions
          </div>

          <h2 className="text-3xl font-extrabold text-[#1b430b] tracking-tight sm:text-4xl lg:text-5xl font-serif">
            Municipal Departments
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#2f5320] max-w-2xl mx-auto font-medium leading-relaxed">
            Dedicated administrative divisions working seamlessly to ensure efficient civic services and sustainable development for the citizens of Shamli.
          </p>

          <div className="mt-5 flex items-center justify-center gap-1.5">
            <span className="h-1 w-10 rounded-full bg-orange-500" />
            <span className="h-1 w-5 rounded-full bg-blue-600" />
            <span className="h-1 w-3 rounded-full bg-[#4da826]" />
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div 
              key={index} 
              className="group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-sm overflow-hidden hover:shadow-xl hover:border-[#4da826] transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-emerald-200/80"
            >
              {/* Top section: Background Image */}
              <div className="relative h-40 w-full overflow-hidden bg-emerald-100">
                <img 
                  src={dept.bgImage} 
                  alt={dept.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />
                
                {/* Badge Over Image */}
                <span className="absolute bottom-3 left-4 text-white font-extrabold text-xs bg-[#4da826] px-3 py-1 rounded-lg shadow-sm border border-emerald-400/30 uppercase tracking-wider">
                  {dept.shortTitle}
                </span>
              </div>

              {/* Bottom section: Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Floating Icon */}
                <div className="absolute -top-8 right-6 bg-white p-3 rounded-2xl shadow-md border border-emerald-200 z-10 group-hover:bg-[#eef8ea] transition-colors duration-300">
                  {dept.icon}
                </div>

                <h3 className="text-lg font-extrabold text-[#1b430b] mb-2 pt-2 group-hover:text-[#4da826] transition-colors duration-300">
                  {dept.title}
                </h3>
                
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium flex-grow">
                  {dept.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
