
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Heart, MessageSquare, Share, MoreHorizontal } from "lucide-react";

interface Post {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

const mockPosts: Post[] = [
  {
    id: "1",
    user: {
      name: "Alex Chen",
      username: "@alexchen",
      avatar: "/placeholder.svg",
    },
    content: "Just discovered this amazing new technology that could revolutionize social media! The future is here 🚀",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    likes: 142,
    comments: 23,
    shares: 12,
    timestamp: "2h ago",
  },
  {
    id: "2",
    user: {
      name: "Sarah Williams",
      username: "@sarahw",
      avatar: "/placeholder.svg",
    },
    content: "The trading markets are looking incredibly bullish today! Orange coin to the moon 📈🚀",
    likes: 89,
    comments: 15,
    shares: 8,
    timestamp: "4h ago",
  },
  {
    id: "3",
    user: {
      name: "Tech Insider",
      username: "@techinsider",
      avatar: "/placeholder.svg",
    },
    content: "Breaking: New AI breakthrough promises to change everything we know about social interactions",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
    likes: 256,
    comments: 67,
    shares: 45,
    timestamp: "6h ago",
  },
];

const Index = () => {
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim()) {
      console.log("New post:", newPost);
      setNewPost("");
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <SidebarTrigger className="text-orange-400 hover:text-orange-300" />
          <h1 className="text-2xl font-bold neon-text text-orange-500">Home Feed</h1>
          <div className="w-8" />
        </div>

        {/* Create Post */}
        <Card className="glass-dark p-6 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="w-12 h-12 border-2 border-orange-500/30">
                <img src="/placeholder.svg" alt="You" className="w-full h-full object-cover" />
              </Avatar>
              <div className="flex-1">
                <Input
                  placeholder="What's happening in the future?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="bg-transparent border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-400"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button 
                onClick={handlePost}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 animate-glow"
                disabled={!newPost.trim()}
              >
                Post to Future
              </Button>
            </div>
          </div>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-6">
          {mockPosts.map((post, index) => (
            <Card key={post.id} className="glass-dark p-6 hover-glow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="space-y-4">
                {/* Post Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-orange-500/30">
                      <img src={post.user.avatar} alt={post.user.name} className="w-full h-full object-cover" />
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-white">{post.user.name}</h3>
                      <p className="text-sm text-gray-400">{post.user.username} • {post.timestamp}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-400">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                {/* Post Content */}
                <p className="text-white leading-relaxed">{post.content}</p>

                {/* Post Image */}
                {post.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post content" 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-orange-500/20">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 transition-colors">
                    <Heart className="h-4 w-4 mr-2" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-400 transition-colors">
                    <Share className="h-4 w-4 mr-2" />
                    {post.shares}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
