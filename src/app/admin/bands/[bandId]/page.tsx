import UpdateBandForm from '@/app/ui/UpdateBandForm';
import { fetchBandById } from '@/lib/data';
import { Band } from '@/lib/definitions';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default async function EditBand({
  params,
}: {
  params: { bandId: string };
}) {
  const bandDetails = await fetchBandById(params.bandId);
  let foundBand: Band | undefined = undefined;
  if (bandDetails.length > 0) {
    foundBand = bandDetails[0];
  }
  return (
    <div className={montserrat.className + ' flex flex-col p-6'}>
      <Link
        href='/admin/bands'
        className='my-8 w-fit rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
      >
        Back to Bands
      </Link>
      <UpdateBandForm
        id={params.bandId}
        bandName={foundBand?.name}
        imgLink={foundBand?.imglink}
        pageLink={foundBand?.pagelink}
        bio={foundBand?.bio1}
      ></UpdateBandForm>
    </div>
  );
}
