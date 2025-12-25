"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// Import schema và type đã định nghĩa ở trên
import { registrationSchema, type RegistrationFormValues } from "./schemas"
export function RegistrationForm() {
    // 1. Khởi tạo useForm
    const form = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema), // Cầu nối Zod -> RHF
        defaultValues: {
            username: "",
            email: "",
            // role: undefined, // Để trống để bắt user phải chọn
            password: "",
        },
        mode: "onBlur", // Validate khi user rời khỏi input (UX tốt hơn onChange liên tục)
    })

    // 2. Handler submit - Chỉ chạy khi validation pass hoàn toàn
    function onSubmit(data: RegistrationFormValues) {
        // data ở đây ĐẢM BẢO đúng type và đã qua validation
        console.log("Submitting:", data)
        // Gọi API...
    }
    return (
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Đăng ký tài khoản</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    {/* Spread field props: quan trọng để RHF nắm quyền kiểm soát */}
                                    <Input placeholder="johndoe" {...field} />
                                </FormControl>
                                <FormDescription>Tên hiển thị công khai của bạn.</FormDescription>
                                <FormMessage /> {/* Hiển thị lỗi từ Zod tại đây */}
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Field: Role (Select - Phức tạp hơn vì Shadcn Select không dùng thẻ <select> native) */}
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Vai trò</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Chọn vai trò" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="user">User</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="editor">Editor</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Xác nhận mật khẩu</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full mt-3">Đăng ký</Button>
                </form>

            </Form>
        </div>
    )
}