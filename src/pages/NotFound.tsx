import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-warm/20 to-slate-modern/10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-neutral-warm mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-corporate hover:text-blue-corporate-dark underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
