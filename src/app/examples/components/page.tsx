"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Trash2, Mail, Plus, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        {desc && <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>}
      </div>
      <div className="rounded-lg border border-border p-6">{children}</div>
    </section>
  )
}

export default function ComponentsPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">UI 컴포넌트 쇼케이스</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          shadcn/ui 컴포넌트 모음입니다. 각 컴포넌트를 직접 클릭하여 동작을 확인해보세요.
        </p>
      </div>

      <div className="space-y-8">

        {/* Buttons */}
        <Section title="Button" desc="6가지 variant와 4가지 size를 지원합니다">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="icon" aria-label="설정"><Settings className="size-4" /></Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => toast.success("클릭되었습니다!")}>
                <Mail className="size-4" /> 이메일 보내기
              </Button>
              <Button variant="destructive" onClick={() => toast.error("삭제되었습니다")}>
                <Trash2 className="size-4" /> 삭제
              </Button>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Badges */}
        <Section title="Badge" desc="상태 표시, 카테고리 태그 등에 사용합니다">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </Section>

        <Separator />

        {/* Card */}
        <Section title="Card" desc="콘텐츠를 그루핑하는 컨테이너 컴포넌트입니다">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>카드 제목</CardTitle>
                <CardDescription>카드에 대한 짧은 설명입니다</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  카드 본문 영역입니다. 다양한 컨텐츠를 자유롭게 배치할 수 있습니다.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">확인</Button>
                <Button size="sm" variant="outline">취소</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>통계 카드</CardTitle>
                  <Badge variant="secondary">+12%</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1,284</p>
                <p className="mt-1 text-sm text-muted-foreground">이번 달 방문자</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Separator />

        {/* Input */}
        <Section title="Input" desc="다양한 상태의 입력 필드입니다">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="input-default">기본 입력</Label>
              <Input id="input-default" placeholder="텍스트를 입력하세요" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="input-disabled">비활성화</Label>
              <Input id="input-disabled" placeholder="비활성화된 입력" disabled />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="input-error">오류 상태</Label>
              <Input
                id="input-error"
                placeholder="잘못된 입력"
                aria-invalid
                className="border-destructive"
              />
              <p className="text-xs text-destructive">필수 항목입니다</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="input-icon">아이콘 포함</Label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-2 size-4 text-muted-foreground" aria-hidden="true" />
                <Input id="input-icon" placeholder="이메일" className="pl-8" />
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Avatar */}
        <Section title="Avatar" desc="사용자 프로필 이미지 컴포넌트입니다">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>홍</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">VN</AvatarFallback>
            </Avatar>
          </div>
        </Section>

        <Separator />

        {/* Skeleton */}
        <Section title="Skeleton" desc="콘텐츠 로딩 중 표시하는 플레이스홀더입니다">
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </Section>

        <Separator />

        {/* Dialog */}
        <Section title="Dialog" desc="포커스 트랩 및 ESC 닫기를 지원하는 모달 다이얼로그입니다">
          <Button variant="outline" onClick={() => setDialogOpen(true)}>
            다이얼로그 열기
          </Button>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>계정을 삭제하시겠습니까?</DialogTitle>
                <DialogDescription>
                  이 작업은 되돌릴 수 없습니다. 계정과 관련된 모든 데이터가 영구적으로
                  삭제됩니다.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  취소
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    setDialogOpen(false)
                    toast.error("계정이 삭제되었습니다")
                  }}
                >
                  삭제
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Section>

        <Separator />

        {/* Dropdown */}
        <Section title="DropdownMenu" desc="컨텍스트 메뉴나 액션 목록을 표시합니다">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              <Settings className="size-4" /> 설정 <Plus className="size-3 opacity-50" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>계정 설정</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => toast.info("프로필 편집")}>
                프로필 편집
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info("알림 설정")}>
                알림 설정
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => toast.error("로그아웃되었습니다")}
              >
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

      </div>
    </div>
  )
}
