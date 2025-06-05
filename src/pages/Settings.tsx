
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Shield, 
  Bell, 
  Palette, 
  Database,
  LogOut,
  Trash2,
  Download,
  Upload
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <SidebarTrigger className="text-orange-400 hover:text-orange-300" />
          <h1 className="text-2xl font-bold neon-text text-orange-500">Settings</h1>
          <div className="w-8" />
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 border border-orange-500/20">
            <TabsTrigger value="profile" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="privacy" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <Shield className="h-4 w-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="appearance" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <Palette className="h-4 w-4 mr-2" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="data" className="text-orange-400 data-[state=active]:bg-orange-500/20">
              <Database className="h-4 w-4 mr-2" />
              Data
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="glass-dark p-6 animate-fade-in">
              <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
              
              <div className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20 border-4 border-orange-500/30">
                    <img src="/placeholder.svg" alt="Profile" />
                  </Avatar>
                  <div className="space-y-2">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      <Upload className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                    <Button variant="outline" className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10">
                      Remove
                    </Button>
                  </div>
                </div>

                <Separator className="bg-orange-500/20" />

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName" 
                      defaultValue="Alex" 
                      className="bg-slate-800/50 border-orange-500/30 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName" 
                      defaultValue="Chen" 
                      className="bg-slate-800/50 border-orange-500/30 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white">Username</Label>
                  <Input 
                    id="username" 
                    defaultValue="@alexchen" 
                    className="bg-slate-800/50 border-orange-500/30 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    defaultValue="alex@example.com" 
                    className="bg-slate-800/50 border-orange-500/30 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-white">Bio</Label>
                  <textarea 
                    id="bio" 
                    rows={3}
                    defaultValue="Futurist • Tech Entrepreneur • Building the next generation of social experiences."
                    className="w-full p-3 bg-slate-800/50 border border-orange-500/30 rounded-md text-white placeholder:text-gray-400 resize-none"
                  />
                </div>

                <div className="flex justify-end">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    Save Changes
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Privacy Settings */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="glass-dark p-6 animate-fade-in">
              <h2 className="text-xl font-bold text-white mb-6">Privacy & Security</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Private Account</h3>
                    <p className="text-gray-400 text-sm">Only approved followers can see your posts</p>
                  </div>
                  <Switch />
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Show Online Status</h3>
                    <p className="text-gray-400 text-sm">Let others see when you're online</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Allow Message Requests</h3>
                    <p className="text-gray-400 text-sm">Receive messages from people you don't follow</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Two-Factor Authentication</h3>
                    <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline" className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10">
                    Enable
                  </Button>
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="space-y-4">
                  <h3 className="text-white font-semibold">Blocked Users</h3>
                  <div className="text-center py-8 text-gray-400">
                    <Shield className="h-12 w-12 mx-auto mb-2" />
                    <p>No blocked users</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="glass-dark p-6 animate-fade-in">
              <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Push Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive notifications on your device</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Email Notifications</h3>
                    <p className="text-gray-400 text-sm">Get updates via email</p>
                  </div>
                  <Switch />
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Likes & Comments</h3>
                    <p className="text-gray-400 text-sm">When someone likes or comments on your posts</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">New Followers</h3>
                    <p className="text-gray-400 text-sm">When someone follows you</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Trading Alerts</h3>
                    <p className="text-gray-400 text-sm">Price alerts and market updates</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Appearance */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="glass-dark p-6 animate-fade-in">
              <h2 className="text-xl font-bold text-white mb-6">Appearance</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-3">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border-2 border-orange-500 bg-slate-900 cursor-pointer">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded mx-auto mb-2"></div>
                        <p className="text-sm text-orange-400 font-semibold">Dark</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-orange-500/30 bg-slate-800/50 cursor-pointer hover:border-orange-500/60">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-white rounded mx-auto mb-2"></div>
                        <p className="text-sm text-gray-400">Light</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-orange-500/30 bg-slate-800/50 cursor-pointer hover:border-orange-500/60">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-slate-900 rounded mx-auto mb-2"></div>
                        <p className="text-sm text-gray-400">Auto</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-orange-500/20" />

                <div>
                  <h3 className="text-white font-semibold mb-3">Accent Color</h3>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white cursor-pointer"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full border border-orange-500/30 cursor-pointer hover:border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border border-orange-500/30 cursor-pointer hover:border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border border-orange-500/30 cursor-pointer hover:border-white"></div>
                    <div className="w-8 h-8 bg-red-500 rounded-full border border-orange-500/30 cursor-pointer hover:border-white"></div>
                  </div>
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Reduce Motion</h3>
                    <p className="text-gray-400 text-sm">Minimize animations and transitions</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">High Contrast</h3>
                    <p className="text-gray-400 text-sm">Increase contrast for better visibility</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Data Management */}
          <TabsContent value="data" className="space-y-6">
            <Card className="glass-dark p-6 animate-fade-in">
              <h2 className="text-xl font-bold text-white mb-6">Data Management</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">Download Your Data</h3>
                    <p className="text-gray-400 text-sm">Get a copy of all your data</p>
                  </div>
                  <Button variant="outline" className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="space-y-4">
                  <h3 className="text-white font-semibold">Storage Usage</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Posts & Media</span>
                      <span className="text-white">2.4 GB</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Messages</span>
                      <span className="text-white">890 MB</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '22%'}}></div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="space-y-4">
                  <h3 className="text-red-400 font-semibold">Danger Zone</h3>
                  
                  <div className="p-4 border border-red-500/30 rounded-lg bg-red-500/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold">Clear All Data</h4>
                        <p className="text-gray-400 text-sm">Permanently delete all your posts and data</p>
                      </div>
                      <Button variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear Data
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border border-red-500/30 rounded-lg bg-red-500/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-semibold">Delete Account</h4>
                        <p className="text-gray-400 text-sm">Permanently delete your account and all associated data</p>
                      </div>
                      <Button variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator className="bg-orange-500/20" />

                <div className="flex justify-center">
                  <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
