'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Hero({locale}: {locale: string}) {
  const t = useTranslations('hero');
  const cta = useTranslations('cta');

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <p className="text-sm uppercase tracking-wide text-blue-600">{t('greeting')}</p>
        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white md:text-4xl">
          {t('title')}
        </h1>
        <div className="flex gap-4">
          <Link
            href={`/${locale}#services`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
          >
            {t('cta')}
          </Link>
          <Link
            href={`/api/cv?locale=${locale}`}
            className="rounded-lg border border-gray-300 px-4 py-2 text-gray-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:text-white"
          >
            {cta('download')}
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {cta('download')}
          </p>
          <p className="mt-2 text-5xl font-semibold text-blue-600">{locale === 'fa' ? '۰۶' : '06'}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {locale === 'fa' ? 'سال تجربه کاری و یادگیری' : 'Years of learning & building'}
          </p>
        </div>
      </div>
    </section>
  );
}
