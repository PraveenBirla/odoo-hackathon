import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, X, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddItem = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-earth">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 border-b">
        <div className="flex items-center justify-between">
          <Button asChild variant="outline" size="sm">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Add New Item</CardTitle>
            <p className="text-muted-foreground">Share your sustainable fashion piece with the community</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6">
              {/* Image Upload */}
              <div className="space-y-2">
                <Label htmlFor="images" className="text-foreground">Item Images</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB (max 5 images)</p>
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                  <Button variant="outline" className="mt-4" onClick={() => document.getElementById('images')?.click()}>
                    Choose Files
                  </Button>
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-foreground">Item Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Vintage Denim Jacket"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brand" className="text-foreground">Brand</Label>
                  <Input
                    id="brand"
                    placeholder="e.g., Levi's, H&M, Zara"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the item's condition, style, and any special features..."
                  rows={4}
                  required
                />
              </div>

              {/* Category and Details */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Category *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="outerwear">Outerwear</SelectItem>
                      <SelectItem value="tops">Tops</SelectItem>
                      <SelectItem value="bottoms">Bottoms</SelectItem>
                      <SelectItem value="dresses">Dresses</SelectItem>
                      <SelectItem value="shoes">Shoes</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="bags">Bags</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Size *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="xxl">XXL</SelectItem>
                      <SelectItem value="onesize">One Size</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Condition *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New with tags</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="worn">Well worn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="color" className="text-foreground">Color</Label>
                  <Input
                    id="color"
                    placeholder="e.g., Blue, Black, Multicolor"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="material" className="text-foreground">Material</Label>
                  <Input
                    id="material"
                    placeholder="e.g., 100% Cotton, Polyester blend"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <Label className="text-foreground">Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X 
                        className="h-3 w-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add tags (e.g., vintage, organic, casual)"
                  />
                  <Button type="button" variant="outline" onClick={addTag}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Press Enter or click + to add tags</p>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button type="submit" className="flex-1 gradient-eco border-0">
                  Publish Item
                </Button>
                <Button type="button" variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddItem;
