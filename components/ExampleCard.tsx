import Link from "next/link";
import { ChartingExample } from "@/lib/chartingData";

interface ExampleCardProps {
  example: ChartingExample;
  categoryId: string;
  categoryName?: string;
  showCategory?: boolean;
}

export default function ExampleCard({
  example,
  categoryId,
  categoryName,
  showCategory = false,
}: ExampleCardProps) {
  const preview =
    example.example.length > 220
      ? example.example.slice(0, 220).trimEnd() + "…"
      : example.example;

  return (
    <Link
      href={`/categories/${categoryId}/${example.id}`}
      className="block bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all group"
    >
      {showCategory && categoryName && (
        <div className="text-xs font-medium text-blue-600 mb-1">
          {categoryName}
        </div>
      )}
      <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
        {example.title}
      </h3>
      <p className="text-sm text-slate-500 mb-3 italic">{example.situation}</p>
      <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
        {preview}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {example.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
