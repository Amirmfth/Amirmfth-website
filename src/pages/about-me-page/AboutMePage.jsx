import { useEffect } from 'react'
import Hero from './components/Hero';

function AboutMePage() {
    useEffect(() => {
        window.scrollTo({ top: 0 });
      }, []);
  return (
    <div className='pt-32 md:pt-60'>
      <Hero />
    </div>
  )
}

export default AboutMePage
