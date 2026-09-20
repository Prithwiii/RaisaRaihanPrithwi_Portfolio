import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Link2 } from 'lucide-react'

function Projects({ projects, projectFilters }) {
  const [selectedFilter, setSelectedFilter] = useState('ALL')

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'ALL') return projects
    return projects.filter((project) => project.category === selectedFilter)
  }, [selectedFilter, projects])

  return (
    <section id="projects" className="bg-[#F3F7F4]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2563A6]">FEATURED PROJECTS</p>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Work shaped by curiosity, analysis, and problem-solving.
            </h2>

            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] transition ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-[#2563A6] to-[#8FAF9A] text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(16,42,67,0.04)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(37,99,166,0.08)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2563A6] to-[#8FAF9A] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Project {project.id}</div>
                    <div className="mt-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                      {project.category}
                    </div>
                  </div>
                  <div className="text-5xl font-semibold tracking-[-0.08em] text-slate-200">{project.id}</div>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-slate-900">{project.title}</h3>

                <p className="mt-4 text-base leading-7 text-slate-700">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-[#F3F7F4] px-2.5 py-1.5 text-[11px] font-medium text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    <Globe size={16} />
                    GitHub
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
