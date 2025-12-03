import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Amirmfth Portfolio',
  description: 'Personal website for Amirmfth with localization and SSR.'
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className="min-h-screen bg-light-gray text-gray-900 dark:bg-black dark:text-white">
        <NextIntlClientProvider locale={params.locale} messages={messages} timeZone="UTC">
          <div className="flex min-h-screen flex-col">
            <Navbar locale={params.locale} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
