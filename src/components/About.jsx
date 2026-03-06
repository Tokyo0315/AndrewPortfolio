import { motion } from 'framer-motion'

const services = [
  {
    title: 'WEB DEVELOPMENT',
    description:
      'I can develop responsive and functional websites based on your needs, from simple landing pages to complex web applications.',
    icon: '💻',
  },
  {
    title: 'GAME DESIGN',
    description:
      'I design and develop interactive game experiences using Unity and Unreal Engine, from 2D platformers to 3D adventures.',
    icon: '🎮',
  },
  {
    title: 'DIGITAL ARTS',
    description:
      'I create digital artworks and multimedia content including video greeting cards, graphics, and visual designs.',
    icon: '🎨',
  },
]

function SectionHeading({ children }) {
  return (
    <div className="flex justify-center mb-10 sm:mb-12">
      <div className="border-2 border-black dark:border-white px-6 sm:px-10 py-3 sm:py-4">
        <h2 className="font-raleway font-bold text-2xl sm:text-[28px] lg:text-[36px] tracking-[0.15em] text-black dark:text-white text-center">
          {children}
        </h2>
      </div>
    </div>
  )
}

function Separator() {
  return (
    <div className="flex justify-center my-8 sm:my-12">
      <div className="w-[120px] sm:w-[170px] h-[5px] sm:h-[6px] bg-black dark:bg-white rounded-full" />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-[#141414] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading>ABOUT ME</SectionHeading>
        </motion.div>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-raleway font-bold text-xl sm:text-2xl text-black dark:text-white mb-4">
            Vincent Andrew Escobar
          </h3>
          <p className="text-[#555] dark:text-[#a0a0a0] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            I'm a passionate developer who enjoys building things for the web and
            creating interactive game experiences. I enjoy Web Development, Game Designing,
            Game Testing, and Digital Arts.
          </p>
        </motion.div>

        {/* Explore button */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="#projects" className="group flex items-center">
            <span className="w-px h-8 bg-black dark:bg-white group-hover:bg-[#909090] transition-colors" />
            <span className="px-4 sm:px-5 font-montserrat font-bold text-xs sm:text-sm tracking-wider text-black dark:text-white group-hover:text-[#909090] transition-colors">
              EXPLORE
            </span>
            <span className="w-px h-8 bg-black dark:bg-white group-hover:bg-[#909090] transition-colors" />
          </a>
        </motion.div>

        <Separator />

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
              <h4 className="font-raleway font-bold text-base sm:text-lg tracking-wider text-black dark:text-white mb-3">
                {service.title}
              </h4>
              <p className="text-[#666] dark:text-[#a0a0a0] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Work Experience */}
        <Separator />

        <div className="mt-8 space-y-6 sm:space-y-8">
          <motion.div
            className="border-l-4 border-black dark:border-white pl-4 sm:pl-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
              <h4 className="font-raleway font-bold text-lg sm:text-xl text-black dark:text-white">Systems and Software Consulting Group Inc.</h4>
              <span className="bg-black dark:bg-white text-white dark:text-black text-[10px] font-montserrat font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase">Current</span>
            </div>
            <p className="font-montserrat text-xs sm:text-sm text-[#909090] font-semibold mt-1 mb-3">
              Software Developer &middot; November 2025 - Present
            </p>
            <ul className="space-y-1.5 text-[#555] dark:text-[#a0a0a0] text-xs sm:text-sm">
              <li>&#9654; Develop and maintain responsive, high-performance websites and web applications.</li>
              <li>&#9654; Build scalable back-end solutions using ASP.NET Core and RESTful APIs.</li>
              <li>&#9654; Design and prototype software interfaces, ensuring intuitive user experience.</li>
              <li>&#9654; Collaborate with cross-functional teams to deliver client-facing software products.</li>
            </ul>
          </motion.div>

          <motion.div
            className="border-l-4 border-black dark:border-white pl-4 sm:pl-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-raleway font-bold text-lg sm:text-xl text-black dark:text-white">Ollopa Corporation</h4>
            <p className="font-montserrat text-xs sm:text-sm text-[#909090] font-semibold mt-1 mb-3">
              IT and Multimedia Intern &middot; December 2024 - August 2025
            </p>
            <ul className="space-y-1.5 text-[#555] dark:text-[#a0a0a0] text-xs sm:text-sm">
              <li>&#9654; Maintaining and Reporting the company website.</li>
              <li>&#9654; Hotel and Rooms listing in the company website.</li>
              <li>&#9654; Design Electronic Video Greeting Cards.</li>
            </ul>
          </motion.div>

          <motion.div
            className="border-l-4 border-black dark:border-white pl-4 sm:pl-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-raleway font-bold text-lg sm:text-xl text-black dark:text-white">CREOTEC Philippines Inc.</h4>
            <p className="font-montserrat text-xs sm:text-sm text-[#909090] font-semibold mt-1 mb-3">
              Work Immersion &middot; April 2021
            </p>
            <ul className="space-y-1.5 text-[#555] dark:text-[#a0a0a0] text-xs sm:text-sm">
              <li>&#9654; Designing, developing and maintaining mobile applications.</li>
              <li>&#9654; Troubleshooting and debugging issues.</li>
              <li>&#9654; Ensuring optimal app performance and user experience.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
