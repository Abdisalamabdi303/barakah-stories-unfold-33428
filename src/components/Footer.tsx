import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "How to Help", href: "#help" },
    { name: "Contact Us", href: "#contact" },
  ];

  const programs = [
    { name: "Clean Water Projects", href: "#" },
    { name: "Food Distribution", href: "#" },
    { name: "Education Programs", href: "#" },
    { name: "Healthcare Services", href: "#" },
  ];

  const resources = [
    { name: "Annual Reports", href: "#" },
    { name: "Financial Transparency", href: "#" },
    { name: "Volunteer Portal", href: "#" },
    { name: "Emergency Updates", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Organization Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Heart className="h-6 sm:h-8 w-6 sm:w-8 text-hope-light flex-shrink-0" />
              <span className="text-lg sm:text-xl font-bold">Somali Barakah Organization</span>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Dedicated to transforming lives through sustainable humanitarian programs 
              that create lasting impact in Somalia's most vulnerable communities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-hope-light" />
                <span className="text-sm">Mogadishu, Somalia</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-hope-light" />
                <span className="text-sm">+252 123 456 789</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-hope-light" />
                <span className="text-sm">info@somalibarakah.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-hope-light transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Our Programs</h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-hope-light transition-colors text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2 mb-4 sm:mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    className="text-gray-300 hover:text-hope-light transition-colors text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-3">Get our monthly newsletter with impact stories and updates.</p>
              <Button className="w-full bg-hope hover:bg-hope/90 text-white text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-xs sm:text-sm text-center md:text-left">
              © 2024 Somali Barakah Organization. All rights reserved.<br className="sm:hidden" />
              <span className="text-hope-light ml-1">NPO Registration: NPO/123/2019</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-gray-300 text-xs sm:text-sm">Follow us:</span>
              <div className="flex space-x-3 sm:space-x-4">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-hope-light cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-hope-light cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-hope-light cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 hover:text-hope-light cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-xs sm:text-sm px-4">
              "Whoever saves a life, it is as if he has saved all of mankind" - Quran 5:32
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;