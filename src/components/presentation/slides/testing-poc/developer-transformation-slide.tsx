'use client';

import { SlideContainer } from '../../slide-container';
import { motion } from 'framer-motion';
import { Bot, Code, Eye, Settings, TrendingUp, Users, Zap } from 'lucide-react';

export function DeveloperTransformationSlide() {
    const roleTransformation = [
        {
            title: 'Before: Manual Development',
            activities: [
                'Manual test case creation',
                'Hand-coding components',
                'Writing individual tests',
                'Manual integration testing'
            ],
            timeSpent: '80% hands-on coding',
            skillLevel: 'Junior-Senior',
            productivity: 'Standard output',
            icon: Code,
            color: '#FF6B6B'
        },
        {
            title: 'After: AI Orchestration',
            activities: [
                'AI workflow configuration',
                'Quality review & validation',
                'Process optimization',
                'Strategic architecture decisions'
            ],
            timeSpent: '80% orchestration & review',
            skillLevel: 'Expert Level Required',
            productivity: 'Dramatic increase',
            icon: Settings,
            color: '#4ECDC4'
        }
    ];

    return (
        <SlideContainer
            transition='fade'
            className='justify-start bg-gradient-to-br from-[#0A0A0A] via-[#001A0D] to-[#0A0A0A] py-12'>
            <div className='flex w-full max-w-7xl flex-col'>
                <motion.h2
                    className='mb-6 text-center text-5xl font-bold text-white md:text-6xl lg:text-7xl'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    The Developer Transformation
                </motion.h2>

                <motion.p
                    className='mb-8 text-center text-3xl font-light text-[#4ECDC4] md:text-4xl'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}>
                    From coding to orchestrating - expertise becomes essential
                </motion.p>

                {/* Role Transformation Comparison - More Compact */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className='mb-4 grid gap-4 md:grid-cols-2'>
                    {roleTransformation.map((role, index) => {
                        const Icon = role.icon;

                        return (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                                className={`rounded-xl border p-4 ${
                                    index === 0
                                        ? 'border-red-500/30 bg-gradient-to-r from-red-900/20 to-red-800/10'
                                        : 'border-[#4ECDC4]/30 bg-gradient-to-r from-[#4ECDC4]/20 to-[#66B2FF]/10'
                                }`}>
                                <div className='mb-4 flex items-center space-x-3'>
                                    <div className='rounded-lg p-2' style={{ backgroundColor: `${role.color}20` }}>
                                        <Icon className='h-6 w-6' style={{ color: role.color }} />
                                    </div>
                                    <h3 className='text-2xl font-bold text-white'>{role.title}</h3>
                                </div>

                                <div className='mb-4 space-y-2'>
                                    {role.activities.map((activity, actIndex) => (
                                        <div key={actIndex} className='flex items-center space-x-3'>
                                            <div
                                                className='h-2 w-2 rounded-full'
                                                style={{ backgroundColor: role.color }}
                                            />
                                            <span className='text-base text-white/90'>{activity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className='space-y-2'>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-sm text-white/70'>Time Allocation:</span>
                                        <span className='text-base font-medium' style={{ color: role.color }}>
                                            {role.timeSpent}
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-sm text-white/70'>Skill Requirement:</span>
                                        <span className='text-base font-medium' style={{ color: role.color }}>
                                            {role.skillLevel}
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-sm text-white/70'>Productivity:</span>
                                        <span className='text-base font-bold' style={{ color: role.color }}>
                                            {role.productivity}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Section - More Compact */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className='rounded-xl border-2 border-[#66B2FF]/50 bg-gradient-to-r from-[#66B2FF]/20 to-[#4ECDC4]/20 p-4 text-center'>
                    <div className='space-y-4'>
                        <div className='rounded-xl bg-black/40 p-6'>
                            <p className='mb-6 text-2xl text-white/90'>
                                <span className='font-bold text-[#4ECDC4]'>AI doesn't replace developers</span> - it
                                transforms them into{' '}
                                <span className='font-bold text-[#66B2FF]'>strategic orchestrators</span>
                            </p>

                            <div className='grid gap-6 md:grid-cols-2'>
                                <div className='rounded-lg bg-[#66B2FF]/10 p-4'>
                                    <h4 className='mb-4 text-xl font-bold text-[#66B2FF]'>Expert Developers Now:</h4>
                                    <div className='space-y-3'>
                                        <div className='flex items-center space-x-3'>
                                            <Zap className='h-4 w-4 text-[#66B2FF]' />
                                            <span className='text-base text-white/90'>Design AI workflows</span>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <Eye className='h-4 w-4 text-[#66B2FF]' />
                                            <span className='text-base text-white/90'>Validate AI outputs</span>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <Bot className='h-4 w-4 text-[#66B2FF]' />
                                            <span className='text-base text-white/90'>
                                                Control & Orchestrate agents
                                            </span>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <TrendingUp className='h-4 w-4 text-[#66B2FF]' />
                                            <span className='text-base text-white/90'>Optimize processes</span>
                                        </div>
                                        <div className='flex items-center space-x-3'>
                                            <Users className='h-4 w-4 text-[#66B2FF]' />
                                            <span className='text-base text-white/90'>Lead teams effectively</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-lg bg-[#4ECDC4]/10 p-4'>
                                    <h4 className='mb-4 text-xl font-bold text-[#4ECDC4]'>Business Impact:</h4>
                                    <div className='space-y-3'>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-base text-white/80'>Productivity:</span>
                                            <span className='text-lg font-bold text-[#4ECDC4]'>
                                                Dramatically higher
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-base text-white/80'>Manual effort:</span>
                                            <span className='text-lg font-bold text-[#4ECDC4]'>Only 20%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0, duration: 0.8 }}
                            className='rounded-xl bg-gradient-to-r from-[#4ECDC4]/30 to-[#66B2FF]/30 p-6'>
                            <p className='mb-2 text-xl font-bold text-white'>The Critical Success Factor</p>
                            <p className='text-lg text-white/90'>
                                Investment in <span className='font-bold text-[#4ECDC4]'>AI enhanced workflows</span>{' '}
                                built by
                                <span className='font-bold text-[#66B2FF]'> expert developers</span>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </SlideContainer>
    );
}
