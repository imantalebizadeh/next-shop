import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z
    .string({ required_error: "نام و نام خانوادگی خود را وارد کنید" })
    .min(3, "نام نام خانوادگی حداقل باید سه کاراکتر باشد")
    .max(50, "نام نام خانوادگی حداکثر باید ۵۰ کاراکتر باشد")
    .trim(),
  email: z
    .string({ required_error: "ایمیل خود را وارد کنید" })
    .email("یک ایمیل معتبر وارد کنید"),
  password: z
    .string({ required_error: "رمز عبور خود را وارد کنید" })
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&_*]).{8,}$/gi,
      "رمز عبور حداقل باید 8 کاراکتر و حاوی حروف بزرگ و کوچک , اعداد , کاراکتر های خاص و بودن فاصله باشد",
    )
    .max(32, "رمز عبور حداکثر باید ۳۲ کاراکتر باشد")
    .trim(),
});

export const signInSchema = z.object({
  email: z
    .string({ required_error: "ایمیل خود را وارد کنید" })
    .email("یک ایمیل معتبر وارد کنید"),
  password: z
    .string({ required_error: "رمز عبور خود را وارد کنید" })
    .max(32, "رمز عبور حداکثر باید ۳۲ کاراکتر باشد")
    .trim(),
});
