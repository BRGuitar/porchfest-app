'use client';
import Image from 'next/image';

export default async function ({ imgLink, altDesc }) {
  const dynamicImage = await import(`../../../public${imgLink}`);
  return (
    <Image
      className='rounded-3xl border-2 border-white'
      quality={100}
      alt={altDesc}
      src={dynamicImage}
    ></Image>
  );
}
