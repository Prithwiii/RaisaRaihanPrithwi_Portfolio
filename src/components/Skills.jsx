import { motion } from 'framer-motion'

function Skills({ skills }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563A6]">SKILLS</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
          Tools, methods, and areas I&apos;m building with.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {skills.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(16,42,67,0.04)]">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-[#F3F7F4] px-3 py-2 text-xs font-medium text-slate-700 transition duration-200 hover:bg-gradient-to-r hover:from-[#2563A6] hover:to-[#8FAF9A] hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
