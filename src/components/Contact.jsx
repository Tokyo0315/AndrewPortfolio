import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-[#141414] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-2 border-black dark:border-white px-6 sm:px-10 py-3 sm:py-4">
            <h2 className="font-raleway font-bold text-2xl sm:text-[28px] lg:text-[36px] tracking-[0.15em] text-black dark:text-white text-center">
              CONTACT
            </h2>
          </div>
        </motion.div>

        <motion.p
          className="text-center text-[#555] dark:text-[#a0a0a0] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi, feel free to reach out!
        </motion.p>

        {/* Separator */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-[120px] sm:w-[170px] h-[5px] sm:h-[6px] bg-black dark:bg-white rounded-full" />
        </div>

        {/* Contact form */}
        <motion.form
          action="https://formspree.io/f/mnnepgky"
          method="POST"
          className="space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Name */}
          <div className="flex">
            <div className="w-[4px] sm:w-[5px] bg-black dark:bg-white shrink-0" />
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              required
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-montserrat text-[#555] dark:text-[#ccc] placeholder-[#999] dark:placeholder-[#666] bg-transparent border-b border-gray-300 dark:border-[#333] focus:border-black dark:focus:border-white focus:outline-none transition-colors tracking-wider"
            />
          </div>

          {/* Email */}
          <div className="flex">
            <div className="w-[4px] sm:w-[5px] bg-black dark:bg-white shrink-0" />
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              required
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-montserrat text-[#555] dark:text-[#ccc] placeholder-[#999] dark:placeholder-[#666] bg-transparent border-b border-gray-300 dark:border-[#333] focus:border-black dark:focus:border-white focus:outline-none transition-colors tracking-wider"
            />
          </div>

          {/* Phone */}
          <div className="flex">
            <div className="w-[4px] sm:w-[5px] bg-black dark:bg-white shrink-0" />
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-montserrat text-[#555] dark:text-[#ccc] placeholder-[#999] dark:placeholder-[#666] bg-transparent border-b border-gray-300 dark:border-[#333] focus:border-black dark:focus:border-white focus:outline-none transition-colors tracking-wider"
            />
          </div>

          {/* Message */}
          <div className="flex">
            <div className="w-[4px] sm:w-[5px] bg-black dark:bg-white shrink-0" />
            <textarea
              name="message"
              rows="5"
              placeholder="YOUR MESSAGE*"
              required
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-montserrat text-[#555] dark:text-[#ccc] placeholder-[#999] dark:placeholder-[#666] bg-transparent border-b border-gray-300 dark:border-[#333] focus:border-black dark:focus:border-white focus:outline-none transition-colors tracking-wider resize-none"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center pt-8 sm:pt-10">
            <button
              type="submit"
              className="group flex items-center cursor-pointer"
            >
              <span className="w-px h-8 sm:h-10 bg-black dark:bg-white group-hover:bg-[#909090] transition-colors" />
              <span className="px-6 sm:px-8 py-2 font-montserrat font-bold text-xs sm:text-sm tracking-[0.2em] text-black dark:text-white group-hover:text-[#909090] transition-colors">
                SUBMIT
              </span>
              <span className="w-px h-8 sm:h-10 bg-black dark:bg-white group-hover:bg-[#909090] transition-colors" />
            </button>
          </div>
        </motion.form>

        {/* Map */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative overflow-hidden aspect-video w-full max-w-lg mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30933.203654751935!2d121.14307018427138!3d14.273595790760135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d94d088e2849%3A0x1eb0f008daa9e44f!2sBahay%20ni%20Andrew!5e0!3m2!1sen!2sph!4v1762780914537!5m2!1sen!2sph"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="My Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
