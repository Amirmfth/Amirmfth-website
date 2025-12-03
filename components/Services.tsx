import {useTranslations} from 'next-intl';

export default function Services() {
  const t = useTranslations('services');
  const services = t.raw('items') as string[];

  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('title')}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service}
            className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800"
          >
            <p className="text-gray-800 dark:text-gray-200">{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
