import { notFound } from "next/navigation";
import Link from "next/link";
import { chartingCategories, getCategoryById } from "@/lib/chartingData";
import ExampleCard from "@/components/ExampleCard";

interface Props {
  params: Promise<{ categoryId: string }>;
}

export async function generateStaticParams() {
  return chartingCategories.map((cat) => ({ categoryId: cat.id }));
}

export async function generateMetadata({ params }: Props) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) return {};
  return {
    title: `${category.name} — NurseChart`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) notFound();

  const catIndex = chartingCategories.findIndex((c) => c.id === categoryId);
  const prevCat = catIndex > 0 ? chartingCategories[catIndex - 1] : null;
  const nextCat =
    catIndex < chartingCategories.length - 1
      ? chartingCategories[catIndex + 1]
      : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">{category.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="text-5xl">{category.icon}</span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {category.name}
          </h1>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl">
            {category.description}
          </p>
          <p className="text-sm text-slate-400 mt-2">
            {category.examples.length}{" "}
            {category.examples.length === 1 ? "example" : "examples"}
          </p>
        </div>
      </div>

      {/* Examples grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {category.examples.map((example) => (
          <ExampleCard
            key={example.id}
            example={example}
            categoryId={category.id}
          />
        ))}
      </div>

      {/* Category navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-200">
        {prevCat ? (
          <Link
            href={`/categories/${prevCat.id}`}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>←</span>
            <span>
              {prevCat.icon} {prevCat.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextCat ? (
          <Link
            href={`/categories/${nextCat.id}`}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span>
              {nextCat.icon} {nextCat.name}
            </span>
            <span>→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
