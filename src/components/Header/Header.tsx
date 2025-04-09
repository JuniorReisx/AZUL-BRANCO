import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Heart, Search, User } from 'lucide-react';

export function Header() { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !target.closest('nav') && !target.closest('button')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Feminino', href: '/' },
    { name: 'Masculino', href: '/' },
    { name: 'Acessórios', href: '/' },
    { name: 'Promoções', href: '/' },
  ];

  return (
    <header 
      className={`bg-white w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md sticky top-0' : 'shadow-sm'
      }`}
      aria-label="Cabeçalho da loja"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button
            className="lg:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-navy-500 rounded p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <a href="/" className="inline-block">
              <h1 className="text-2xl font-bold text-navy-900 tracking-tight">AZUL & BRANCO</h1>
            </a>
          </div>

          <nav className="hidden lg:flex space-x-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-navy-900 font-medium hover:text-navy-700 transition-colors py-2 border-b-2 border-transparent hover:border-navy-700"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              className="text-navy-900 hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500 rounded p-1"
              aria-label="Buscar produtos"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-navy-900 hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500 rounded p-1"
              aria-label="Favoritos"
            >
              <Heart size={20} />
            </button>
            <button 
              className="text-navy-900 hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500 rounded p-1 hidden sm:block"
              aria-label="Minha conta"
            >
              <User size={20} />
            </button>
            <button 
              className="text-navy-900 hover:text-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-500 rounded p-1 relative"
              aria-label="Carrinho de compras com 2 itens"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-navy-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      <div 
        id="mobile-menu"
        className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-2" aria-label="Navegação mobile">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-navy-900 py-3 px-2 font-medium hover:bg-gray-50 rounded-md hover:text-navy-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-gray-100 my-2 pt-2">
              <a 
                href="/conta" 
                className="flex items-center text-navy-900 py-3 px-2 font-medium hover:bg-gray-50 rounded-md"
              >
                <User size={18} className="mr-2" /> Minha Conta
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
