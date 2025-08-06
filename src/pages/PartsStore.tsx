import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Truck, Shield } from "lucide-react";

const PartsStore = () => {
  const products = [
    {
      id: 1,
      name: "Premium Brake Pads Set",
      category: "Brakes",
      price: "$89.99",
      originalPrice: "$119.99",
      rating: 4.7,
      reviews: 124,
      image: "/placeholder.svg",
      seller: "AutoParts Pro",
      sellerType: "Business",
      inStock: true,
      features: ["Ceramic compound", "Noise-free", "Extended warranty"]
    },
    {
      id: 2,
      name: "LED Headlight Kit",
      category: "Lighting",
      price: "$156.99",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg",
      seller: "BrightLights Inc",
      sellerType: "Business",
      inStock: true,
      features: ["6000K white light", "Plug & play", "3-year warranty"]
    },
    {
      id: 3,
      name: "Performance Air Filter",
      category: "Engine",
      price: "$45.99",
      rating: 4.5,
      reviews: 67,
      image: "/placeholder.svg",
      seller: "Mike's Parts",
      sellerType: "Personal",
      inStock: false,
      features: ["Reusable", "Increases airflow", "Easy installation"]
    },
    {
      id: 4,
      name: "Sport Steering Wheel",
      category: "Interior",
      price: "$299.99",
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg",
      seller: "Custom Interiors",
      sellerType: "Business",
      inStock: true,
      features: ["Genuine leather", "Racing design", "Universal fit"]
    }
  ];

  const categories = [
    "All Parts", "Engine", "Brakes", "Suspension", "Electrical", 
    "Interior", "Exterior", "Wheels & Tires", "Lighting"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent">
              Car Parts Store
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Quality automotive parts from trusted sellers - businesses and individuals
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for parts..."
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2" size="sm">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="px-4 mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "carvie" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <select className="bg-card border border-border rounded-lg px-4 py-2">
                <option>All Sellers</option>
                <option>Business</option>
                <option>Personal</option>
              </select>
              <select className="bg-card border border-border rounded-lg px-4 py-2">
                <option>Sort by Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
              <select className="bg-card border border-border rounded-lg px-4 py-2">
                <option>All Prices</option>
                <option>Under $50</option>
                <option>$50 - $100</option>
                <option>$100 - $200</option>
                <option>Over $200</option>
              </select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4">
                    <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-muted-foreground">Product Image</div>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-primary">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <Badge variant={product.inStock ? "default" : "destructive"} className="text-xs">
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Seller:</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{product.seller}</span>
                          <Badge variant={product.sellerType === "Business" ? "default" : "secondary"} className="text-xs">
                            {product.sellerType}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Features:</p>
                        <div className="space-y-1">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <p key={index} className="text-xs">• {feature}</p>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1" 
                          variant="carvie"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" size="sm">
                          Details
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

export default PartsStore;