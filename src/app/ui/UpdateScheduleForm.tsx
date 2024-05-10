import { updatePerformanceFromSchedule } from '@/lib/data';
import { redirect } from 'next/navigation';

async function create(formData: FormData) {
  'use server';

  const performanceId = formData.get('PerformanceId');
  const bandName = formData.get('Band');
  const startTime = formData.get('StartTime');
  const endTime = formData.get('EndTime');
  const location = formData.get('Location');
  console.log(startTime?.toString());
  if (performanceId && bandName && startTime && endTime && location) {
    await updatePerformanceFromSchedule(
      performanceId.toString(),
      bandName.toString(),
      startTime.toString(),
      endTime.toString(),
      location.toString()
    );
  }
  redirect(`/admin/schedule`);
}

export default function UpdateScheduleForm({
  id,
  bandName,
  startTime,
  endTime,
  location,
}) {
  let formattedEndTime = new Date(endTime - endTime.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, -5);
  let formattedStartTime = new Date(
    startTime - startTime.getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, -5);
  return (
    <form action={create}>
      <input
        className='hidden'
        type='text'
        readOnly
        value={id}
        name='PerformanceId'
      />
      <div className='flex flex-row justify-around'>
        <div className='flex w-1/3 flex-col'>
          <span>Band Name</span>
          <input
            className='m-1 p-1 text-black'
            type='text'
            name='Band'
            defaultValue={bandName}
          />
        </div>
        <div className='flex w-1/3 flex-col'>
          <span>Start Time</span>
          <input
            className='m-1 p-1 text-black'
            type='datetime-local'
            name='StartTime'
            defaultValue={formattedStartTime}
          />
        </div>
        <div className='flex w-1/3 flex-col'>
          <span>End Time</span>
          <input
            className='m-1 p-1 text-black'
            type='datetime-local'
            name='EndTime'
            defaultValue={formattedEndTime}
          />
        </div>
      </div>
      <div className='flex flex-col items-center p-4'>
        <div className='flex w-full flex-col items-center'>
          <span>Location</span>
          <textarea
            className='m-1 w-full p-1 text-black'
            rows={3}
            name='Location'
            defaultValue={location}
          />
        </div>
        <button
          className='mt-4 rounded-lg bg-green-700 px-6 hover:bg-green-500'
          type='submit'
        >
          Update Performance Details
        </button>
      </div>
    </form>
  );
}
