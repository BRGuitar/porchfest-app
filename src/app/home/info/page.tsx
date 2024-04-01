import { Montserrat } from 'next/font/google';
import { Lilita_One } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default function Info() {
  return (
    <main className={montserrat.className + ' w-3/4 pt-6 md:pt-8 lg:pt-12'}>
      {/* <div className='pb-1 text-3xl drop-shadow-[3.0px_3.0px_rgba(23,37,84)] md:text-4xl lg:text-5xl'>
        More Info
      </div> */}
      <div className='mx-2 max-h-48 overflow-auto rounded-3xl bg-neutral-100 sm:max-h-64 md:max-h-[400px] lg:max-h-[590px]'>
        <h4
          className={
            lilita.className +
            ' bg-base-orange mx-4 mt-4 rounded-t-xl p-2 text-center text-4xl text-white'
          }
        >
          What is PorchFest?
        </h4>
        <div className='bg-dark-blue mx-4 mb-4 rounded-b-2xl text-white'>
          <div className='mx-4 my-2 px-4 py-4 text-center text-lg'>
            PorchFest is a local Music Festival held each year in Bowling Green,
            Ohio. We feature a wide variety of musical acts from all over the
            Northwest Ohio area. The festival is held in a quarter-mile radius
            near Eberly Avenue. Thank you to our community members who open up
            their porches and patios as the stages that make up this awesome
            event!
          </div>
          <div className='mx-4 my-4 rounded-xl px-4 py-2 text-center text-lg'>
            Any questions regarding this event, please contact Brian Young at
            419-555-1234. Make sure to check out the 2024 Schedule and the Bands
            that are participating this year. We look forward to seeing you!
          </div>
          <div className='mx-4 mb-0 mt-4 rounded-xl px-4 py-2 text-center text-lg'>
            Make sure to check out the 2024 Schedule and the Bands that are
            participating this year. We look forward to seeing you!
          </div>
        </div>
      </div>
    </main>
  );
}
