import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Clock, Star, Calendar, Eye, MessageCircle, Gavel } from "lucide-react";

const Marketplace = () => {
  const carsForSale = [
    {
      id: 1,
      title: "2020 Honda Civic Sport",
      price: "$18,500",
      mileage: "35,000 km",
      year: 2020,
      location: "Downtown",
      seller: "John Smith",
      rating: 4.8,
      images: 8,
      features: ["Turbo Engine", "Apple CarPlay", "Backup Camera"],
      condition: "Excellent"
    },
    {
      id: 2,
      title: "2018 BMW 3 Series",
      price: "$25,900",
      mileage: "67,000 km",
      year: 2018,
      location: "Midtown",
      seller: "AutoDealer Pro",
      rating: 4.9,
      images: 12,
      features: ["Navigation", "Leather Seats", "Sunroof"],
      condition: "Good"
    }
  ];

  const rentals = [
    {
      id: 1,
      title: "2022 Tesla Model 3",
      pricePerDay: "$89",
      location: "Airport Area",
      owner: "Sarah Wilson",
      rating: 4.7,
      available: "Available Now",
      features: ["Autopilot", "Supercharging", "Premium Interior"]
    },
    {
      id: 2,
      title: "2021 Ford F-150 (Trailer)",
      pricePerDay: "$65",
      location: "Industrial District",
      owner: "Mike's Rentals",
      rating: 4.6,
      available: "Available Tomorrow",
      features: ["Towing Package", "Crew Cab", "4WD"]
    }
  ];

  const auctions = [
    {
      id: 1,
      title: "1965 Ford Mustang Classic",
      currentBid: "$35,000",
      timeLeft: "2 days 14 hours",
      bids: 23,
      watchers: 156,
      condition: "Restored"
    },
    {
      id: 2,
      title: "Custom Built Racing Car",
      currentBid: "$8,500",
      timeLeft: "5 hours 23 minutes",
      bids: 12,
      watchers: 89,
      condition: "Custom"
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
              Car Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Buy, sell, rent, and bid on vehicles. Your one-stop automotive marketplace.
            </p>
          </div>
        </section>

        {/* Marketplace Tabs */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="buy">Buy Cars</TabsTrigger>
                <TabsTrigger value="rent">Rentals</TabsTrigger>
                <TabsTrigger value="auction">Auctions</TabsTrigger>
                <TabsTrigger value="sell">Sell Your Car</TabsTrigger>
              </TabsList>

              {/* Buy Cars Tab */}
              <TabsContent value="buy" className="space-y-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <select className="bg-card border border-border rounded-lg px-4 py-2">
                    <option>All Makes</option>
                    <option>Honda</option>
                    <option>BMW</option>
                    <option>Tesla</option>
                    <option>Ford</option>
                  </select>
                  <select className="bg-card border border-border rounded-lg px-4 py-2">
                    <option>All Years</option>
                    <option>2020+</option>
                    <option>2015-2019</option>
                    <option>2010-2014</option>
                  </select>
                  <select className="bg-card border border-border rounded-lg px-4 py-2">
                    <option>Price Range</option>
                    <option>Under $15k</option>
                    <option>$15k - $25k</option>
                    <option>$25k - $40k</option>
                    <option>Over $40k</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {carsForSale.map((car) => (
                    <Card key={car.id} className="bg-card border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-muted-foreground">Car Images ({car.images})</div>
                        </div>
                        <CardTitle className="text-xl">{car.title}</CardTitle>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{car.price}</span>
                          <Badge variant="outline">{car.condition}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Year:</span>
                              <p className="font-medium">{car.year}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Mileage:</span>
                              <p className="font-medium">{car.mileage}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{car.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{car.rating}</span>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-2">Key Features:</p>
                            <div className="flex flex-wrap gap-1">
                              {car.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1" variant="carvie">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Rentals Tab */}
              <TabsContent value="rent" className="space-y-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <select className="bg-card border border-border rounded-lg px-4 py-2">
                    <option>All Types</option>
                    <option>Personal Cars</option>
                    <option>Trucks & Trailers</option>
                    <option>Luxury Cars</option>
                  </select>
                  <input
                    type="date"
                    className="bg-card border border-border rounded-lg px-4 py-2"
                    placeholder="Start Date"
                  />
                  <input
                    type="date"
                    className="bg-card border border-border rounded-lg px-4 py-2"
                    placeholder="End Date"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rentals.map((rental) => (
                    <Card key={rental.id} className="bg-card border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-muted-foreground">Rental Images</div>
                        </div>
                        <CardTitle className="text-xl">{rental.title}</CardTitle>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{rental.pricePerDay}/day</span>
                          <Badge variant="default">{rental.available}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{rental.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{rental.rating}</span>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium mb-2">Features:</p>
                            <div className="flex flex-wrap gap-1">
                              {rental.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1" variant="carvie">
                              Book Now
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Auctions Tab */}
              <TabsContent value="auction" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {auctions.map((auction) => (
                    <Card key={auction.id} className="bg-card border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-muted-foreground">Auction Images</div>
                        </div>
                        <CardTitle className="text-xl">{auction.title}</CardTitle>
                        <Badge variant="outline">{auction.condition}</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Current Bid</p>
                            <p className="text-2xl font-bold text-primary">{auction.currentBid}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Time Left:</span>
                              </div>
                              <p className="font-medium">{auction.timeLeft}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <Gavel className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Bids:</span>
                              </div>
                              <p className="font-medium">{auction.bids}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 text-sm">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <span>{auction.watchers} watching</span>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1" variant="carvie">
                              Place Bid
                            </Button>
                            <Button variant="outline" size="sm">
                              Watch
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Sell Your Car Tab */}
              <TabsContent value="sell" className="space-y-6">
                <Card className="bg-card border-border max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">List Your Vehicle</CardTitle>
                    <CardDescription className="text-center">
                      Get your car in front of thousands of potential buyers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Make</label>
                        <select className="w-full bg-card border border-border rounded-lg px-4 py-2">
                          <option>Select Make</option>
                          <option>Honda</option>
                          <option>BMW</option>
                          <option>Tesla</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Model</label>
                        <input
                          type="text"
                          placeholder="Enter model"
                          className="w-full bg-card border border-border rounded-lg px-4 py-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Year</label>
                        <input
                          type="number"
                          placeholder="2020"
                          className="w-full bg-card border border-border rounded-lg px-4 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Mileage</label>
                        <input
                          type="text"
                          placeholder="50,000 km"
                          className="w-full bg-card border border-border rounded-lg px-4 py-2"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Asking Price</label>
                      <input
                        type="text"
                        placeholder="$25,000"
                        className="w-full bg-card border border-border rounded-lg px-4 py-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <textarea
                        placeholder="Describe your vehicle's condition, features, and any additional details..."
                        rows={4}
                        className="w-full bg-card border border-border rounded-lg px-4 py-2"
                      />
                    </div>

                    <Button className="w-full" variant="carvie">
                      Create Listing
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Marketplace;