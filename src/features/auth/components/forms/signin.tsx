"use client";

import Link from "next/link";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signInWithGoogle } from "../../lib/actions";
import { signInSchema } from "../../lib/validations";

import Logo from "@/components/shared/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import GoogleButton from "../google-button";

export default function SignInForm({ redirectUrl }: { redirectUrl?: string }) {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center">
      {/* Logo of website */}
      <Logo />

      <Card className="my-5 w-full max-w-sm shadow-none">
        <CardHeader>
          <CardTitle className="text-xl font-bold">ورود</CardTitle>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          {/* SignUp Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input autoFocus {...field} />
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
                    <FormLabel>رمز عبور</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="font-inter"
                          {...field}
                        />

                        {/* Toggle Password Visibility */}
                        {showPassword ? (
                          <EyeOff
                            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground hover:cursor-pointer"
                            onClick={() => setShowPassword(false)}
                          />
                        ) : (
                          <Eye
                            className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground hover:cursor-pointer"
                            onClick={() => setShowPassword(true)}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                ورود
              </Button>
            </form>
          </Form>

          {/* Separator Line */}
          <div className="relative my-8">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FBFBFB] p-2 text-sm text-muted-foreground">
              یا
            </span>
          </div>

          {/* Google SignIn Button */}
          <form
            action={async () => {
              await signInWithGoogle(redirectUrl);
            }}
          >
            <GoogleButton />
          </form>
        </CardContent>
      </Card>

      <p className="text-center text-sm text-muted-foreground">
        حساب کاربری ندارید؟{" "}
        <Link href="/auth/sign-up" className="text-foreground underline">
          ثبت نام کنید
        </Link>
      </p>
    </div>
  );
}
