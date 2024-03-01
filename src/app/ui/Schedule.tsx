import '../globals.css';
// import { schedule } from '../../lib/sampleDB';
import { fetchSchedule } from '@/lib/data';

export default async function ScheduleCards() {
  const schedule = await fetchSchedule();

  return schedule.map((item: any, index) => {
    return (
      <tr key={index}>
        <td className='border border-slate-700 bg-black px-4 py-1'>
          <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row'>
            <div>
              {item.starttime.toLocaleTimeString().replace(':00', '')} -
            </div>
            <div>{item.endtime.toLocaleTimeString().replace(':00', '')}</div>
          </div>
        </td>
        <td className='border border-slate-700 bg-black px-4 py-1'>
          {item.band}
        </td>
        <td className='border border-slate-700 bg-black px-4 py-1'>
          {item.location}
        </td>
      </tr>
      // <div
      //   id='scheduleCard'
      //   className='m-4 flex flex-row justify-between rounded-lg bg-white p-2'
      // >
      //   <div className='flex w-fit flex-col'>
      //     <span className='text-sm font-bold text-gray-700 md:text-base lg:text-xl'>
      //       {item.Start} - {item.End}
      //     </span>
      //     <span className='text-lg font-bold text-blue-950 md:text-2xl lg:text-3xl'>
      //       {item.Band}
      //     </span>
      //   </div>
      //   <div className='flex w-fit flex-row items-center'>
      //     <span className='p-2 text-base text-gray-700 md:text-xl lg:text-2xl'>
      //       {item.Location}
      //     </span>
      //   </div>
      // </div>
    );
  });
}
