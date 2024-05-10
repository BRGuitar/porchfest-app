import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import ScheduleCards from '@/app/ui/Schedule';
import AddBandToScheduleForm from '@/app/ui/AddBandToSchedule';
import { fetchSchedule } from '@/lib/data';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default async function EditSchedule() {
  const schedule = await fetchSchedule();
  return (
    <div className={montserrat.className + ' flex flex-col p-6'}>
      <div className='flex flex-col'>
        <div className='flex flex-row pb-6'>
          <Link
            href='/admin'
            className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
          >
            Back
          </Link>
        </div>
        <div className='border-2 border-white p-4'>
          <h2 className='mb-4 text-lg'>Add a Band</h2>
          <AddBandToScheduleForm />
        </div>
        <h4 className='pt-6'>Current Schedule:</h4>
        <table className='table-fixed border-separate border-spacing-x-1 border-spacing-y-2 px-6'>
          <tbody>
            <ScheduleCards adminMode={true} schedule={schedule} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
