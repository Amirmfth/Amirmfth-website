import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('title')}</h2>
      <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{t('body')}</p>
    </section>
  );
}
