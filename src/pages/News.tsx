
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Eye, Share, Bookmark, TrendingUp } from "lucide-react";

const newsCategories = [
  "Technology",
  "Cryptocurrency", 
  "AI & Machine Learning",
  "Social Media",
  "Startups",
  "Markets"
];

const featuredNews = [
  {
    id: "1",
    title: "Revolutionary AI Breakthrough Changes Social Media Forever",
    summary: "Scientists develop new AI that can predict viral content with 99% accuracy, revolutionizing how we share and consume information.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
    category: "Technology",
    readTime: "5 min",
    views: "12.5K",
    publishedAt: "2 hours ago",
    trending: true,
  },
  {
    id: "2",
    title: "Orange Coin Surges 300% Following Major Partnership Announcement",
    summary: "The cryptocurrency market sees unprecedented growth as Orange Coin announces strategic partnerships with leading tech companies.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    category: "Cryptocurrency",
    readTime: "3 min", 
    views: "25.8K",
    publishedAt: "4 hours ago",
    trending: true,
  },
  {
    id: "3",
    title: "The Future of Social Trading: How AI is Transforming Markets",
    summary: "Explore how artificial intelligence is reshaping the trading landscape and what it means for individual investors.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800",
    category: "Markets",
    readTime: "7 min",
    views: "8.9K", 
    publishedAt: "6 hours ago",
    trending: false,
  },
];

const breakingNews = [
  {
    id: "1",
    title: "Tech Giant Announces $10B Investment in Social AI",
    time: "15 min ago",
    urgent: true,
  },
  {
    id: "2", 
    title: "New Regulations for Cryptocurrency Trading Platforms",
    time: "32 min ago",
    urgent: false,
  },
  {
    id: "3",
    title: "Social Media Platform Reaches 1 Billion Users Milestone",
    time: "1 hour ago", 
    urgent: false,
  },
];

const marketUpdates = [
  { symbol: "BTC", price: 47500, change: 5.2 },
  { symbol: "ETH", price: 3200, change: -2.1 },
  { symbol: "ONG", price: 125, change: 12.5 },
  { symbol: "FUT", price: 89, change: 8.7 },
];

const News = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <SidebarTrigger className="text-orange-400 hover:text-orange-300" />
          <h1 className="text-2xl font-bold neon-text text-orange-500">Future News</h1>
          <div className="w-8" />
        </div>

        {/* Breaking News Ticker */}
        <Card className="glass-dark p-4 animate-fade-in">
          <div className="flex items-center gap-4">
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
              BREAKING
            </Badge>
            <div className="flex-1 overflow-hidden">
              <div className="animate-slide-in">
                <span className="text-white font-semibold">
                  Tech Giant Announces $10B Investment in Social AI • New Crypto Regulations • Orange Coin Hits New ATH
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <Tabs defaultValue="featured" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-orange-500/20">
                <TabsTrigger value="featured" className="text-orange-400 data-[state=active]:bg-orange-500/20">Featured</TabsTrigger>
                <TabsTrigger value="technology" className="text-orange-400 data-[state=active]:bg-orange-500/20">Tech</TabsTrigger>
                <TabsTrigger value="crypto" className="text-orange-400 data-[state=active]:bg-orange-500/20">Crypto</TabsTrigger>
                <TabsTrigger value="markets" className="text-orange-400 data-[state=active]:bg-orange-500/20">Markets</TabsTrigger>
              </TabsList>

              <TabsContent value="featured" className="space-y-6">
                {/* Hero Article */}
                <Card className="glass-dark overflow-hidden hover-glow animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative">
                      <img 
                        src={featuredNews[0].image} 
                        alt={featuredNews[0].title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      {featuredNews[0].trending && (
                        <Badge className="absolute top-4 left-4 bg-orange-500/90 text-white">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          {featuredNews[0].category}
                        </Badge>
                        <span className="text-sm text-gray-400">{featuredNews[0].publishedAt}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white">{featuredNews[0].title}</h2>
                      <p className="text-gray-300">{featuredNews[0].summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredNews[0].readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {featuredNews[0].views}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredNews.slice(1).map((article, index) => (
                    <Card key={article.id} className="glass-dark overflow-hidden hover-glow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="relative">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                        {article.trending && (
                          <Badge className="absolute top-4 left-4 bg-orange-500/90 text-white">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-gray-400">{article.publishedAt}</span>
                        </div>
                        <h3 className="font-bold text-white text-lg">{article.title}</h3>
                        <p className="text-gray-300 text-sm">{article.summary}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {article.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {article.views}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 h-6 w-6 p-0">
                              <Bookmark className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300 h-6 w-6 p-0">
                              <Share className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="technology" className="text-center py-12">
                <div className="text-gray-400">
                  <div className="text-6xl mb-4">🔬</div>
                  <p className="text-lg">Technology News</p>
                  <p className="text-sm">Latest tech innovations and breakthroughs</p>
                </div>
              </TabsContent>

              <TabsContent value="crypto" className="text-center py-12">
                <div className="text-gray-400">
                  <div className="text-6xl mb-4">₿</div>
                  <p className="text-lg">Cryptocurrency News</p>
                  <p className="text-sm">Market updates and blockchain developments</p>
                </div>
              </TabsContent>

              <TabsContent value="markets" className="text-center py-12">
                <div className="text-gray-400">
                  <div className="text-6xl mb-4">📈</div>
                  <p className="text-lg">Market Analysis</p>
                  <p className="text-sm">Financial insights and trading updates</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Breaking News */}
            <Card className="glass-dark p-4 animate-fade-in">
              <h3 className="font-bold text-white mb-4">Breaking News</h3>
              <div className="space-y-3">
                {breakingNews.map((news, index) => (
                  <div key={news.id} className="p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-start gap-2">
                      {news.urgent && (
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 animate-pulse"></div>
                      )}
                      <div>
                        <p className="text-white text-sm font-medium">{news.title}</p>
                        <p className="text-gray-400 text-xs">{news.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Market Updates */}
            <Card className="glass-dark p-4 animate-fade-in">
              <h3 className="font-bold text-white mb-4">Market Updates</h3>
              <div className="space-y-3">
                {marketUpdates.map((market, index) => (
                  <div key={market.symbol} className="flex items-center justify-between p-2" style={{animationDelay: `${index * 0.1}s`}}>
                    <span className="text-white font-semibold">{market.symbol}</span>
                    <div className="text-right">
                      <div className="text-white">${market.price.toLocaleString()}</div>
                      <div className={`text-sm ${market.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {market.change > 0 ? '+' : ''}{market.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Categories */}
            <Card className="glass-dark p-4 animate-fade-in">
              <h3 className="font-bold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {newsCategories.map((category, index) => (
                  <Button 
                    key={category} 
                    variant="ghost" 
                    className="w-full justify-start text-left text-gray-300 hover:text-orange-400 hover:bg-orange-500/10"
                    style={{animationDelay: `${index * 0.05}s`}}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
