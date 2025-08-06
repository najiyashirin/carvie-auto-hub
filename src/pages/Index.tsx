import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceWindows from "@/components/ServiceWindows";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServiceWindows />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
