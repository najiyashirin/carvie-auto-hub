import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Wrench, ShoppingCart, Car } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Complete
            <span className="block carvie-text-gradient">Automotive Hub</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Emergency repairs, premium parts, and car marketplace - all in one seamless platform
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="flex items-center bg-card/80 backdrop-blur-sm rounded-full border border-border p-2 shadow-lg">
                <Search className="ml-4 h-6 w-6 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What do you need help with today?"
                  className="flex-1 px-4 py-3 bg-transparent text-foreground placeholder-muted-foreground outline-none"
                />
                <Button variant="carvie" size="lg" className="rounded-full">
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Service Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Repair</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Parts</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="p-4 rounded-full bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-all duration-300">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Buy/Sell</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="hero" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="glass" size="hero" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="animate-float">
          <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30"></div>
        </div>
      </div>
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;