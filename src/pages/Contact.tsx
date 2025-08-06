import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare, Headphones } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our support team",
      details: "+1 (555) 123-4567",
      availability: "24/7 Emergency Line"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions",
      details: "support@carvie.com",
      availability: "Response within 2 hours"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our AI assistant",
      details: "Available on all pages",
      availability: "24/7 Instant Support"
    },
    {
      icon: Headphones,
      title: "Business Inquiries",
      description: "Partnership and enterprise",
      details: "business@carvie.com",
      availability: "Mon-Fri, 9AM-6PM"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 400, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM"
    },
    {
      city: "Los Angeles",
      address: "456 Innovation Ave, Los Angeles, CA 90028",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri: 8AM-5PM"
    },
    {
      city: "New York",
      address: "789 Business Blvd, New York, NY 10001",
      phone: "+1 (555) 456-7890",
      hours: "Mon-Fri: 9AM-7PM"
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're here to help with all your automotive needs. Reach out anytime for support, 
              questions, or business inquiries.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-primary mb-2">{method.details}</p>
                      <p className="text-sm text-muted-foreground">{method.availability}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Business Partnership</option>
                      <option>Service Provider Application</option>
                      <option>Billing Question</option>
                      <option>Feature Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button className="w-full" variant="carvie">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Locations</h2>
                  <p className="text-muted-foreground mb-6">
                    Visit us at one of our offices or service centers across the country.
                  </p>
                </div>

                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          {office.city}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm">{office.address}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{office.hours}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Emergency Support */}
                <Card className="bg-primary text-primary-foreground border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="h-5 w-5" />
                      Emergency Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">
                      Need immediate roadside assistance? Our emergency hotline is available 24/7.
                    </p>
                    <p className="text-xl font-bold">1-800-CARVIE-911</p>
                    <p className="text-sm opacity-90 mt-2">
                      Average response time: 15-30 minutes
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Contact;