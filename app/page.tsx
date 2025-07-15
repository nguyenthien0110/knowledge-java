"use client";
import Link from "next/link";

const pages = [
  { title: "OOP", slug: "oop" },
  { title: "Database", slug: "database" },
  { title: "Spring", slug: "spring" },
  { title: "Basic", slug: "basic" },
];

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Interview Question Topics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pages.map((p) => (
          <Link
            key={p.slug}
            href={`/${p.slug}`}
            className="rounded-xl border bg-white p-4 shadow hover:shadow-md transition block"
          >
            <div className="text-lg font-semibold">{p.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
