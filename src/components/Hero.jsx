import { motion } from 'framer-motion'
import { FiMail, FiGithub } from 'react-icons/fi'
import { SiItchdotio } from 'react-icons/si'
import gradPic from '../assets/imgs/grad-pic.jpg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Light gray */}
      <div className="flex-1 bg-[#d7d7d7] dark:bg-[#1c1c1c] flex items-center justify-center px-6 sm:px-10 lg:px-20 py-28 sm:py-32 lg:py-0 relative transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <p className="font-raleway font-bold italic text-2xl sm:text-3xl lg:text-[36px] text-black dark:text-white mb-2">
            Hi, I am
          </p>
          <h1 className="font-raleway font-bold text-[42px] sm:text-[56px] lg:text-[80px] text-black dark:text-white leading-[1.1] mb-3">
            Vincent
            <br />
            Andrew
          </h1>
          <p className="font-raleway font-extrabold text-base sm:text-lg lg:text-[22px] text-[#909090] dark:text-[#a0a0a0] mb-8 sm:mb-12">
            Web Developer / Game Designer
          </p>

          {/* Social icons */}
          <div className="flex gap-3 sm:gap-4">
            <a
              href="mailto:andrew.vincent3035@gmail.com"
              className="w-11 h-11 sm:w-[50px] sm:h-[50px] bg-[#c4c4c4] dark:bg-[#333] rounded-lg flex items-center justify-center text-black dark:text-white text-lg sm:text-xl hover:bg-[#aaa] dark:hover:bg-[#444] transition-colors shadow-md"
              aria-label="Email"
            >
              <FiMail />
            </a>
            <a
              href="https://github.com/Tokyo0315"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-[50px] sm:h-[50px] bg-[#c4c4c4] dark:bg-[#333] rounded-lg flex items-center justify-center text-black dark:text-white text-lg sm:text-xl hover:bg-[#aaa] dark:hover:bg-[#444] transition-colors shadow-md"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://itch.io/search?q=secnero"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-[50px] sm:h-[50px] bg-[#c4c4c4] dark:bg-[#333] rounded-lg flex items-center justify-center text-black dark:text-white text-lg sm:text-xl hover:bg-[#aaa] dark:hover:bg-[#444] transition-colors shadow-md"
              aria-label="Itch.io"
            >
              <SiItchdotio />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right side - Black with photo */}
      <div className="flex-1 bg-black relative overflow-hidden flex items-center justify-center min-h-[350px] sm:min-h-[450px] lg:min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full h-full flex items-end justify-center"
        >
          <img
            src={gradPic}
            alt="Vincent Andrew Escobar"
            className="w-auto h-[75%] sm:h-[80%] max-h-[500px] lg:max-h-[700px] object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  )
}
