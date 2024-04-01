import '../globals.css';

import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import DeleteButton from './DeleteButton';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

async function deleteRow(id: string) {
  'use server';

  const row = await sql`
    DELETE FROM schedule WHERE Id = ${id} RETURNING *;`;
  console.log('deleted band ' + row.rows[0].band);
  redirect(`/admin/schedule`);
}

export default async function ScheduleCards({ adminMode, schedule }) {
  return schedule.map((item: any, index) => {
    return (
      <tr key={index}>
        <td className='rounded-l-xl bg-white px-3 py-2 text-black lg:text-base'>
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
        <td className='bg-dark-blue border-b-2 border-white px-4 py-2 text-white lg:text-xl'>
          {item.pagelink !== null ? (
            <Link
              className='hover:decoration-base-orange hover:text-white hover:underline'
              href={'/home/about/' + item.pagelink}
            >
              {item.band}
            </Link>
          ) : (
            <span>{item.band}</span>
          )}
        </td>
        <td className='bg-dark-blue rounded-r-md border-b-2 border-white px-4 py-2 text-right text-white md:text-sm lg:text-base'>
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
