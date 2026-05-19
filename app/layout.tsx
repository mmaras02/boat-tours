import './globals.css';
import { type Metadata } from 'next';
import { Navbar } from './components/Navbar';
import { Toaster } from 'react-hot-toast';

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

export const metadata: Metadata = {
  title: 'Venti Boat - Rent a Boat in Croatia',
  description:
    'Experience unforgettable luxury boat tours in Croatia with Venti Boat. Rent a boat or book a private skipper to show you beautiful Croatia.',
  keywords: [
    'boat rental Croatia',
    'yacht charter',
    'rent a boat Croatia',
    'luxury boat rent',
    'private boat tours',
    'Croatia sailing',
    'Venti Boat',
  ],
  authors: [{ name: 'Venti Boat' }],
  openGraph: {
    title: 'Venti Boat - Boat rent in Croatia',
    description:
      'Experience unforgettable boat rental experiences in Croatia with Venti Boat. Rent a boat or book a private skipper to show you beautiful Croatia.',
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
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <Footer />
      </body>
    </html>
  );
}

// to do list:
// - [x] Add pricing by the month
// - [x] Add all the extra informations (fuel, deposit, etc.) to the boat page
// - [x] Change hero image to some of our boat
// - [x] Refactor everything
// - [x] Fix for tablets also
// - [x] There is a bug in navbar -> fix it
// - [x] Add user Reviews
// - [x] refactor everything
