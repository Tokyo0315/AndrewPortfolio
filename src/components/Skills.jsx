import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaUnity,
  FaReact,
} from 'react-icons/fa'
import {
  SiBlender,
  SiUnrealengine,
  SiAutodesk,
  SiTailwindcss,
  SiAngular,
  SiDotnet,
} from 'react-icons/si'

const skillCategories = [
  {
    label: 'WEB DEVELOPMENT:',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'JAVASCRIPT', icon: <FaJsSquare />, color: '#F7DF1E' },
      { name: 'BOOTSTRAP', icon: <FaBootstrap />, color: '#7952B3' },
      { name: 'REACT', icon: <FaReact />, color: '#61DAFB' },
      { name: 'TAILWIND', icon: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    label: 'GAME DEVELOPMENT:',
    skills: [
      { name: 'UNITY', icon: <FaUnity />, color: '#222C37' },
      { name: 'UNREAL ENGINE', icon: <SiUnrealengine />, color: '#0E1128' },
      { name: 'BLENDER', icon: <SiBlender />, color: '#F5792A' },
      { name: 'MAYA', icon: <SiAutodesk />, color: '#0696D7' },
    ],
  },
  {
    label: 'LEARNING:',
    skills: [
      { name: 'ANGULAR', icon: <SiAngular />, color: '#DD0031' },
      { name: 'ASP.NET CORE', icon: <SiDotnet />, color: '#512BD4' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-[#1a1a1a] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-2 border-black dark:border-white px-6 sm:px-10 py-3 sm:py-4">
            <h2 className="font-raleway font-bold text-2xl sm:text-[28px] lg:text-[36px] tracking-[0.15em] text-black dark:text-white text-center">
              SKILLS
            </h2>
          </div>
        </motion.div>

        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.label}
            className="mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.15 }}
          >
            <h3 className="font-raleway font-bold text-lg sm:text-xl tracking-wider text-black dark:text-white mb-6 sm:mb-8">
              {category.label}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 sm:gap-3 group">
                  <div
                    className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[85px] lg:h-[85px] rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="font-montserrat font-semibold text-[10px] sm:text-[11px] lg:text-xs tracking-wider text-[#555] dark:text-[#a0a0a0] text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
