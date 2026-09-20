import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

function Certificates({ certificates }) {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#2563A6] to-[#8FAF9A] text-white">
            <Award size={22} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563A6]">CERTIFICATES</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Learning milestones and recognition.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(16,42,67,0.04)]"
            >
              <div className="overflow-hidden border-b border-slate-200 bg-slate-100">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-[#EAF1ED]', 'to-[#F3F7F4]')
                    e.target.parentElement.innerHTML = `
                      <div class="flex h-56 items-center justify-center p-6 text-center text-sm font-medium uppercase tracking-[0.18em] text-slate-600">
                        ${certificate.title}
                      </div>
                    `
                  }}
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                    {certificate.year}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#2563A6]">
                    {certificate.issuer}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em] text-slate-900">{certificate.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{certificate.summary}</p>

              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certificates
