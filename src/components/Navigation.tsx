import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.services'), href: "#services" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.getInvolved'), href: "#get-involved" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt={t('nav.orgName')} className="h-8 w-8 md:h-10 md:w-10 object-contain flex-shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-bold text-foreground line-clamp-1">
              {t('nav.orgName')}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm xl:text-base text-foreground hover:text-hope transition-colors font-medium whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
            <Button variant="default" className="bg-hope hover:bg-hope/90 text-white whitespace-nowrap">
              {t('nav.donate')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {t('nav.switchLang')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-hope transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="bg-hope hover:bg-hope/90 text-white w-full mt-2">
                {t('nav.donate')}
              </Button>
              <Button
                variant="ghost"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="flex items-center justify-center gap-2 w-full"
              >
                <Globe className="h-4 w-4" />
                {t('nav.switchLang')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;