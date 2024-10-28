import type { ReactNode } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <section className="container mx-auto flex min-h-screen items-center px-4 sm:px-0">
      {children}
    </section>
  );
}
