import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Admin() {
  return (
    <div className={montserrat.className + ' flex flex-col p-6'}>
      <span>ACTIONS</span>
      <div className='flex flex-row'>
        <Link
          href='/admin/schedule'
          className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
        >
          Edit Schedule
        </Link>
        {/* <Link
          href='/admin/schedule'
          className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
        >
          Edit Band Bios
        </Link> */}
      </div>
    </div>
  );
}
