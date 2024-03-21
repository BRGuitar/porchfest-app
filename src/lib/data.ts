import { sql } from '@vercel/postgres';
import { Performance } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchSchedule() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    console.log('Fetching Schedule data...');

    const data =
      await sql<Performance>`SELECT * FROM schedule ORDER BY starttime ASC`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Schedule data.');
  }
}

export async function addToSchedule(newPerformance: Performance) {
  'use server';

  // Add Data Validation

  try {
    await sql`
    INSERT INTO schedule (band, starttime, endtime, location) 
    VALUES (${newPerformance.band.toString()}, ${newPerformance.starttime.toString()}, ${newPerformance.endtime.toString()}, ${newPerformance.location.toString()})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add to Schedule.');
  }
}
