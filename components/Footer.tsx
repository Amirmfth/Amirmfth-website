import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('nav');

  return (
    <footer id="contact" className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-800 dark:text-white">AMF</span>
          <a className="text-blue-600 hover:underline" href="mailto:amir@example.com">
            amir@example.com
          </a>
        </div>
        <p>{t('contact')}</p>
      </div>
    </footer>
  );
}
