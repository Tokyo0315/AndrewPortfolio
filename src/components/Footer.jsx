import { FiGithub, FiMail } from 'react-icons/fi'
import { SiItchdotio } from 'react-icons/si'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#1a1a1a] py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="font-montserrat font-bold text-xs sm:text-sm tracking-[0.2em] text-white/70 hover:text-white transition-colors mb-6 sm:mb-8 cursor-pointer inline-flex items-center gap-2"
        >
          <span className="text-xs">&#9650;</span>
          BACK TO TOP
        </button>

        {/* Social icons */}
        <div className="flex justify-center gap-5 sm:gap-6 mb-6 sm:mb-8">
          <a
            href="https://github.com/Tokyo0315"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-xl sm:text-2xl transition-colors"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://itch.io/search?q=secnero"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-xl sm:text-2xl transition-colors"
            aria-label="Itch.io"
          >
            <SiItchdotio />
          </a>
          <a
            href="mailto:andrew.vincent3035@gmail.com"
            className="text-white/60 hover:text-white text-xl sm:text-2xl transition-colors"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/40 font-montserrat text-[10px] sm:text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Vincent Andrew Escobar. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
