import 'server-only';
import { connection } from 'next/server';
import { sql } from './db';
import { Band, Performance } from './definitions';

// Public pages read live data on every request so admin edits show up
// immediately. `connection()` opts the calling route out of static rendering.

export async function fetchSchedule() {
  await connection();
  try {
    return (await sql`SELECT * FROM schedule ORDER BY starttime ASC`) as Performance[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Schedule data.');
  }
}

export async function fetchPerformanceById(performanceId: string) {
  await connection();
  try {
    return (await sql`SELECT * FROM schedule WHERE id = ${performanceId}`) as Performance[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Schedule data.');
  }
}

export async function fetchBands() {
  await connection();
  try {
    return (await sql`SELECT * FROM bands ORDER BY name ASC`) as Band[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Band data.');
  }
}

export async function fetchBandById(bandId: string) {
  await connection();
  try {
    return (await sql`SELECT * FROM bands WHERE id = ${bandId}`) as Band[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Band data.');
  }
}

export async function fetchBandByPageLink(bandPageLink: string) {
  await connection();
  try {
    return (await sql`SELECT * FROM bands WHERE pagelink = ${bandPageLink}`) as Band[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Band data.');
  }
}

export async function addToSchedule(
  band: string,
  starttime: string,
  endtime: string,
  location: string
) {
  try {
    await sql`
    INSERT INTO schedule (band, starttime, endtime, location)
    VALUES (${band}, ${starttime}, ${endtime}, ${location})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add to Schedule.');
  }
}

export async function deleteFromSchedule(id: string) {
  try {
    const rows =
      await sql`DELETE FROM schedule WHERE id = ${id} RETURNING band`;
    return rows[0]?.band as string | undefined;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to Delete from Schedule.');
  }
}

export async function addToBandList(
  bandName: string,
  imgLink: string,
  pageLink: string,
  bio1: string,
  bio2 = ''
) {
  try {
    await sql`
    INSERT INTO bands (name, imglink, pagelink, bio1, bio2)
    VALUES (${bandName}, ${imgLink}, ${pageLink}, ${bio1}, ${bio2})`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add to Band List.');
  }

  await updateSchedulePageLinks(bandName, pageLink);
}

export async function deleteFromBandList(id: string) {
  try {
    const rows = await sql`DELETE FROM bands WHERE id = ${id} RETURNING name`;
    return rows[0]?.name as string | undefined;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to Delete from Band List.');
  }
}

export async function updateBandFromBandList(
  id: string,
  bandName: string,
  imgLink: string,
  pageLink: string,
  bio: string
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

  await updateSchedulePageLinks(bandName, pageLink);
}

export async function updatePerformanceFromSchedule(
  id: string,
  bandName: string,
  starttime: string,
  endtime: string,
  location: string
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

// schedule.band is matched to bands.name by string; keep the denormalized
// schedule.pagelink in sync when a band is added or edited.
async function updateSchedulePageLinks(bandName: string, pageLink: string) {
  await sql`UPDATE schedule SET pagelink = ${pageLink} WHERE band = ${bandName}`;
}
