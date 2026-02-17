export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="text-5xl mb-4">💬</div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        AI Chat
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm">
        何でも聞いてください。お手伝いします。
      </p>
    </div>
  );
}
