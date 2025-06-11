'use client';

import { SlideContainer } from '../../slide-container';
import { motion } from 'framer-motion';
import {
    Building,
    CheckCircle,
    Code,
    Eye,
    FileText,
    MapPin,
    Palette,
    Rocket,
    Search,
    TestTube,
    Upload,
    UserCheck,
    Users,
    Zap
} from 'lucide-react';

export function ProcessOverviewSlide() {
    const auroraProcess = [
        // Phase 1: Planning & Design (Steps 1-7)
        { step: 1, title: 'Product Research', icon: Search, phase: 'Planning', aiEnhanced: false },
        { step: 2, title: 'User Journey Definition', icon: MapPin, phase: 'Planning', aiEnhanced: true },
        { step: 3, title: 'Technical Architecture', icon: Building, phase: 'Planning', aiEnhanced: true },
        {
            step: 4,
            title: 'Project Workstreams & Tasks (Jira User Stories)',
            icon: Users,
            phase: 'Planning',
            aiEnhanced: true
        },
        { step: 5, title: 'Screen Specification', icon: FileText, phase: 'Planning', aiEnhanced: false },
        { step: 6, title: 'Final Design', icon: Palette, phase: 'Planning', aiEnhanced: false },
        { step: 7, title: 'Define Test Cases and Test Scripts', icon: TestTube, phase: 'Planning', aiEnhanced: true },

        // Phase 2: Development & Delivery (Steps 8-14)
        { step: 8, title: 'Code Development', icon: Code, phase: 'Development', aiEnhanced: true },
        { step: 9, title: 'Peer Review', icon: Eye, phase: 'Development', aiEnhanced: true },
        { step: 10, title: 'Pipeline Deployment', icon: Upload, phase: 'Development', aiEnhanced: false },
        { step: 11, title: 'Integration Testing', icon: CheckCircle, phase: 'Development', aiEnhanced: true },
        { step: 12, title: 'UAT', icon: UserCheck, phase: 'Development', aiEnhanced: false },
        { step: 13, title: 'Production Ready', icon: Rocket, phase: 'Development', aiEnhanced: false },
        { step: 14, title: 'Release Deployment', icon: Zap, phase: 'Development', aiEnhanced: false }
    ];

    const planningSteps = auroraProcess.filter((step) => step.phase === 'Planning');
    const developmentSteps = auroraProcess.filter((step) => step.phase === 'Development');

    return (
        <SlideContainer
            transition='slide'
            className='justify-start bg-gradient-to-br from-[#0A0A0A] via-[#001833] to-[#0A0A0A] py-12'>
            <div className='w-full max-w-7xl'>
                <motion.h2
                    className='mb-3 text-center text-5xl font-bold text-white'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    Aurora Development Process
                </motion.h2>

                <motion.p
                    className='mb-8 text-center text-xl text-[#4ECDC4]'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}>
                    AI enhancements highlighted in blue
                </motion.p>

                <div className='grid gap-8 md:grid-cols-2'>
                    {/* Planning Phase */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className='space-y-6'>
                        <div className='text-center'>
                            <h3 className='mb-2 text-2xl font-bold text-[#4ECDC4]'>Planning & Design</h3>
                            <p className='text-sm text-white/60'>Steps 1-7</p>
                        </div>

                        <div className='space-y-3'>
                            {planningSteps.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                        className={`flex items-center space-x-4 rounded-lg p-3 ${
                                            step.aiEnhanced
                                                ? 'border border-[#66B2FF]/30 bg-gradient-to-r from-[#66B2FF]/20 to-[#66B2FF]/10'
                                                : 'border border-white/10 bg-black/20'
                                        }`}>
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold ${
                                                step.aiEnhanced
                                                    ? 'border-[#66B2FF] bg-[#66B2FF]/20 text-[#66B2FF]'
                                                    : 'border-white/30 bg-white/10 text-white/70'
                                            }`}>
                                            {step.step}
                                        </div>

                                        <Icon
                                            className={`h-5 w-5 ${
                                                step.aiEnhanced ? 'text-[#66B2FF]' : 'text-white/60'
                                            }`}
                                        />

                                        <div className='flex-1'>
                                            <div
                                                className={`font-medium ${
                                                    step.aiEnhanced ? 'text-white' : 'text-white/80'
                                                }`}>
                                                {step.title}
                                            </div>
                                            {step.aiEnhanced && (
                                                <div className='text-xs font-medium text-[#66B2FF]'>AI Enhanced</div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Development Phase */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className='space-y-6'>
                        <div className='text-center'>
                            <h3 className='mb-2 text-2xl font-bold text-[#4ECDC4]'>Development & Delivery</h3>
                            <p className='text-sm text-white/60'>Steps 8-14</p>
                        </div>

                        <div className='space-y-3'>
                            {developmentSteps.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                                        className={`flex items-center space-x-4 rounded-lg p-3 ${
                                            step.aiEnhanced
                                                ? 'border border-[#66B2FF]/30 bg-gradient-to-r from-[#66B2FF]/20 to-[#66B2FF]/10'
                                                : 'border border-white/10 bg-black/20'
                                        }`}>
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold ${
                                                step.aiEnhanced
                                                    ? 'border-[#66B2FF] bg-[#66B2FF]/20 text-[#66B2FF]'
                                                    : 'border-white/30 bg-white/10 text-white/70'
                                            }`}>
                                            {step.step}
                                        </div>

                                        <Icon
                                            className={`h-5 w-5 ${
                                                step.aiEnhanced ? 'text-[#66B2FF]' : 'text-white/60'
                                            }`}
                                        />

                                        <div className='flex-1'>
                                            <div
                                                className={`font-medium ${
                                                    step.aiEnhanced ? 'text-white' : 'text-white/80'
                                                }`}>
                                                {step.title}
                                            </div>
                                            {step.aiEnhanced && (
                                                <div className='text-xs font-medium text-[#66B2FF]'>AI Enhanced</div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Summary */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className='mt-8 rounded-xl border border-[#66B2FF]/30 bg-gradient-to-r from-[#66B2FF]/10 to-[#4ECDC4]/10 p-6'>
                    <div className='grid gap-6 md:grid-cols-3'>
                        <div className='text-center'>
                            <div className='mb-2 text-3xl font-bold text-white'>14</div>
                            <div className='text-sm text-white/70'>Total Process Steps</div>
                        </div>
                        <div className='text-center'>
                            <div className='mb-2 text-3xl font-bold text-[#66B2FF]'>7</div>
                            <div className='text-sm text-white/70'>AI Enhanced Steps</div>
                        </div>
                        <div className='text-center'>
                            <div className='mb-2 text-3xl font-bold text-[#4ECDC4]'>0</div>
                            <div className='text-sm text-white/70'>Process Changes</div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 0.8 }}
                        className='mt-6 text-center'>
                        <p className='text-lg text-white/80'>
                            <span className='font-bold text-[#66B2FF]'>AI enhancement</span> fits seamlessly into
                            Aurora's <span className='font-bold text-[#4ECDC4]'>proven workflow</span> without
                            disruption
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </SlideContainer>
    );
}
