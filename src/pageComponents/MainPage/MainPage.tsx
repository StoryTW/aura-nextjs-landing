import dynamic from 'next/dynamic';

const OurAdvantagesSection = dynamic(() => import('@/components/sections/OurAdvantagesSection/OurAdvantagesSection'));
const FaqSection = dynamic(() => import('@/components/sections/FaqSection/FaqSection'));

export const MainPage = () => {
  return (
    <main>
      Mainpage

      <OurAdvantagesSection />

      <FaqSection />
    </main>
  )
}