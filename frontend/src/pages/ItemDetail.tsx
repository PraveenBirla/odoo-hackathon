import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Heart, Share2, Star, Coins, ArrowUpDown } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import clothingItems from "@/assets/clothing-items.jpg";

const ItemDetail = () => {
  const { id } = useParams();

  // Mock item data - in real app, this would be fetched based on ID
  const item = {
    id: 1,
    title: "Vintage Denim Jacket",
    description: "A beautiful vintage denim jacket in excellent condition. Perfect for layering and adding a classic touch to any outfit. Made from high-quality denim that gets better with age. This piece has been loved and well-maintained, ready for its next adventure.",
    uploader: {
      name: "Sarah Mitchell",
      avatar: "/placeholder.svg",
      rating: 4.8,
      totalSwaps: 23
    },
    images: [clothingItems, clothingItems, clothingItems],
    category: "Outerwear",
    size: "Medium",
    condition: "Excellent",
    brand: "Vintage Levi's",
    color: "Classic Blue",
    material: "100% Cotton Denim",
    tags: ["vintage", "denim", "classic", "unisex"],
    status: "Available",
    pointsRequired: 45,
    uploadDate: "2 days ago",
    views: 23,
    likes: 8
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 border-b">
        <div className="flex items-center justify-between">
          <Button asChild variant="outline" size="sm">
            <Link to="/browse">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Browse
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-soft">
              <img 
                src={item.images[0]} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {item.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${item.title} ${index + 2}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-smooth"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">{item.status}</Badge>
              <h1 className="text-3xl font-bold text-foreground mb-2">{item.title}</h1>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Item Specifications */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-foreground">Item Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="text-foreground font-medium">{item.category}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span className="text-foreground font-medium">{item.size}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Condition</span>
                  <span className="text-foreground font-medium">{item.condition}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Brand</span>
                  <span className="text-foreground font-medium">{item.brand}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Color</span>
                  <span className="text-foreground font-medium">{item.color}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material</span>
                  <span className="text-foreground font-medium">{item.material}</span>
                </div>
              </CardContent>
            </Card>

            {/* Uploader Info */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={item.uploader.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {item.uploader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.uploader.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span>{item.uploader.rating}/5</span>
                      <span>•</span>
                      <span>{item.uploader.totalSwaps} swaps</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full gradient-eco border-0" size="lg">
                <ArrowUpDown className="h-5 w-5 mr-2" />
                Request Swap
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Coins className="h-5 w-5 mr-2" />
                Redeem Points ({item.pointsRequired} pts)
              </Button>
            </div>

            {/* Item Stats */}
            <div className="flex justify-between text-sm text-muted-foreground pt-4 border-t">
              <span>Posted {item.uploadDate}</span>
              <div className="flex gap-4">
                <span>{item.views} views</span>
                <span>{item.likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
