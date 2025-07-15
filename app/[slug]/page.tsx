import questionsData from "../data/questions.json";
import { TopicPageClient } from "./TopicPageClient";

export default function TopicPage({ params }: { params: { slug: string } }) {
  return <TopicPageClient slug={params.slug} />;
}

export function generateStaticParams() {
  const categories = Array.from(
    new Set(questionsData.map((q) => q.category.toLowerCase()))
  );
  return categories.map((slug) => ({ slug }));
}
