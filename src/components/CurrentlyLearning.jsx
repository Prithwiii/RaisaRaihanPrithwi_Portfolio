import { motion } from 'framer-motion'

function CurrentlyLearning({ learningItems }) {
  return (
    <section className="bg-[#F3F7F4]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(16,42,67,0.04)]"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563A6]">CURRENTLY LEARNING</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
                Building skills with purpose and curiosity.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {learningItems.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-[#F8FAF9] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-slate-800">{item.label}</p>
                    <span className="rounded-full bg-gradient-to-r from-[#2563A6]/10 to-[#8FAF9A]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2563A6]">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentlyLearning
