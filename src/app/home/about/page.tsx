import JollyGabbers from '@/app/ui/Bios/JollyGabbers';
import { Montserrat, Bebas_Neue } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function About() {
  return (
    <main className={montserrat.className + ' w-3/4 pt-6 md:pt-8 lg:pt-12'}>
      <div className='mx-2 max-h-48 overflow-auto rounded-3xl bg-neutral-100 pb-4 sm:max-h-96 md:max-h-[400px] lg:max-h-[590px]'>
        <h4
          className={
            bebas.className +
            ' mx-4 mb-2 mt-4 rounded-t-2xl bg-orange-500 p-2 text-center text-2xl md:text-3xl lg:text-4xl'
          }
        >
          The Jolly Gabbers
        </h4>
        <JollyGabbers />
      </div>
    </main>
  );
}
