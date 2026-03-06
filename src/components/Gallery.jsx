import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

import art1 from '../assets/imgs/art1.JPG'
import art2 from '../assets/imgs/art2.jpg'
import grp1 from '../assets/imgs/grp1.JPG'
import award1 from '../assets/imgs/award1.jpeg'
import award2 from '../assets/imgs/award2.jpeg'
import art from '../assets/imgs/art.jfif'

const images = [
  { src: art, alt: 'Artwork' },
  { src: art1, alt: 'Artwork 1' },
  { src: art2, alt: 'Artwork 2' },
  { src: grp1, alt: 'Group Photo' },
  { src: award1, alt: 'Award 1' },
  { src: award2, alt: 'Award 2' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const navigate = (dir) => {
    setSelected((prev) => {
      const next = prev + dir
      if (next < 0) return images.length - 1
      if (next >= images.length) return 0
      return next
    })
  }

  return (
    <section id="gallery" className="bg-[#f5f5f5] dark:bg-[#1a1a1a] py-24 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-2 border-black dark:border-white px-10 py-4">
            <h2 className="font-raleway font-bold text-[28px] sm:text-[36px] tracking-[0.15em] text-black dark:text-white text-center">
              GALLERY
            </h2>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  VIEW
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelected(null) }}
                className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl transition-colors cursor-pointer"
                aria-label="Close"
              >
                <FiX />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1) }}
                className="absolute left-4 sm:left-8 text-white/70 hover:text-white text-3xl transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <FiChevronLeft />
              </button>
              <motion.img
                key={selected}
                src={images[selected].src}
                alt={images[selected].alt}
                className="max-h-[80vh] max-w-[90vw] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1) }}
                className="absolute right-4 sm:right-8 text-white/70 hover:text-white text-3xl transition-colors cursor-pointer"
                aria-label="Next"
              >
                <FiChevronRight />
              </button>
              <div className="absolute bottom-6 text-white/50 font-montserrat text-sm">
                {selected + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
