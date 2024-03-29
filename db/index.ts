import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

const connectionString = process.env.DATABASE_URL!

export const connector = postgres(connectionString, { prepare: false })
export const db = drizzle(connector);