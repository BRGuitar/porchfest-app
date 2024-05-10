'use client';

export default function EditScheduleButton({ id }) {
  return (
    <a
      className='rounded-lg bg-white px-2 py-1 text-black hover:bg-black hover:text-white'
      href={'/admin/schedule/' + id}
    >
      Edit
    </a>
  );
}
