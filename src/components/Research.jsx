import { motion } from 'framer-motion'

function Research({ exploringTopics }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563A6]">WHAT I&apos;M EXPLORING</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
          Questions and areas I want to understand more deeply.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {exploringTopics.map((item, index) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -5 }}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(16,42,67,0.04)]"
            >
              <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-[#2563A6]/10 to-[#8FAF9A]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2563A6]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Research
