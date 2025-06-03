'use client'
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function FloatingCVButton() {
  return (
    <motion.a
      href="/CV_Muhammad_Sani.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <DocumentArrowDownIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Download CV</span>
    </motion.a>
  )
} 