import Image from 'next/image';
import React from 'react';

export default function Question({ content }: { content: string }) {
    return (
        <div className="text-end flex items-start gap-x-3 flex-row-reverse">
            <div>
                <Image
                    src="/man.png"
                    alt="robot icon"
                    width={40}
                    height={40}
                />
            </div>
            <div className="border p-1 rounded-md bg-gray-200 shadow-sm w-full">
                <p>{content}</p>
            </div>
        </div>
    );
}
