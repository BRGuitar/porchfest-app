import '../globals.css';
import { redirect } from 'next/navigation';
import DeleteButton from './DeleteButton';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { deleteFromSchedule } from '@/lib/data';
import EditScheduleButton from './EditScheduleButton';
import { Lilita_One } from 'next/font/google';

const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });
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
      <tr className={lilita.className} key={index}>
        <td className='border-b-4 border-black bg-white px-3 text-base text-dark-blue'>
          <div className='text-4xl'>
            <div className='h-7'>
              {item.starttime.toLocaleTimeString().replace(':00 PM', '')}
            </div>
            <div className='text-lg'>PM</div>
          </div>
        </td>
        <td className=' w-3/4 bg-white px-4 py-2 text-center text-4xl text-base-orange lg:text-5xl'>
          <div className='flex flex-col text-dark-blue'>
            {item.pagelink !== null ? (
              <Link
                className='hover:opacity-80'
                href={'/home/about/' + item.pagelink}
              >
                {item.band}
              </Link>
            ) : (
              <div>{item.band}</div>
            )}
            <div className='text-lg text-black'>{item.location}</div>
          </div>
        </td>
        <td className='border-b-4 border-black bg-white px-3 text-right text-base text-dark-blue'>
          <div className='text-4xl'>
            <div className='h-7'>
              {item.endtime.toLocaleTimeString().replace(':00 PM', '')}
            </div>
            <div className='text-lg'>PM</div>
          </div>
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
