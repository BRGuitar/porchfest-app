import type { Metadata } from 'next';
import { Bebas_Neue, Lilita_One } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PorchFest',
  description: "Home for Bowling Green's Live Music Scene",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={bebas.className}>
        {children}
      </body>
    </html>
  );
}
