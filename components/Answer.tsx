import Image from 'next/image';
import React from 'react';

export default function Answer({ content }: { content: string }) {
    return (
        <div className="text-start flex items-start gap-x-3">
            <div>
                <Image
                    src="/robot.png"
                    alt="user icon"
                    width={40}
                    height={40}
                />
            </div>
            <div className="border p-1.5 rounded-md bg-blue-500 shadow-sm w-full">
                <p className="text-white">{content}</p>
            </div>
        </div>
    );
}
