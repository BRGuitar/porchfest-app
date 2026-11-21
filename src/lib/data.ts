import 'server-only';
import { revalidatePath } from 'next/cache';
import { sql } from './db';
import { Band, Performance } from './definitions';

// Caching: public pages are statically cached (ISR, see `revalidate` in each
// page) so visitors don't wait on the database. Every write below calls
// `refreshPublicPages()` so admin edits show up immediately. Admin pages are
// always rendered fresh (`dynamic = 'force-dynamic'` in admin/layout.tsx).

function refreshPublicPages() {
  revalidatePath('/home', 'layout');
}

export async function fetchSchedule() {
  try {
    return (await sql`SELECT * FROM schedule ORDER BY starttime ASC`) as Performance[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Schedule data.');
  }
}

export async function fetchPerformanceById(performanceId: string) {
  try {
    return (await sql`SELECT * FROM schedule WHERE id = ${performanceId}`) as Performance[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Schedule data.');
  }
}

export async function fetchBands() {
  try {
    return (await sql`SELECT * FROM bands ORDER BY name ASC`) as Band[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Band data.');
  }
}

export async function fetchBandById(bandId: string) {
  try {
    return (await sql`SELECT * FROM bands WHERE id = ${bandId}`) as Band[];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Band data.');
  }
}

export async function fetchBandByPageLink(bandPageLink: string) {
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
  refreshPublicPages();
}

export async function deleteFromSchedule(id: string) {
  try {
    const rows =
      await sql`DELETE FROM schedule WHERE id = ${id} RETURNING band`;
    refreshPublicPages();
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
    refreshPublicPages();
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
  refreshPublicPages();
}

// schedule.band is matched to bands.name by string; keep the denormalized
// schedule.pagelink in sync when a band is added or edited.
async function updateSchedulePageLinks(bandName: string, pageLink: string) {
  await sql`UPDATE schedule SET pagelink = ${pageLink} WHERE band = ${bandName}`;
  refreshPublicPages();
}
