
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, User, Star, MessageSquare, DollarSign, PlusCircle, Settings, BarChart2 } from "lucide-react";

const ProviderDashboard = () => {
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);

  const bookings = [
    {
      id: 1,
      client: "Ahmed Khan",
      service: "Wedding Photography",
      date: "Oct 15, 2023",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      client: "Sana Malik",
      service: "Corporate Event Photography",
      date: "Oct 18, 2023",
      time: "2:30 PM",
      status: "pending",
    },
    {
      id: 3,
      client: "Faraz Ahmed",
      service: "Product Photography",
      date: "Oct 22, 2023",
      time: "11:00 AM",
      status: "confirmed",
    },
  ];

  const messages = [
    {
      id: 1,
      from: "Ahmed Khan",
      subject: "Wedding Photography Details",
      preview: "I wanted to discuss some specific shots for the...",
      date: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      from: "Sana Malik",
      subject: "Corporate Event Inquiry",
      preview: "Hi, I'm interested in booking your services for...",
      date: "Yesterday",
      unread: false,
    },
  ];

  const services = [
    {
      id: "photo1",
      title: "Wedding Photography",
      category: "Photography",
      price: "₨15,000 - ₨25,000",
      bookings: 8,
      active: true,
    },
    {
      id: "photo2",
      title: "Event Photography",
      category: "Photography",
      price: "₨10,000 - ₨20,000",
      bookings: 12,
      active: true,
    },
    {
      id: "photo3",
      title: "Portrait Photography",
      category: "Photography",
      price: "₨5,000 - ₨8,000",
      bookings: 5,
      active: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Service Provider Dashboard</h1>
              <p className="text-gray-600">Manage your services and client bookings</p>
            </div>
            <Button onClick={() => setIsAddServiceOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Service
            </Button>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <CalendarClock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                    <h3 className="text-2xl font-bold">24</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Clients</p>
                    <h3 className="text-2xl font-bold">18</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                    <h3 className="text-2xl font-bold">4.8</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <h3 className="text-2xl font-bold">₨120,000</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="bookings" className="mb-8">
                <TabsList className="mb-4">
                  <TabsTrigger value="bookings">Bookings</TabsTrigger>
                  <TabsTrigger value="services">My Services</TabsTrigger>
                  <TabsTrigger value="messages">Messages</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                
                <TabsContent value="bookings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Bookings</CardTitle>
                      <CardDescription>Manage your scheduled appointments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {bookings.map((booking) => (
                          <div key={booking.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                            <div>
                              <h4 className="font-medium">{booking.service}</h4>
                              <div className="text-sm text-muted-foreground">
                                Client: {booking.client}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {booking.date} at {booking.time}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={booking.status === "confirmed" ? "default" : "outline"}>
                                {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                              </Badge>
                              <Button variant="outline" size="sm">Details</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View All Bookings</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="services">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Services</CardTitle>
                      <CardDescription>Manage your service offerings</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                            <div>
                              <h4 className="font-medium">{service.title}</h4>
                              <div className="text-sm text-muted-foreground">
                                {service.category} • {service.price}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {service.bookings} bookings
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={service.active ? "default" : "secondary"}>
                                {service.active ? "Active" : "Inactive"}
                              </Badge>
                              <Button variant="outline" size="sm">Edit</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={() => setIsAddServiceOpen(true)}>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add New Service
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="messages">
                  <Card>
                    <CardHeader>
                      <CardTitle>Messages</CardTitle>
                      <CardDescription>Client inquiries and communications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {messages.length > 0 ? (
                        <div className="space-y-4">
                          {messages.map((message) => (
                            <div key={message.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                              <div className="flex items-start">
                                <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${message.unread ? "bg-primary" : "bg-transparent"}`} />
                                <div>
                                  <h4 className="font-medium">{message.from}</h4>
                                  <div className="text-sm font-medium">{message.subject}</div>
                                  <div className="text-sm text-muted-foreground">{message.preview}</div>
                                  <div className="text-xs text-muted-foreground mt-1">{message.date}</div>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <MessageSquare className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                          <h3 className="text-lg font-medium">No messages</h3>
                          <p className="text-sm text-muted-foreground mt-2">
                            You don't have any messages yet
                          </p>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View All Messages</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="analytics">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Analytics</CardTitle>
                      <CardDescription>Service performance and booking trends</CardDescription>
                    </CardHeader>
                    <CardContent className="h-96 flex items-center justify-center">
                      <div className="text-center">
                        <BarChart2 className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                        <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                        <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
                          Detailed analytics and reporting will be available here. Track your service performance and client engagement.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Profile</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">ClickPerfect Studios</h3>
                  <p className="text-sm text-muted-foreground">Professional Photography Services</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-muted-foreground ml-1">(32 reviews)</span>
                  </div>
                  <Button variant="outline" className="mt-4 w-full" asChild>
                    <div className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Edit Profile
                    </div>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" onClick={() => setIsAddServiceOpen(true)}>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add New Service
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CalendarClock className="h-4 w-4 mr-2" />
                      Manage Schedule
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Business Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Top Service</p>
                      <p className="text-lg">Wedding Photography</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Busy Month</p>
                      <p className="text-lg">October 2023</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Profile Views</p>
                      <p className="text-lg">145 this week</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      {/* Add Service Dialog */}
      <Dialog open={isAddServiceOpen} onOpenChange={setIsAddServiceOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Add New Service</DialogTitle>
            <DialogDescription>
              Create a new service offering for your customers
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="service-title">Service Title</Label>
              <Input id="service-title" placeholder="e.g., Wedding Photography" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="service-category">Category</Label>
              <Select defaultValue="photography">
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="event-planning">Event Planning</SelectItem>
                  <SelectItem value="catering">Catering</SelectItem>
                  <SelectItem value="decoration">Decoration</SelectItem>
                  <SelectItem value="music">Music & DJ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="price-min">Price (Min)</Label>
                <Input id="price-min" placeholder="e.g., 5000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price-max">Price (Max)</Label>
                <Input id="price-max" placeholder="e.g., 20000" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="service-description">Description</Label>
              <Textarea
                id="service-description"
                placeholder="Describe your service, what's included, etc."
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddServiceOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsAddServiceOpen(false)}>
              Add Service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default ProviderDashboard;
