'use client'

import { Upload, Image as ImageIcon, Filter, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All Highlights')

  const filters = [
    'All Highlights',
    'Events',
    'Development',
    'Landmarks',
  ]

  const galleryItems = [
    {
      title: 'Civic Grandeur of Shamli Parishad',
      category: 'Landmarks',
      description: 'The iconic traditional administration block and town square representing our regional heritage',
      image: 'https://images.pexels.com/photos/2047397/pexels-photo-2047397.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Greening Shamli: Reforestation & Parks',
      category: 'Development',
      description: 'Community participation in planting thousands of trees across municipal parks and green belts',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Swachh Shamli Abhiyan',
      category: 'Events',
      description: 'Citizens join municipal sanitation forces for active waste management and cleanliness drives across all wards',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Digital Portal & E-Governance Launch',
      category: 'Events',
      description: 'Honorable Chairperson inaugurates the new online citizen tax, property assessment, and utility payment portal dashboard.',
      image: 'https://images.pexels.com/photos/6347734/pexels-photo-6347734.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Smart LED Street Lighting Project',
      category: 'Development',
      description: 'Modern eco-friendly infrastructure upgrade deployed across all 25 administrative wards of Shamli',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Public Health & Medical Camp',
      category: 'Events',
      description: 'New community primary healthcare screening camps serving local urban families and elders',
      image: 'https://images.pexels.com/photos/3951878/pexels-photo-3951878.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  const filteredItems =
    activeFilter === 'All Highlights'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div 
      style={{ backgroundColor: "#e2f3db" }}
      className="relative w-full min-h-screen pb-16 border-b border-emerald-200 font-sans selection:bg-[#4da826] selection:text-white antialiased overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-[#4da826]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-300/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Banner */}
      <section className="bg-linear-to-r from-[#1b430b] via-[#2f5320] to-[#1b430b] text-white py-14 px-4 mb-12 shadow-md border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-white/10 text-emerald-300 border border-emerald-400/40 shadow-xs mb-3 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Visual Archive • Nagar Palika Parishad Shamli
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 font-serif tracking-tight">
              Visual Heritage & Progress
            </h1>
            <p className="text-sm md:text-base text-emerald-100/90 font-medium">
              Documenting the growth, landscapes, and civic achievements of Nagar Palika Parishad, Shamli
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/10 p-1.5 rounded-2xl backdrop-blur-sm self-start md:self-center border border-white/15">
            {filters.map((filter) => (
              <button
                suppressHydrationWarning
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl font-bold text-xs md:text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-white text-[#1b430b] shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-72 bg-gradient-to-br from-[#1b430b] to-[#2f5320] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-200/80 cursor-pointer"
            >
              {/* Fallback Placeholder Container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-800 to-[#1b430b] p-6 text-center">
                <ImageIcon className="w-12 h-12 text-emerald-300/40 mb-2" />
                <span className="text-xs text-emerald-200/50 font-medium">Loading Visual Reference...</span>
              </div>

              {/* Actual Background Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Title and Description Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                <h3 className="text-lg font-bold text-white leading-tight tracking-wide drop-shadow-sm">
                  {item.title}
                </h3>
                
                <p className="text-xs text-gray-200 mt-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-300 ease-in-out font-medium">
                  {item.description}
                </p>
              </div>

              {/* Category Tag Badge */}
              <div className="absolute top-4 left-4 z-10 bg-[#4da826] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md border border-emerald-400/40">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white/95 backdrop-blur-md rounded-3xl border border-emerald-200 shadow-sm mb-16">
            <Filter className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <p className="text-[#1b430b] font-bold">No updates found in this category right now</p>
          </div>
        )}

        {/* Contribute Section */}
        <div className="bg-gradient-to-r from-[#1b430b] to-[#2f5320] rounded-3xl p-10 md:p-14 text-white text-center shadow-lg relative overflow-hidden border border-emerald-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4da826]/20 rounded-full blur-2xl pointer-events-none" />
          <Upload className="w-12 h-12 mx-auto mb-4 text-[#4da826]" />
          <h2 className="text-3xl font-bold mb-3 tracking-wide font-serif">Contribute to the Shamli Gallery</h2>
          <p className="text-emerald-100/90 mb-8 max-w-2xl mx-auto text-sm leading-relaxed font-medium">
            Help us document the growth and achievements of Nagar Palika Parishad Shamli. Share
            your high-resolution photos of regional public events, modern infrastructure developments, 
            and civic community initiatives.
          </p>
          <button 
            type="button"
            className="bg-[#4da826] hover:bg-emerald-600 text-white px-8 py-3.5 rounded-2xl font-bold transition-all inline-flex items-center gap-2 shadow-md text-sm border border-emerald-400/40"
          >
            <Upload className="w-4 h-4" />
            Submit Photos
          </button>
        </div>
      </section>
    </div>
  )
}
