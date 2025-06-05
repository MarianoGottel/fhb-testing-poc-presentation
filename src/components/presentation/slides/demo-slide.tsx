'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { useState, useEffect } from 'react'
import { Timer } from 'lucide-react'

const traditionalCode = `def validate_account(account_data):
    if not account_data.get('account_number'):
        return False
    if len(account_data['account_number']) != 10:
        return False
    if not account_data.get('routing_number'):
        return False
    if len(account_data['routing_number']) != 9:
        return False
    if not account_data.get('balance'):
        return False
    if account_data['balance'] < 0:
        return False
    # ... more validation`

const aiPrompt = `Create a comprehensive account validation function for First Horizon 
that checks account number (10 digits), routing number (9 digits), 
balance requirements, and KYC compliance fields. Include error messages.`

const aiGeneratedCode = `import re

def validate_account(account_data: dict) -> tuple[bool, str]:
    """Validate First Horizon account data with comprehensive checks."""
    
    # Account number validation
    account_num = account_data.get('account_number', '')
    if not account_num:
        return False, "Account number is required"
    if not account_num.isdigit() or len(account_num) != 10:
        return False, "Account number must be exactly 10 digits"
    
    # Routing number validation
    routing_num = account_data.get('routing_number', '')
    if not routing_num:
        return False, "Routing number is required"
    if not routing_num.isdigit() or len(routing_num) != 9:
        return False, "Routing number must be exactly 9 digits"
    
    # Balance validation
    balance = account_data.get('balance', 0)
    if balance < 0:
        return False, "Balance cannot be negative"
    if balance < 100:  # Minimum balance requirement
        return False, "Minimum balance of $100 required"
    
    # KYC compliance checks
    kyc_fields = ['first_name', 'last_name', 'ssn', 'date_of_birth']
    missing_kyc = [field for field in kyc_fields if not account_data.get(field)]
    if missing_kyc:
        return False, f"Missing KYC fields: {', '.join(missing_kyc)}"
    
    # SSN format validation
    ssn = account_data.get('ssn', '')
    if not re.match(r'^\d{3}-\d{2}-\d{4}$', ssn):
        return False, "SSN must be in format XXX-XX-XXXX"
    
    return True, "Account validation successful"`

export function DemoSlide() {
  const [showTraditional, setShowTraditional] = useState(true)
  const [traditionalProgress, setTraditionalProgress] = useState(0)
  const [aiProgress, setAiProgress] = useState(0)
  const [typedCode, setTypedCode] = useState('')

  useEffect(() => {
    if (showTraditional && traditionalProgress < traditionalCode.length) {
      const timer = setTimeout(() => {
        setTypedCode(traditionalCode.substring(0, traditionalProgress + 1))
        setTraditionalProgress(traditionalProgress + 1)
      }, 50) // Typing speed
      return () => clearTimeout(timer)
    }
  }, [showTraditional, traditionalProgress])

  const showAIGeneration = () => {
    setShowTraditional(false)
    setAiProgress(0)
    setTimeout(() => {
      setAiProgress(100)
    }, 500)
  }

  return (
    <SlideContainer transition="slide">
      <div className="w-full max-w-7xl">
        <motion.h2
          className="mb-8 text-center text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Power of AI-Assisted Development
        </motion.h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Traditional Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-gray-700 bg-black/40 p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">Traditional Way</h3>
              <div className="flex items-center space-x-2 text-red-400">
                <Timer className="h-5 w-5" />
                <span className="font-mono">~2 hours</span>
              </div>
            </div>

            <div className="h-[400px] overflow-auto rounded bg-gray-900 p-4">
              <pre className="text-sm text-gray-300">
                <code>{showTraditional ? typedCode : traditionalCode}</code>
              </pre>
            </div>
          </motion.div>

          {/* AI Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-[#66B2FF] bg-black/40 p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">AI-Powered</h3>
              <div className="flex items-center space-x-2 text-green-400">
                <Timer className="h-5 w-5" />
                <span className="font-mono">~2 minutes</span>
              </div>
            </div>

            {showTraditional ? (
              <div className="flex h-[400px] flex-col items-center justify-center">
                <motion.button
                  onClick={showAIGeneration}
                  className="rounded-lg bg-[#66B2FF] px-6 py-3 text-white transition-all hover:bg-[#66B2FF]/80"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Generate with AI
                </motion.button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Prompt */}
                <div className="rounded bg-gray-800 p-3">
                  <p className="text-sm font-mono text-[#66B2FF]">Prompt:</p>
                  <p className="mt-1 text-sm text-gray-300">{aiPrompt}</p>
                </div>

                {/* Generated Code */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: aiProgress > 0 ? 1 : 0, scale: aiProgress > 0 ? 1 : 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="h-[300px] overflow-auto rounded bg-gray-900 p-4"
                >
                  <pre className="text-sm text-gray-300">
                    <code>{aiGeneratedCode}</code>
                  </pre>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xl text-white/80">
            Complete, tested, documented code with error handling in{' '}
            <span className="font-bold text-[#66B2FF]">seconds</span>, not hours.
          </p>
        </motion.div>
      </div>
    </SlideContainer>
  )
}