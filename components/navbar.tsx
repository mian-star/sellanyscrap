'use client';

import { useState, useEffect } from 'react';
import { Recycle, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <Link href='/'>
          <div className="flex items-center">
            
            <Recycle className={`h-8 w-8 ${scrolled ? 'text-[#14532D]' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-[#14532D]' : 'text-white'}`}>
              SellAnyScrap
            </span>
            
          </div>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={scrolled ? 'text-[#14532D]' : 'text-white'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-[#14532D] hover:text-[#0F3D24] hover:bg-[#14532D]/10'
                      : 'text-white hover:text-white/80 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${
              scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-[#14532D]'
            }`}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    scrolled
                      ? 'text-[#14532D] hover:text-[#0F3D24] hover:bg-[#14532D]/10'
                      : 'text-white hover:text-white/80 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;