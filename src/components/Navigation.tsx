import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, MessageCircle } from "lucide-react";
import carvieLogo from "@/assets/carvie-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={carvieLogo} alt="Carvie" className="h-10 w-10" />
            <span className="text-2xl font-bold carvie-text-gradient">Carvie</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="/parts" className="text-foreground hover:text-primary transition-colors font-medium">
              Parts Store
            </a>
            <a href="/marketplace" className="text-foreground hover:text-primary transition-colors font-medium">
              Marketplace
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Auth Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="text-foreground">
              Login
            </Button>
            <Button variant="carvie" size="default">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="px-4 py-6 space-y-4">
              <a
                href="/"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="/services"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="/parts"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Parts Store
              </a>
              <a
                href="/marketplace"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Marketplace
              </a>
              <a
                href="/contact"
                className="block text-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-foreground">
                  Login
                </Button>
                <Button variant="carvie" className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;