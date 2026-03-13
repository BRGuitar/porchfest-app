import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Lilita_One } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PorchFest',
  description: "Home for Bowling Green's Live Music Scene",
};

export const viewport: Viewport = {
  width: '780',
  initialScale: undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head></head>
      <body className={bebas.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
