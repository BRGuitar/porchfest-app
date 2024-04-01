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
    <main className={montserrat.className + ' w-3/4 pt-6 md:pt-8 lg:pt-12'}>
      <div className='mx-2 max-h-48 overflow-auto rounded-3xl bg-neutral-100 pb-4 sm:max-h-96 md:max-h-[400px] lg:max-h-[590px]'>
        <h4
          className={
            bebas.className +
            ' bg-base-orange mx-4 mb-2 mt-4 rounded-t-2xl p-2 text-center text-2xl text-white md:text-3xl lg:text-4xl'
          }
        >
          2024 Band List
        </h4>
        <div className='bg-dark-blue mx-4 flex flex-row flex-wrap justify-start rounded-b-xl'>
          {bandData.map((x, index) => {
            return (
              <Link
                key={index}
                href={'/home/about/' + x.pagelink}
                className=' hover:decoration-base-orange w-1/3 p-2 text-center text-white hover:text-white hover:underline'
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
