export default function Home() {
  return (
    <main className='flex w-3/4 flex-col items-center pt-24 text-center'>
      {/* <div className='text-6xl text-white drop-shadow-[3.0px_3.0px_rgba(10,67,88)] md:text-7xl lg:text-8xl'>
        Porchfest is Back!
      </div>
      <div className='text-4xl text-white drop-shadow-[3.0px_3.0px_rgba(10,67,88)] md:text-4xl lg:text-5xl'>
        Saturday, June 8th
      </div>
      <div className='text-3xl text-white drop-shadow-[3.0px_3.0px_rgba(10,67,88)] md:text-3xl lg:text-4xl'>
        1:45PM - 7:00PM
      </div> */}
      <div className='w-fit rounded-xl bg-base-orange px-6 pb-1 pt-4 text-8xl text-white'>
        Porchfest is Back!
      </div>
      <div className='w-fit rounded-b-xl bg-dark-blue px-6 pb-2 pt-3 text-5xl text-white'>
        Saturday, June 8th
      </div>
      <div className='w-fit rounded-b-xl bg-white px-6 py-2 text-4xl text-dark-blue'>
        1:45PM - 7:00PM
      </div>
    </main>
  );
}
