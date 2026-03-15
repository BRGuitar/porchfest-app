import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Lilita_One } from 'next/font/google';

const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default function SponsorTiles() {
  const logoStyles = clsx('hover:scale-105');
  const silverSponsors = [
    'Amy Karlovek',
    "Arlyn's Good Beer",
    'BGAC',
    'BG Pedal Co.',
    'BGSU Music',
    'Bob Midden',
    'Dunn Funeral',
    'Home Depot',
    'Howard\'s Club H',
    'Jim Palmer Excavating',
    'Juniper Brewing Co.',
    'Pete & Kristi',
    'Snook\'s Dream Cars',
    'Wilson-Myers House',
    'Wood County Insurance',
    'Ziggy\'s',
  ];
  return (
    <div className='flex flex-col bg-dark-blue py-8'>
      <div id='Platinum-Sponsors' className='flex flex-col items-center pb-2'>
        <h5 className='w-11/12 rounded-sm border-4 border-white bg-base-orange p-1 pt-2 text-center text-4xl text-white'>
          Thank you, Sponsors!
        </h5>
        <div
          className={
            lilita.className +
            ' mb-4 mt-6 w-fit px-2 text-center text-3xl text-white'
          }
        >
          DIAMOND
        </div>
        <div className='flex flex-row justify-center'>
          <Link
            href='https://visitbgohio.org/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md lg:mx-6'
              alt='Visit BG logo'
              src='/Sponsors/visit-bg.png'
              height={150}
              width={200}
            />
          </Link>
        </div>
      </div>
      <div id='Platinum-Sponsors' className='flex flex-col items-center pb-2'>
        <div
          className={
            lilita.className +
            ' mt-6 mb-2 w-fit px-2 text-center text-2xl text-white'
          }
        >
          PLATINUM
        </div>
        <div className='flex flex-row justify-center'>
          <Link
            href='https://www.forkeepsgifts.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md bg-white px-3 py-1 lg:mx-6'
              alt='For Keeps logo'
              src='/Sponsors/for-keeps.jpeg'
              height={120}
              width={120}
            />
          </Link>
          <Link
            href='https://www.groundsforthought.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='px-2'
              alt='Grounds For Thought logo'
              src='/Sponsors/grounds-for-thought.png'
              height={130}
              width={130}
            />
          </Link>
          <Link
            href='https://www.newloverealty.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md bg-white px-1 py-1 lg:mx-6'
              alt='Newlove Realty logo'
              src='/Sponsors/newlove.png'
              height={100}
              width={140}
            />
          </Link>
        </div>
      </div>
      <div id='Gold-Sponsors' className='flex flex-col items-center'>
        <div
          className={
            lilita.className +
            ' mt-4 w-fit px-2 text-center text-xl text-white'
          }
        >
          GOLD
        </div>
        <div className='flex flex-row items-center justify-center py-2'>
          <Link
            href='https://www.votejeffdennis.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md bg-white py-1'
              alt='Jeff Dennis of City Council At-Large logo'
              src='/Sponsors/jeff-dennis.jpeg'
              height={20}
              width={85}
            />
          </Link>
          <Link
            href='/home/about/tomgorman'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md'
              alt='Tom Gorman picture'
              src='/bands/tomgorman.png'
              height={20}
              width={90}
            />
          </Link>
          <Link
            href='https://brewinggreenohio.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='px-2'
              alt='Brewing Green logo'
              src='/Sponsors/brewing-green.png'
              height={90}
              width={90}
            />
          </Link>
          <Link
            href='https://www.rotarybg.org/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md bg-white p-1'
              alt='Rotary logo'
              src='/Sponsors/rotary.png'
              height={25}
              width={120}
            />
          </Link>
          {/* <Link
            href='https://www.juniperbrew.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='px-2'
              alt='Juniper logo'
              src='/Sponsors/juniper.png'
              height={20}
              width={120}
            />
          </Link> */}
          <Link
            href='https://www.pisanellos.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md bg-white p-1'
              alt='Pisanellos Pizza logo'
              src='/Sponsors/pisanellos.png'
              height={20}
              width={100}
            />
          </Link>
          {/* <Link
            href='https://www.bgsu.edu/musical-arts.html'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md border border-white bg-white'
              alt='BGSU College of Musical Arts logo'
              src='/Sponsors/bgsu-musical-arts.png'
              height={55}
              width={55}
            />
          </Link> */}
          <Link
            href='https://www.civista.bank/locations/bowling-green'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md bg-white px-2 py-1'
              alt='Civista Bank logo'
              src='/Sponsors/civista-bank.png'
              height={20}
              width={160}
            />
          </Link>
          {/* <Link
            href='https://www.pagliaisbg.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md bg-white p-1'
              alt='Pagliais Pizza logo'
              src='/Sponsors/pagliais.png'
              height={55}
              width={55}
            />
          </Link> */}
        </div>
      </div>
      <div
        id='Silver-Sponsors'
        className='flex w-full flex-col items-center px-4 pt-4'
      >
        <div
          className={
            lilita.className +
            ' mt-2 w-fit px-2 text-center text-lg text-white'
          }
        >
          SILVER
        </div>
        <div className='flex flex-row flex-wrap justify-center'>
          {silverSponsors.map((sponsor, index) => {
            return (
              <span
                key={index}
                className='mx-2 my-1 text-center text-xl text-white'
              >
                {sponsor}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
