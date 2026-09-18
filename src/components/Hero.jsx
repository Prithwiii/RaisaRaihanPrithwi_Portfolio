import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Download, Globe, Mail } from 'lucide-react'

function Hero({ _profile, socialLinks }) {
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200/80 bg-[#F7FAF8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(111,168,216,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(143,175,154,0.15),_transparent_30%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-800">
            COMPUTER SCIENCE × ECONOMICS
          </span>

          <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
            Building at the intersection of technology, data &amp; economics.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            I&apos;m a third-year CSE student at BRAC University with a minor in Economics, exploring how
            data and technology can be used to understand problems, uncover insights, and build meaningful
            solutions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563A6] to-[#8FAF9A] px-6 py-3 text-sm font-medium text-white shadow-sm transition duration-200 hover:translate-y-[-1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563A6] focus-visible:ring-offset-2"
            >
              View My Work
              <ArrowRight size={17} />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition duration-200 hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6FA8D8] focus-visible:ring-offset-2"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <a
              href={socialLinks.githubUrl}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-blue-200 hover:text-blue-700"
            >
              <Globe size={16} />
              GitHub
            </a>
            <a
              href={socialLinks.linkedinUrl}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-blue-200 hover:text-blue-700"
            >
              <BriefcaseBusiness size={16} />
              LinkedIn
            </a>
            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 transition hover:border-blue-200 hover:text-blue-700"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-[420px] w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 shadow-[0_30px_80px_rgba(16,42,67,0.08)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(111,168,216,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(143,175,154,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />
            <div className="absolute -left-20 top-12 h-48 w-48 rounded-full bg-[#6FA8D8]/25 blur-2xl" />
            <div className="absolute -right-14 bottom-8 h-56 w-56 rounded-full bg-[#8FAF9A]/25 blur-2xl" />

            <div className="absolute left-10 top-10 h-24 w-24 rounded-full border border-[#2563A6]/20 bg-[#2563A6]/10" />
            <div className="absolute right-14 top-16 h-16 w-16 rounded-full border border-[#8FAF9A]/30 bg-[#8FAF9A]/15" />
            <div className="absolute bottom-20 left-24 h-32 w-32 rounded-full border border-[#6FA8D8]/20 bg-[#6FA8D8]/12" />
            <div className="absolute bottom-16 right-20 h-20 w-20 rounded-full border border-[#8FAF9A]/30 bg-[#8FAF9A]/12" />

            <div className="absolute left-16 top-28 h-px w-44 bg-gradient-to-r from-[#2563A6]/0 via-[#2563A6]/60 to-[#8FAF9A]/0" />
            <div className="absolute left-24 top-24 h-px w-60 rotate-[22deg] bg-gradient-to-r from-[#8FAF9A]/0 via-[#8FAF9A]/70 to-[#2563A6]/0" />
            <div className="absolute right-16 top-28 h-px w-40 rotate-[18deg] bg-gradient-to-r from-[#2563A6]/0 via-[#2563A6]/60 to-[#8FAF9A]/0" />

            <div className="absolute left-20 top-28 flex h-3 w-3 items-center justify-center rounded-full bg-[#2563A6] shadow-[0_0_0_6px_rgba(37,99,166,0.12)]" />
            <div className="absolute left-44 top-20 flex h-3 w-3 items-center justify-center rounded-full bg-[#8FAF9A] shadow-[0_0_0_6px_rgba(143,175,154,0.12)]" />
            <div className="absolute bottom-28 left-20 flex h-3 w-3 items-center justify-center rounded-full bg-[#6FA8D8] shadow-[0_0_0_6px_rgba(111,168,216,0.12)]" />
            <div className="absolute right-20 top-28 flex h-3 w-3 items-center justify-center rounded-full bg-[#8FAF9A] shadow-[0_0_0_6px_rgba(143,175,154,0.12)]" />
            <div className="absolute right-24 bottom-20 flex h-3 w-3 items-center justify-center rounded-full bg-[#2563A6] shadow-[0_0_0_6px_rgba(37,99,166,0.12)]" />

            <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Focus</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-slate-900">Data + Insight</p>
                </div>
                <div className="rounded-full bg-gradient-to-r from-[#2563A6] to-[#8FAF9A] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                  Research
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-left text-xs text-slate-600">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Analysis</div>
                  <div className="mt-1 font-semibold text-slate-800">Patterns</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Tech</div>
                  <div className="mt-1 font-semibold text-slate-800">Systems</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Action</div>
                  <div className="mt-1 font-semibold text-slate-800">Impact</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
