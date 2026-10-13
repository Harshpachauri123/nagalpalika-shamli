"use client";

import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function Contact() {
  return (
    <div 
      style={{ backgroundColor: "#e2f3db" }}
      className="relative w-full min-h-screen border-b border-emerald-200 font-sans selection:bg-[#4da826] selection:text-white antialiased overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-[#4da826]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-300/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Page Header */}
      <section className="relative w-full bg-gradient-to-r from-[#1b430b] via-[#2f5320] to-[#1b430b] px-4 py-14 text-white shadow-md border-b border-emerald-800">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-white/10 text-emerald-300 border border-emerald-400/40 shadow-xs mb-3 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Official Helpdesk • Shamli
          </div>
          
          <h1 className="mb-2 text-3xl md:text-5xl font-extrabold font-serif tracking-tight">
            Contact Us
          </h1>

          <p className="text-sm md:text-base text-emerald-100/90 font-medium">
            Get in touch with Nagar Palika Parishad, Shamli
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Contact Information */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#4da826]">
                Municipal Office
              </span>
              <h2 className="mb-8 text-2xl md:text-3xl font-extrabold text-[#1b430b] tracking-tight font-serif mt-1">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-[#eef8ea] border border-emerald-200 text-[#4da826] shrink-0 h-fit">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="mb-1 text-base font-extrabold text-[#1b430b]">
                      Office Address
                    </h4>

                    <p className="text-sm font-medium leading-relaxed text-slate-700">
                      Nagar Palika Parishad, Shamli
                      <br />
                      Main Market Road, Near Town Hall
                      <br />
                      Shamli - 247776
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-[#eef8ea] border border-emerald-200 text-[#4da826] shrink-0 h-fit">
                    <Phone className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="mb-1 text-base font-extrabold text-[#1b430b]">
                      Telephone & Helpline
                    </h4>

                    <p className="text-sm font-medium leading-relaxed text-slate-700">
                      Office: +91 1398-250-111
                      <br />
                      Toll-Free Control Room: 1800-180-2233
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-[#eef8ea] border border-emerald-200 text-[#4da826] shrink-0 h-fit">
                    <Mail className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="mb-1 text-base font-extrabold text-[#1b430b]">
                      Email Addresses
                    </h4>

                    <p className="text-sm font-medium leading-relaxed text-slate-700">
                      info@nppshamli.in
                      <br />
                      grievance@nppshamli.in
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4">
                  <div className="p-3 rounded-2xl bg-[#eef8ea] border border-emerald-200 text-[#4da826] shrink-0 h-fit">
                    <Clock className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="mb-1 text-base font-extrabold text-[#1b430b]">
                      Office Working Hours
                    </h4>

                    <p className="text-sm font-medium leading-relaxed text-slate-700">
                      Monday - Friday: 10:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday &amp; Gazetted Holidays: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-emerald-200/80 bg-white/95 backdrop-blur-md p-8 shadow-sm">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#4da826]">
              Citizen Portal
            </span>
            <h2 className="mb-8 text-2xl md:text-3xl font-extrabold text-[#1b430b] tracking-tight font-serif mt-1">
              Send us a Message
            </h2>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#1b430b]"
                >
                  Full Name *
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/30 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#4da826] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4da826]/30 font-medium"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#1b430b]"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/30 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#4da826] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4da826]/30 font-medium"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#1b430b]"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/30 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#4da826] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4da826]/30 font-medium"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#1b430b]"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject of your inquiry"
                  className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/30 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#4da826] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4da826]/30 font-medium"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#1b430b]"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write details about your query or feedback..."
                  className="w-full resize-none rounded-2xl border border-emerald-200 bg-emerald-50/30 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-[#4da826] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4da826]/30 font-medium"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4da826] py-3 font-bold text-white shadow-md transition hover:bg-emerald-600 border border-emerald-400/30 text-sm"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="w-full rounded-3xl border border-emerald-200/80 bg-white/95 backdrop-blur-md p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="flex items-center gap-2 text-2xl font-bold font-serif text-[#1b430b]">
              <MapPin className="h-6 w-6 text-[#4da826]" />
              Find Us on Google Maps
            </h3>

            <p className="ml-8 text-xs md:text-sm font-semibold text-[#2f5320]">
              Nagar Palika Parishad, Main Market Road, Shamli, Uttar Pradesh 247776
            </p>
          </div>

          <div className="h-[450px] w-full overflow-hidden rounded-2xl border border-emerald-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13906.94825942548!2d77.29955365!3d29.45012355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb133038676bf%3A0xb30419163013b8e7!2sShamli%2C%20Uttar%20Pradesh%20247776!5e0!3m2!1sen!2sin!4v1717930000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nagar Palika Parishad Shamli Location"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
