import jollyGabbers from '../../../../public/bands/jolly_gabbers.png';
import Image from 'next/image';

export default function JollyGabbers() {
  return (
    <div className='mx-4 flex flex-col items-center justify-around rounded-b-xl bg-sky-950'>
      <div className='w-1/2 pt-4'>
        <Image
          src={jollyGabbers}
          className='rounded-3xl border-2 border-white'
          quality={100}
          alt='The Jolly Gabbers band photo'
        />
      </div>
      <div className='m-2 flex w-5/6 flex-col text-center text-xs md:text-sm lg:text-base'>
        <span className='py-1'>
          Three friends with a love of music, enjoying a pint, and happily
          sharing stories. Gabbing, if you will.
        </span>
        <span className='py-1'>
          From The Jolly Gabbers you will hear renditions of Irish, Scottish,
          British, American and other folk songs both classic and contemporary,
          well known and obscure. With an emphasis on harmonies and unique
          arrangements. Sláinte!
        </span>
      </div>
    </div>
  );
}
