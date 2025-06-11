'use client';

import { SlideContainer } from '../../slide-container';
import { motion } from 'framer-motion';
import { Brain, GitBranch, Rocket, Settings, TrendingUp } from 'lucide-react';

export function FutureOutlookSlide() {
    const futureInitiatives = [
        {
            icon: TrendingUp,
            title: 'Continuous Improvement',
            description: 'Ongoing adjustment and optimization of current tools',
            impact: 'Enhanced efficiency and quality through iterative refinement',
            color: '#4ECDC4',
            rating: 'Core Strategy'
        },
        {
            icon: Brain,
            title: 'New Model Capabilities',
            description: 'Leveraging latest AI and ML model capabilities',
            impact: 'Advanced testing intelligence and automation',
            color: '#45B7D1',
            rating: 'Innovation'
        },
        {
            icon: Rocket,
            title: 'Multi-Application Roll-Out',
            description: 'Scaling proven solutions to other applications',
            impact: 'Organization-wide testing standardization and efficiency',
            color: '#96CEB4',
            rating: 'Expansion'
        },
        {
            icon: Settings,
            title: 'Enhanced Configurability',
            description: 'Flexible, customizable testing frameworks',
            impact: 'Adaptable solutions for diverse project needs',
            color: '#FFEAA7',
            rating: 'Flexibility'
        },
        {
            icon: GitBranch,
            title: 'CI/CD Integration',
            description: 'Seamless integration into continuous delivery pipelines',
            impact: 'Automated testing throughout development lifecycle',
            color: '#DDA0DD',
            rating: 'Automation'
        }
    ];

    const visionPoints = [
        { metric: 'Scalable', description: 'Across Applications', detail: 'enterprise-wide adoption' },
        { metric: 'Intelligent', description: 'AI-Powered Testing', detail: 'advanced automation' },
        { metric: 'Integrated', description: 'End-to-End Pipeline', detail: 'seamless workflow' }
    ];

    return (
        <SlideContainer
            transition='slide'
            className='justify-start bg-gradient-to-br from-[#0A0A0A] via-[#0A1A0A] to-[#0A0A0A] py-12'>
            <div className='flex w-full max-w-7xl flex-col'>
                <motion.h2
                    className='mb-4 text-center text-5xl font-bold text-white md:text-6xl lg:text-7xl'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    Future Outlook
                </motion.h2>

                <motion.p
                    className='mb-4 text-center text-3xl font-light text-green-400 md:text-4xl'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}>
                    "Building the next generation of intelligent, integrated testing solutions"
                </motion.p>

                {/* Vision statement */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className='mb-4 rounded-xl border border-green-500/30 bg-gradient-to-r from-green-900/20 to-blue-900/20 p-4'>
                    <h3 className='mb-4 text-center text-2xl font-bold text-white'>Strategic Vision</h3>
                    <div className='grid gap-4 md:grid-cols-3'>
                        {visionPoints.map((point, index) => (
                            <motion.div
                                key={point.metric}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                className='rounded-lg bg-black/40 p-4 text-center'>
                                <div className='text-3xl font-bold text-green-400'>{point.metric}</div>
                                <div className='text-lg font-semibold text-white'>{point.description}</div>
                                <div className='text-base text-white/60'>{point.detail}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Future initiatives grid */}
                <div className='mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {futureInitiatives.map((initiative, index) => {
                        const Icon = initiative.icon;

                        return (
                            <motion.div
                                key={initiative.title}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className='group relative overflow-hidden rounded-xl border border-green-500/30 bg-black/60 p-4'>
                                {/* Background gradient */}
                                <div
                                    className='absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20'
                                    style={{
                                        background: `radial-gradient(circle at top left, ${initiative.color}40, transparent 60%)`
                                    }}
                                />

                                <div className='relative z-10'>
                                    <div className='mb-4 flex items-center justify-between'>
                                        <div className='flex items-center space-x-3'>
                                            <div
                                                className='rounded-lg p-2'
                                                style={{ backgroundColor: `${initiative.color}20` }}>
                                                <Icon className='h-6 w-6' style={{ color: initiative.color }} />
                                            </div>
                                            <h3 className='text-xl font-semibold text-white'>{initiative.title}</h3>
                                        </div>
                                        <span className='rounded-full bg-green-900/40 px-3 py-1 text-sm font-medium text-green-400'>
                                            {initiative.rating}
                                        </span>
                                    </div>

                                    <p className='mb-3 text-base text-white/80'>{initiative.description}</p>
                                    <p className='text-base font-medium text-green-400'>→ {initiative.impact}</p>
                                </div>

                                {/* Pulsing border effect */}
                                <motion.div
                                    className='absolute inset-0 rounded-xl border-2 border-green-500/0'
                                    animate={{
                                        borderColor: [
                                            `${initiative.color}00`,
                                            `${initiative.color}40`,
                                            `${initiative.color}00`
                                        ]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.5
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Key outcomes */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className='rounded-xl border border-green-500/30 bg-gradient-to-r from-green-900/20 to-blue-900/20 p-4 text-center'>
                    <h3 className='mb-4 text-2xl font-bold text-white'>Expected Outcomes</h3>

                    <div className='grid gap-4 md:grid-cols-3'>
                        <div>
                            <div className='text-3xl font-bold text-green-400'>Faster</div>
                            <div className='text-base text-white/70'>Time to Market</div>
                            <div className='text-sm text-green-300'>through automation</div>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-blue-400'>Higher</div>
                            <div className='text-base text-white/70'>Quality Standards</div>
                            <div className='text-sm text-blue-300'>intelligent testing</div>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-green-400'>Broader</div>
                            <div className='text-base text-white/70'>Coverage & Reach</div>
                            <div className='text-sm text-green-300'>across all applications</div>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                        className='mt-4 text-lg text-white/80'>
                        The future of testing is <span className='font-bold text-green-400'>intelligent</span>,{' '}
                        <span className='font-bold text-blue-400'>integrated</span>, and{' '}
                        <span className='font-bold text-green-400'>scalable</span>.
                    </motion.p>
                </motion.div>
            </div>
        </SlideContainer>
    );
}
