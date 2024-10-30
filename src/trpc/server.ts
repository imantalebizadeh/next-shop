import "server-only";

import { cache } from "react";

import { createHydrationHelpers } from "@trpc/react-query/rsc";

import { appRouter } from "../server/api/router";
import { createCallerFactory } from "../server/api/trpc";
import { createTRPCContext } from "./context";
import { makeQueryClient } from "./query-client";

export const getQueryClient = cache(makeQueryClient);

const caller = createCallerFactory(appRouter)(createTRPCContext);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  getQueryClient,
);
