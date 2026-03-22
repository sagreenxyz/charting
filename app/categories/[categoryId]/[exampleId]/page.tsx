import { notFound } from "next/navigation";
import Link from "next/link";
import { chartingCategories, getCategoryById } from "@/lib/chartingData";

interface Props {
  params: Promise<{ categoryId: string; exampleId: string }>;
}

export async function generateStaticParams() {
  return chartingCategories.flatMap((cat) =>
    cat.examples.map((ex) => ({
      categoryId: cat.id,
      exampleId: ex.id,
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { categoryId, exampleId } = await params;
  const category = getCategoryById(categoryId);
  const example = category?.examples.find((e) => e.id === exampleId);
  if (!example) return {};
  return {
    title: `${example.title} — NurseChart`,
    description: example.situation,
  };
}

export default async function ExamplePage({ params }: Props) {
  const { categoryId, exampleId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) notFound();

  const example = category.examples.find((e) => e.id === exampleId);
  if (!example) notFound();

  const exIndex = category.examples.findIndex((e) => e.id === exampleId);
  const prevEx = exIndex > 0 ? category.examples[exIndex - 1] : null;
  const nextEx =
    exIndex < category.examples.length - 1
      ? category.examples[exIndex + 1]
      : null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/categories/${category.id}`}
          className="hover:text-blue-600 transition-colors"
        >
          {category.icon} {category.name}
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">{example.title}</span>
      </nav>

      {/* Example header */}
      <div className="mb-6">
        <div className="text-sm font-medium text-blue-600 mb-1">
          {category.name}
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          {example.title}
        </h1>
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
            Clinical Situation
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            {example.situation}
          </p>
        </div>
      </div>

      {/* Charting example */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">
          Charting Example
        </h2>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <pre className="whitespace-pre-wrap text-sm text-slate-800 font-mono leading-relaxed">
            {example.example}
          </pre>
        </div>
      </div>

      {/* Key elements */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">
          Key Documentation Elements
        </h2>
        <ul className="space-y-2">
          {example.keyElements.map((el, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center">
                ✓
              </span>
              {el}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
          Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          {example.tags.map((tag) => (
            <Link
              key={tag}
              href={`/search?q=${encodeURIComponent(tag)}`}
              className="px-3 py-1 bg-slate-100 hover:bg-blue-100 text-slate-600 hover:text-blue-700 text-sm rounded-full transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Example navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-200 mb-6">
        {prevEx ? (
          <Link
            href={`/categories/${category.id}/${prevEx.id}`}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>←</span>
            <span>{prevEx.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextEx ? (
          <Link
            href={`/categories/${category.id}/${nextEx.id}`}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>{nextEx.title}</span>
            <span>→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Back to category */}
      <Link
        href={`/categories/${category.id}`}
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
      >
        ← Back to {category.name}
      </Link>
    </div>
  );
}
