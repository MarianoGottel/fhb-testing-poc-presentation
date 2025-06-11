'use client';

import { SlideContainer } from '../../slide-container';
import { motion } from 'framer-motion';
import { AlertTriangle, Bot, FileText, Play, Settings, Shield, Telescope, Users, Zap } from 'lucide-react';

export function AITestingTitleSlide() {
    const presentationStructure = [
        { title: 'Issues with current POC', icon: AlertTriangle, color: '#FF6B6B' },
        { title: 'Aurora Process Overview', icon: Settings, color: '#66B2FF' },
        { title: 'AI Workflow', icon: Play, color: '#4ECDC4' },
        { title: 'Developer Transformation', icon: Users, color: '#66B2FF' },
        { title: 'Future Outlook', icon: Telescope, color: '#4ECDC4' }
    ];

    return (
        <SlideContainer transition='fade' className='bg-gradient-to-br from-[#0A0A0A] via-[#001833] to-[#003366]/30'>
            <div className='relative text-center'>
                {/* Animated background elements */}
                <div className='absolute inset-0 overflow-hidden'>
                    {[...Array(20)].map((_, i) => {
                        // Create deterministic positions based on index to avoid hydration mismatches
                        const left = (i * 41) % 100; // Pseudo-random but deterministic
                        const top = (i * 67 + 17) % 100; // Pseudo-random but deterministic
                        const duration = 3 + ((i * 0.2) % 2); // Deterministic duration
                        const delay = (i * 0.3) % 5; // Deterministic delay

                        return (
                            <motion.div
                                key={i}
                                className='absolute h-1 w-1 rounded-full bg-[#66B2FF]/30'
                                style={{
                                    left: `${left}%`,
                                    top: `${top}%`
                                }}
                                animate={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 0.6, 0]
                                }}
                                transition={{
                                    duration: duration,
                                    repeat: Infinity,
                                    delay: delay
                                }}
                            />
                        );
                    })}
                </div>

                {/* Main title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='relative z-10'>
                    <div className='mb-8 flex justify-center space-x-6'>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                            <Bot className='h-16 w-16 text-[#66B2FF]' />
                        </motion.div>
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                            <Zap className='h-16 w-16 text-[#4ECDC4]' />
                        </motion.div>
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                            <Shield className='h-16 w-16 text-[#66B2FF]' />
                        </motion.div>
                    </div>

                    <h1
                        className='mb-6 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl'
                        style={{
                            backgroundImage: 'linear-gradient(135deg, #66B2FF 0%, #4ECDC4 50%, #66B2FF 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            lineHeight: '1.1'
                        }}>
                        Aurora Testing POC
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className='mb-8 text-3xl font-light text-white md:text-4xl'>
                        An AI assisted workflow
                    </motion.h2>

                    {/* Presentation Structure */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className='mx-auto max-w-5xl'>
                        <div className='rounded-xl bg-black/40 p-8 backdrop-blur-sm'>
                            <h3 className='mb-6 text-2xl font-bold text-white'>Presentation Overview</h3>
                            <div className='grid grid-cols-2 gap-6 md:grid-cols-5'>
                                {presentationStructure.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                                            className='text-center'>
                                            <div className='mb-3 flex justify-center'>
                                                <div
                                                    className='rounded-full p-3'
                                                    style={{ backgroundColor: `${item.color}20` }}>
                                                    <Icon className='h-6 w-6' style={{ color: item.color }} />
                                                </div>
                                            </div>
                                            <div className='text-sm font-medium text-white/90'>{item.title}</div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.8, duration: 0.8 }}
                                className='mt-6 rounded-lg bg-[#66B2FF]/10 p-4'>
                                <p className='text-base font-medium text-[#4ECDC4]'>
                                    From POC challenges to AI-enhanced Aurora workflows
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Date and info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className='absolute right-0 bottom-8 left-0 text-center'>
                    <p className='text-lg text-white/60'>Leadership Presentation</p>
                    <p className='text-sm text-white/40'>Aurora Development Process Enhancement</p>
                </motion.div>
            </div>
        </SlideContainer>
    );
}
