import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Wrench, Car, Zap, Droplets } from "lucide-react";

const Services = () => {
  const serviceProviders = [
    {
      id: 1,
      name: "AutoFix Pro",
      type: "Business",
      rating: 4.8,
      distance: "2.3 km",
      price: "$45-80",
      services: ["Engine Repair", "Oil Change", "Brake Service"],
      image: "/placeholder.svg",
      available: true
    },
    {
      id: 2,
      name: "Mike's Mobile Repair",
      type: "Personal",
      rating: 4.6,
      distance: "1.8 km",
      price: "$35-65",
      services: ["Towing", "Jump Start", "Tire Change"],
      image: "/placeholder.svg",
      available: true
    },
    {
      id: 3,
      name: "Elite Car Care",
      type: "Business",
      rating: 4.9,
      distance: "3.1 km",
      price: "$60-120",
      services: ["Detailing", "Wash", "Interior Cleaning"],
      image: "/placeholder.svg",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Car Repair & Emergency Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with trusted mechanics and emergency service providers in your area
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="px-4 mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="carvie" size="sm">All Services</Button>
              <Button variant="outline" size="sm">Emergency</Button>
              <Button variant="outline" size="sm">Repair</Button>
              <Button variant="outline" size="sm">Maintenance</Button>
              <Button variant="outline" size="sm">Detailing</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <select className="bg-card border border-border rounded-lg px-4 py-2">
                <option>All Types</option>
                <option>Business</option>
                <option>Personal</option>
              </select>
              <select className="bg-card border border-border rounded-lg px-4 py-2">
                <option>Sort by Distance</option>
                <option>Sort by Rating</option>
                <option>Sort by Price</option>
              </select>
            </div>
          </div>
        </section>

        {/* Service Providers */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceProviders.map((provider) => (
                <Card key={provider.id} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Wrench className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{provider.name}</CardTitle>
                          <Badge variant={provider.type === "Business" ? "default" : "secondary"}>
                            {provider.type}
                          </Badge>
                        </div>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${provider.available ? 'bg-green-500' : 'bg-red-500'}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{provider.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{provider.distance}</span>
                        </div>
                        <div className="font-semibold text-primary">{provider.price}</div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Services:</p>
                        <div className="flex flex-wrap gap-1">
                          {provider.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1" variant="carvie">
                          Book Now
                        </Button>
                        <Button variant="outline" size="sm">
                          Chat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Services;