import MainSection from '@/components/sections/MainSection/MainSection';
import dynamic from 'next/dynamic';

const OurAdvantagesSection = dynamic(() => import('@/components/sections/OurAdvantagesSection/OurAdvantagesSection'));
const FaqSection = dynamic(() => import('@/components/sections/FaqSection/FaqSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection/ContactSection'));
const HowItWorksSection = dynamic(() => import('@/components/sections/HowItWorksSection/HowItWorksSection'));

export const MainPage = () => {
  return (
    <main>
      <MainSection />

      <OurAdvantagesSection />

      <HowItWorksSection />

      <ContactSection />

      <FaqSection />
    </main>
  )
}