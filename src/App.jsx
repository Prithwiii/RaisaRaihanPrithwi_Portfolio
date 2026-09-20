import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Research from './components/Research'
import CurrentlyLearning from './components/CurrentlyLearning'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {
  profile,
  navItems,
  socialLinks,
  skills,
  certificates,
  projects,
  projectFilters,
  exploringTopics,
  learningItems,
  contactDetails,
} from './data/portfolioData'

function App() {
  return (
    <div className="min-h-screen bg-[#F7FAF8] text-slate-800">
      <Navbar navItems={navItems} socialLinks={socialLinks} profile={profile} />
      <Hero _profile={profile} socialLinks={socialLinks} />
      <About _profile={profile} />
      <Education _profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} projectFilters={projectFilters} />
      <Research exploringTopics={exploringTopics} />
      <CurrentlyLearning learningItems={learningItems} />
      <Certificates certificates={certificates} />
      <Contact socialLinks={socialLinks} contactDetails={contactDetails} />
      <Footer profile={profile} socialLinks={socialLinks} />
    </div>
  )
}

export default App
