import jollyGabbers from '@/photos/bands/jolly_gabbers.png';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ImageContainer from '@/app/ui/ImageContainer';
import { Montserrat, Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import { fetchBandByPageLink } from '@/lib/data';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default async function JollyGabbers({
  params,
}: {
  params: { band: string };
}) {
  const bandData = await fetchBandByPageLink(params.band);
  const foundBand = bandData[0] != null;

  if (foundBand) {
    return (
      <main className={montserrat.className + ' w-3/4 pt-6 md:pt-8 lg:pt-12'}>
        <Link
          href='/home/about'
          className='bg-dark-blue hover:text-dark-blue ml-6 rounded-md px-2 py-1 text-sm text-white hover:bg-white'
        >
          RETURN TO BAND LIST
        </Link>
        <div className='mx-2 mt-1 max-h-48 overflow-auto rounded-3xl bg-neutral-100 pb-4 sm:max-h-96 md:max-h-[400px] lg:max-h-[590px]'>
          <div
            className={
              bebas.className +
              ' bg-base-orange mx-4 mb-2 mt-4 flex flex-col items-start rounded-t-2xl p-2 text-2xl md:text-3xl lg:text-4xl'
            }
          >
            <h4 className='w-full text-center text-white'>
              {bandData[0].name}
            </h4>
          </div>
          <div className='bg-dark-blue mx-4 flex flex-col items-center justify-around rounded-b-xl'>
            <div className='w-1/2 pt-4'>
              {/* <Image
                src={jollyGabbers}
                className='rounded-3xl border-2 border-white'
                quality={100}
                alt={bandData[0].name + ' band photo'}
              /> */}
              <ImageContainer
                imgLink={bandData[0].imglink}
                altDesc={bandData[0].name + ' band photo'}
              />
            </div>
            <div className='m-2 flex w-5/6 flex-col text-center text-xs text-white md:text-sm lg:text-base'>
              <span className='py-1'>{bandData[0].bio1}</span>
              <span className='py-1'>{bandData[0].bio2}</span>
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className={montserrat.className + ' w-3/4 pt-6 md:pt-8 lg:pt-12'}>
        <Link href='/home/about' className='text-dark-blue pl-6 text-sm'>
          RETURN TO BAND LIST
        </Link>
        <div className='mx-2 max-h-48 overflow-auto rounded-3xl bg-neutral-100 pb-4 sm:max-h-96 md:max-h-[400px] lg:max-h-[590px]'>
          <div
            className={
              bebas.className +
              ' bg-base-orange mx-4 mb-2 mt-4 flex flex-col items-start rounded-t-2xl p-2 text-2xl md:text-3xl lg:text-4xl'
            }
          >
            <h4 className='w-full text-center text-white'>Band Not Found</h4>
          </div>
          <div className='bg-dark-blue mx-4 flex flex-col items-center justify-around rounded-b-xl'>
            <div className='m-2 flex w-5/6 flex-col text-center text-xs text-white md:text-sm lg:text-base'>
              <span className='py-1'>
                Please Return to Band List and select another Band.
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
