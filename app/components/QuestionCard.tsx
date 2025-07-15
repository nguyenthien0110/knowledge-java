import { ChevronDown, ChevronUp } from "lucide-react";
import { useQuestionOpen } from "../hooks/useQuestionOpen";

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

function renderAnswer(answer: string) {
  const sections = answer.trim().split(/\n{2,}/);

  return (
    <div className="space-y-3 mt-2">
      {sections.map((section, idx) => {
        if (section.includes("|") && section.includes("\n")) {
          const rows = section.trim().split("\n");
          const headers = rows[0].split("|").map((cell) => cell.trim());
          const dataRows = rows
            .slice(1)
            .map((row) => row.split("|").map((cell) => cell.trim()));

          return (
            <table key={idx} className="text-sm text-left w-full border">
              <thead className="bg-gray-100">
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} className="border px-2 py-1">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="border px-2 py-1 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          );
        } else {
          return (
            <p key={idx} className="whitespace-pre-line">
              {section}
            </p>
          );
        }
      })}
    </div>
  );
}

export function QuestionCard({ item }: { item: QuestionItem }) {
  const { openId, setOpenId } = useQuestionOpen();
  const isOpen = openId === item.id;

  return (
    <div className="rounded-xl border bg-white p-4 shadow hover:shadow-md transition">
      <button
        onClick={() => setOpenId(isOpen ? null : item.id)}
        className="flex items-center justify-between w-full text-left font-medium text-lg mb-1 hover:cursor-pointer hover:bg-gray-200"
      >
        {item.question}
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <div className="text-gray-700 text-sm">{renderAnswer(item.answer)}</div>
      )}

      <div className="text-sm text-gray-500 mt-2">{item.category}</div>
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
