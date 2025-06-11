'use client';

import { SlideContainer } from '../../slide-container';
import { motion } from 'framer-motion';
import { AlertTriangle, MessageSquareX, Target, Users, Workflow } from 'lucide-react';

export function ProblemSlide() {
    const pocProblems = [
        {
            icon: Workflow,
            title: 'Waterfall in Agile Environment',
            description: 'Testing process is siloed and waterfall-like',
            impact: "Conflicts with Aurora's agile methodology",
            color: '#FF6B6B',
            rating: '2-5 Pod Rating'
        },
        {
            icon: Users,
            title: 'Team Integration Failure',
            description: 'Testers operate as separate group, not integrated',
            impact: 'Made entire team less productive',
            color: '#FFB366',
            rating: 'Critical Issue'
        },
        {
            icon: Target,
            title: 'Misaligned Success Metrics',
            description: "Focus on tester 'tickets' vs pod 'tasks'",
            impact: 'Huge misalignment of success definition',
            color: '#FF6B6B',
            rating: 'Process Gap'
        },
        {
            icon: AlertTriangle,
            title: 'Quality Blind Spots',
            description: 'Testing requirements created from own constraints, not user stories',
            impact: 'Results in wrong testing requirements and defects.',
            color: '#FFB366',
            rating: 'Time consuming'
        },
        {
            icon: MessageSquareX,
            title: 'Knowledge & Communication Gaps',
            description: 'Lack of understanding of pod mission',
            impact: 'Unproductive dialogue, handholding',
            color: '#FF6B6B',
            rating: 'Efficiency Loss'
        },
        {
            icon: Workflow,
            title: 'No Understanding of the Application',
            description: 'No understanding for iterative approach and development',
            impact: 'Not following the flow, unable to navigate application independently',
            color: '#FF6B6B',
            rating: 'Knowledge Gap'
        }
    ];

    const assessmentResults = [
        { stakeholder: 'Aurora Pod Leads', rating: '2-5', sentiment: 'Negative', color: '#FF6B6B' },
        { stakeholder: 'FH Test Leaders', rating: '6-9', sentiment: 'Mixed', color: '#FFB366' },
        { stakeholder: 'Wipro Testing Team', rating: '8-9', sentiment: 'Positive', color: '#4ECDC4' }
    ];

    return (
        <SlideContainer transition='slide' className='bg-gradient-to-br from-[#0A0A0A] via-[#1A0A0A] to-[#0A0A0A]'>
            <div className='w-full max-w-7xl'>
                <motion.h2
                    className='mb-3 text-center text-4xl font-bold text-white'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    Current Testing POC Reality
                </motion.h2>

                <motion.p
                    className='mb-6 text-center text-lg text-red-400'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}>
                    "POC process does not adequately support Aurora's full agile, integrated approach"
                </motion.p>

                {/* Assessment divergence */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className='mb-6 rounded-xl border border-red-500/30 bg-gradient-to-r from-red-900/20 to-orange-900/20 p-4'>
                    <h3 className='mb-2 text-center text-xl font-bold text-white'>Significant Assessment Divergence</h3>
                    <p className='mb-4 text-center text-sm text-white/70'>
                        Rating Scale: <span className='text-red-400'>1 = Very negative/unproductive</span> •{' '}
                        <span className='text-[#4ECDC4]'>10 = Extremely positive/helpful</span>
                    </p>
                    <div className='grid gap-3 md:grid-cols-3'>
                        {assessmentResults.map((result, index) => (
                            <motion.div
                                key={result.stakeholder}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                className='rounded-lg bg-black/40 p-3 text-center'>
                                <div className='text-sm font-semibold text-white'>{result.stakeholder}</div>
                                <div className='text-2xl font-bold' style={{ color: result.color }}>
                                    {result.rating}
                                </div>
                                <div className='text-xs text-white/60'>{result.sentiment} Assessment</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* POC problems grid - 2 columns to save space */}
                <div className='mb-6 grid gap-4 md:grid-cols-2'>
                    {pocProblems.map((problem, index) => {
                        const Icon = problem.icon;

                        return (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className='group relative overflow-hidden rounded-xl border border-red-500/30 bg-black/60 p-4'>
                                {/* Background gradient */}
                                <div
                                    className='absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20'
                                    style={{
                                        background: `radial-gradient(circle at top left, ${problem.color}40, transparent 60%)`
                                    }}
                                />

                                <div className='relative z-10'>
                                    <div className='mb-3 flex items-center justify-between'>
                                        <div className='flex items-center space-x-2'>
                                            <div
                                                className='rounded-lg p-1'
                                                style={{ backgroundColor: `${problem.color}20` }}>
                                                <Icon className='h-4 w-4' style={{ color: problem.color }} />
                                            </div>
                                            <h3 className='text-sm font-semibold text-white'>{problem.title}</h3>
                                        </div>
                                        <span className='rounded-full bg-red-900/40 px-2 py-1 text-xs font-medium text-red-400'>
                                            {problem.rating}
                                        </span>
                                    </div>

                                    <p className='mb-2 text-sm text-white/80'>{problem.description}</p>
                                    <p className='text-xs font-medium text-red-400'>→ {problem.impact}</p>
                                </div>

                                {/* Pulsing border effect */}
                                <motion.div
                                    className='absolute inset-0 rounded-xl border-2 border-red-500/0'
                                    animate={{
                                        borderColor: [`${problem.color}00`, `${problem.color}40`, `${problem.color}00`]
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

                {/* Key findings */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className='rounded-xl border border-red-500/30 bg-gradient-to-r from-red-900/20 to-orange-900/20 p-4 text-center'>
                    <h3 className='mb-4 text-2xl font-bold text-white'>Critical Findings</h3>

                    <div className='grid gap-4 md:grid-cols-3'>
                        <div>
                            <div className='text-3xl font-bold text-red-400'>Incomplete</div>
                            <div className='text-sm text-white/70'>POC due to environments</div>
                            <div className='text-xs text-red-300'>not being ready</div>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-orange-400'>Siloed</div>
                            <div className='text-sm text-white/70'>Testers vs Developers</div>
                            <div className='text-xs text-orange-300'>independent groups</div>
                        </div>
                        <div>
                            <div className='text-3xl font-bold text-red-400'>Lacks</div>
                            <div className='text-sm text-white/70'>understanding of the application</div>
                            <div className='text-xs text-red-300'>due to knowledge gaps/ interest</div>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                        className='mt-4 text-lg text-white/80'>
                        The POC approach <span className='font-bold text-red-400'>fundamentally conflicts</span> with
                        Aurora's agile development methodology.
                    </motion.p>
                </motion.div>
            </div>
        </SlideContainer>
    );
}
