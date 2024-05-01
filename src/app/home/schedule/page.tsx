import ScheduleCards from '../../ui/Schedule';
import { fetchSchedule } from '@/lib/data';

export default async function Schedule() {
  const schedule = await fetchSchedule();
  return (
    <main className='w-fit pt-12'>
      {/* <div className='pb-1 text-3xl drop-shadow-[3.0px_3.0px_rgba(23,37,84)] md:text-4xl lg:text-5xl'>
        2024 Schedule
      </div> */}
      {/* <div className='max-h-48 overflow-auto rounded-3xl border-8 border-white bg-gradient-to-b from-sky-800 to-blue-950 sm:max-h-64 md:max-h-72 lg:max-h-[450px]'> */}
      {/* <div className='max-h-48 overflow-auto rounded-3xl bg-slate-500 sm:max-h-64 md:max-h-72 lg:max-h-[450px]'> */}
      <div className='mx-2 max-h-[590px] overflow-auto rounded-3xl bg-neutral-200'>
        <h4 className='mx-4 mb-1 mt-4 rounded-t-xl border-b-4 border-base-orange bg-base-orange pt-2 text-center text-3xl text-white'>
          Saturday, June 8th
        </h4>
        <div className='flex flex-row justify-center'>
          <table className='table-fixed border-separate border-spacing-x-0 border-spacing-y-1 px-4 pb-4'>
            <tbody>
              <ScheduleCards
                adminMode={false}
                schedule={schedule.slice(0, schedule.length / 2)}
              />
              {/* <ScheduleCards adminMode={false} schedule={schedule} /> */}
            </tbody>
          </table>
          <table className='table-fixed border-separate border-spacing-x-0 border-spacing-y-1 px-4 pb-4'>
            <tbody>
              <ScheduleCards
                adminMode={false}
                schedule={schedule.slice(schedule.length / 2, schedule.length)}
              />
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
