import '../globals.css';

import { fetchSchedule } from '@/lib/data';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import DeleteButton from './DeleteButton';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

async function deleteRow(id: string) {
  'use server';

  const row = await sql`
    DELETE FROM schedule WHERE Id = ${id} RETURNING *;`;
  console.log('deleted band ' + row.rows[0].band);
  redirect(`/admin/schedule`);
}

export default async function ScheduleCards({ adminMode, schedule }) {
  //const schedule = await fetchSchedule();

  return schedule.map((item: any, index) => {
    return (
      <tr key={index}>
        <td className='rounded-l-xl bg-white px-3 py-2 text-blue-950 lg:text-base'>
          <div className='flex flex-col md:flex-row lg:flex-row'>
            <div className=''>
              {item.starttime.toLocaleTimeString().replace(':00', '') + '-'}
            </div>
            {/* <div className='text-center text-xs'>-</div> */}
            <div className=''>
              {item.endtime.toLocaleTimeString().replace(':00', '')}
            </div>
          </div>
        </td>
        <td className='border-b-2 border-white bg-sky-950 px-4 py-2 lg:text-xl'>
          {item.band}
        </td>
        <td className='rounded-r-md border-b-2 border-white bg-sky-950 px-4 py-2 text-right md:text-sm lg:text-base'>
          {item.location}
        </td>
        {adminMode ? (
          <td>
            <DeleteButton deleteFn={deleteRow} itemId={item.id} />
          </td>
        ) : (
          <></>
        )}
      </tr>
    );
  });
}
