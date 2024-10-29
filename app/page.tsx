'use client';
import AnimatedBtn from '@/components/AnimatedBtn';
import ChatBox from '@/components/ChatBox';
import CircleBtn from '@/components/CircleBtn';
import Container from '@/components/Container';
import { useState } from 'react';

export default function Home() {
    const [openChat, setOpenChat] = useState(false);
    const onChatOpen = () => setOpenChat(true);
    const onChatClose = () => setOpenChat(false);
    return (
        <Container>
            <AnimatedBtn onOpen={onChatOpen} />
            {/* circle button */}
            <div className="fixed right-20 bottom-20">
                {openChat ? (
                    <ChatBox onClose={onChatClose} />
                ) : (
                    <CircleBtn onOpen={onChatOpen} />
                )}
            </div>
        </Container>
    );
}
