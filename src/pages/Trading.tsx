
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Wallet } from "lucide-react";

const mockPriceData = [
  { time: '09:00', price: 42500, volume: 1200 },
  { time: '10:00', price: 43200, volume: 1500 },
  { time: '11:00', price: 42800, volume: 980 },
  { time: '12:00', price: 44100, volume: 2100 },
  { time: '13:00', price: 45300, volume: 1800 },
  { time: '14:00', price: 44700, volume: 1600 },
  { time: '15:00', price: 46200, volume: 2300 },
  { time: '16:00', price: 47500, volume: 2800 },
];

const cryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 47500,
    change: 5.2,
    volume: "2.3B",
    marketCap: "932B",
  },
  {
    name: "Ethereum", 
    symbol: "ETH",
    price: 3200,
    change: -2.1,
    volume: "1.8B", 
    marketCap: "385B",
  },
  {
    name: "Orange Coin",
    symbol: "ONG",
    price: 125,
    change: 12.5,
    volume: "890M",
    marketCap: "45B",
  },
  {
    name: "Future Token",
    symbol: "FUT",
    price: 89,
    change: 8.7,
    volume: "650M",
    marketCap: "23B",
  },
];

const portfolioData = [
  { name: 'BTC', value: 45000, percentage: 45 },
  { name: 'ETH', value: 25000, percentage: 25 },
  { name: 'ONG', value: 20000, percentage: 20 },
  { name: 'FUT', value: 10000, percentage: 10 },
];

const Trading = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <SidebarTrigger className="text-orange-400 hover:text-orange-300" />
          <h1 className="text-2xl font-bold neon-text text-orange-500">Trading Hub</h1>
          <div className="w-8" />
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="glass-dark p-6 hover-glow animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-green-500/20">
                <Wallet className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Portfolio</p>
                <p className="text-2xl font-bold text-white">$100,000</p>
                <p className="text-sm text-green-400">+8.2% today</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-dark p-6 hover-glow animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-orange-500/20">
                <DollarSign className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Today's P&L</p>
                <p className="text-2xl font-bold text-white">+$7,540</p>
                <p className="text-sm text-orange-400">+8.2%</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-dark p-6 hover-glow animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-blue-500/20">
                <BarChart3 className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">24h Volume</p>
                <p className="text-2xl font-bold text-white">$23.5M</p>
                <p className="text-sm text-blue-400">+15.3%</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-dark p-6 hover-glow animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-purple-500/20">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Open Positions</p>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-sm text-purple-400">4 profitable</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <Card className="lg:col-span-2 glass-dark p-6 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Orange Coin (ONG)</h2>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500/20 text-green-400">+12.5%</Badge>
                  <span className="text-2xl font-bold text-white">$125.00</span>
                </div>
              </div>
              
              <Tabs defaultValue="price" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
                  <TabsTrigger value="price" className="text-orange-400 data-[state=active]:bg-orange-500/20">Price</TabsTrigger>
                  <TabsTrigger value="volume" className="text-orange-400 data-[state=active]:bg-orange-500/20">Volume</TabsTrigger>
                  <TabsTrigger value="depth" className="text-orange-400 data-[state=active]:bg-orange-500/20">Depth</TabsTrigger>
                </TabsList>
                
                <TabsContent value="price" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockPriceData}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Area 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#f97316" 
                        strokeWidth={2}
                        fill="url(#colorPrice)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="volume" className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockPriceData}>
                      <XAxis dataKey="time" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Bar dataKey="volume" fill="#f97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </TabsContent>
                
                <TabsContent value="depth" className="h-80 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <BarChart3 className="h-16 w-16 mx-auto mb-4" />
                    <p>Order book depth chart</p>
                    <p className="text-sm">Coming soon...</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>

          {/* Market List */}
          <Card className="glass-dark p-6 animate-fade-in">
            <h2 className="text-xl font-bold text-white mb-4">Markets</h2>
            <div className="space-y-3">
              {cryptos.map((crypto, index) => (
                <div key={crypto.symbol} className="p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{crypto.symbol}</span>
                        <span className="text-sm text-gray-400">{crypto.name}</span>
                      </div>
                      <div className="text-sm text-gray-400">Vol: {crypto.volume}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-white">${crypto.price.toLocaleString()}</div>
                      <div className={`text-sm flex items-center gap-1 ${crypto.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {crypto.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {Math.abs(crypto.change)}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Portfolio & Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-dark p-6 animate-fade-in">
            <h2 className="text-xl font-bold text-white mb-4">Portfolio Distribution</h2>
            <div className="space-y-4">
              {portfolioData.map((asset, index) => (
                <div key={asset.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{asset.name}</span>
                    <span className="text-white">${asset.value.toLocaleString()} ({asset.percentage}%)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-500" 
                      style={{width: `${asset.percentage}%`, animationDelay: `${index * 0.2}s`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-dark p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Quick Trade</h2>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                New Order
              </Button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30">
                  Buy ONG
                </Button>
                <Button className="bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30">
                  Sell ONG
                </Button>
              </div>
              <div className="text-center py-8 text-gray-400">
                <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                <p>Advanced trading interface</p>
                <p className="text-sm">Place orders, set stop losses, and more</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trading;
