
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, Users, Hash } from "lucide-react";

const trendingTopics = [
  { tag: "#FutureTech", posts: "125K", trend: "+12%" },
  { tag: "#OrangeCoin", posts: "89K", trend: "+25%" },
  { tag: "#AI2024", posts: "67K", trend: "+8%" },
  { tag: "#SocialFuture", posts: "45K", trend: "+15%" },
  { tag: "#CryptoTrading", posts: "92K", trend: "+18%" },
];

const suggestedUsers = [
  {
    name: "Future AI Labs",
    username: "@futureailabs",
    avatar: "/placeholder.svg",
    followers: "2.5M",
    verified: true,
    bio: "Building the next generation of AI",
  },
  {
    name: "Crypto Analyst",
    username: "@cryptoanalyst",
    avatar: "/placeholder.svg", 
    followers: "1.8M",
    verified: true,
    bio: "Professional crypto market analysis",
  },
  {
    name: "Tech Innovator",
    username: "@techinnovator",
    avatar: "/placeholder.svg",
    followers: "987K",
    verified: false,
    bio: "Innovation through technology",
  },
];

const discoverPosts = [
  {
    id: "1",
    user: {
      name: "Future Labs",
      username: "@futurelabs",
      avatar: "/placeholder.svg",
    },
    content: "Just unveiled our revolutionary AI that can predict social media trends with 95% accuracy! 🚀 #FutureTech #AI2024",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800",
    likes: 2450,
    shares: 892,
    engagement: "High",
  },
  {
    id: "2",
    user: {
      name: "Orange Markets",
      username: "@orangemarkets", 
      avatar: "/placeholder.svg",
    },
    content: "Orange Coin hits new all-time high! The future of decentralized social trading is here. Who's joining the revolution? 📈 #OrangeCoin",
    likes: 1820,
    shares: 654,
    engagement: "Trending",
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <SidebarTrigger className="text-orange-400 hover:text-orange-300" />
          <h1 className="text-2xl font-bold neon-text text-orange-500">Explore</h1>
          <div className="w-8" />
        </div>

        {/* Search */}
        <Card className="glass-dark p-4 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-400" />
            <Input
              placeholder="Search for people, topics, or trends..."
              className="pl-12 bg-slate-800/50 border-orange-500/30 text-white placeholder:text-gray-400 h-12 text-lg"
            />
          </div>
        </Card>

        <Tabs defaultValue="trending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-orange-500/20">
            <TabsTrigger value="trending" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <TrendingUp className="h-4 w-4 mr-2" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="people" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <Users className="h-4 w-4 mr-2" />
              People
            </TabsTrigger>
            <TabsTrigger value="topics" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <Hash className="h-4 w-4 mr-2" />
              Topics
            </TabsTrigger>
            <TabsTrigger value="discover" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <Search className="h-4 w-4 mr-2" />
              Discover
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Trending Topics */}
              <Card className="glass-dark p-6 hover-glow animate-fade-in">
                <h2 className="text-xl font-bold text-white mb-4">Trending Topics</h2>
                <div className="space-y-4">
                  {trendingTopics.map((topic, index) => (
                    <div key={topic.tag} className="p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-orange-400">{topic.tag}</p>
                          <p className="text-sm text-gray-400">{topic.posts} posts</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {topic.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Trending Posts */}
              <Card className="glass-dark p-6 hover-glow animate-fade-in">
                <h2 className="text-xl font-bold text-white mb-4">Viral Posts</h2>
                <div className="space-y-4">
                  {discoverPosts.map((post, index) => (
                    <div key={post.id} className="p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10 border-2 border-orange-500/30">
                          <img src={post.user.avatar} alt={post.user.name} />
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-white">{post.user.name}</span>
                            <span className="text-gray-400">{post.user.username}</span>
                            <Badge className={`text-xs ${post.engagement === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>
                              {post.engagement}
                            </Badge>
                          </div>
                          <p className="text-white text-sm mb-3">{post.content}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span>{post.likes.toLocaleString()} likes</span>
                            <span>{post.shares} shares</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="people" className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Suggested for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestedUsers.map((user, index) => (
                <Card key={user.username} className="glass-dark p-6 hover-glow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-center space-y-4">
                    <Avatar className="w-16 h-16 mx-auto border-2 border-orange-500/30">
                      <img src={user.avatar} alt={user.name} />
                    </Avatar>
                    <div>
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="font-semibold text-white">{user.name}</h3>
                        {user.verified && (
                          <Badge className="bg-blue-500/20 text-blue-400 text-xs">✓</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{user.username}</p>
                      <p className="text-xs text-gray-500 mt-1">{user.followers} followers</p>
                    </div>
                    <p className="text-sm text-gray-300">{user.bio}</p>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Follow
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="topics" className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Trending Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trendingTopics.map((topic, index) => (
                <Card key={topic.tag} className="glass-dark p-6 hover-glow animate-fade-in cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Hash className="h-6 w-6 text-orange-400" />
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {topic.trend}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-400 text-lg">{topic.tag}</h3>
                      <p className="text-gray-400">{topic.posts} posts</p>
                    </div>
                    <Button variant="outline" className="w-full border-orange-500/30 text-orange-400 hover:bg-orange-500/10">
                      Explore Topic
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discover" className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Discover New Content</h2>
            <div className="space-y-6">
              {discoverPosts.map((post, index) => (
                <Card key={post.id} className="glass-dark p-6 hover-glow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-orange-500/30">
                        <img src={post.user.avatar} alt={post.user.name} />
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-white">{post.user.name}</h3>
                        <p className="text-sm text-gray-400">{post.user.username}</p>
                      </div>
                      <Badge className={`ml-auto ${post.engagement === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>
                        {post.engagement}
                      </Badge>
                    </div>
                    <p className="text-white">{post.content}</p>
                    {post.image && (
                      <div className="rounded-lg overflow-hidden">
                        <img src={post.image} alt="Post content" className="w-full h-64 object-cover" />
                      </div>
                    )}
                    <div className="flex items-center justify-between text-gray-400">
                      <span>{post.likes.toLocaleString()} likes</span>
                      <span>{post.shares} shares</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Explore;
