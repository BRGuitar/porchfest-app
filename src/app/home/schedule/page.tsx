import ScheduleCards from '../../ui/Schedule';

export default function Schedule() {
  return (
    <main className='w-5/6 pt-6 md:pt-8 lg:pt-12'>
      <div className='pb-1 text-3xl drop-shadow-[3.0px_3.0px_rgba(23,37,84)] md:text-4xl lg:text-5xl'>
        2024 Schedule
      </div>
      <div className='max-h-48 overflow-auto rounded-3xl border-8 border-white bg-gradient-to-b from-sky-800 to-blue-950 sm:max-h-64 md:max-h-72 lg:max-h-[450px]'>
        <div className='flex flex-row justify-around'>
          <table className='w-full table-fixed border-separate border-spacing-x-1 border-spacing-y-2 px-8 pb-4'>
            <caption className='caption-top pt-2 text-xl'>
              Saturday, June 8th
            </caption>
            <thead>
              <tr>
                <th className='w-1/4 border border-slate-700 bg-white px-4 py-1 text-lg text-black'>
                  Time
                </th>
                <th className='border border-slate-700 bg-white px-4 py-1 text-lg text-black'>
                  Band
                </th>
                <th className='border border-slate-700 bg-white px-4 py-1 text-lg text-black'>
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              <ScheduleCards adminMode={false} />
            </tbody>
          </table>
          {/* <table className='table-fixed border-separate border-spacing-x-1 border-spacing-y-2 px-6'>
            <caption className='caption-top pt-2'>Evening Performances</caption>
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
          </table> */}
        </div>
      </div>
    </main>
  );
}
