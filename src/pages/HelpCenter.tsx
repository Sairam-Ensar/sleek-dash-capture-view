
import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PremiumButton } from "@/components/ui/premium-button";
import {
  BookOpen,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Calendar,
  ArrowRight,
  ChevronRight,
  Star,
  CheckCircle,
  Clock,
  Video,
  FileQuestion,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ActionDialog } from "@/components/ui/action-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const commonQuestions = [
  {
    question: "How do I create a new employee profile?",
    answer: "Navigate to Employees > Add New Employee and fill in the required information.",
    category: "Employees"
  },
  {
    question: "How can I request time off?",
    answer: "Go to Time Off > Leave Requests and click on 'New Request' to submit your leave application.",
    category: "Time Off"
  },
  {
    question: "Where can I find my payslips?",
    answer: "Access your payslips through Profile > Documents > Payslips section.",
    category: "Documents"
  },
  {
    question: "How do I update my personal information?",
    answer: "Visit your Profile page and click on 'Edit Profile' to update your details.",
    category: "Profile"
  },
];

const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    description: "New to the platform? Start here for basic guidance.",
    articles: 12,
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    title: "Employee Management",
    icon: FileText,
    description: "Learn about managing employee profiles and data.",
    articles: 8,
    color: "bg-green-50 border-green-200 text-green-700",
  },
  {
    title: "Time Off & Leave",
    icon: Calendar,
    description: "Understanding leave policies and requests.",
    articles: 15,
    color: "bg-purple-50 border-purple-200 text-purple-700",
  },
  {
    title: "Technical Support",
    icon: FileQuestion,
    description: "Get technical help and troubleshooting guides.",
    articles: 10,
    color: "bg-orange-50 border-orange-200 text-orange-700",
  },
  {
    title: "Training Resources",
    icon: Video,
    description: "Access training videos and documentation.",
    articles: 7,
    color: "bg-red-50 border-red-200 text-red-700",
  },
  {
    title: "HR Policies",
    icon: CheckCircle,
    description: "Company policies and compliance information.",
    articles: 9,
    color: "bg-cyan-50 border-cyan-200 text-cyan-700",
  },
];

const popularArticles = [
  {
    title: "Setting up Multi-factor Authentication",
    category: "Security",
    views: 3240,
    minutesToRead: 5,
  },
  {
    title: "Managing Team Permissions and Access",
    category: "Administration",
    views: 2180,
    minutesToRead: 8,
  },
  {
    title: "Creating Custom Reports and Analytics",
    category: "Reporting",
    views: 1856,
    minutesToRead: 10,
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [contactMethod, setContactMethod] = useState<"chat" | "email" | "phone" | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for: ${searchQuery}`);
    }
  };

  const handleContactSupport = (method: "chat" | "email" | "phone") => {
    setContactMethod(method);
    setShowContactDialog(true);
  };

  const handleSendMessage = () => {
    setLoading(true);
    
    // Simulate sending a message
    setTimeout(() => {
      setLoading(false);
      setShowContactDialog(false);
      toast.success("Your message has been sent to our support team", {
        description: "We'll get back to you as soon as possible."
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Premium Help Center"
        description="Find answers and expert support for your questions"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Help Center" }
        ]}
      />

      {/* Search Section with Premium UI */}
      <div className="relative mb-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/5 rounded-2xl p-8 shadow-sm border border-primary/10">
            <h2 className="text-2xl font-semibold mb-2 text-center">How can we help you today?</h2>
            <p className="text-gray-600 mb-6 text-center">Search our knowledge base or browse categories below</p>
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                placeholder="Search for help..."
                className="text-lg bg-white/90 border-2 border-primary/20 focus:border-primary focus:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <PremiumButton type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </PremiumButton>
            </form>
          </div>
        </div>
      </div>

      {/* Help Categories with Premium UI */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-primary" />
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category) => (
            <Card 
              key={category.title} 
              className={`hover:shadow-md transition-all duration-300 group overflow-hidden border-2 ${category.color} animate-fade-in`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-white/90 shadow-sm border border-current/10">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
                
                <p className="text-gray-600 mb-3 min-h-[3rem]">{category.description}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="outline" className="font-normal">
                    {category.articles} articles
                  </Badge>
                  <button className="text-primary flex items-center text-sm font-medium group-hover:underline">
                    Explore 
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Popular Articles Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Star className="h-6 w-6 mr-2 text-amber-500" />
          Popular Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularArticles.map((article, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-all duration-300 hover:border-primary/20 cursor-pointer animate-fade-in delay-100"
            >
              <CardContent className="p-5">
                <Badge className="mb-2 bg-primary/10 text-primary border-none hover:bg-primary/20">
                  {article.category}
                </Badge>
                <h3 className="text-lg font-medium mb-2 line-clamp-2">{article.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center mr-4">
                    <HelpCircle className="h-3 w-3 mr-1" />
                    {article.views.toLocaleString()} views
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.minutesToRead} min read
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Common Questions Section with Premium UI */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <HelpCircle className="h-6 w-6 mr-2 text-primary" />
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commonQuestions.map((faq, index) => (
            <Card 
              key={index} 
              className="hover:shadow-md transition-all duration-300 hover:border-primary/20 group animate-fade-in delay-200"
            >
              <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent border-b p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Badge className="bg-primary/10 text-primary border-none hover:bg-primary/20">
                      {faq.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {faq.question}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Support with Premium UI */}
      <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/10 mb-6 animate-fade-in delay-300">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-3">Need More Help?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our premium support team is ready to assist you with any questions or concerns.
              Choose your preferred method of communication below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-sm text-gray-500 mb-4">Get instant help from our support agents.</p>
                <PremiumButton 
                  variant="secondary" 
                  className="w-full mt-auto"
                  onClick={() => handleContactSupport("chat")}
                >
                  Start Chat
                </PremiumButton>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Email Support</h4>
                <p className="text-sm text-gray-500 mb-4">Send us a message and we'll respond within 24 hours.</p>
                <PremiumButton 
                  variant="secondary" 
                  className="w-full mt-auto"
                  onClick={() => handleContactSupport("email")}
                >
                  Send Email
                </PremiumButton>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-white/90">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Phone Support</h4>
                <p className="text-sm text-gray-500 mb-4">Speak directly with our support specialists.</p>
                <PremiumButton 
                  variant="secondary" 
                  className="w-full mt-auto"
                  onClick={() => handleContactSupport("phone")}
                >
                  Call Us
                </PremiumButton>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      {/* Premium Support Badge */}
      <div className="flex items-center justify-center p-4 rounded-lg border border-primary/10 bg-white/50 animate-fade-in delay-500">
        <Badge className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 px-4 py-1.5">
          <Star className="h-3 w-3 mr-1 fill-current" /> Premium Support Enabled
        </Badge>
      </div>
      
      {/* Contact Dialog */}
      <ActionDialog
        title={
          contactMethod === "chat" 
            ? "Start Live Chat" 
            : contactMethod === "email"
            ? "Send Email to Support"
            : "Contact by Phone"
        }
        description={
          contactMethod === "chat"
            ? "Our support agents are ready to assist you with any questions."
            : contactMethod === "email" 
            ? "Send us a message and we'll respond within 24 hours."
            : "Our support team is available Monday to Friday, 9am to 5pm."
        }
        open={showContactDialog}
        onOpenChange={setShowContactDialog}
        onConfirm={handleSendMessage}
        confirmText={
          contactMethod === "chat"
            ? "Start Chat"
            : contactMethod === "email"
            ? "Send Message"
            : "Call Now"
        }
        size="lg"
        loading={loading}
        variant={contactMethod === "phone" ? "success" : "default"}
      >
        {(contactMethod === "chat" || contactMethod === "email") ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                placeholder={`Enter the subject of your ${contactMethod === "chat" ? "chat" : "email"}`}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Describe your issue or question in detail"
                rows={5}
              />
            </div>

            {contactMethod === "email" && (
              <div className="space-y-2">
                <Label htmlFor="email">Your Email Address</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            )}
            
            <div className="bg-blue-50 p-4 rounded-md border border-blue-100 flex items-start gap-3">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-sm text-blue-700">Premium Support Priority</p>
                <p className="text-xs text-blue-600">
                  As a premium user, your request will be prioritized by our support team.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-md border border-green-100 mb-4">
              <p className="font-medium text-green-800 mb-2">Premium Support Hotline</p>
              <p className="text-green-700 text-xl font-bold">+1 (800) 123-4567</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="callback">Request Callback</Label>
              <Input 
                id="callback" 
                type="tel"
                placeholder="Enter your phone number"
              />
              <p className="text-xs text-gray-500">
                Enter your number and click "Call Now" to request a callback from our team.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-md">
              <Clock className="h-4 w-4 text-gray-500 mt-0.5" />
              <p className="text-xs text-gray-600">
                Support hours: Monday to Friday, 9am to 5pm EST
              </p>
            </div>
          </div>
        )}
      </ActionDialog>
    </div>
  );
}
