'use client';

import { useEffect, useRef } from 'react';
import { UIMessage } from 'ai';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

export default function MessageList({
  messages,
  status,
}: {
  messages: UIMessage[];
  status: string;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  return (
    <div className="p-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {status === 'submitted' && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  );
}
