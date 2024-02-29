import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import ScheduleCards from '@/app/ui/Schedule';
import AddBandForm from '@/app/ui/AddBand';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function EditSchedule() {
  return (
    <div className={montserrat.className + ' flex flex-col p-6'}>
      <div className='flex flex-col'>
        <div className='flex flex-row pb-6'>
          <button className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'>
            Add a Band
          </button>
          <button className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'>
            Delete a Band
          </button>
        </div>
        <div className='border-2 border-white p-4'>
          <span className='text-lg'>Add a Band</span>
          <AddBandForm />
        </div>
        <span>Current Schedule:</span>
        <table className='table-fixed border-separate border-spacing-x-1 border-spacing-y-2 px-6'>
          <thead>
            <tr>
              <th className='border border-slate-700 bg-black px-4 py-1'>
                Time
              </th>
              <th className='border border-slate-700 bg-black px-4 py-1'>
                Band
              </th>
              <th className='border border-slate-700 bg-black px-4 py-1'>
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <ScheduleCards />
          </tbody>
        </table>
      </div>
    </div>
  );
}
