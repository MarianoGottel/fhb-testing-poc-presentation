'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { Button } from '@/registry/new-york-v4/ui/button'
import { RadioGroup, RadioGroupItem } from '@/registry/new-york-v4/ui/radio-group'
import { Label } from '@/registry/new-york-v4/ui/label'
import { usePresentationStore } from '@/lib/presentation/store'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function PollSlide() {
  const { pollResults, hasVoted, submitPollVote } = usePresentationStore()
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [showResults, setShowResults] = useState(hasVoted)

  const handleVote = () => {
    if (selectedOption) {
      submitPollVote(selectedOption)
      setShowResults(true)
    }
  }

  const totalVotes = pollResults.reduce((sum, result) => sum + result.votes, 0)

  return (
    <SlideContainer transition="fade">
      <div className="w-full max-w-3xl">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What's holding you back from using AI more?
        </motion.h2>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="voting"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                {pollResults.map((option, index) => (
                  <motion.div
                    key={option.option}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      'rounded-lg border border-white/20 p-4 transition-all',
                      selectedOption === option.option && 'border-[#66B2FF] bg-[#66B2FF]/10'
                    )}
                  >
                    <Label
                      htmlFor={option.option}
                      className="flex cursor-pointer items-center space-x-3"
                    >
                      <RadioGroupItem value={option.option} id={option.option} />
                      <span className="text-lg text-white">{option.option}</span>
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
              >
                <Button
                  onClick={handleVote}
                  disabled={!selectedOption}
                  size="lg"
                  className="bg-[#66B2FF] text-white hover:bg-[#66B2FF]/80"
                >
                  Submit Vote
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {pollResults.map((result, index) => {
                const percentage = totalVotes > 0 ? (result.votes / totalVotes) * 100 : 0

                return (
                  <motion.div
                    key={result.option}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="mb-2 flex justify-between">
                      <span className="text-white">{result.option}</span>
                      <span className="text-white/60">{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-8 overflow-hidden rounded-full bg-gray-800">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#66B2FF] to-[#4ECDC4]"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                )
              })}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 text-center text-lg text-white/60"
              >
                Total votes: {totalVotes}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-white">
              I understand each position. Because what's happening right now{' '}
              <span className="font-bold text-[#66B2FF]">is overwhelming.</span>
            </p>
          </motion.div>
        )}
      </div>
    </SlideContainer>
  )
}