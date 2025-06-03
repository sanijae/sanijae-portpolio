'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Muhammad Sani"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  )
} 