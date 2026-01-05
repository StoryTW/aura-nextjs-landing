import dynamic from 'next/dynamic';

const OurAdvantagesSection = dynamic(() => import('@/components/sections/OurAdvantagesSection/OurAdvantagesSection'));
const FaqSection = dynamic(() => import('@/components/sections/FaqSection/FaqSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection/ContactSection'));

export const MainPage = () => {
  return (
    <main>
      <OurAdvantagesSection />

      <ContactSection />

      <FaqSection />
    </main>
  )
}