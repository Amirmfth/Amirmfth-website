import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Amirmfth Portfolio',
  description: 'Personal website for Amirmfth built with Next.js and next-intl.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-light-gray text-gray-900">
        {children}
      </body>
    </html>
  );
}
