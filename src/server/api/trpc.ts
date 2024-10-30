import superjson from "superjson";

import { initTRPC } from "@trpc/server";

const t = initTRPC.create({
  transformer: superjson,
});

export const { createCallerFactory, router: createTRPCRouter } = t;
export const publicProcedure = t.procedure;
