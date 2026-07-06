import { ExamplesSidebar } from "@/components/layout/examples-sidebar"

export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <ExamplesSidebar />
      <main id="main-content" className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
