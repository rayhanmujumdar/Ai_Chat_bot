import React from 'react';
// import { AnimatedShinyText } from './ui/animated-shiny-text';

// import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { Globe } from '@/components/ui/globe-demo';
// import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { HyperText } from '@/components/ui/hyper-text';
export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Globe className="top-32" />
            {/* <GradualSpacing
                    duration={1}
                    delayMultiple={0.06}
                    className="font-display text-center text-4xl font-bold -tracking-widest  text-stone-500 dark:text-white md:text-6xl md:leading-[5rem]"
                    text="Ai Chat Bot"
                /> */}
            <HyperText
                className="text-5xl capitalize font-bold text-gray-600 dark:text-white"
                text="Ai Chat Bot"
            />
            {children}
        </div>
    );
}
