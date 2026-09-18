import { motion } from 'framer-motion'
import { BriefcaseBusiness, Mail } from 'lucide-react'

function Contact({ socialLinks, contactDetails }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-r from-[#2563A6] to-[#8FAF9A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_28%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/25 bg-white/10 p-6 text-white shadow-[0_20px_70px_rgba(16,42,67,0.18)] backdrop-blur-sm sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">CONTACT</p>
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                {contactDetails.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-blue-50">
                {contactDetails.message}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={socialLinks.email}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#102A43] transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563A6]"
              >
                <Mail size={17} />
                Email Me
              </a>
              <a
                href={socialLinks.linkedinUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563A6]"
              >
                <BriefcaseBusiness size={17} />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
