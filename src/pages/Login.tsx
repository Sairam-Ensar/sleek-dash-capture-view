import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  Shield,
  Users,
  BarChart3
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import RegisterDialog from "./RegisterDialog";

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
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Reset Link Sent",
        description: "Please check your email for password reset instructions",
      });
      setForgotPasswordOpen(false);
      setResetEmail("");
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
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
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/90 to-blue-700 flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-700/90 z-10"></div>
        <div className="z-20 text-white mb-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-20 w-20 opacity-90" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Ensar HR</h1>
          <p className="text-xl mb-8">Premium Workforce Management Platform</p>
          <div className="grid grid-cols-2 gap-6 mt-12 w-full max-w-lg">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <Users className="h-8 w-8 mb-4 text-white/90" />
              <h3 className="text-lg font-semibold mb-2">Employee Management</h3>
              <p className="text-sm text-white/80">Comprehensive HR tools for modern workforce</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <BarChart3 className="h-8 w-8 mb-4 text-white/90" />
              <h3 className="text-lg font-semibold mb-2">Analytics & Reports</h3>
              <p className="text-sm text-white/80">Data-driven insights for better decisions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 bg-background">
        <div className="w-full max-w-md space-y-8">
          <LoginHeader />
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
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
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

      <ForgotPasswordDialog
        open={forgotPasswordOpen}
        isLoading={isLoading}
        email={resetEmail}
        setEmail={setResetEmail}
        onSubmit={handleForgotPassword}
        onClose={() => setForgotPasswordOpen(false)}
      />
      <RegisterDialog
        open={registerOpen}
        isLoading={isLoading}
        onSubmit={handleRegister}
        onClose={() => setRegisterOpen(false)}
      />
    </div>
  );
};

export default Login;
