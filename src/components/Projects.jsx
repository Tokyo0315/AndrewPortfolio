import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

import neroDodge from '../assets/imgs/Nero Dodge.jpg'
import projectRacer from '../assets/imgs/project-racer.png'
import bangugot from '../assets/imgs/bangugot.png'
import rebellion from '../assets/imgs/rebellion.png'
import bgsample from '../assets/imgs/bgsample.jpg'
import bgsample2 from '../assets/imgs/bgsample2.jpg'
import notLogo from '../assets/imgs/not-logo.png'
import starship from '../assets/imgs/starship.png'
import web1 from '../assets/imgs/web1.png'
import web2 from '../assets/imgs/web2.png'
import web3 from '../assets/imgs/web3.png'

const projects = [
  {
    title: 'PokeCircuit Arena',
    subtitle: 'A Pokemon-inspired web application with circuit-themed battles and interactive gameplay.',
    tags: 'React, Web App',
    image: web1,
    link: 'https://poke-circuit.vercel.app/',
    category: 'web',
    info: 'PokeCircuit Arena is a fun web app inspired by Pokemon. You can pick your favorite creatures and battle them in a circuit-style arena. It features team building, turn-based battles, and a clean interface that makes it easy to jump in and play. Built with React and deployed on Vercel.',
  },
  {
    title: 'Cedrik User Manual',
    subtitle: 'A web-based user manual and documentation site.',
    tags: 'React, Web App',
    image: web2,
    link: 'https://cedrik-user-manual-webite.vercel.app/',
    category: 'web',
    info: 'Cedrik User Manual is a clean documentation website designed to guide users through a product step by step. It has organized sections, easy navigation, and a simple layout so anyone can find the info they need without getting lost. Built with React and hosted on Vercel.',
  },
  {
    title: 'Thodemy Learning Management System',
    subtitle: 'A learning management system for online courses and education.',
    tags: 'React, Web App',
    image: web3,
    link: 'https://thodemy.vercel.app/',
    category: 'web',
    info: 'Thodemy is a learning management system where users can browse and take online courses. It has a structured course catalog, lesson pages, and a user-friendly design that keeps the learning experience smooth and straightforward. Built with React and deployed on Vercel.',
  },
  {
    title: 'Nero Dodge',
    subtitle: '2D side scroller game where you control Nero to dodge demons.',
    tags: 'Unity, C#',
    image: neroDodge,
    link: 'https://secnero-games.itch.io/nero-dodge',
    category: 'game',
    info: 'Nero Dodge is a fast-paced 2D side scroller where you play as Nero and try to survive as long as you can by dodging waves of demons. The longer you last, the harder it gets. Simple controls, quick rounds, and a lot of fun. Made with Unity and C#.',
  },
  {
    title: 'Project Racer',
    subtitle: '3D low-poly racing game for skill-focused racing experience.',
    tags: 'Unity, 3D',
    image: projectRacer,
    link: 'https://secnero-games.itch.io/project-racer',
    category: 'game',
    info: 'Project Racer is a 3D racing game with a low-poly art style. It focuses on skill-based driving where you have to master tight turns and tricky tracks to get the best time. No power-ups, just pure racing. Built in Unity with custom 3D assets.',
  },
  {
    title: 'Bangungot',
    subtitle: 'A short adventure horror game following Jake after a train crash.',
    tags: 'Unity, Horror',
    image: bangugot,
    link: 'https://secnero-games.itch.io/bangungot',
    category: 'game',
    info: 'Bangungot is a short horror adventure game. You play as Jake who wakes up after a train crash in a dark, unsettling place. Explore the environment, piece together what happened, and try to find your way out. It has a creepy atmosphere and a story that keeps you on edge. Made with Unity.',
  },
  {
    title: 'Rebellion',
    subtitle: '2D platformer parkour game — escape as cyborg Yue from a lab.',
    tags: 'Unity, Platformer',
    image: rebellion,
    link: 'https://secnero-games.itch.io/rebellion',
    category: 'game',
    info: 'Rebellion is a 2D platformer where you play as Yue, a cyborg escaping from a lab. Run, jump, and parkour your way through obstacles and enemies. The levels are designed to test your reflexes and timing. Fast-paced action built with Unity.',
  },
  {
    title: 'Not In My Backyard',
    subtitle: '3D top-down shooter — survive waves of spiders.',
    tags: 'Unity, Shooter',
    image: notLogo,
    link: 'https://secnero-games.itch.io/not-in-my-backyard',
    category: 'game',
    info: 'Not In My Backyard is a 3D top-down shooter where spiders keep coming at you in waves. Your job is to survive as long as possible by shooting them down before they overwhelm you. Simple concept, addictive gameplay. Built in Unity with a top-down camera perspective.',
  },
  {
    title: 'Starship Invader',
    subtitle: "Shoot-'em-up — invade a planet with an overwhelming spaceship.",
    tags: 'Unity, 2D',
    image: starship,
    link: 'https://secnero-games.itch.io/starship-invader',
    category: 'game',
    info: "Starship Invader is a classic shoot-'em-up game where you pilot a powerful spaceship and blast through waves of enemies. It has that retro arcade feel with modern visuals. Dodge bullets, collect power-ups, and rack up your score. Made with Unity in 2D.",
  },
]

const filters = ['ALL', 'GAMES', 'WEB']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [modalProject, setModalProject] = useState(null)

  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalProject])

  const filterMap = { ALL: null, GAMES: 'game', WEB: 'web' }
  const filtered =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === filterMap[activeFilter])

  return (
    <section id="projects" className="bg-white dark:bg-[#141414] transition-colors duration-300">
      {/* Header with background image */}
      <div
        className="relative h-[200px] sm:h-[280px] lg:h-[320px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgsample})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="relative z-10 border-2 border-white px-6 sm:px-10 py-3 sm:py-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-raleway font-bold text-2xl sm:text-[28px] lg:text-[36px] tracking-[0.15em] text-white text-center">
            PORTFOLIO
          </h2>
        </motion.div>
      </div>

      {/* Filter bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="flex justify-center gap-0 border-b border-gray-300 dark:border-[#333]">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 sm:px-8 py-2.5 sm:py-3 font-montserrat font-bold text-xs sm:text-sm tracking-wider transition-all cursor-pointer ${
                activeFilter === f
                  ? 'text-black dark:text-white border-b-2 border-black dark:border-white -mb-px'
                  : 'text-[#909090] hover:text-black dark:hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-[1920px] mx-auto px-0 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              className="relative group h-[260px] sm:h-[320px] lg:h-[400px] overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black group-hover:scale-110 transition-transform duration-500" />
              )}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                <p className="font-montserrat text-[10px] sm:text-xs text-gray-300 tracking-wider mb-1 sm:mb-2">
                  {project.tags}
                </p>
                <h3 className="font-raleway font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm max-w-[280px] mb-3 sm:mb-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  {project.subtitle}
                </p>
                <div className="flex gap-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white text-xs sm:text-sm font-montserrat font-bold hover:text-gray-300 transition-colors"
                  >
                    <span className="w-px h-5 sm:h-6 bg-white mr-2 sm:mr-3" />
                    DEMO
                    <span className="w-px h-5 sm:h-6 bg-white ml-2 sm:ml-3" />
                  </a>
                  <button
                    onClick={() => setModalProject(project)}
                    className="flex items-center text-white text-xs sm:text-sm font-montserrat font-bold hover:text-gray-300 transition-colors cursor-pointer"
                  >
                    <span className="w-px h-5 sm:h-6 bg-white mr-2 sm:mr-3" />
                    INFO
                    <span className="w-px h-5 sm:h-6 bg-white ml-2 sm:ml-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* See more link */}
      <div className="text-center pb-8 sm:pb-12">
        {activeFilter === 'WEB' ? (
          <a
            href="https://github.com/Tokyo0315"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat font-bold text-xs sm:text-sm text-[#909090] hover:text-black dark:hover:text-white transition-colors tracking-wider"
          >
            SEE ALL PROJECTS ON GITHUB &#8594;
          </a>
        ) : (
          <a
            href="https://itch.io/search?q=secnero"
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat font-bold text-xs sm:text-sm text-[#909090] hover:text-black dark:hover:text-white transition-colors tracking-wider"
          >
            SEE ALL PROJECTS ON ITCH.IO &#8594;
          </a>
        )}
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-[#1a1a1a] max-w-lg w-full overflow-hidden relative max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image */}
              {modalProject.image && (
                <div className="w-full h-[160px] sm:h-[200px] overflow-hidden">
                  <img
                    src={modalProject.image}
                    alt={modalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Close button */}
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close"
              >
                <FiX size={18} />
              </button>

              {/* Modal content */}
              <div className="p-5 sm:p-8">
                <p className="font-montserrat text-[10px] sm:text-xs text-[#909090] tracking-wider mb-2">
                  {modalProject.tags}
                </p>
                <h3 className="font-raleway font-bold text-xl sm:text-2xl text-black dark:text-white mb-3 sm:mb-4">
                  {modalProject.title}
                </h3>
                <p className="text-[#555] dark:text-[#a0a0a0] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {modalProject.info}
                </p>
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-montserrat font-bold text-xs sm:text-sm text-black dark:text-white hover:text-[#909090] transition-colors tracking-wider"
                >
                  <span className="w-px h-5 sm:h-6 bg-black dark:bg-white mr-2 sm:mr-3" />
                  VIEW PROJECT
                  <span className="w-px h-5 sm:h-6 bg-black dark:bg-white ml-2 sm:ml-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
