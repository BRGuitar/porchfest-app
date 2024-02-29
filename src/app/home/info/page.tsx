import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Info() {
  return (
    <main className={montserrat.className + ' w-3/4 pt-6 md:pt-8 lg:pt-12'}>
      <div className='pb-1 text-3xl drop-shadow-[3.0px_3.0px_rgba(23,37,84)] md:text-4xl lg:text-5xl'>
        More Info
      </div>
      <div className='text-m max-h-48 overflow-auto rounded-3xl border-8 border-white bg-gradient-to-b from-sky-800 to-blue-950 py-4 text-xs sm:max-h-64 md:max-h-96 lg:max-h-96 lg:text-base'>
        <div className='px-4 py-2'>
          PorchFest is a local Music Festival held each year in Bowling Green,
          Ohio. We feature a wide variety of musical acts from all over the
          Northwest Ohio area. The festival is held in a quarter-mile radius
          near Eberly Avenue. Thank you to our community members who open up
          their porches and patios as the stages that make up this awesome
          event!
        </div>
        <div className='px-4 py-2'>
          Any questions regarding this event, please contact Brian Young at
          419-555-1234. Make sure to check out the 2024 Schedule and the Bands
          that are participating this year. We look forward to seeing you!
        </div>
        <div className='px-4 py-2'>
          Make sure to check out the 2024 Schedule and the Bands that are
          participating this year. We look forward to seeing you!
        </div>
      </div>
    </main>
  );
}
