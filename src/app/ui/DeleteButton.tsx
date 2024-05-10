'use client';

export default function DeleteButton({ deleteFn, itemId }) {
  return (
    <button
      className='rounded-lg bg-red-600 px-2 py-1 text-white hover:bg-white hover:text-red-600'
      type='submit'
      onClick={() => deleteFn(itemId)}
    >
      DELETE
    </button>
  );
}
