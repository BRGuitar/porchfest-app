'use client';

import { FormEvent } from 'react';

export default function AddBandForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newPerformance = {
      Band: formData.get('Band'),
      Start: formData.get('Start'),
      End: formData.get('End'),
      Location: formData.get('Location'),
    };
    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })

    // Handle response if necessary
    // const data = await response.json()
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          <span>Start Time</span>
          <input className='m-1 p-1 text-black' type='text' name='Start' />
        </div>
        <div className='flex flex-col'>
          <span>End Time</span>
          <input className='m-1 p-1 text-black' type='text' name='End' />
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
