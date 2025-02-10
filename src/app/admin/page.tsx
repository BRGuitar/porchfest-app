'use client';

import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Admin() {
  var isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <div className={montserrat.className + ' flex flex-col p-6 text-white'}>
        <span>ACTIONS</span>
        <div className='flex flex-row'>
          <Link
            href='/admin/schedule'
            className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
          >
            Edit Schedule
          </Link>
          <Link
            href='/admin/bands'
            className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
          >
            Edit Band List
          </Link>
          <Link
            href='/home'
            className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
          >
            Return to Main Site
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form>
          <input
            className='text-black'
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
