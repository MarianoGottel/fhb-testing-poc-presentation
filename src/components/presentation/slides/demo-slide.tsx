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
    if not re.match(r'^\\d{3}-\\d{2}-\\d{4}$', ssn):
        return False, "SSN must be in format XXX-XX-XXXX"
    
    return True, "Account validation successful"`

const agenticPrompt = `Build a complete account validation microservice for First Horizon with:
- REST API endpoints
- PostgreSQL integration
- Full test coverage
- Docker deployment
- Monitoring and logging
- Documentation`

const agenticOutput = `🤖 Autonomous Agent Execution Plan:

1. ✓ Analyzing requirements and architecture patterns
2. ✓ Generating project structure and dependencies
3. ✓ Creating database schema and migrations
4. ✓ Implementing validation service with error handling
5. ✓ Building REST API with OpenAPI documentation
6. ✓ Writing comprehensive test suite (98% coverage)
7. ✓ Setting up Docker configuration
8. ✓ Configuring monitoring with Prometheus
9. ✓ Generating deployment documentation

📁 Files created: 47
📊 Test coverage: 98%
🚀 Ready to deploy

Total execution time: 45 seconds`

export function DemoSlide() {
  const [showTraditional, setShowTraditional] = useState(true)
  const [traditionalProgress, setTraditionalProgress] = useState(0)
  const [aiProgress, setAiProgress] = useState(0)
  const [typedCode, setTypedCode] = useState('')
  const [currentView, setCurrentView] = useState(0) // 0: traditional, 1: AI, 2: agentic

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
          The Evolution of Development
        </motion.h2>

        <div className="grid grid-cols-3 gap-6">
          {/* Traditional Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg border border-gray-700 bg-black/40 p-4"
          >
            <div className="mb-3 flex flex-col">
              <h3 className="text-xl font-semibold text-white">Traditional</h3>
              <div className="mt-1 flex items-center space-x-2 text-red-400">
                <Timer className="h-4 w-4" />
                <span className="text-sm font-mono">~2 hours</span>
              </div>
            </div>

            <div className="h-[350px] overflow-auto rounded bg-gray-900 p-3">
              <pre className="text-xs text-gray-300">
                <code>{traditionalCode}</code>
              </pre>
            </div>
            
            <p className="mt-3 text-sm text-gray-400">Manual coding, testing, documentation</p>
          </motion.div>

          {/* AI-Powered Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg border border-[#66B2FF] bg-black/40 p-4"
          >
            <div className="mb-3 flex flex-col">
              <h3 className="text-xl font-semibold text-white">AI-Powered</h3>
              <div className="mt-1 flex items-center space-x-2 text-yellow-400">
                <Timer className="h-4 w-4" />
                <span className="text-sm font-mono">~2 minutes</span>
              </div>
            </div>

            <div className="space-y-3">
              {/* Prompt */}
              <div className="rounded bg-gray-800 p-2">
                <p className="text-xs font-mono text-[#66B2FF]">Prompt:</p>
                <p className="mt-1 text-xs text-gray-300">{aiPrompt}</p>
              </div>

              {/* Generated Code */}
              <div className="h-[270px] overflow-auto rounded bg-gray-900 p-3">
                <pre className="text-xs text-gray-300">
                  <code>{aiGeneratedCode}</code>
                </pre>
              </div>
            </div>
            
            <p className="mt-3 text-sm text-[#66B2FF]">Complete code with error handling</p>
          </motion.div>

          {/* Agentic Future */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg border border-[#4ECDC4] bg-black/40 p-4"
          >
            <div className="mb-3 flex flex-col">
              <h3 className="text-xl font-semibold text-white">Agentic Future</h3>
              <div className="mt-1 flex items-center space-x-2 text-green-400">
                <Timer className="h-4 w-4" />
                <span className="text-sm font-mono">~45 seconds</span>
              </div>
            </div>

            <div className="space-y-3">
              {/* Prompt */}
              <div className="rounded bg-gray-800 p-2">
                <p className="text-xs font-mono text-[#4ECDC4]">High-level request:</p>
                <p className="mt-1 text-xs text-gray-300">{agenticPrompt}</p>
              </div>

              {/* Agent Output */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="h-[270px] overflow-auto rounded bg-gray-900 p-3"
              >
                <pre className="text-xs text-gray-300 whitespace-pre-wrap">{agenticOutput}</pre>
              </motion.div>
            </div>
            
            <p className="mt-3 text-sm text-[#4ECDC4]">Complete microservice, deployed</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xl text-white/80">
            From hours to minutes to seconds. From code to solutions to{' '}
            <span className="font-bold text-[#4ECDC4]">complete systems</span>.
          </p>
        </motion.div>
      </div>
    </SlideContainer>
  )
}