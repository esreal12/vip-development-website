import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import FeaturedProject from '@/components/FeaturedProject'
import Benefits from '@/components/Benefits'
import Process from '@/components/Process'
import ServiceAreas from '@/components/ServiceAreas'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { organizationSchema } from './schema'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        suppressHydrationWarning
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <FeaturedProject />
        <Benefits />
        <Process />
        <ServiceAreas />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}

