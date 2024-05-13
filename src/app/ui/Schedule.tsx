import '../globals.css';

import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import DeleteButton from './DeleteButton';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { deleteFromSchedule } from '@/lib/data';
import EditScheduleButton from './EditScheduleButton';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

async function deleteRow(id: string) {
  'use server';

  const deletedBandName = await deleteFromSchedule(id);
  console.log('deleted band: ' + deletedBandName);
  redirect(`/admin/schedule`);
}

export default async function ScheduleCards({ adminMode, schedule }) {
  return schedule.map((item: any, index) => {
    return (
      <tr key={index}>
        <td className='rounded-l-xl bg-white px-2 py-1 text-base text-black'>
          <div className='flex flex-col'>
            <div className=''>
              {item.starttime
                .toLocaleTimeString()
                .replace(':00', '')
                .replace(' PM', '') + ' - '}
              {item.endtime.toLocaleTimeString().replace(':00', '')}
            </div>
          </div>
        </td>
        <td className='border-b-2 border-white bg-dark-blue px-4 py-2 text-xl text-white'>
          {item.pagelink !== null ? (
            <Link
              className='hover:text-white hover:underline hover:decoration-base-orange'
              href={'/home/about/' + item.pagelink}
            >
              {item.band}
            </Link>
          ) : (
            <div>{item.band}</div>
          )}
        </td>
        <td className='rounded-r-md border-b-2 border-white bg-dark-blue px-4 py-2 text-right text-base text-white'>
          {item.location}
        </td>
        {adminMode ? (
          <>
            <td>
              <EditScheduleButton id={item.id} />
            </td>
            <td>
              <DeleteButton deleteFn={deleteRow} itemId={item.id} />
            </td>
          </>
        ) : (
          <></>
        )}
      </tr>
    );
  });
}
