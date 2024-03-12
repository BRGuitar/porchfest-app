// import { FormEvent } from 'react';
// import { Performance } from '@/lib/definitions';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';

async function create(formData: FormData) {
  'use server';

  const bandName = formData.get('Band');
  const startTime = formData.get('Start');
  const endTime = formData.get('End');
  const location = formData.get('Location');

  await sql`
    INSERT INTO schedule (band, starttime, endtime, location) 
    VALUES (${bandName?.toString()}, ${startTime?.toString()}, ${endTime?.toString()}, ${location?.toString()})`;

  redirect(`/admin/schedule`);
}

export default function AddBandForm() {
  return (
    <form action={create}>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          <span>Start Time</span>
          <input
            className='m-1 p-1 text-black'
            type='datetime-local'
            name='Start'
          />
        </div>
        <div className='flex flex-col'>
          <span>End Time</span>
          <input
            className='m-1 p-1 text-black'
            type='datetime-local'
            name='End'
          />
        </div>
        <div className='flex flex-col'>
          <span>Band</span>
          <input className='m-1 p-1 text-black' type='text' name='Band' />
        </div>
        <div className='flex flex-col'>
          <span>Location</span>
          <input className='m-1 p-1 text-black' type='text' name='Location' />
        </div>
        <button
          className='mt-4 rounded-lg bg-green-700 px-6 hover:bg-green-500'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
