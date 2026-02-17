import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, UIMessage } from 'ai';

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'You are a helpful, friendly assistant. Be concise but thorough.',
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
