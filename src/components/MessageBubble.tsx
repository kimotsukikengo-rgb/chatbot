import { UIMessage } from 'ai';

export default function MessageBubble({ message }: { message: UIMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-md'
            : 'bg-gray-100 text-gray-900 rounded-bl-md dark:bg-gray-800 dark:text-gray-100'
        }`}
      >
        {message.parts.map((part, i) =>
          part.type === 'text' ? (
            <span key={i} className="whitespace-pre-wrap break-words">
              {part.text}
            </span>
          ) : null,
        )}
      </div>
    </div>
  );
}
