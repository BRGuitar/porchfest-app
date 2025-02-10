import ScheduleCards from '../../ui/Schedule';
import { fetchSchedule } from '@/lib/data';

export default async function Schedule() {
  const schedule = await fetchSchedule();
  return (
    <main className='main-container pt-10'>
      <div className='m-2 w-3/4 rounded-3xl'>
        <div className='flex flex-col items-center text-6xl'>
          <div className='drop-shadow-xl'>Saturday, June 8th</div>
          <table className='w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-8 rounded-t-xl border-t-4 border-base-orange bg-white bg-opacity-90 px-4 pb-4'>
            <tbody>
              {/* <tr className='bg-base-orange text-xl'>
                <th className='rounded-tl-lg p-1 text-left'></th>
                <th className='w-3/4 p-1 text-center'></th>
                <th className='rounded-tr-lg p-1 text-right'></th>
              </tr> */}
              <ScheduleCards adminMode={false} schedule={schedule} />
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
