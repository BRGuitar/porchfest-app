import 'server-only';
import { neon } from '@neondatabase/serverless';

// Vercel's Neon integration sets DATABASE_URL; projects migrated from the old
// Vercel Postgres product still expose POSTGRES_URL. Accept either.
const connectionString = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error(
    'Missing database connection string: set DATABASE_URL or POSTGRES_URL.'
  );
}

export const sql = neon(connectionString);
