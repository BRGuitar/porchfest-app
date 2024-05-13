import { Montserrat, Lilita_One } from 'next/font/google';
import Link from 'next/link';
import { fetchBands, fetchSchedule } from '@/lib/data';
// import bandListPdf from '../../../../public/';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default async function About() {
  const bandsOnSchedule = await fetchSchedule();

  return (
    <main className={montserrat.className + ' w-3/4 pt-10'}>
      <div className='mx-2 max-h-[590px] overflow-auto rounded-3xl bg-neutral-100 pb-4'>
        <div
          className={
            lilita.className +
            ' mx-4 mb-2 mt-4 flex flex-col items-center justify-center rounded-t-2xl bg-base-orange pb-1 pt-2 text-center text-3xl text-white'
          }
        >
          2024 Band List
          <div className='text-center text-base text-white'>
            Click on a Band for More!
          </div>
        </div>

        <div className='mx-4 flex flex-row flex-wrap justify-center rounded-b-xl bg-dark-blue py-1'>
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
    </main>
  );
}
