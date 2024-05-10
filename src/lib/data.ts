import { sql } from '@vercel/postgres';
import { Band, Performance } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { start } from 'repl';

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

export async function fetchPerformanceById(performanceId) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    console.log('Fetching Performance from Schedule...');

    const data =
      await sql<Performance>`SELECT * FROM schedule WHERE id = ${performanceId}`;

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

export async function fetchBandById(bandId) {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    console.log('Fetching Band...');

    const data = await sql<Band>`SELECT * FROM bands WHERE id = ${bandId}`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Band data.');
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

export async function addToSchedule(band, starttime, endtime, location) {
  'use server';

  try {
    await sql`
    INSERT INTO schedule (band, starttime, endtime, location)
    VALUES (${band}, ${starttime}, ${endtime}, ${location})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add to Schedule.');
  }
}

export async function deleteFromSchedule(id) {
  'use server';

  try {
    const row = await sql`
    DELETE FROM schedule WHERE Id = ${id} RETURNING *;`;

    return row.rows[0].band;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to Delete from Schedule.');
  }
}

export async function addToBandList(
  bandName,
  imgLink,
  pageLink,
  bio1,
  bio2 = ''
) {
  'use server';

  try {
    await sql`
    INSERT INTO bands (name, imglink, pagelink, bio1, bio2)
    VALUES (${bandName}, ${imgLink}, ${pageLink}, ${bio1}, ${bio2})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add to Band List.');
  }

  updateSchedulePageLinks(bandName, pageLink);
}

export async function deleteFromBandList(id) {
  'use server';

  try {
    const row = await sql`
    DELETE FROM bands WHERE Id = ${id} RETURNING *;`;

    return row.rows[0].name;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to Delete from Schedule.');
  }
}

export async function updateBandFromBandList(
  id,
  bandName,
  imgLink,
  pageLink,
  bio
) {
  try {
    await sql`
    UPDATE bands 
    SET name = ${bandName}, imglink = ${imgLink}, pagelink = ${pageLink}, bio1 = ${bio} 
    WHERE id = ${id}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to Update Band from Band List.');
  }

  updateSchedulePageLinks(bandName, pageLink);
}

export async function updatePerformanceFromSchedule(
  id,
  bandName,
  starttime,
  endtime,
  location
) {
  try {
    await sql`
    UPDATE schedule 
    SET band = ${bandName}, starttime = ${starttime}, endtime = ${endtime}, location = ${location} 
    WHERE id = ${id}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to Update Performance from Schedule.');
  }
}

async function updateSchedulePageLinks(bandName, pageLink) {
  const data =
    await sql<Performance>`SELECT * FROM schedule WHERE band = ${bandName}`;

  if (data.rowCount > 0) {
    await sql`UPDATE schedule SET pagelink = ${pageLink} WHERE band = ${bandName}`;
    console.log('Updated Schedule page Link for ' + bandName);
  } else {
    console.log('Found no corresponding Band on the Schedule');
  }
}
