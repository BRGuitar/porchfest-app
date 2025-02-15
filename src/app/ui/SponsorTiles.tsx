import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function SponsorTiles() {
  const logoStyles = clsx('hover:scale-105');
  const silverSponsors = [
    "Arlyn's Good Beer",
    'Jim Palmer Excavating',
    'BGAC',
    'Wood County Insurance',
    'Wilson Myers House',
    'Bob Midden',
    'Rotary',
    'Sunset Bistro',
  ];
  return (
    <div className='flex flex-col bg-dark-blue py-6'>
      <div id='Platinum-Sponsors' className='flex flex-col pb-6'>
        <h5 className='w-full px-4 py-2 text-center text-4xl'>
          Thank you, Sponsors!
        </h5>
        <div className='flex flex-row justify-center pt-8'>
          <Link
            href='https://brewinggreenohio.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='px-2'
              alt='Brewing Green logo'
              src='/Sponsors/brewing-green.png'
              height={180}
              width={180}
            />
          </Link>
          <Link
            href='https://www.forkeepsgifts.com/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md bg-white px-3 py-1 lg:mx-6'
              alt='For Keeps logo'
              src='/Sponsors/for-keeps.jpeg'
              height={160}
              width={160}
            />
          </Link>
          <Link
            href='https://visitbgohio.org/'
            target='_blank'
            className={logoStyles}
          >
            <Image
              className='mx-2 rounded-md lg:mx-6'
              alt='Visit BG logo'
              src='/Sponsors/visit-bg.png'
              height={140}
              width={190}
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
              height={140}
              width={200}
            />
          </Link>
        </div>
      </div>
      <div id='Gold-Sponsors' className='flex flex-col'>
        <div className='flex flex-row justify-center py-2'>
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
          </Link>
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
          <Link
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
          </Link>
        </div>
      </div>
      <div id='Silver-Sponsors' className='w-full pt-4'>
        <div className='flex flex-row flex-wrap justify-center'>
          {silverSponsors.map((sponsor, index) => {
            return (
              <span
                key={index}
                className='mx-2 my-1 text-center text-xl text-white underline decoration-gray-500'
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
