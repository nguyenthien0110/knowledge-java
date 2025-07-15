"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { Input } from "../components/ui/input";
import { QuestionCard } from "../components/QuestionCard";
import questionsData from "../data/questions.json";

interface QuestionItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export default function TopicPage() {
  const { slug } = useParams();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<QuestionItem[]>([]);

  useEffect(() => {
    const filtered = questionsData.filter(
      (q) => q.category.toLowerCase() === String(slug).toLowerCase()
    );
    const fuse = new Fuse(filtered, {
      keys: ["question", "answer", "tags"],
      threshold: 0.3,
    });

    if (search.trim() === "") {
      setResults(filtered);
    } else {
      const res = fuse.search(search).map((r) => r.item);
      setResults(res);
    }
  }, [search, slug]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold capitalize">{String(slug)}</h1>
        <Link href="/" className="text-blue-600 text-sm hover:underline">
          ← Back
        </Link>
      </div>
      <Input
        placeholder="Search a question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full"
      />
      <div className="grid grid-cols-1 gap-4">
        {results.map((item) => (
          <QuestionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
