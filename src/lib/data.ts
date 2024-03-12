import { sql } from '@vercel/postgres';
import { Performance } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchSchedule() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching Schedule data...');

    const data = await sql<Performance>`SELECT * FROM schedule`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Schedule data.');
  }
}
