import { Montserrat, Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import { fetchBands } from '@/lib/data';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default async function About() {
  const bandData = await fetchBands();
  const bandList = [
    'Jolly Gabbers',
    'Illegal Smiles',
    'Sam Shaba & Band',
    "It's Somewhat Humanoid",
  ];
  return (
    <main className={montserrat.className + ' w-3/4 pt-12'}>
      <div className='mx-2 max-h-[590px] overflow-auto rounded-3xl bg-neutral-100 pb-4'>
        <h4
          className={
            bebas.className +
            ' mx-4 mb-2 mt-4 rounded-t-2xl bg-base-orange p-2 text-center text-4xl text-white'
          }
        >
          2024 Band List
        </h4>
        <div className='mx-4 flex flex-row flex-wrap justify-start rounded-b-xl bg-dark-blue'>
          {bandData.map((x, index) => {
            return (
              <Link
                key={index}
                href={'/home/about/' + x.pagelink}
                className=' w-1/3 p-2 text-center text-white hover:text-white hover:underline hover:decoration-base-orange'
              >
                {x.name}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
