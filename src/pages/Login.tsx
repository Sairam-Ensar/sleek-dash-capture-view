
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        toast({
          title: "Login Successful",
          description: "Welcome to Ensar HR Dashboard",
        });
        navigate("/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Please enter valid credentials",
        });
      }
    }, 1500);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Reset Link Sent",
        description: "Please check your email for password reset instructions",
      });
      setForgotPasswordOpen(false);
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: "Your account has been created. An admin will approve your account shortly.",
      });
      setRegisterOpen(false);
    }, 1500);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Gradient Background with Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/90 to-blue-700 flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-700/90 z-10"></div>
        
        <div className="z-20 text-white mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/043cffa9-fc3a-4320-9d59-c843a95de8b0.png" 
            alt="Ensar Logo" 
            className="h-20 mb-6 opacity-90"
          />
          <h1 className="text-4xl font-bold mb-4">Ensar HR</h1>
          <p className="text-xl mb-8">Workforce Management Platform</p>
        </div>
        
        <div className="relative z-20 w-full max-w-md">
          <img 
            src="/lovable-uploads/1bf0e48b-391c-4e7a-a5c1-58a4988b103d.png" 
            alt="HR Dashboard" 
            className="w-full rounded-lg shadow-2xl animate-float"
          />
        </div>
        
        {/* Animated shapes */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-white/10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-white/5 animate-pulse-slow delay-500"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 bg-background">
        <div className="w-full max-w-md space-y-8 animate-fade-in-up">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Login to Your Account</h2>
            <p className="text-muted-foreground mt-2">Enter your credentials to access your dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 mt-8">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
              
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                  Remember me
                </label>
              </div>

              <button
                type="button"
                onClick={() => setForgotPasswordOpen(true)}
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                Forgot password?
              </button>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setRegisterOpen(true)}
                className="font-medium text-primary hover:text-primary/80"
              >
                Register as Employee
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Forgot Password Dialog */}
      <Dialog open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reset your password</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Enter your email address and we will send you a link to reset your password.
              </p>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => setForgotPasswordOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Register Dialog */}
      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register as an Employee</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Full Name" 
                  className="pl-10" 
                  required 
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="pl-10" 
                  required 
                />
              </div>
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Employee ID (if known)" 
                  className="pl-3" 
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your registration will be reviewed by HR before activation.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" type="button" onClick={() => setRegisterOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Register"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
