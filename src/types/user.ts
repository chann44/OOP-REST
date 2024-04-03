import { z } from "zod";

export const userScheam = z.object({
  username: z.string().min(4),
  password: z.string().min(8),
});

export type User = z.infer<typeof userScheam>;
