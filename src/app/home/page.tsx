export default function Home() {
  return (
    <main className='flex w-3/4 flex-col items-center pt-12 text-center md:pt-16 lg:pt-24'>
      {/* <div className='text-6xl text-white drop-shadow-[3.0px_3.0px_rgba(10,67,88)] md:text-7xl lg:text-8xl'>
        Porchfest is Back!
      </div>
      <div className='text-4xl text-white drop-shadow-[3.0px_3.0px_rgba(10,67,88)] md:text-4xl lg:text-5xl'>
        Saturday, June 8th
      </div>
      <div className='text-3xl text-white drop-shadow-[3.0px_3.0px_rgba(10,67,88)] md:text-3xl lg:text-4xl'>
        1:45PM - 7:00PM
      </div> */}
      <div className='bg-base-orange w-fit rounded-xl px-6 pb-1 pt-4 text-5xl text-white md:text-7xl lg:text-8xl'>
        Porchfest is Back!
      </div>
      <div className='bg-dark-blue w-fit rounded-b-xl px-6 pb-2 pt-3 text-3xl text-white md:text-4xl lg:text-5xl'>
        Saturday, June 8th
      </div>
      <div className='text-dark-blue w-fit rounded-b-xl bg-white px-6 py-2 text-2xl md:text-3xl lg:text-4xl'>
        1:45PM - 7:00PM
      </div>
    </main>
  );
}
