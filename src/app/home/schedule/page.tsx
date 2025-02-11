import ScheduleCards from '../../ui/Schedule';
import { fetchSchedule } from '@/lib/data';
import '../../globals.css';

export default async function Schedule() {
  const schedule = await fetchSchedule();
  return (
    <>
      <main className='flex flex-col items-center'>
        <div
          id='home-banner'
          className='flex h-72 w-full flex-row justify-center bg-white'
        >
          <div className='flex h-full w-full flex-col items-center justify-center bg-white opacity-85'>
            <h1 className='text-center text-8xl text-dark-blue'>2024 Lineup</h1>
            <h1 className='text-center text-4xl text-dark-blue'>
              Saturday, June 8th
            </h1>
          </div>
        </div>
        <div className='m-2 w-5/6 rounded-3xl'>
          <div className='flex flex-col items-center text-6xl'>
            <table className='w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-8 rounded-t-xl bg-white bg-opacity-90 px-4 pb-4'>
              <tbody>
                {/* <tr className='bg-base-orange text-xl'>
                  <th className='p-1'></th>
                  <th className='w-3/4 p-1'></th>
                  <th className='p-1'></th>
                </tr> */}
                <tr className='text-xl text-black'>
                  <td className='p-1'>Set Start Time</td>
                  <td className='w-3/4 p-1 text-center'>Band & Location</td>
                  <td className='p-1 text-right'>Set End Time</td>
                </tr>
                <ScheduleCards adminMode={false} schedule={schedule} />
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
