import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import clothingItems from "@/assets/clothing-items.jpg";

const Index = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      uploader: "Sarah M.",
      image: clothingItems,
      category: "Outerwear",
      status: "Available"
    },
    {
      id: 2,
      title: "Organic Cotton Sweater",
      uploader: "Alex K.",
      image: clothingItems,
      category: "Knitwear",
      status: "Available"
    },
    {
      id: 3,
      title: "Sustainable Tote Bag",
      uploader: "Emma R.",
      image: clothingItems,
      category: "Accessories",
      status: "Available"
    },
    {
      id: 4,
      title: "Eco-Friendly T-Shirt",
      uploader: "Mike D.",
      image: clothingItems,
      category: "Casual",
      status: "Available"
    }
  ];

  const stats = [
    { icon: Recycle, label: "Items Swapped", value: "2,847" },
    { icon: Users, label: "Active Users", value: "1,245" },
    { icon: Leaf, label: "CO2 Saved", value: "15.2 tons" },
    { icon: Star, label: "User Rating", value: "4.9/5" }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">ReWear</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/browse" className="text-muted-foreground hover:text-primary transition-smooth">
              Browse
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-smooth">
              Dashboard
            </Link>
            <Button asChild size="sm">
              <Link to="/dashboard">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Sustainable Fashion
              <span className="block text-primary">Exchange Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Give your clothes a second life. Swap, share, and discover unique pieces 
              while reducing fashion waste and building a sustainable community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gradient-eco border-0">
                <Link to="/dashboard">Start Swapping</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/browse">Browse Items</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Sustainable fashion items" 
              className="rounded-2xl shadow-eco w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Items */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Featured Items</h3>
          <p className="text-muted-foreground">Discover amazing pieces from our community</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Card key={item.id} className="shadow-soft hover:shadow-eco transition-smooth">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted rounded-t-lg mb-4 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">by {item.uploader}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{item.category}</Badge>
                    <Badge className="bg-primary text-primary-foreground">{item.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <Card className="gradient-eco text-center">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of fashion lovers who are creating a more sustainable future, 
              one swap at a time.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/dashboard">Join ReWear Today</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 ReWear. Building a sustainable fashion future.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
