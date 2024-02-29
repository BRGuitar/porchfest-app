import '../globals.css';
import { schedule } from '../../lib/sampleDB';
export default function ScheduleCards() {
  return schedule.map((item: any, index) => {
    return (
      <tr key={index}>
        <td className='border border-slate-700 bg-black px-4 py-1'>
          {item.Start} - {item.End}
        </td>
        <td className='border border-slate-700 bg-black px-4 py-1'>
          {item.Band}
        </td>
        <td className='border border-slate-700 bg-black px-4 py-1'>
          {item.Location}
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
