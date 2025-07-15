interface QuestionItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export function QuestionCard({ item }: { item: QuestionItem }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow hover:shadow-md transition">
      <div className="font-medium text-lg mb-1">{item.question}</div>
      <div className="text-sm text-gray-700 mb-2 whitespace-pre-line">
        {item.answer}
      </div>
      <div className="text-sm text-gray-500">{item.category}</div>
      <div className="mt-2 flex flex-wrap gap-1">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
