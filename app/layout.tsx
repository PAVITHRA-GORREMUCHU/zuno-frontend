import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Zuno — Real PGs, Real Prices, Live Availability',
  description:
    'Find PGs in Hyderabad with exact prices and live room availability. No fake listings. No wasted calls.',
  keywords: ['PG in Hyderabad', 'PG in Gachibowli', 'PG in TNGOS Colony', 'PG in Kondapur', 'paying guest Hyderabad'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
