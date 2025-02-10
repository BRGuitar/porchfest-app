import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id='admin-page-container' className={bebas.className + ' p-8'}>
      <span className='w-screen text-5xl text-white'>Admin Page</span>
      <span>{children}</span>
    </main>
  );
}
