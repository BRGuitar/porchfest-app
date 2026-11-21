import Image from 'next/image';

// Renders a band photo from a path under /public (e.g. "/bands/samba.png").
// width/height only set the aspect ratio reserved before the photo loads;
// `h-auto w-full` lets the loaded photo keep its natural proportions.
export default function ImageContainer({
  imgLink,
  altDesc,
}: {
  imgLink: string | null | undefined;
  altDesc: string;
}) {
  if (!imgLink) return null;

  return (
    <div className='relative w-full'>
      {/* Pulsing placeholder; the photo covers it once loaded. */}
      <div
        aria-hidden
        className='absolute inset-0 animate-pulse rounded-3xl bg-dark-blue/15'
      />
      <Image
        className='relative h-auto w-full rounded-3xl border-2 border-white'
        src={imgLink}
        alt={altDesc}
        width={1200}
        height={900}
        // The photo column is half the viewport wide (w-1/2 in the band page).
        sizes='50vw'
        preload
      />
    </div>
  );
}
