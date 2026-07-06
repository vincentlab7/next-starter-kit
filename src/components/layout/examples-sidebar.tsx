"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { href: "/examples/forms", icon: FileText, label: "폼 컴포넌트" },
  { href: "/examples/components", icon: LayoutGrid, label: "UI 컴포넌트" },
]

export function ExamplesSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 shrink-0 border-r border-border bg-background px-3 py-6">
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        예제 목록
      </p>
      <nav aria-label="예제 메뉴">
        <ul className="space-y-0.5" role="list">
          {sidebarItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
