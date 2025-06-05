
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Link as LinkIcon, Calendar, Users } from "lucide-react";

const Profile = () => {
  const userStats = {
    posts: 1247,
    followers: 12500,
    following: 892,
    likes: 45600,
  };

  const recentPosts = [
    {
      id: "1",
      content: "Just launched my new project! Excited to share it with the world 🚀",
      timestamp: "2h ago",
      likes: 89,
      comments: 23,
    },
    {
      id: "2", 
      content: "Beautiful sunset today. Nature never fails to amaze me ✨",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400",
      timestamp: "1d ago",
      likes: 156,
      comments: 45,
    },
    {
      id: "3",
      content: "Working on some exciting AI projects. The future is now! 🤖",
      timestamp: "3d ago",
      likes: 234,
      comments: 67,
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <SidebarTrigger className="text-orange-400 hover:text-orange-300" />
          <h1 className="text-2xl font-bold neon-text text-orange-500">Profile</h1>
          <div className="w-8" />
        </div>

        {/* Profile Header */}
        <Card className="glass-dark p-8 animate-fade-in">
          <div className="relative">
            {/* Cover Image */}
            <div className="h-48 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-lg mb-6"></div>
            
            {/* Profile Info */}
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-20 relative">
              <Avatar className="w-32 h-32 border-4 border-orange-500 bg-slate-800">
                <img src="/placeholder.svg" alt="Profile" className="w-full h-full object-cover" />
              </Avatar>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold text-white">Alex Chen</h2>
                  <p className="text-orange-400">@alexchen</p>
                  <Badge className="mt-2 bg-orange-500/20 text-orange-400 border-orange-500/30">
                    Verified Creator
                  </Badge>
                </div>
                
                <p className="text-gray-300 max-w-2xl">
                  Futurist • Tech Entrepreneur • Building the next generation of social experiences. 
                  Passionate about AI, blockchain, and human connection in the digital age.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-1">
                    <LinkIcon className="h-4 w-4" />
                    alexchen.tech
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined March 2024
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  Edit Profile
                </Button>
                <Button variant="outline" className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(userStats).map(([key, value]) => (
            <Card key={key} className="glass-dark p-4 text-center hover-glow">
              <div className="text-2xl font-bold text-orange-400">{value.toLocaleString()}</div>
              <div className="text-sm text-gray-400 capitalize">{key}</div>
            </Card>
          ))}
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-orange-500/20">
            <TabsTrigger value="posts" className="text-orange-400 data-[state=active]:bg-orange-500/20">Posts</TabsTrigger>
            <TabsTrigger value="media" className="text-orange-400 data-[state=active]:bg-orange-500/20">Media</TabsTrigger>
            <TabsTrigger value="likes" className="text-orange-400 data-[state=active]:bg-orange-500/20">Likes</TabsTrigger>
            <TabsTrigger value="replies" className="text-orange-400 data-[state=active]:bg-orange-500/20">Replies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="space-y-4">
            {recentPosts.map((post, index) => (
              <Card key={post.id} className="glass-dark p-6 hover-glow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10 border-2 border-orange-500/30">
                      <img src="/placeholder.svg" alt="Alex Chen" className="w-full h-full object-cover" />
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-white">Alex Chen</h3>
                      <p className="text-sm text-gray-400">@alexchen • {post.timestamp}</p>
                    </div>
                  </div>
                  
                  <p className="text-white">{post.content}</p>
                  
                  {post.image && (
                    <div className="rounded-lg overflow-hidden">
                      <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="media" className="text-center py-12">
            <div className="text-gray-400">
              <div className="text-6xl mb-4">📷</div>
              <p>No media posts yet</p>
            </div>
          </TabsContent>
          
          <TabsContent value="likes" className="text-center py-12">
            <div className="text-gray-400">
              <div className="text-6xl mb-4">❤️</div>
              <p>Liked posts will appear here</p>
            </div>
          </TabsContent>
          
          <TabsContent value="replies" className="text-center py-12">
            <div className="text-gray-400">
              <div className="text-6xl mb-4">💬</div>
              <p>Replies will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
