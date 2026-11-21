import Link from 'next/link';
import { fetchSchedule } from '@/lib/data';

// Served from cache; refreshed on every admin edit (see lib/data.ts) and at
// most 60s after any other database change.
export const revalidate = 60;

export default async function About() {
  const bandsOnSchedule = await fetchSchedule();

  return (
    <main className=''>
      <div className='flex flex-col items-center'>
        <div
          id='home-banner'
          className='flex h-72 w-full flex-row justify-center bg-white'
        >
          <div className='flex h-full w-full flex-col items-center justify-center bg-white opacity-85'>
            <h1 className='text-center text-8xl text-dark-blue'>
              2026 Band List
            </h1>
            <h1 className='text-center text-xl text-dark-blue'>
              (Click on a Band for more info)
            </h1>
          </div>
        </div>
        <div className='w-3/4 rounded-3xl p-2'>
          <div className='flex flex-row flex-wrap justify-center rounded-2xl py-6 text-xl'>
            {bandsOnSchedule.map((x, index) => {
              return x.pagelink !== null ? (
                <Link
                  key={index}
                  className='m-2 flex w-fit flex-col justify-center rounded-xl border border-white bg-dark-blue p-4 px-6 text-center text-white hover:bg-base-orange hover:text-white'
                  href={'/home/about/' + x.pagelink}
                >
                  {x.band}
                </Link>
              ) : (
                <div
                  key={index}
                  className='m-2 flex w-fit flex-col justify-center rounded-xl border border-white bg-dark-blue p-4 px-6 text-center text-white'
                >
                  {x.band}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
