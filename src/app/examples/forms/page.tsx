"use client"

import type { Metadata } from "next"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

/* ─── 1. 로그인 폼 ─────────────────────────────── */
const loginSchema = z.object({
  email: z.string().email("유효한 이메일을 입력해주세요"),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다"),
  remember: z.boolean().optional(),
})
type LoginValues = z.infer<typeof loginSchema>

function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: false },
  })

  function onSubmit(values: LoginValues) {
    toast.success("로그인 성공!", { description: values.email })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input type="email" placeholder="hello@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type="password" placeholder="8자 이상 입력" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="cursor-pointer font-normal">로그인 상태 유지</FormLabel>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          로그인
        </Button>
      </form>
    </Form>
  )
}

/* ─── 2. 프로필 폼 ─────────────────────────────── */
const profileSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다").max(30),
  bio: z.string().max(200, "소개는 200자 이내로 작성해주세요").optional(),
  role: z.string().min(1, "역할을 선택해주세요"),
  notifications: z.boolean(),
})
type ProfileValues = z.infer<typeof profileSchema>

function ProfileForm() {
  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", bio: "", role: "", notifications: true },
  })

  function onSubmit(values: ProfileValues) {
    toast.success("프로필이 저장되었습니다", { description: `${values.name} · ${values.role}` })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>역할</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="역할 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">프론트엔드 개발자</SelectItem>
                    <SelectItem value="backend">백엔드 개발자</SelectItem>
                    <SelectItem value="fullstack">풀스택 개발자</SelectItem>
                    <SelectItem value="designer">UI/UX 디자이너</SelectItem>
                    <SelectItem value="pm">프로덕트 매니저</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>소개</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="간단한 자기소개를 입력해주세요 (선택)"
                  className="resize-none"
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormDescription>최대 200자까지 입력 가능합니다</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-3 rounded-lg border border-border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div>
                <FormLabel className="cursor-pointer">이메일 알림 수신</FormLabel>
                <FormDescription>새로운 업데이트 및 공지사항을 이메일로 받습니다</FormDescription>
              </div>
            </FormItem>
          )}
        />
        <div className="flex gap-2 pt-2">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            저장하기
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            초기화
          </Button>
        </div>
      </form>
    </Form>
  )
}

/* ─── 3. 연락처 폼 ─────────────────────────────── */
const contactSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  email: z.string().email("유효한 이메일을 입력해주세요"),
  subject: z.string().min(5, "제목은 5자 이상이어야 합니다"),
  message: z.string().min(20, "메시지는 20자 이상이어야 합니다"),
})
type ContactValues = z.infer<typeof contactSchema>

function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  function onSubmit(_values: ContactValues) {
    toast.success("메시지가 전송되었습니다", { description: "빠른 시간 내에 답변드리겠습니다." })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="hello@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input placeholder="문의 제목을 입력해주세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>메시지</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="문의 내용을 입력해주세요 (최소 20자)"
                  rows={5}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                현재 {field.value?.length ?? 0}자 / 최소 20자
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          메시지 보내기
        </Button>
      </form>
    </Form>
  )
}

/* ─── 페이지 ────────────────────────────────────── */
export default function FormsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">폼 컴포넌트 예제</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          react-hook-form + zod를 사용한 유효성 검사 폼 예제입니다. 빈 칸으로 제출하면 오류 메시지를 확인할 수 있습니다.
        </p>
      </div>

      <section className="space-y-3">
        <div>
          <h2 className="text-base font-semibold">1. 로그인 폼</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">이메일, 비밀번호, 로그인 유지 옵션</p>
        </div>
        <div className="rounded-lg border border-border p-6">
          <LoginForm />
        </div>
      </section>

      <Separator className="my-8" />

      <section className="space-y-3">
        <div>
          <h2 className="text-base font-semibold">2. 프로필 폼</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">Select, Textarea, Checkbox 컴포넌트 활용</p>
        </div>
        <div className="rounded-lg border border-border p-6">
          <ProfileForm />
        </div>
      </section>

      <Separator className="my-8" />

      <section className="space-y-3">
        <div>
          <h2 className="text-base font-semibold">3. 연락처 폼</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">그리드 레이아웃, 실시간 글자 수 카운트</p>
        </div>
        <div className="rounded-lg border border-border p-6">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
