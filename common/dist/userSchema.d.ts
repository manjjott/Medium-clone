import { z } from 'zod';
export declare const signUpInput: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    password: string;
    name?: string | undefined;
}, {
    id: string;
    email: string;
    password: string;
    name?: string | undefined;
}>;
export type SignUpInput = z.infer<typeof signUpInput>;
export declare const signInInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type SignInInput = z.infer<typeof signInInput>;
