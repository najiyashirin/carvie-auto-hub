import React from "react";
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import carvieLogo from "@/assets/carvie-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={carvieLogo} alt="Carvie" className="h-10 w-10" />
              <span className="text-2xl font-bold carvie-text-gradient">Carvie</span>
            </div>
            <p className="text-muted-foreground">
              Your comprehensive automotive platform for repairs, parts, and marketplace services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Emergency Repair</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Car Wash & Detailing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Towing Services</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Fuel Delivery</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Parts Store</li>
            </ul>
          </div>

          {/* Marketplace */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Marketplace</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Buy Cars</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Sell Cars</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Rent Vehicles</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Custom Builds</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Inspections</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@carvie.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Carvie. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;