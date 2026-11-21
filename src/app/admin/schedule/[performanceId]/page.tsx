import UpdateScheduleForm from '@/app/ui/UpdateScheduleForm';
import { fetchPerformanceById } from '@/lib/data';
import { Performance } from '@/lib/definitions';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default async function EditSchedule({
  params,
}: {
  params: Promise<{ performanceId: string }>;
}) {
  const { performanceId } = await params;
  const performanceDetails = await fetchPerformanceById(performanceId);
  let foundPerformance: Performance | undefined = undefined;
  if (performanceDetails.length > 0) {
    foundPerformance = performanceDetails[0];
  }
  return (
    <div className={montserrat.className + ' flex flex-col p-6'}>
      <Link
        href='/admin/schedule'
        className='my-8 w-fit rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
      >
        Back to Schedule
      </Link>
      <UpdateScheduleForm
        id={performanceId}
        bandName={foundPerformance?.band}
        startTime={foundPerformance?.starttime}
        endTime={foundPerformance?.endtime}
        location={foundPerformance?.location}
      ></UpdateScheduleForm>
    </div>
  );
}
