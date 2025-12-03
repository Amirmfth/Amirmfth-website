'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {useMemo} from 'react';

type NavbarProps = {
  locale: string;
};

export default function Navbar({locale}: NavbarProps) {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const currentLocale = useLocale();

  const links = useMemo(
    () => [
      {href: `/${locale}`, label: t('home')},
      {href: `/${locale}#about`, label: t('about')},
      {href: `/${locale}#services`, label: t('services')},
      {href: `/${locale}#contact`, label: t('contact')}
    ],
    [locale, t]
  );

  const alternateLocale = currentLocale === 'en' ? 'fa' : 'en';

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-black/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="text-lg font-semibold">
          AMF
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-blue-600 dark:hover:text-blue-400 ${
                pathname === link.href ? 'text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${alternateLocale}`}
            aria-label={`Switch to ${alternateLocale} locale`}
            className="rounded-full border border-gray-300 px-3 py-1 text-xs dark:border-gray-700"
          >
            {alternateLocale.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
