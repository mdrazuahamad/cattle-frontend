import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: "localhost",
    user: "cfa",
    password: "cfa",
    database: "cattle_db",
  },
} satisfies Config;
