import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { RegistrationForm } from "@/components/sections/RegistrationForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <RegistrationForm />
    </>
  );
}
