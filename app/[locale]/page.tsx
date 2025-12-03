import About from '../../components/About';
import Hero from '../../components/Hero';
import Services from '../../components/Services';

export default function HomePage({params}: {params: {locale: string}}) {
  return (
    <div className="space-y-4">
      <Hero locale={params.locale} />
      <About />
      <Services />
    </div>
  );
}
