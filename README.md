# Next.js 15 Starter Kit

포트폴리오 프로젝트를 빠르게 시작하기 위한 스타터 킷입니다.

## 기술 스택

| 기술 | 버전 | 설명 |
|------|------|------|
| Next.js | 15+ | App Router, Server Components |
| TypeScript | 5+ | 타입 안전성 |
| Tailwind CSS | v4 | CSS-first 유틸리티 |
| shadcn/ui | v4 | Base UI 기반 컴포넌트 |
| react-hook-form | - | 폼 상태 관리 |
| zod | v4 | 스키마 유효성 검사 |
| next-themes | - | 다크/라이트 모드 |

## 시작하기

```bash
# 레포 클론
git clone https://github.com/vincentlab7/next-starter-kit
cd next-starter-kit

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속하세요.

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃 (ThemeProvider, Header, Footer)
│   ├── page.tsx                # 홈 페이지
│   └── examples/
│       ├── layout.tsx          # 예제 레이아웃 (사이드바)
│       ├── forms/page.tsx      # 폼 컴포넌트 예제
│       └── components/page.tsx # UI 컴포넌트 쇼케이스
├── components/
│   ├── ui/                     # shadcn/ui 컴포넌트
│   ├── layout/                 # 레이아웃 컴포넌트
│   └── providers/              # Context Providers
└── lib/
    └── utils.ts                # 유틸리티 함수
```

## 포함된 예제

### 폼 예제 (`/examples/forms`)
- 로그인 폼 (이메일, 비밀번호, 로그인 유지)
- 프로필 폼 (Select, Textarea, Checkbox)
- 연락처 폼 (그리드 레이아웃, 실시간 글자 수 카운트)

모든 폼은 **react-hook-form + zod**로 유효성 검사를 구현합니다.

### 컴포넌트 쇼케이스 (`/examples/components`)
- Button (6가지 variant, 4가지 size)
- Badge, Card, Input
- Avatar, Skeleton
- Dialog (모달)
- DropdownMenu

## 새 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

## 라이선스

MIT