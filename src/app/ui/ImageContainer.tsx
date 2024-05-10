'use client';
import Image from 'next/image';

export default async function ({ imgLink, altDesc }) {
  let dynamicImage = null;
  try {
    dynamicImage = await import(`../../../public${imgLink}`);
  } catch (error) {
    console.error('No Image Found Error:', error);
  }
  if (dynamicImage) {
    return (
      <Image
        className='rounded-3xl border-2 border-white'
        quality={100}
        alt={altDesc}
        src={dynamicImage}
      ></Image>
    );
  } else {
    <></>;
  }
}
