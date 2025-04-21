
import { Lock } from "lucide-react";

const LoginHeader = () => (
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
        <Lock className="h-8 w-8 text-primary" />
      </div>
    </div>
    <h2 className="text-3xl font-bold tracking-tight">Welcome Back</h2>
    <p className="text-muted-foreground mt-2">Sign in to access your dashboard</p>
  </div>
);

export default LoginHeader;
