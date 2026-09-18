import { motion } from 'framer-motion'

function About({ _profile }) {
  const carePoints = [
    'Data & Analysis',
    'Technology',
    'Research',
    'Economic Thinking',
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563A6]">ABOUT ME</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
          Curious about technology. Interested in data. Thinking economically.
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              I study Computer Science and Engineering at BRAC University while pursuing Economics as a
              minor. I am interested in combining technical knowledge with analytical and economic thinking
              to understand real-world problems and build useful solutions.
            </p>
            <p>
              I enjoy learning through projects, analysis, and experimentation. Whether it is exploring data,
              building tools, or understanding how technology shapes economic and social systems, I value work
              that is thoughtful, practical, and grounded in evidence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {carePoints.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(16,42,67,0.04)] transition"
              >
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563A6]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
