
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, Phone, Video, MoreHorizontal } from "lucide-react";

interface Conversation {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
    online: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
}

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sent: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    user: {
      name: "Sarah Williams",
      username: "@sarahw",
      avatar: "/placeholder.svg",
      online: true,
    },
    lastMessage: "Hey! Did you see the latest trading updates?",
    timestamp: "2m ago",
    unread: 2,
  },
  {
    id: "2",
    user: {
      name: "Tech Insider",
      username: "@techinsider",
      avatar: "/placeholder.svg",
      online: false,
    },
    lastMessage: "That's an amazing breakthrough!",
    timestamp: "1h ago",
    unread: 0,
  },
  {
    id: "3",
    user: {
      name: "Marcus Johnson",
      username: "@marcus_j",
      avatar: "/placeholder.svg",
      online: true,
    },
    lastMessage: "Thanks for the invite to the event",
    timestamp: "3h ago",
    unread: 1,
  },
];

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hey Alex! How's the new project coming along?",
    timestamp: "10:30 AM",
    sent: false,
  },
  {
    id: "2", 
    content: "It's going great! The glassmorphism design is really coming together",
    timestamp: "10:32 AM",
    sent: true,
  },
  {
    id: "3",
    content: "That sounds amazing! Can't wait to see it",
    timestamp: "10:33 AM", 
    sent: false,
  },
  {
    id: "4",
    content: "Hey! Did you see the latest trading updates?",
    timestamp: "10:35 AM",
    sent: false,
  },
];

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const filteredConversations = mockConversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <SidebarTrigger className="text-orange-400 hover:text-orange-300" />
          <h1 className="text-2xl font-bold neon-text text-orange-500">Messages</h1>
          <div className="w-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          {/* Conversations List */}
          <Card className="glass-dark p-4 animate-fade-in">
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-orange-500/30 text-white placeholder:text-gray-400"
                />
              </div>

              {/* Conversations */}
              <ScrollArea className="h-[calc(100vh-12rem)]">
                <div className="space-y-2">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation)}
                      className={`
                        p-3 rounded-lg cursor-pointer transition-all duration-200 hover-glow
                        ${selectedConversation.id === conversation.id 
                          ? 'bg-orange-500/20 border border-orange-500/30' 
                          : 'hover:bg-slate-800/50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12 border-2 border-orange-500/30">
                            <img src={conversation.user.avatar} alt={conversation.user.name} />
                          </Avatar>
                          {conversation.user.online && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-white truncate">{conversation.user.name}</h3>
                            <span className="text-xs text-gray-400">{conversation.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-400 truncate">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && (
                          <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">{conversation.unread}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 glass-dark flex flex-col animate-fade-in">
            {/* Chat Header */}
            <div className="p-4 border-b border-orange-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10 border-2 border-orange-500/30">
                      <img src={selectedConversation.user.avatar} alt={selectedConversation.user.name} />
                    </Avatar>
                    {selectedConversation.user.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{selectedConversation.user.name}</h3>
                    <p className="text-sm text-gray-400">
                      {selectedConversation.user.online ? 'Online' : 'Last seen 2h ago'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {mockMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`
                        max-w-xs lg:max-w-md px-4 py-2 rounded-2xl
                        ${message.sent 
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                          : 'bg-slate-800 text-white border border-orange-500/20'
                        }
                      `}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.sent ? 'text-orange-100' : 'text-gray-400'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-orange-500/20">
              <div className="flex items-center gap-3">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-slate-800/50 border-orange-500/30 text-white placeholder:text-gray-400"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;
