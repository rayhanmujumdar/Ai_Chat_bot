import { createOpenAI } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText } from 'ai';

const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://api.pawan.krd/cosmosrp/v1/chat/completions',
});

// this code for openai paid version

export const maxDuration = 30; // 30 seconds

export const POST = async (req: Request) => {
    try {
        const { messages } = await req.json();
        const result = await streamText({
            model: openai('gpt-3.5-turbo'),
            temperature: 1,
            messages: convertToCoreMessages(messages),
        });
        return result.toDataStreamResponse();
    } catch (err) {
        console.error(err);
    }
};

// old way to create a chatbot

// export const POST = async (req: Request) => {
//     try {
//         // const { messages } = await req.json();

//         const chatCompletion = await openai.chat.completions.create({
//             messages: [{ role: 'user', content: 'My name is Rayhan' }],
//             model: 'gpt-3.5-turbo',
//             temperature: 1,
//             stream: true,
//         });
//         const stream = OpenAIStream(chatCompletion);

//         return new StreamingTextResponse(stream);
//     } catch (err) {
//         console.error(err);
//     }
// };
