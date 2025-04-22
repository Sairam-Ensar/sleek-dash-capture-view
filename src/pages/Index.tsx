import { PremiumButton } from "@/components/ui/premium-button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Calendar, CheckCircle, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Employee Management",
    description: "Manage employee profiles, departments, and roles with ease.",
    icon: Users,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
    path: "/employees"
  },
  {
    title: "Time Off Management",
    description: "Handle leave requests, holidays, and vacation tracking.",
    icon: Calendar,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    path: "/time-off"
  },
  {
    title: "Analytics & Reports",
    description: "Comprehensive reports and insights for your organization.",
    icon: BarChart3,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    path: "/dashboard"
  },
  {
    title: "Security & Compliance",
    description: "Top-tier security features to protect sensitive HR data.",
    icon: Shield,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    path: "/help"
  },
];

const quickActions = [
  { label: "Add Employee", path: "/employees" },
  { label: "Request Time Off", path: "/time-off/leave" },
  { label: "View Departments", path: "/departments" },
  { label: "Create Template", path: "/templates" },
];

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="flex-1">
          <Badge className="mb-4 bg-primary/10 text-primary border-none hover:bg-primary/20">
            Premium HR Solution
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Ensar HR
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Your comprehensive HR management platform designed to streamline workforce operations and enhance employee experience.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <PremiumButton asChild size="lg">
              <Link to="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </PremiumButton>
            <PremiumButton asChild variant="outline" size="lg">
              <Link to="/help">
                Explore Features
              </Link>
            </PremiumButton>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
              Enterprise Grade
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
              24/7 Premium Support
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-primary/30 to-blue-500/30 w-64 h-64 rounded-full blur-3xl absolute -z-10"></div>
            <img 
              src="/lovable-uploads/602f4d60-71af-476c-b318-9b981387be9e.png" 
              alt="HR Dashboard" 
              className="w-full max-w-lg rounded-xl shadow-xl border border-white/20 animate-float"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Quick Actions</h2>
          <Link 
            to="/dashboard"
            className="text-primary hover:underline flex items-center font-medium"
          >
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-md transition-all animate-fade-in">
              <CardContent className="p-4 flex justify-between items-center">
                <span className="font-medium">{action.label}</span>
                <Link 
                  to={action.path}
                  className="bg-primary/10 hover:bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link to={feature.path} key={index}>
              <Card 
                className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  
                  <div className="mt-auto pt-4">
                    <span className="text-primary flex items-center text-sm font-medium">
                      Learn more 
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8 shadow-sm border border-primary/10 animate-fade-in delay-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-full p-2 shadow-md">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-semibold">Premium Features Activated</h2>
        </div>
        
        <p className="text-gray-700 mb-6 max-w-2xl">
          Your enterprise account includes access to all premium features and priority support. 
          Explore the full potential of Ensar HR's enterprise capabilities.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white bg-opacity-50 rounded-lg p-4 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Advanced Analytics</span>
          </div>
          <div className="bg-white bg-opacity-50 rounded-lg p-4 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Unlimited Templates</span>
          </div>
          <div className="bg-white bg-opacity-50 rounded-lg p-4 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Priority Support</span>
          </div>
          <div className="bg-white bg-opacity-50 rounded-lg p-4 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Custom Integrations</span>
          </div>
          <div className="bg-white bg-opacity-50 rounded-lg p-4 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>Advanced Security</span>
          </div>
          <div className="bg-white bg-opacity-50 rounded-lg p-4 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>API Access</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <PremiumButton asChild>
            <Link to="/help">
              Explore Premium Features
            </Link>
          </PremiumButton>
          <PremiumButton asChild variant="outline">
            <Link to="/templates">
              Access Templates
            </Link>
          </PremiumButton>
        </div>
      </div>
    </div>
  );
};

export default Index;
