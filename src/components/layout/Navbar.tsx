
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              Connect<span className="text-secondary">Pro</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/providers" className="text-gray-700 hover:text-primary transition-colors">
              Service Providers
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center gap-1">
              <UserCircle size={18} />
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg py-2 shadow-lg">
            <div className="flex flex-col space-y-3 px-4 py-2">
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-primary py-2" 
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/providers" 
                className="text-gray-700 hover:text-primary py-2" 
                onClick={toggleMenu}
              >
                Service Providers
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary py-2" 
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary py-2" 
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="outline" className="w-full justify-center">Login</Button>
                <Button className="w-full bg-primary hover:bg-primary/90">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
