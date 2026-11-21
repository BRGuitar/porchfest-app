// Placeholders shown by the route-level loading.tsx files while a page's data
// loads. They mirror each page's real layout (banner + content) so the swap to
// the real page doesn't jump around.

function Bar({ className }: { className: string }) {
  return <div className={'animate-pulse rounded-md ' + className} />;
}

function BannerSkeleton({ height = 'h-72' }: { height?: string }) {
  return (
    <div
      id='home-banner'
      className={'flex w-full flex-row justify-center bg-white ' + height}
    >
      <div className='flex h-full w-full flex-col items-center justify-center gap-4 bg-white opacity-85'>
        <Bar className='h-20 w-2/3 max-w-xl bg-dark-blue/25' />
        <Bar className='h-8 w-1/3 max-w-xs bg-dark-blue/20' />
      </div>
    </div>
  );
}

export function ScheduleSkeleton() {
  return (
    <main className='flex w-full flex-col items-center' aria-busy='true'>
      <span className='sr-only'>Loading schedule…</span>
      <BannerSkeleton />
      <div className='m-2 flex w-5/6 flex-col gap-8 px-4 py-10'>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className='flex items-center justify-between gap-6'>
            <Bar className='h-14 w-28 bg-dark-blue/15' />
            <div className='flex flex-1 flex-col items-center gap-2'>
              <Bar className='h-10 w-2/3 bg-dark-blue/20' />
              <Bar className='h-5 w-1/3 bg-dark-blue/10' />
            </div>
            <Bar className='h-14 w-28 bg-dark-blue/15' />
          </div>
        ))}
      </div>
    </main>
  );
}

export function BandListSkeleton() {
  const widths = ['w-48', 'w-36', 'w-56', 'w-40', 'w-44', 'w-32', 'w-52'];
  return (
    <main className='flex w-full flex-col items-center' aria-busy='true'>
      <span className='sr-only'>Loading bands…</span>
      <BannerSkeleton />
      <div className='flex w-3/4 flex-row flex-wrap justify-center p-2 py-6'>
        {Array.from({ length: 21 }, (_, i) => (
          <Bar
            key={i}
            className={
              'm-2 h-16 rounded-xl bg-dark-blue/20 ' + widths[i % widths.length]
            }
          />
        ))}
      </div>
    </main>
  );
}

export function BandDetailSkeleton() {
  return (
    <main className='flex w-full flex-col items-center' aria-busy='true'>
      <span className='sr-only'>Loading band…</span>
      <BannerSkeleton height='h-64' />
      <div className='flex w-1/2 flex-col items-center gap-4 p-12'>
        <Bar className='aspect-[4/3] w-full rounded-3xl bg-dark-blue/15' />
        <Bar className='h-6 w-5/6 bg-dark-blue/10' />
        <Bar className='h-6 w-2/3 bg-dark-blue/10' />
      </div>
    </main>
  );
}
