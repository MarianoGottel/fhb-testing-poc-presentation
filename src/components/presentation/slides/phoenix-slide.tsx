'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { Brain, Users, Lightbulb, MessageCircle } from 'lucide-react'

export function PhoenixSlide() {
  const reflectionSteps = [
    {
      icon: Brain,
      title: "Identify Your Repetitive Tasks",
      description: "What do you do every day that feels mechanical?",
      examples: ["Code reviews", "Data validation", "Test writing", "Documentation"],
      color: "#66B2FF"
    },
    {
      icon: Lightbulb,
      title: "Imagine the Automation",
      description: "How could AI handle this for you?",
      examples: ["Automated PR reviews", "Smart validation rules", "AI-generated tests", "Living documentation"],
      color: "#4ECDC4"
    },
    {
      icon: MessageCircle,
      title: "What's Stopping You?",
      description: "Be honest about your barriers",
      examples: ["Don't know where to start", "Compliance concerns", "Tool overwhelm", "Time to learn"],
      color: "#FF6B6B"
    }
  ]

  return (
    <SlideContainer transition="scale" className="bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#003366]/20">
      <div className="w-full max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold text-white">What You Can Do</h2>
          <p className="mt-3 text-2xl text-white/80">Your Personal AI Transformation</p>
        </motion.div>

        {/* Reflection Steps */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {reflectionSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                className="group relative overflow-hidden rounded-xl bg-black/40 p-6 border border-white/10"
              >
                {/* Icon */}
                <div 
                  className="mb-4 inline-flex rounded-lg p-3"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <Icon className="h-8 w-8" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mb-4 text-white/70">{step.description}</p>

                {/* Examples */}
                <div className="space-y-1">
                  {step.examples.map((example, i) => (
                    <p
                      key={i}
                      className="text-sm text-white/50"
                    >
                      • {example}
                    </p>
                  ))}
                </div>

                {/* Hover effect gradient */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10"
                  style={{
                    background: `radial-gradient(circle at center, ${step.color} 0%, transparent 70%)`
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="rounded-xl bg-gradient-to-r from-[#66B2FF]/10 to-[#4ECDC4]/10 p-8 text-center border border-white/10"
        >
          <div className="mb-6 flex justify-center">
            <Users className="h-12 w-12 text-[#66B2FF]" />
          </div>
          
          <h3 className="mb-4 text-2xl font-semibold text-white">
            You're Not Alone in This Journey
          </h3>
          
          <p className="mb-6 text-lg text-white/80">
            Share your automation ideas. Learn from others. Get expert guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-[#66B2FF]/20 px-6 py-3 text-[#66B2FF]"
            >
              📅 Engineering All Hands
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-[#4ECDC4]/20 px-6 py-3 text-[#4ECDC4]"
            >
              📚 Regular Knowledge Sharing
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-white/10 px-6 py-3 text-white"
            >
              🤝 Peer Learning Sessions
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xl text-white/60">
            Start small. Think big. Transform everything.
          </p>
        </motion.div>
      </div>
    </SlideContainer>
  )
}