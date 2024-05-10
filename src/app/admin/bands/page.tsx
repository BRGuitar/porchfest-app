import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import AddBandToBandListForm from '@/app/ui/AddBandToBandList';
import { deleteFromBandList, fetchBandById, fetchBands } from '@/lib/data';
import DeleteButton from '@/app/ui/DeleteButton';
import { redirect } from 'next/navigation';
import '../.././globals.css';
import EditBandButton from '@/app/ui/EditBandButton';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default async function EditBands() {
  const bandList = await fetchBands();

  async function deleteRow(id: string) {
    'use server';

    const deletedBandName = await deleteFromBandList(id);
    console.log('deleted band: ' + deletedBandName);
    redirect(`/admin/bands`);
  }

  return (
    <div className={montserrat.className + ' flex flex-col p-6'}>
      <div className='flex flex-col'>
        <div className='flex flex-row pb-6'>
          <Link
            href='/admin'
            className='m-2 rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
          >
            Back
          </Link>
        </div>
        <div className='border-2 border-white p-4'>
          <h2 className='mb-1 text-lg'>Add a Band to the Band List</h2>
          <h2 className='mb-4 text-sm'>
            Ensure Band Name is same as listed on the Schedule
          </h2>
          <AddBandToBandListForm />
        </div>
        <h4 className='pt-6'>Current Band List:</h4>
        <table className='table-fixed border-separate border-spacing-x-1 border-spacing-y-2 px-6'>
          <tbody>
            <tr>
              <th>Band Name</th>
              <th>Image Link</th>
              <th>Page Link</th>
              <th>Bio</th>
            </tr>
            {bandList.map((x, index) => {
              return (
                <tr className='p-2' key={index}>
                  <td className='p-1'>{x.name}</td>
                  <td className='p-1'>{x.imglink}</td>
                  <td className='p-1'>{x.pagelink}</td>
                  <td className='p-1'>{x.bio1}</td>
                  <td>
                    <EditBandButton id={x.id} />
                  </td>
                  <td className='p-1'>
                    <DeleteButton deleteFn={deleteRow} itemId={x.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
