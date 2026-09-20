import { motion } from 'framer-motion'
import { GraduationCap, BookOpenText } from 'lucide-react'

function Education({ _profile }) {
  return (
    <section className="bg-[#F3F7F4]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(16,42,67,0.04)] sm:p-8 lg:p-10"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#2563A6] to-[#8FAF9A] text-white">
              <GraduationCap size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563A6]">EDUCATION</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-900">BRAC University</h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Degree</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">BSc in Computer Science &amp; Engineering</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <BookOpenText size={18} className="text-[#2563A6]" />
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Minor</p>
                </div>
                <p className="mt-3 text-xl font-medium text-slate-900">Economics</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-[#F7FAF8] to-[#EAF1ED] p-5">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Academic profile</p>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-sm text-slate-600">CGPA</p>
                  <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">3.80</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Status</p>
                  <p className="mt-1 text-xl font-medium text-slate-900">Fourth-year undergraduate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
