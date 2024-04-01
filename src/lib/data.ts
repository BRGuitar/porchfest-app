import { sql } from '@vercel/postgres';
import { Band, Performance } from './definitions';
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

export async function fetchBands() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    console.log('Fetching Band data...');

    const data = await sql<Band>`SELECT * FROM bands ORDER BY name ASC`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Schedule data.');
  }
}

export async function fetchBandByPageLink(bandPageLink) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    console.log('Fetching Band...');

    const data =
      await sql<Band>`SELECT * FROM bands WHERE pagelink = ${bandPageLink}`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Band data.');
  }
}

export async function fetchPageLink(bandName) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    console.log('Fetching Band Page Link...');

    const data =
      await sql<Band>`SELECT pagelink FROM bands WHERE name = ${bandName}`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Band data.');
  }
}

// export async function addToSchedule(newPerformance: Performance) {
//   'use server';

//   // Add Data Validation

//   try {
//     await sql`
//     INSERT INTO schedule (band, starttime, endtime, location)
//     VALUES (${newPerformance.band.toString()}, ${newPerformance.starttime.toString()}, ${newPerformance.endtime.toString()}, ${newPerformance.location.toString()})`;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to add to Schedule.');
//   }
// }
