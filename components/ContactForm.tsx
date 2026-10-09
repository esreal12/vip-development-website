import LeadForm from './LeadForm'

export default function ContactForm() {
  return <section id="contact" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1b1b1b 0%, #2c2c2c 100%)' }}>
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/images/backgrounds/gold-black-luxury/abstract-gold-lines-luxury-background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-12"><h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Get In Touch</h2><p className="text-xl text-gray-300 max-w-2xl mx-auto">Ready to start your project? Contact us today for a consultation.</p></div>
      <div className="max-w-2xl mx-auto"><LeadForm idPrefix="contact" source="General Contact Form" includeProjectType submitLabel="Send Inquiry" /></div>
    </div>
  </section>
}
