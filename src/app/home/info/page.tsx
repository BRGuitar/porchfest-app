import { Montserrat } from 'next/font/google';
import { Lilita_One } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default function Info() {
  return (
    <main className='flex flex-col items-center'>
      <div
        id='home-banner'
        className='flex h-72 w-full flex-row justify-center bg-white'
      >
        <div className='flex h-full w-full flex-col items-center justify-center bg-white opacity-85'>
          <h1 className='text-center text-8xl text-dark-blue'>
            What is Porchfest?
          </h1>
        </div>
      </div>
      <div
        className={montserrat.className + ' flex flex-col items-center text-lg'}
      >
        <div className='rounded-xl'>
          <div className='mb-4 flex flex-col items-center bg-white bg-opacity-90 pb-4 pt-4 text-white'>
            <div
              className={
                lilita.className +
                ' mb-2 mt-8 w-5/6 border-b-2 border-b-dark-blue text-center text-3xl text-dark-blue'
              }
            >
              ORIGINS
            </div>
            <div className='w-5/6 rounded-lg p-2 pt-0 text-center text-black'>
              The first BG Porchfest took place in 2021 on the porches of three
              houses on Eberly Avenue in Bowling Green, Ohio — and continues
              today within a quarter-mile radius of its original location. The
              event is open to everybody and free to attend, with complimentary
              parking and no admission fee. However, we kindly encourage you to
              consider tipping the bands.
            </div>
            <div
              className={
                lilita.className +
                ' mb-2 mt-8 w-5/6 rounded-t-lg border-b-2 border-b-dark-blue text-center text-3xl text-dark-blue'
              }
            >
              HISTORY
            </div>
            <div className='w-5/6 rounded-lg p-2 pt-0 text-center text-black'>
              Our local festival is part of a larger movement that originated in
              Ithaca, New York, in 2007. The concept swiftly gained popularity,
              captivating communities nationwide with its grassroots appeal and
              collective spirit. In fact, there are almost 200 other porchfests
              held in neighborhoods across the United States each year&nbsp;(
              <a
                href='https://www.porchfest.org/porchfests-elsewhere/'
                target='_blank'
                className=' underline'
              >
                visit site
              </a>
              ).
            </div>
            <div
              className={
                lilita.className +
                ' mb-2 mt-8 w-5/6 border-b-2 border-b-dark-blue text-center text-3xl text-dark-blue'
              }
            >
              WHY
            </div>
            <div className='w-5/6 rounded-lg p-2 pt-0 text-center text-black'>
              As a celebration of music and community, BG Porchfest is a symbol
              of our shared commitment to fostering creativity, nurturing
              connections, and enriching the cultural fabric of our
              neighborhood. We intentionally select a diverse array of musical
              styles among the bands performing to demonstrate how people with
              different tastes and backgrounds can come together and unite in
              celebration as one community.
            </div>
            <div
              className={
                lilita.className +
                ' mb-2 mt-8 w-5/6 rounded-t-lg border-b-2 border-b-dark-blue text-center text-3xl text-dark-blue'
              }
            >
              THANK YOU
            </div>

            <div className='w-5/6 rounded-lg p-2 pt-0 text-center text-black'>
              BG Porchfest is made possible by the efforts of many dedicated
              volunteers, including the generous homeowners who offer their
              porches as performance spaces. The event also relies on the
              contributions of the talented bands who perform for tips, as well
              as the support of numerous local businesses and individuals who
              donate their time and resources to ensure its success. Both the
              band schedule and the list of sponsors can be found on the home
              page of this website.
            </div>
            <div className='w-5/6 rounded-lg p-2 text-center text-black'>
              We extend our heartfelt appreciation to everyone involved in
              making BG Porchfest a reality — especially those of you who show
              up to respectfully sit and listen to the music and enjoy each
              other’s company. We are grateful for your presence and
              participation, as it is your enthusiasm and support that truly
              make this a cherished community event.
            </div>
            <div className='w-5/6 rounded-lg p-2 pt-8 text-center text-black'>
              We look forward to seeing you all this year!
            </div>
            <div className='w-5/6 rounded-lg p-2 text-center text-black'>
              For any inquiries, please email Brian Young at
              brian_young3@yahoo.com
            </div>
            <div className='w-5/6 rounded-lg p-2 text-center text-black'>
              - BG Porchfest Organizing Committee
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
