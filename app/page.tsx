import About from '@/components/About'
import AccordionDemo from '@/components/Accordion'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import HomeSection from '@/components/HomeSection'
import Support from '@/components/Support'
import VirtualSolutions from '@/components/VirtualSolutions'


export default function Home() {
  return (
    <main className='w-full mx-auto'>
    <HomeSection />
    <Support/>
    <About />
    <VirtualSolutions/>
    <Carousel />
    <AccordionDemo/>
    <Footer />
   </main>
  )
}
