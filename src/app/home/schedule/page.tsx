import ScheduleCards from '../../ui/Schedule';
import { fetchSchedule } from '@/lib/data';

export default async function Schedule() {
  const schedule = await fetchSchedule();
  return (
    <main className='main-container pt-10'>
      <div className='mx-2 rounded-3xl bg-neutral-200'>
        <h4 className='mx-4 mb-1 mt-4 rounded-t-xl border-b-4 border-base-orange bg-base-orange pt-2 text-center text-2xl text-white'>
          Saturday, June 8th
        </h4>
        <div className='flex flex-row justify-center'>
          <table className='table-fixed border-separate border-spacing-x-0 border-spacing-y-2 px-4 pb-4'>
            <tbody>
              <ScheduleCards adminMode={false} schedule={schedule} />
            </tbody>
          </table>
          {/* <table className='table-fixed border-separate border-spacing-x-0 border-spacing-y-1 px-4 pb-4'>
            <tbody>
              <ScheduleCards
                adminMode={false}
                schedule={schedule.slice(schedule.length / 2, schedule.length)}
              />
            </tbody>
          </table> */}
        </div>
      </div>
    </main>
  );
}
