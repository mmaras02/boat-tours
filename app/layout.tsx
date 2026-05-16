import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';

import { Playfair_Display, Playfair_Display_SC } from 'next/font/google';
import { Footer } from './components/Footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const playfairDisplaySC = Playfair_Display_SC({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-playfair-display-sc',
  display: 'swap',
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'Venti Boat - Luxury Boat Tours in Croatia | Private Yacht Charters',
  description:
    'Experience unforgettable luxury boat tours in Croatia with Venti Boat. Private yacht charters, half-day and full-day tours, snorkeling, and gourmet experiences on the Adriatic Sea.',
  keywords: [
    'boat tours Croatia',
    'yacht charter',
    'luxury boat tours',
    'Adriatic Sea tours',
    'private boat tours',
    'Croatia sailing',
    'Venti Boat',
  ],
  authors: [{ name: 'Venti Boat' }],
  openGraph: {
    title: 'Venti Boat - Luxury Boat Tours in Croatia',
    description:
      'Experience unforgettable luxury boat tours with private yacht charters and premium amenities on the Adriatic Sea.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Venti Boat',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venti Boat - Luxury Boat Tours',
    description: 'Private yacht charters and luxury boat tours in Croatia',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${playfairDisplaySC.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
