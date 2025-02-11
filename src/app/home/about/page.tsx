import { Montserrat, Lilita_One, Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import { fetchBands, fetchSchedule } from '@/lib/data';
// import bandListPdf from '../../../../public/';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

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
              2024 Band List
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
                <a
                  key={index}
                  className='m-2 flex w-fit flex-col justify-center rounded-xl border border-white bg-dark-blue p-4 px-6 text-center text-white hover:bg-base-orange hover:text-white'
                  href={'/home/about/' + x.pagelink}
                >
                  {x.band}
                </a>
              ) : (
                <div
                  key={index}
                  className='m-2 flex w-fit flex-col justify-center rounded-xl border border-white bg-dark-blue p-4 px-6 text-center text-white'
                >
                  {x.band}
                </div>
              );
              // <a
              //   href={'/home/about'}
              //   target='_blank'
              //   rel='noopener noreferrer'
              //   key={index}
              //   className='m-2 flex w-1/4 flex-col justify-center rounded-xl border border-white bg-white p-1 text-center text-dark-blue hover:bg-base-orange hover:text-white'
              // >
              //   <div className=''>{x.band}</div>
              // </a>
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
