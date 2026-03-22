"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chartingCategories } from "@/lib/chartingData";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col min-h-screen">
      {/* Logo / Header */}
      <div className="p-5 border-b border-slate-700">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-3xl">📋</span>
          <div>
            <div className="font-bold text-lg leading-tight group-hover:text-blue-300 transition-colors">
              NurseChart
            </div>
            <div className="text-xs text-slate-400">
              Professional Charting Library
            </div>
          </div>
        </Link>
      </div>

      {/* Search shortcut */}
      <div className="p-4 border-b border-slate-700">
        <Link
          href="/search"
          className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
            pathname === "/search"
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search Examples
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Categories
        </div>
        <ul className="space-y-1">
          {chartingCategories.map((cat) => {
            const isActive =
              pathname === `/categories/${cat.id}` ||
              pathname.startsWith(`/categories/${cat.id}/`);
            return (
              <li key={cat.id}>
                <Link
                  href={`/categories/${cat.id}`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <span className="text-lg leading-none">{cat.icon}</span>
                  <span className="leading-snug">{cat.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700 text-xs text-slate-500 text-center">
        <p>
          {chartingCategories.reduce((acc, cat) => acc + cat.examples.length, 0)}{" "}
          examples across {chartingCategories.length} categories
        </p>
        <p className="mt-1">For educational purposes only</p>
      </div>
    </aside>
  );
}
