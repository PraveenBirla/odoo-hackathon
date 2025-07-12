import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Plus, Star, Package, ArrowUpDown, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import clothingItems from "@/assets/clothing-items.jpg";

const Dashboard = () => {
  const userItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      status: "Available",
      views: 23,
      image: clothingItems
    },
    {
      id: 2,
      title: "Organic Cotton Dress",
      status: "Swapped",
      views: 45,
      image: clothingItems
    },
    {
      id: 3,
      title: "Sustainable Sneakers",
      status: "Pending",
      views: 12,
      image: clothingItems
    }
  ];

  const swapHistory = [
    {
      id: 1,
      action: "Swapped",
      item: "Eco T-Shirt",
      partner: "Sarah M.",
      date: "2 days ago",
      points: "+50"
    },
    {
      id: 2,
      action: "Received",
      item: "Vintage Scarf",
      partner: "Alex K.",
      date: "1 week ago",
      points: "-30"
    },
    {
      id: 3,
      action: "Swapped",
      item: "Organic Jeans",
      partner: "Emma R.",
      date: "2 weeks ago",
      points: "+75"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 border-b">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">ReWear</h1>
          </Link>
          <nav className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link to="/browse">Browse Items</Link>
            </Button>
            <Button asChild size="sm" className="gradient-eco border-0">
              <Link to="/add-item">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-soft">
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-foreground">Jessica Davis</CardTitle>
                <p className="text-muted-foreground">Eco Fashion Enthusiast</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Swap Points</span>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">245 pts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Rating</span>
                  </div>
                  <div className="text-foreground font-semibold">4.8/5</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Total Swaps</span>
                  </div>
                  <div className="text-foreground font-semibold">23</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Active Items</span>
                  </div>
                  <div className="text-foreground font-semibold">3</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="items" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="items">My Items</TabsTrigger>
                <TabsTrigger value="history">Swap History</TabsTrigger>
              </TabsList>

              <TabsContent value="items" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">My Items</h3>
                  <Button asChild className="gradient-eco border-0">
                    <Link to="/add-item">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Item
                    </Link>
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {userItems.map((item) => (
                    <Card key={item.id} className="shadow-soft hover:shadow-eco transition-smooth">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                          <div className="flex justify-between items-center mb-3">
                            <Badge 
                              className={
                                item.status === "Available" ? "bg-primary text-primary-foreground" :
                                item.status === "Swapped" ? "bg-accent text-accent-foreground" :
                                "bg-secondary text-secondary-foreground"
                              }
                            >
                              {item.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{item.views} views</span>
                          </div>
                          <Button asChild variant="outline" className="w-full">
                            <Link to={`/item/${item.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Swap History</h3>
                <div className="space-y-4">
                  {swapHistory.map((swap) => (
                    <Card key={swap.id} className="shadow-soft">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <ArrowUpDown className="h-8 w-8 text-primary" />
                            <div>
                              <h4 className="font-semibold text-foreground">{swap.action}: {swap.item}</h4>
                              <p className="text-muted-foreground">with {swap.partner} • {swap.date}</p>
                            </div>
                          </div>
                          <Badge 
                            className={
                              swap.points.startsWith("+") 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-accent text-accent-foreground"
                            }
                          >
                            {swap.points} pts
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
