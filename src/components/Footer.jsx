function Footer({ profile, socialLinks }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="text-lg font-semibold tracking-tight text-slate-900">{profile.name}</div>
          <div className="mt-1 text-sm text-slate-600">CSE × Economics</div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <a href={socialLinks.githubUrl} className="transition hover:text-blue-700">GitHub</a>
          <a href={socialLinks.linkedinUrl} className="transition hover:text-blue-700">LinkedIn</a>
          <a href={socialLinks.email} className="transition hover:text-blue-700">Email</a>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © 2026 {profile.name}
        </div>
      </div>
    </footer>
  )
}

export default Footer
