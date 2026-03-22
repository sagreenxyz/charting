import Link from "next/link";
import { chartingCategories } from "@/lib/chartingData";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const totalExamples = chartingCategories.reduce(
    (acc, cat) => acc + cat.examples.length,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">
          Professional Nursing Charting Library
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Explore{" "}
          <span className="font-semibold text-blue-600">
            {totalExamples} professional charting examples
          </span>{" "}
          across {chartingCategories.length} clinical categories. Find precise,
          evidence-based language for any nursing situation.
        </p>

        {/* Search bar */}
        <div className="max-w-xl mx-auto">
          <SearchBar />
        </div>

        <p className="text-sm text-slate-400 mt-3">
          Try: &quot;pain assessment&quot;, &quot;stroke&quot;, &quot;wound care&quot;, &quot;insulin&quot;
        </p>
      </div>

      {/* Category grid */}
      <h2 className="text-xl font-semibold text-slate-800 mb-5">
        Browse by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chartingCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.id}`}
            className="flex flex-col bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                {cat.name}
              </h3>
            </div>
            <p className="text-sm text-slate-500 flex-1 leading-relaxed">
              {cat.description}
            </p>
            <div className="mt-3 text-xs font-medium text-blue-600">
              {cat.examples.length}{" "}
              {cat.examples.length === 1 ? "example" : "examples"} &rarr;
            </div>
          </Link>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
        <strong>Educational Use Only:</strong> These charting examples are
        provided for learning and reference purposes. Always follow your
        facility&apos;s policies, procedures, and documentation standards.
        Adapt examples to the specific clinical situation and patient needs.
      </div>
    </div>
  );
}
