import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { Button } from './ui/button';
import { Input } from './ui/input';

type TProps = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    loading: boolean;
};

export default function InputSend({
    onChange,
    onSubmit,
    value,
    loading,
}: TProps) {
    // const [pending, startTransition] = useTransition();
    // console.log('loading:', loading);
    // const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     try {
    //         setLoading(true);
    //         const formData = new FormData(event.currentTarget);
    //         const userQuestion = formData.get('content') as string;
    //         if (!userQuestion) return;
    //         setMessages(prevMessages => [
    //             ...prevMessages,
    //             { role: 'user', content: userQuestion! },
    //         ]);
    //         event.currentTarget?.reset();
    //         const responseContent = await waiting();
    //         setMessages(prevMessages => [...prevMessages, responseContent!]);
    //     } catch (err) {
    //         console.error('Error sending message:', err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    // console.log('pending:', pending);
    return (
        <form
            onSubmit={onSubmit}
            className="flex gap-x-2 items-center shrink-0"
        >
            <Input
                value={value}
                onChange={onChange}
                name="content"
                placeholder="Message Bot"
            />
            <Button
                disabled={loading}
                type="submit"
                variant="secondary"
                className="flex-shrink-0 px-2 py-0"
            >
                <ArrowUpIcon className="size-3 text-primary" />
            </Button>
        </form>
    );
}
