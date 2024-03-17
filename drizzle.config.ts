import type { Config } from "drizzle-kit";
import { env } from "./env";

export default {
  driver: "pg",
  schema: "./db/schema.ts",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  out: "./drizzle",
} satisfies Config