
import { Link } from "react-router-dom";

interface EmployeeProfileLinkProps {
  id: string | number;
  name: string;
  className?: string;
}

export function EmployeeProfileLink({ id, name, className }: EmployeeProfileLinkProps) {
  return (
    <Link 
      to={`/employees/${id}`} 
      className={`font-medium text-primary hover:underline ${className}`}
    >
      {name}
    </Link>
  );
}
