"use client";

import { useState } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import superjson from "superjson";

import type { AppRouter } from "@/server/api/router";

import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";

import { getApiUrl } from "@/lib/utils";

import { getQueryClient } from "./query-client";

export const trpc = createTRPCReact<AppRouter>();

export function TRPCProvider(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          transformer: superjson,
          url: getApiUrl(),
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
