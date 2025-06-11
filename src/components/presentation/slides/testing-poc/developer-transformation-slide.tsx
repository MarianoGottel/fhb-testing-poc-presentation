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
        <SlideContainer transition='fade' className='bg-gradient-to-br from-[#0A0A0A] via-[#001A0D] to-[#0A0A0A]'>
            <div className='w-full max-w-7xl'>
                <motion.h2
                    className='mb-1 text-center text-3xl font-bold text-white'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    The Developer Transformation
                </motion.h2>

                <motion.p
                    className='mb-4 text-center text-base text-[#4ECDC4]'
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
                                <div className='mb-3 flex items-center space-x-2'>
                                    <div className='rounded-lg p-1' style={{ backgroundColor: `${role.color}20` }}>
                                        <Icon className='h-5 w-5' style={{ color: role.color }} />
                                    </div>
                                    <h3 className='text-lg font-bold text-white'>{role.title}</h3>
                                </div>

                                <div className='mb-3 space-y-1'>
                                    {role.activities.map((activity, actIndex) => (
                                        <div key={actIndex} className='flex items-center space-x-2'>
                                            <div
                                                className='h-1 w-1 rounded-full'
                                                style={{ backgroundColor: role.color }}
                                            />
                                            <span className='text-xs text-white/80'>{activity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className='space-y-1'>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-xs text-white/60'>Time Allocation:</span>
                                        <span className='text-sm font-medium' style={{ color: role.color }}>
                                            {role.timeSpent}
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-xs text-white/60'>Skill Requirement:</span>
                                        <span className='text-sm font-medium' style={{ color: role.color }}>
                                            {role.skillLevel}
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='text-xs text-white/60'>Productivity:</span>
                                        <span className='text-sm font-bold' style={{ color: role.color }}>
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
                        <div className='rounded-xl bg-black/40 p-4'>
                            <p className='mb-3 text-xl text-white/90'>
                                <span className='font-bold text-[#4ECDC4]'>AI doesn't replace developers</span> - it
                                transforms them into{' '}
                                <span className='font-bold text-[#66B2FF]'>strategic orchestrators</span>
                            </p>

                            <div className='grid gap-3 md:grid-cols-2'>
                                <div className='rounded-lg bg-[#66B2FF]/10 p-3'>
                                    <h4 className='mb-2 text-base font-bold text-[#66B2FF]'>Expert Developers Now:</h4>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <div className='space-y-1'>
                                            <div className='flex items-center space-x-2'>
                                                <Zap className='h-3 w-3 text-[#66B2FF]' />
                                                <span className='text-xs text-white/80'>Design AI workflows</span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <Eye className='h-3 w-3 text-[#66B2FF]' />
                                                <span className='text-xs text-white/80'>Validate AI outputs</span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <Bot className='h-3 w-3 text-[#66B2FF]' />
                                                <span className='text-xs text-white/80'>
                                                    Control & Orchestrate agents
                                                </span>
                                            </div>
                                        </div>
                                        <div className='space-y-1'>
                                            <div className='flex items-center space-x-2'>
                                                <TrendingUp className='h-3 w-3 text-[#66B2FF]' />
                                                <span className='text-xs text-white/80'>Optimize processes</span>
                                            </div>
                                            <div className='flex items-center space-x-2'>
                                                <Users className='h-3 w-3 text-[#66B2FF]' />
                                                <span className='text-xs text-white/80'>Lead teams effectively</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-lg bg-[#4ECDC4]/10 p-3'>
                                    <h4 className='mb-2 text-base font-bold text-[#4ECDC4]'>Business Impact:</h4>
                                    <div className='space-y-1'>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-xs text-white/70'>Productivity:</span>
                                            <span className='text-sm font-bold text-[#4ECDC4]'>
                                                Dramatically higher
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-xs text-white/70'>Manual effort:</span>
                                            <span className='text-sm font-bold text-[#4ECDC4]'>Only 20%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0, duration: 0.8 }}
                            className='rounded-xl bg-gradient-to-r from-[#4ECDC4]/30 to-[#66B2FF]/30 p-4'>
                            <p className='mb-1 text-lg font-bold text-white'>The Critical Success Factor</p>
                            <p className='text-base text-white/90'>
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
