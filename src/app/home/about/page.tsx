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
    <main className={montserrat.className + ' main-container pt-10'}>
      <div className='flex flex-col items-center'>
        <h4 className={bebas.className + ' text-6xl text-white drop-shadow-xl'}>
          2024 Band List
        </h4>
        <div className='w-3/4 rounded-3xl bg-neutral-100 p-2'>
          <div className='flex flex-row flex-wrap justify-center rounded-2xl bg-dark-blue px-4 py-6'>
            {bandsOnSchedule.map((x, index) => {
              return x.pagelink !== null ? (
                <a
                  key={index}
                  className='m-2 flex w-1/4 flex-col justify-center rounded-xl border border-white bg-white p-1 text-center text-dark-blue hover:bg-base-orange hover:text-white'
                  href={'/home/about/' + x.pagelink}
                >
                  {x.band}
                </a>
              ) : (
                <div
                  key={index}
                  className='m-2 flex w-1/4 flex-col justify-center rounded-xl border border-white bg-white p-1 text-center text-dark-blue'
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
