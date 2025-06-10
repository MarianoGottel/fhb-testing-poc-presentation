'use client';

import { SlideContainer } from '../slide-container';
import { motion } from 'framer-motion';

export function WaterSlide() {
    const quotes = [
        'Code is like water.',
        'It flows, it changes, it adapts.',
        'When we hold water too tightly,',
        'it escapes through our fingers.',
        'When we guide its flow,',
        'we can direct rivers.'
    ];

    return (
        <SlideContainer transition='custom' className='relative overflow-hidden'>
            {/* Animated water background */}
            <div className='absolute inset-0 opacity-20'>
                <svg
                    className='h-full w-full'
                    xmlns='http://www.w3.org/2000/svg'
                    preserveAspectRatio='none'
                    viewBox='0 0 1440 560'>
                    <defs>
                        <linearGradient id='waterGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                            <stop offset='0%' stopColor='#66B2FF' stopOpacity='0.6' />
                            <stop offset='50%' stopColor='#4ECDC4' stopOpacity='0.8' />
                            <stop offset='100%' stopColor='#66B2FF' stopOpacity='0.6' />
                        </linearGradient>
                    </defs>

                    {/* Multiple wave layers for depth */}
                    <motion.path
                        d='M0,160 C320,300,420,240,560,200 C700,160,780,240,960,260 C1140,280,1320,200,1440,160 L1440,560 L0,560 Z'
                        fill='url(#waterGradient)'
                        initial={{
                            d: 'M0,160 C320,300,420,240,560,200 C700,160,780,240,960,260 C1140,280,1320,200,1440,160 L1440,560 L0,560 Z'
                        }}
                        animate={{
                            d: [
                                'M0,160 C320,300,420,240,560,200 C700,160,780,240,960,260 C1140,280,1320,200,1440,160 L1440,560 L0,560 Z',
                                'M0,200 C320,160,420,280,560,240 C700,200,780,160,960,200 C1140,240,1320,180,1440,200 L1440,560 L0,560 Z',
                                'M0,240 C320,200,420,160,560,180 C700,200,780,280,960,240 C1140,200,1320,240,1440,240 L1440,560 L0,560 Z',
                                'M0,160 C320,300,420,240,560,200 C700,160,780,240,960,260 C1140,280,1320,200,1440,160 L1440,560 L0,560 Z'
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />

                    <motion.path
                        d='M0,240 C320,200,420,160,560,180 C700,200,780,280,960,240 C1140,200,1320,240,1440,240 L1440,560 L0,560 Z'
                        fill='url(#waterGradient)'
                        opacity='0.5'
                        initial={{
                            d: 'M0,240 C320,200,420,160,560,180 C700,200,780,280,960,240 C1140,200,1320,240,1440,240 L1440,560 L0,560 Z'
                        }}
                        animate={{
                            d: [
                                'M0,240 C320,200,420,160,560,180 C700,200,780,280,960,240 C1140,200,1320,240,1440,240 L1440,560 L0,560 Z',
                                'M0,200 C320,240,420,200,560,160 C700,120,780,200,960,180 C1140,160,1320,200,1440,200 L1440,560 L0,560 Z',
                                'M0,160 C320,120,420,240,560,200 C700,160,780,120,960,160 C1140,200,1320,160,1440,160 L1440,560 L0,560 Z',
                                'M0,240 C320,200,420,160,560,180 C700,200,780,280,960,240 C1140,200,1320,240,1440,240 L1440,560 L0,560 Z'
                            ]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 1
                        }}
                    />
                </svg>
            </div>

            {/* Flowing particles */}
            <div className='absolute inset-0'>
                {[...Array(15)].map((_, i) => {
                    // Create deterministic positions based on index to avoid hydration mismatches
                    const left = (i * 43) % 100; // Pseudo-random but deterministic
                    const top = (i * 71 + 13) % 100; // Pseudo-random but deterministic
                    const duration = 10 + ((i * 0.5) % 10); // Deterministic duration
                    const delay = (i * 0.4) % 5; // Deterministic delay

                    return (
                        <motion.div
                            key={i}
                            className='absolute h-1 w-1 rounded-full bg-[#66B2FF]'
                            style={{
                                left: `${left}%`,
                                top: `${top}%`
                            }}
                            animate={{
                                x: [0, 100, -50, 0],
                                y: [0, -30, 60, 0],
                                opacity: [0, 0.8, 0.8, 0]
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: 'linear'
                            }}
                        />
                    );
                })}
            </div>

            {/* Quotes */}
            <div className='relative z-10 max-w-4xl space-y-8 text-center'>
                {quotes.map((quote, index) => (
                    <motion.p
                        key={index}
                        className='text-2xl font-light text-white md:text-3xl lg:text-4xl'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.8,
                            duration: 1,
                            ease: 'easeOut'
                        }}
                        style={{
                            textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)'
                        }}>
                        {quote}
                    </motion.p>
                ))}
            </div>

            {/* Bottom message */}
            <motion.div
                className='absolute right-0 bottom-16 left-0 text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 1 }}>
                <p className='text-xl text-white/80'>Let your code flow like water</p>
            </motion.div>
        </SlideContainer>
    );
}
