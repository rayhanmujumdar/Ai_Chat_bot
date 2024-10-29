import { XCircleIcon } from '@heroicons/react/24/solid';
import { createPortal } from 'react-dom';
import Messages from './Messages';
import InputSend from './InputSend';
import { useChat } from 'ai/react';
export default function ChatBox({ onClose }: { onClose: () => void }) {
    const {
        messages,
        handleSubmit,
        handleInputChange,
        input,
        isLoading,
        // stop,
    } = useChat({
        api: '/api/openai',
    });
    return (
        <>
            {createPortal(
                <>
                    <div
                        onClick={onClose}
                        className="absolute top-0 left-0 right-0 w-full h-full bg-black/20 z-40"
                    />
                    <div className="h-[500px] w-96 border rounded-md shadow-xl p-3 z-50 fixed right-20 bottom-20 bg-white">
                        <div
                            onClick={onClose}
                            className=" absolute top-2 left-2 z-20 cursor-pointer"
                        >
                            <XCircleIcon className="size-6 text-red-400" />
                        </div>
                        <div className="flex flex-col justify-between pt-5 h-full">
                            <div className="h-[90%] p-1 overflow-y-scroll">
                                <Messages messages={messages} />
                            </div>
                            <InputSend
                                onSubmit={handleSubmit}
                                onChange={handleInputChange}
                                value={input}
                                loading={isLoading}
                            />
                        </div>
                    </div>
                </>,
                document.body
            )}
        </>
    );
}
