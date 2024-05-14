import { updateBandFromBandList } from '@/lib/data';
import { redirect } from 'next/navigation';

async function create(formData: FormData) {
  'use server';

  const bandId = formData.get('BandId');
  const bandName = formData.get('Band');
  const imgLink = formData.get('ImgLink');
  const pageLink = formData.get('PageLink');
  const bio = formData.get('Bio');

  if (bandName && imgLink && pageLink && bio) {
    await updateBandFromBandList(bandId, bandName, imgLink, pageLink, bio);
  }
  redirect(`/admin/bands`);
}

export default function UpdateBandForm({
  id,
  bandName,
  imgLink,
  pageLink,
  bio,
}) {
  return (
    <form action={create}>
      <input className='hidden' type='text' readOnly value={id} name='BandId' />
      <div className='flex flex-row justify-around text-white'>
        <div className='flex w-1/3 flex-col'>
          <span>Band Name</span>
          <input
            className='m-1 p-1 text-black'
            type='text'
            name='Band'
            defaultValue={bandName}
          />
        </div>
        <div className='flex w-1/3 flex-col'>
          <span>Image Link</span>
          <input
            className='m-1 p-1 text-black'
            type='text'
            name='ImgLink'
            defaultValue={imgLink}
          />
        </div>
        <div className='flex w-1/3 flex-col'>
          <span>Page Link</span>
          <input
            className='m-1 p-1 text-black'
            type='text'
            name='PageLink'
            defaultValue={pageLink}
          />
        </div>
      </div>
      <div className='flex flex-col items-center p-4 text-white'>
        <div className='flex w-full flex-col items-center'>
          <span>Bio</span>
          <textarea
            className='m-1 w-full p-1 text-black'
            rows={3}
            name='Bio'
            defaultValue={bio}
          />
        </div>
        <button
          className='mt-4 rounded-lg bg-green-700 px-6 hover:bg-green-500'
          type='submit'
        >
          Update Band Details
        </button>
      </div>
    </form>
  );
}
