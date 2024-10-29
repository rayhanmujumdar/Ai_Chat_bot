import { cn } from '@/lib/utils';
import { AnimatedShinyText } from './ui/animated-shiny-text';

export default function CircleBtn({ onOpen }: { onOpen: () => void }) {
    return (
        <div onClick={onOpen} className="z-10 flex items-center justify-center">
            <div
                className={cn(
                    'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 w-20 h-20'
                )}
            >
                <AnimatedShinyText className="inline-flex flex-col items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 z-50 p-0 h-full w-full">
                    <span>Open</span>
                    <span>Chat</span>
                </AnimatedShinyText>
            </div>
        </div>
    );
}
