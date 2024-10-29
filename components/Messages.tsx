import React, { useEffect, useRef } from 'react';
import Question from './Question';
import Answer from './Answer';

type TProps = {
    messages: { id: string; role: string; content: string }[];
};

export default function Messages({ messages }: TProps) {
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scroll to the bottom of the chat box when a new message is added
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    return (
        <div className="flex flex-col gap-y-3 w-full flex-grow">
            {messages && messages.length > 0 ? (
                messages.map(message => {
                    if (message.role === 'user') {
                        return (
                            <Question
                                key={message.id}
                                content={message.content}
                            />
                        );
                    } else {
                        return (
                            <Answer
                                key={message.id}
                                content={message.content}
                            />
                        );
                    }
                })
            ) : (
                <p className="text-center text-gray-400">Get help with bot</p>
            )}
            <div ref={bottomRef} />
        </div>
    );
}
