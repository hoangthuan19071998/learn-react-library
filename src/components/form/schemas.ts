import { z } from 'zod'
export const registrationSchema = z.object({
    username: z
        .string()
        .min(8, 'Phải có ít nhất 8 ký tự')
        .max(30, 'Không được quá 30 ký tự'),
    email: z
        .string()
        .email({ message: 'Email không hợp lệ' }),
    role: z
        .enum(['admin', 'user', 'editor']),
    password: z.string()
        .min(8, 'Phải có ít nhất 8 ký tự')
        .regex(/[A-Z]/, { message: 'Phải có ít nhất 1 ký tự viết hoa' })
        .regex(/[A-Z]/, { message: 'Phải có ít nhất 1 ký tự viết hoa' })
})

// Nếu bạn sửa schema, Type này tự động cập nhật. Không cần sửa 2 nơi.
export type RegistrationFormValues = z.infer<typeof registrationSchema>