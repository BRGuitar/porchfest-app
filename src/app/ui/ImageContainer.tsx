import Image from 'next/image';

// Renders a band photo from a path under /public (e.g. "/bands/samba.png").
// width/height are only used for the aspect-ratio placeholder; `h-auto w-full`
// lets the image keep its natural proportions.
export default function ImageContainer({
  imgLink,
  altDesc,
}: {
  imgLink: string | null | undefined;
  altDesc: string;
}) {
  if (!imgLink) return null;

  return (
    <Image
      className='h-auto w-full rounded-3xl border-2 border-white'
      src={imgLink}
      alt={altDesc}
      width={1200}
      height={900}
      sizes='(min-width: 1024px) 50vw, 100vw'
      priority
    />
  );
}
