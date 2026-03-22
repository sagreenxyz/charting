"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { searchExamples } from "@/lib/chartingData";
import SearchBar from "@/components/SearchBar";
import ExampleCard from "@/components/ExampleCard";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const results = query ? searchExamples(query) : [];

  return (
    <>
      <div className="mb-8">
        <SearchBar initialQuery={query} autoFocus={!query} />
      </div>

      {query && (
        <div className="mb-4 text-sm text-slate-500">
          {results.length > 0 ? (
            <>
              <span className="font-semibold text-slate-700">
                {results.length}
              </span>{" "}
              result{results.length !== 1 ? "s" : ""} for{" "}
              <span className="font-semibold text-blue-700">
                &quot;{query}&quot;
              </span>
            </>
          ) : (
            <>
              No results found for{" "}
              <span className="font-semibold text-blue-700">
                &quot;{query}&quot;
              </span>
              . Try different keywords.
            </>
          )}
        </div>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((result) => (
            <ExampleCard
              key={`${result.categoryId}-${result.id}`}
              example={result}
              categoryId={result.categoryId}
              categoryName={result.categoryName}
              showCategory
            />
          ))}
        </div>
      )}

      {!query && (
        <div className="text-center py-16 text-slate-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg font-medium mb-2">Search the charting library</p>
          <p className="text-sm">
            Try terms like &quot;pain&quot;, &quot;wound care&quot;, &quot;stroke&quot;, &quot;medication&quot;, or any
            clinical keyword.
          </p>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          <div className="text-5xl mb-4">😕</div>
          <p className="text-lg font-medium mb-2">No examples found</p>
          <p className="text-sm">
            Try different keywords or browse by category from the sidebar.
          </p>
        </div>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Search Charting Examples
      </h1>
      <Suspense fallback={<div role="status" aria-live="polite" className="text-slate-500">Loading…</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
