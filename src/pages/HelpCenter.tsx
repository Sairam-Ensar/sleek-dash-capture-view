
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Search,
} from "lucide-react";

const commonQuestions = [
  {
    question: "How do I create a new employee profile?",
    answer: "Navigate to Employees > Add New Employee and fill in the required information.",
  },
  {
    question: "How can I request time off?",
    answer: "Go to Time Off > Leave Requests and click on 'New Request' to submit your leave application.",
  },
  {
    question: "Where can I find my payslips?",
    answer: "Access your payslips through Profile > Documents > Payslips section.",
  },
  {
    question: "How do I update my personal information?",
    answer: "Visit your Profile page and click on 'Edit Profile' to update your details.",
  },
];

const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    description: "New to the platform? Start here for basic guidance.",
    articles: 12,
  },
  {
    title: "Employee Management",
    icon: FileText,
    description: "Learn about managing employee profiles and data.",
    articles: 8,
  },
  {
    title: "Time Off & Leave",
    icon: Calendar,
    description: "Understanding leave policies and requests.",
    articles: 15,
  },
];

export default function HelpCenter() {
  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader
        title="Help Center"
        description="Find answers and support for your questions"
        breadcrumbs={[
          { title: "Dashboard", href: "/dashboard" },
          { title: "Help Center" }
        ]}
      />

      {/* Search Section */}
      <div className="relative mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <Input
              placeholder="Search for help..."
              className="text-lg"
            />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {helpCategories.map((category) => (
          <Card key={category.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className="h-5 w-5 text-primary" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{category.description}</p>
              <p className="text-sm text-primary">{category.articles} articles</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Common Questions */}
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {commonQuestions.map((faq, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                {faq.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Support */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button variant="outline" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Live Chat
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Support
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
