import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Globe, Mail, Menu, X } from 'lucide-react'

function Navbar({ navItems, socialLinks }) {
  const [isOpen, setIsOpen] = useState(false)

  const menuLinks = [
    ...navItems,
    { label: 'GitHub', href: socialLinks.githubUrl },
    { label: 'LinkedIn', href: socialLinks.linkedinUrl },
    { label: 'Email', href: socialLinks.email },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-blue-700">
          Raisa Raihan
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}

          <a
            href={socialLinks.email}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563A6] to-[#8FAF9A] px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-200 hover:translate-y-[-1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563A6] focus-visible:ring-offset-2"
          >
            Let&apos;s Connect
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-800 shadow-sm transition hover:border-blue-200 hover:text-blue-700 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
              {menuLinks.map((item) => {
                const Icon =
                  item.label === 'GitHub' ? Globe : item.label === 'LinkedIn' ? BriefcaseBusiness : item.label === 'Email' ? Mail : null

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    {Icon && <Icon size={16} />}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
