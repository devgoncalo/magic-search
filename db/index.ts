import { env } from '@/env';

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = env.DATABASE_URL

export const connector = postgres(connectionString, { prepare: false })
export const db = drizzle(connector);