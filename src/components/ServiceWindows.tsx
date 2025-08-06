import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Truck, 
  Droplets, 
  Sparkles, 
  ShoppingCart, 
  Settings, 
  Car, 
  Star,
  ArrowRight,
  MessageCircle,
  Search
} from "lucide-react";

const ServiceWindows = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three Powerful Platforms
            <span className="block carvie-text-gradient">One Seamless Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need emergency repairs, quality parts, or want to buy/sell vehicles, 
            Carvie has everything covered under one roof.
          </p>
        </div>

        {/* Service Windows Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Window 1: Repair & Emergency Services */}
          <Card className="carvie-card group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Repair & Emergency</CardTitle>
              <CardDescription className="text-muted-foreground">
                24/7 on-demand car repair and emergency services at your location
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Services List */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm">Emergency Towing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="h-5 w-5 text-primary" />
                  <span className="text-sm">Fuel Refill Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm">Car Wash & Detailing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-5 w-5 text-primary" />
                  <span className="text-sm">On-site Repairs</span>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Filter by Business/Personal providers</li>
                  <li>• Real-time ratings & reviews</li>
                  <li>• Distance & price sorting</li>
                  <li>• Instant booking & chat</li>
                </ul>
              </div>

              <div className="flex space-x-2">
                <Button variant="carvie" className="flex-1">
                  Book Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Window 2: Parts Store */}
          <Card className="carvie-card group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Parts Store</CardTitle>
              <CardDescription className="text-muted-foreground">
                Premium car parts marketplace with authentic products and fast delivery
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Parts Categories */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <span className="text-sm">Engines & Transmissions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm">Spark Plugs & Electronics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-primary" />
                  <span className="text-sm">Wheels & Interiors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="h-5 w-5 text-primary" />
                  <span className="text-sm">Paint Kits & Accessories</span>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold mb-2">Shopping Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Business & individual sellers</li>
                  <li>• Advanced filtering & search</li>
                  <li>• Verified product authenticity</li>
                  <li>• Secure payment & fast shipping</li>
                </ul>
              </div>

              <div className="flex space-x-2">
                <Button variant="carvie" className="flex-1">
                  Shop Parts
                  <ShoppingCart className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Window 3: Marketplace */}
          <Card className="carvie-card group cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Marketplace</CardTitle>
              <CardDescription className="text-muted-foreground">
                Buy, sell, rent vehicles and connect with car enthusiasts nationwide
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Marketplace Options */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-primary" />
                  <span className="text-sm">Car Resale Market</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm">Personal Rentals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm">Trailer Rentals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wrench className="h-5 w-5 text-primary" />
                  <span className="text-sm">Custom-Built Cars</span>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold mb-2">Marketplace Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Live bidding platform</li>
                  <li>• Professional inspections</li>
                  <li>• Direct seller communication</li>
                  <li>• Secure transactions</li>
                </ul>
              </div>

              <div className="flex space-x-2">
                <Button variant="carvie" className="flex-1">
                  Explore Cars
                  <Car className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of satisfied customers who trust Carvie for all their automotive needs
          </p>
          <Button variant="hero" size="hero">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceWindows;