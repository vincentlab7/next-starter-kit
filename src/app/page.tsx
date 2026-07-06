import Link from "next/link"
import { ArrowRight, CheckCircle, Code2, Layers, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const techStack = [
  { label: "Next.js 15", desc: "App Router · React 19 · Server Components" },
  { label: "TypeScript", desc: "타입 안전성 · IntelliSense · 자동완성" },
  { label: "Tailwind CSS v4", desc: "CSS-first 설정 · JIT 컴파일 · 다크 모드" },
  { label: "shadcn/ui", desc: "Base UI 기반 · 접근성 · 커스터마이즈 가능" },
]

const features = [
  {
    icon: Layers,
    title: "기본 레이아웃",
    desc: "Header · Footer · 반응형 네비게이션 · 다크/라이트 모드 토글이 포함된 앱 셸",
  },
  {
    icon: Code2,
    title: "폼 컴포넌트 예제",
    desc: "react-hook-form + zod 유효성 검사 · 로그인 · 프로필 · 연락처 폼 예제",
  },
  {
    icon: Palette,
    title: "컴포넌트 쇼케이스",
    desc: "Button · Badge · Card · Dialog · Skeleton 등 shadcn/ui 컴포넌트 예제 모음",
  },
  {
    icon: Zap,
    title: "빠른 시작",
    desc: "clone → install → dev 3단계로 바로 개발 시작. 불필요한 보일러플레이트 없음",
  },
]

const steps = [
  { step: "1", cmd: "git clone https://github.com/vincentlab7/next-starter-kit", desc: "레포 클론" },
  { step: "2", cmd: "npm install", desc: "의존성 설치" },
  { step: "3", cmd: "npm run dev", desc: "개발 서버 시작" },
]

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1">
      <section className="mx-auto max-w-screen-xl px-4 pb-16 pt-20 text-center sm:px-6">
        <Badge variant="secondary" className="mb-4 gap-1.5">
          <span className="size-1.5 rounded-full bg-green-500" aria-hidden="true" />
          Next.js 15 · shadcn/ui v4
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          포트폴리오 프로젝트를
          <br />
          <span className="text-muted-foreground">빠르게 시작하세요</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui 조합의 프로덕션 레디 스타터 킷.
          레이아웃, 폼 예제, 컴포넌트가 모두 준비되어 있습니다.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" render={<Link href="/examples/forms" />}>
            예제 보기 <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/examples/components" />}>
            컴포넌트 보기
          </Button>
        </div>
      </section>

      <Separator className="mx-auto max-w-screen-xl" />

      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">기술 스택</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map(({ label, desc }) => (
            <div key={label} className="rounded-lg border border-border p-5 transition-colors hover:bg-muted/50">
              <CheckCircle className="mb-3 size-5 text-primary" aria-hidden="true" />
              <h3 className="font-semibold">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-screen-xl" />

      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">포함된 기능</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-lg border border-border p-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Icon className="size-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-screen-xl" />

      <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">시작하기</h2>
        <div className="mx-auto max-w-2xl space-y-3">
          {steps.map(({ step, cmd, desc }) => (
            <div key={step} className="flex items-center gap-4 rounded-lg border border-border p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {step}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">{desc}</p>
                <code className="block truncate font-mono text-sm">{cmd}</code>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
