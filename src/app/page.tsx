'use client'
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { skills } from '@/data/skills';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Software Engineer & AI Specialist
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate about building innovative solutions using cutting-edge technologies
              in software engineering, artificial intelligence, machine learning, and data science.
              Transforming complex problems into elegant, scalable solutions.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Professional Experience</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{edu.school}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a
                href="mailto:muhammadsanijae@gmail.com"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>muhammadsanijae@gmail.com</span>
              </a>
              <a
                href="tel:+23463055417"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+23463055417, +2348089878468</span>
              </a>
              <div className="flex gap-6 mt-4">
                <a
                  href="https://linkedin.com/in/sanijae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sanijae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
