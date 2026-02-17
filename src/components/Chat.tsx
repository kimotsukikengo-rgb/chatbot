'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import EmptyState from './EmptyState';

const transport = new DefaultChatTransport({
  api: '/api/chat',
});

export default function Chat() {
  const { messages, sendMessage, status, stop, error } = useChat({
    transport,
  });
  const [input, setInput] = useState('');

  const isLoading = status === 'submitted' || status === 'streaming';

  const handleSend = () => {
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-dvh max-w-3xl mx-auto">
      <header className="border-b border-gray-200 dark:border-gray-700 px-4 py-3 bg-white dark:bg-gray-900">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center">
          AI Chat
        </h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? <EmptyState /> : (
          <MessageList messages={messages} status={status} />
        )}
      </div>

      {error && (
        <div className="mx-4 mb-2 p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm">
          エラーが発生しました。もう一度お試しください。
        </div>
      )}

      <ChatInput
        input={input}
        setInput={setInput}
        onSubmit={handleSend}
        isLoading={isLoading}
        stop={stop}
      />
    </div>
  );
}
