import About from '@/components/About'
import AccordionDemo from '@/components/Accordion'
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
    
    <AccordionDemo/>
    <Footer />
   </main>
  )
}
