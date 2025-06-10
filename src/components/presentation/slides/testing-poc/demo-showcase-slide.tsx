'use client';

import { useState } from 'react';

import { SlideContainer } from '../../slide-container';
import { UserJourneyE2ESlideshow } from './user-journey-e2e-slideshow';
import { motion } from 'framer-motion';
import { Clock, Layers, TestTube2 } from 'lucide-react';

export function DemoShowcaseSlide() {
    const [isE2ESlideshowOpen, setIsE2ESlideshowOpen] = useState(false);

    const demoResults = [
        {
            title: 'User Journey → E2E Tests',
            time: '30 minutes',
            oldTime: '~ 1 working day',
            improvement: '~ 90% faster',
            icon: TestTube2,
            color: '#66B2FF',
            description: 'Complete flow testing from user journey'
        },
        {
            title: 'User Story → Component + Tests',
            time: '30 minutes',
            oldTime: '~ 1 working day',
            improvement: '~ 90% faster',
            icon: Layers,
            color: '#4ECDC4',
            description: 'Individual component with Storybook testing'
        }
    ];

    const e2eWorkflowMetrics = [
        { label: 'User Journey Input', value: 'Process diagram', color: '#66B2FF' },
        { label: 'Page Objects Generated', value: 'From process diagram', color: '#4ECDC4' },
        { label: 'E2E Test Scripts', value: 'From page objects', color: '#66B2FF' }
    ];

    const componentWorkflowMetrics = [
        { label: 'User Story Input', value: 'Acceptance criteria', color: '#4ECDC4' },
        { label: 'Test Cases Generated', value: 'From criteria', color: '#66B2FF' },
        { label: 'Component Built', value: 'From Figma', color: '#4ECDC4' },
        { label: 'Storybook Tests', value: 'Based on test cases', color: '#66B2FF' }
    ];

    return (
        <>
            <SlideContainer transition='slide' className='bg-gradient-to-br from-[#0A0A0A] via-[#0A0A1A] to-[#0A0A0A]'>
                <div className='w-full max-w-7xl'>
                    <motion.h2
                        className='mb-3 text-center text-5xl font-bold text-white'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}>
                        AI Workflows
                    </motion.h2>

                    <motion.p
                        className='mb-6 text-center text-xl text-[#4ECDC4]'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}></motion.p>

                    {/* Demo results */}
                    <div className='mb-6 grid gap-4 md:grid-cols-2'>
                        {demoResults.map((demo, index) => {
                            const Icon = demo.icon;

                            return (
                                <motion.div
                                    key={demo.title}
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className='group relative overflow-hidden rounded-xl border border-white/20 bg-black/40 p-4'>
                                    {/* Background gradient */}
                                    <div
                                        className='absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20'
                                        style={{
                                            background: `radial-gradient(circle at top left, ${demo.color}40, transparent 60%)`
                                        }}
                                    />

                                    <div className='relative z-10'>
                                        <div className='mb-3 flex items-center space-x-3'>
                                            <div
                                                className='rounded-lg p-2'
                                                style={{ backgroundColor: `${demo.color}20` }}>
                                                <Icon className='h-5 w-5' style={{ color: demo.color }} />
                                            </div>
                                            <div>
                                                <h3 className='text-lg font-semibold text-white'>{demo.title}</h3>
                                                <p className='text-xs text-white/60'>{demo.description}</p>
                                            </div>
                                        </div>

                                        <div className='space-y-2'>
                                            <div className='flex items-center justify-between'>
                                                <span className='text-white/60'>AI Time:</span>
                                                <span className='font-bold' style={{ color: demo.color }}>
                                                    {demo.time}
                                                </span>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <span className='text-white/60'>Manual Time:</span>
                                                <span className='text-red-400 line-through'>{demo.oldTime}</span>
                                            </div>
                                            <div className='mt-2 text-center'>
                                                <span className='rounded-full bg-green-900/40 px-3 py-1 text-sm font-medium text-green-400'>
                                                    {demo.improvement} ⚡
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Two separate workflows */}
                    <div className='mb-6 grid gap-6 md:grid-cols-2'>
                        {/* Workflow 1: User Journey → E2E Tests - CLICKABLE */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                            onClick={() => {
                                console.log('Workflow 1 clicked! Opening E2E slideshow...');
                                setIsE2ESlideshowOpen(true);
                            }}
                            className='cursor-pointer rounded-xl border border-[#66B2FF]/30 bg-gradient-to-r from-[#66B2FF]/10 to-[#66B2FF]/5 p-5 transition-all hover:scale-105 hover:border-[#66B2FF]/70 hover:bg-gradient-to-r hover:from-[#66B2FF]/20 hover:to-[#66B2FF]/15'>
                            <h3 className='mb-3 text-center text-lg font-bold text-[#66B2FF]'>
                                Workflow 1: User Journey → E2E Tests
                                <span className='ml-2 animate-pulse text-sm text-yellow-400'>🖱️ Click to view</span>
                            </h3>

                            {/* E2E Workflow steps */}
                            <div className='mb-4 space-y-2'>
                                <div className='flex items-center space-x-3 rounded-lg bg-black/40 p-2'>
                                    <div className='rounded-full bg-[#66B2FF]/20 p-1'>
                                        <TestTube2 className='h-3 w-3 text-[#66B2FF]' />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='text-sm font-medium text-white'>Input: User Journey</div>
                                        <div className='text-xs text-white/60'>Complete flow definition</div>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-3 rounded-lg bg-black/40 p-2'>
                                    <div className='rounded-full bg-[#66B2FF]/20 p-1'>
                                        <TestTube2 className='h-3 w-3 text-[#66B2FF]' />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='text-sm font-medium text-white'>Output: E2E Tests</div>
                                        <div className='text-xs text-white/60'>Complete flow coverage</div>
                                    </div>
                                </div>
                            </div>

                            {/* E2E Metrics */}
                            <div className='space-y-1'>
                                {e2eWorkflowMetrics.map((metric, index) => (
                                    <div key={metric.label} className='flex items-center justify-between text-sm'>
                                        <span className='text-white/70'>{metric.label}:</span>
                                        <span className='font-medium' style={{ color: metric.color }}>
                                            {metric.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Workflow 2: User Story → Component + Tests */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                            className='rounded-xl border border-[#4ECDC4]/30 bg-gradient-to-r from-[#4ECDC4]/10 to-[#4ECDC4]/5 p-5'>
                            <h3 className='mb-3 text-center text-lg font-bold text-[#4ECDC4]'>
                                Workflow 2: User Story → Component + Tests
                            </h3>

                            {/* Component Workflow steps */}
                            <div className='mb-4 space-y-2'>
                                <div className='flex items-center space-x-3 rounded-lg bg-black/40 p-2'>
                                    <div className='rounded-full bg-[#4ECDC4]/20 p-1'>
                                        <Layers className='h-3 w-3 text-[#4ECDC4]' />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='text-sm font-medium text-white'>Input: User Story</div>
                                        <div className='text-xs text-white/60'>Acceptance criteria + Figma</div>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-3 rounded-lg bg-black/40 p-2'>
                                    <div className='rounded-full bg-[#4ECDC4]/20 p-1'>
                                        <Layers className='h-3 w-3 text-[#4ECDC4]' />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='text-sm font-medium text-white'>
                                            Output: Component + Storybook
                                        </div>
                                        <div className='text-xs text-white/60'>Working component with tests</div>
                                    </div>
                                </div>
                            </div>

                            {/* Component Metrics */}
                            <div className='space-y-1'>
                                {componentWorkflowMetrics.map((metric, index) => (
                                    <div key={metric.label} className='flex items-center justify-between text-sm'>
                                        <span className='text-white/70'>{metric.label}:</span>
                                        <span className='font-medium' style={{ color: metric.color }}>
                                            {metric.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Key talking points */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className='text-center'>
                        <div className='grid gap-4 md:grid-cols-3'>
                            <div className='rounded-lg bg-black/40 p-4'>
                                <TestTube2 className='mx-auto mb-2 h-6 w-6 text-[#66B2FF]' />
                                <h4 className='mb-1 font-semibold text-[#66B2FF]'>Complete Flow Testing</h4>
                                <p className='text-sm text-white/70'>User journey → Full E2E test suite</p>
                            </div>
                            <div className='rounded-lg bg-black/40 p-4'>
                                <Layers className='mx-auto mb-2 h-6 w-6 text-[#4ECDC4]' />
                                <h4 className='mb-1 font-semibold text-[#4ECDC4]'>Component Development</h4>
                                <p className='text-sm text-white/70'>User story → Component + Storybook tests</p>
                            </div>
                            <div className='rounded-lg bg-black/40 p-4'>
                                <Clock className='mx-auto mb-2 h-6 w-6 text-green-400' />
                                <h4 className='mb-1 font-semibold text-green-400'>Speed Advantage</h4>
                                <p className='text-sm text-white/70'>Both workflows ~ 90% faster than manual</p>
                            </div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0, duration: 0.8 }}
                            className='mt-6 text-lg text-white/80'>
                            Two distinct AI workflows -{' '}
                            <span className='font-bold text-[#4ECDC4]'>enhanced AI capabilities</span>
                            <span className='font-bold text-[#66B2FF]'> can achieve these results</span>.
                        </motion.p>
                    </motion.div>
                </div>
            </SlideContainer>

            {/* User Journey E2E Slideshow */}
            <UserJourneyE2ESlideshow isOpen={isE2ESlideshowOpen} onClose={() => setIsE2ESlideshowOpen(false)} />
        </>
    );
}
