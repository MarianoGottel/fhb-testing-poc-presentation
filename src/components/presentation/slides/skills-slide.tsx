'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { Compass, Eye, Zap, HelpCircle, Heart } from 'lucide-react'

export function SkillsSlide() {
  const skills = [
    {
      icon: Compass,
      title: "Develop Your Opinion",
      description: "Be authentic. Decide what you stand for.",
      insight: "In the age of AI, it's easy to lose yourself. Your unique perspective is your strength.",
      color: "#66B2FF"
    },
    {
      icon: Eye,
      title: "Cultivate Curiosity",
      description: "Explore how the world is changing.",
      insight: "Stay curious about new capabilities and possibilities that emerge every day.",
      color: "#4ECDC4"
    },
    {
      icon: Zap,
      title: "High Sense of Agency",
      description: "Take ownership and make things happen.",
      insight: "Don't wait for permission. See opportunities and act on them.",
      color: "#FFB366"
    },
    {
      icon: HelpCircle,
      title: "Master the Art of Questions",
      description: "With all answers available, questions become crucial.",
      insight: "The quality of your questions determines the value of AI's answers.",
      color: "#FF6B6B"
    },
    {
      icon: Heart,
      title: "Embrace Discomfort",
      description: "Step outside your comfort zone regularly.",
      insight: "Growth happens at the edge of comfort. Make discomfort your teacher.",
      color: "#B366FF"
    }
  ]

  return (
    <SlideContainer transition="fade" className="bg-gradient-to-br from-[#0A0A0A] via-[#001833] to-[#0A0A0A]">
      <div className="w-full max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white">Skills for the Future</h2>
          <p className="mt-3 text-xl text-white/80">What will set you apart in the age of AI</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.slice(0, 3).map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20"
              >
                <div 
                  className="mb-4 inline-flex rounded-lg p-3"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: skill.color }} />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mb-3 text-white/70">{skill.description}</p>
                <p className="text-sm text-white/50 italic">{skill.insight}</p>

                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-5"
                  style={{
                    background: `radial-gradient(circle at top left, ${skill.color} 0%, transparent 60%)`
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom row centered */}
        <div className="mt-6 flex justify-center gap-6">
          {skills.slice(3).map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + index * 0.15, duration: 0.6 }}
                className="group relative w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/20"
              >
                <div 
                  className="mb-4 inline-flex rounded-lg p-3"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: skill.color }} />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">{skill.title}</h3>
                <p className="mb-3 text-white/70">{skill.description}</p>
                <p className="text-sm text-white/50 italic">{skill.insight}</p>

                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-5"
                  style={{
                    background: `radial-gradient(circle at top left, ${skill.color} 0%, transparent 60%)`
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Central Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl font-light text-white">
            These aren't just skills—they're your{' '}
            <span className="font-semibold text-[#66B2FF]">compass</span> for navigating
          </p>
          <p className="mt-2 text-2xl font-light text-white">
            a world where AI handles the execution.
          </p>
        </motion.div>
      </div>
    </SlideContainer>
  )
}