import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Check, X, Trash2, Eye, Settings, Users, Package } from "lucide-react";
import { Link } from "react-router-dom";
import clothingItems from "@/assets/clothing-items.jpg";

const AdminPanel = () => {
  const pendingItems = [
    {
      id: 1,
      title: "Vintage Leather Jacket",
      uploader: "John D.",
      category: "Outerwear",
      uploadDate: "2 hours ago",
      image: clothingItems,
      status: "pending"
    },
    {
      id: 2,
      title: "Sustainable Cotton Dress",
      uploader: "Maria S.",
      category: "Dresses",
      uploadDate: "5 hours ago",
      image: clothingItems,
      status: "pending"
    },
    {
      id: 3,
      title: "Eco-Friendly Sneakers",
      uploader: "Alex P.",
      category: "Shoes",
      uploadDate: "1 day ago",
      image: clothingItems,
      status: "pending"
    }
  ];

  const allItems = [
    {
      id: 4,
      title: "Organic Cotton T-Shirt",
      uploader: "Sarah M.",
      category: "Tops",
      status: "approved",
      date: "2 days ago",
      image: clothingItems
    },
    {
      id: 5,
      title: "Recycled Denim Jeans",
      uploader: "Mike K.",
      category: "Bottoms",
      status: "approved",
      date: "3 days ago",
      image: clothingItems
    },
    {
      id: 6,
      title: "Vintage Silk Scarf",
      uploader: "Emma L.",
      category: "Accessories",
      status: "rejected",
      date: "1 week ago",
      image: clothingItems
    }
  ];

  const stats = [
    { label: "Total Items", value: "2,847", icon: Package },
    { label: "Pending Review", value: "23", icon: Eye },
    { label: "Active Users", value: "1,245", icon: Users },
    { label: "Items This Week", value: "156", icon: Package }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Settings className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to="/">Back to Site</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pending">Pending Review ({pendingItems.length})</TabsTrigger>
            <TabsTrigger value="all">All Items</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Items Pending Review</CardTitle>
                <p className="text-muted-foreground">Review and moderate user submissions</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          by {item.uploader} • {item.category} • {item.uploadDate}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <Check className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <X className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            {/* Filters */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input 
                      placeholder="Search items..." 
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full md:w-[150px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full md:w-[150px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="outerwear">Outerwear</SelectItem>
                      <SelectItem value="tops">Tops</SelectItem>
                      <SelectItem value="bottoms">Bottoms</SelectItem>
                      <SelectItem value="dresses">Dresses</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Items List */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">All Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {allItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          by {item.uploader} • {item.category} • {item.date}
                        </p>
                      </div>
                      <Badge 
                        className={
                          item.status === "approved" ? "bg-primary text-primary-foreground" :
                          item.status === "rejected" ? "bg-destructive text-destructive-foreground" :
                          "bg-secondary text-secondary-foreground"
                        }
                      >
                        {item.status}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
