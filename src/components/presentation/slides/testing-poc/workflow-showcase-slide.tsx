'use client';

import Image from 'next/image';

import { SlideContainer } from '../../slide-container';

export function WorkflowShowcaseSlide() {
    return (
        <SlideContainer transition='slide' className='bg-gradient-to-br from-[#0A0A0A] via-[#0A0A1A] to-[#0A0A0A]'>
            <div className='w-full max-w-7xl'>
                {/* Single Screenshot */}
                <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
                    <div className='h-full w-full overflow-hidden rounded-lg border border-gray-600 bg-gray-800'>
                        <Image
                            src='/images/getUserJourney.png'
                            alt='Get User Journey Analysis and Setup'
                            width={1200}
                            height={800}
                            className='h-full w-full object-contain'
                        />
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
}
