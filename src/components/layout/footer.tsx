export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          Next.js 15 Starter Kit — Next.js + TypeScript + Tailwind CSS + shadcn/ui
        </p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            shadcn/ui
          </a>
        </p>
      </div>
    </footer>
  )
}
