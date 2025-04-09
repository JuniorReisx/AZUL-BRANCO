import { useState, useEffect } from 'react';
import { Heart, ChevronRight, ChevronLeft, ArrowRight, Star, TrendingUp, ShoppingBag, Check } from 'lucide-react';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('mais-vendidos');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const featuredProducts = [
    { id: 1, name: "Camisa Slim Fit", image:"https://58532.cdn.simplo7.net/static/58532/sku/masculino-camisa-masculina-slim-fit-lisa-manga-curta--p-1642422593359.jpg", price: "R$129,90", oldPrice: "R$159,90", category: "Camisas", rating: 4.8, isNew: false },
    { id: 2, name: "Vestido Estampado", image:"https://th.bing.com/th/id/OIP.a17h-w_uPlKZ1t9z-iZIFAHaHa?rs=1&pid=ImgDetMain", price: "R$199,90", oldPrice: null, category: "Vestidos", rating: 4.9, isNew: true },
    { id: 3, name: "Calça Jeans Premium", image:"https://img.ltwebstatic.com/gspCenter/goodsImage/2022/7/14/4738794026/5C3B6822A5415BE0A13CE6A3344A2594.jpg", price: "R$179,90", oldPrice: "R$210,90", category: "Calças", rating: 4.7, isNew: false },
    { id: 4, name: "Blazer Clássico", image:"https://i.pinimg.com/originals/15/7f/a3/157fa390ccdc9d2fd6c3c322bb40cb44.jpg", price: "R$249,90", oldPrice: null, category: "Blazers", rating: 5.0, isNew: true }
  ];
  
  const categories = [
    { name: "Camisas", count: 42, icon: "👔" },
    { name: "Vestidos", count: 38, icon: "👗" },
    { name: "Calças", count: 29, icon: "👖" },
    { name: "Blazers", count: 16, icon: "🧥" }
  ];

  const collections = [
    { name: "Moda Praia", description: "Verão 2025", image: "https://i.pinimg.com/474x/43/ab/9d/43ab9de350cf6533edff3f6b9eab1017--mailing-address-spa-day.jpg" },
    { name: "Festa & Gala", description: "Elegância atemporal", image: "https://th.bing.com/th/id/R.d9608f6a47d404a3b9aeeec602399df6?rik=YkfNTV1Y0L09Bw&pid=ImgRaw&r=0" }
  ];
  
  const testimonials = [
    { id: 1, name: "Ana Silva", years: 3, image: "https://img.freepik.com/fotos-premium/ilustracao-3d-de-avatar-ou-perfil-de-personagem-de-desenho-animado_1183071-254.jpg", text: "As roupas da Azul & Branco são simplesmente perfeitas! A qualidade dos tecidos é excepcional e o caimento das peças é impecável. Sempre recebo elogios quando uso algo da loja." },
    { id: 2, name: "Carlos Santos", years: 2, image: "https://img.freepik.com/psd-premium/homem-de-cabelo-curto-3d-com-oculos-e-barba-render-icon-isolado-png-ilustracao-psd-template_828942-1047.jpg", text: "Atendimento de primeira classe e peças que duram anos mantendo a qualidade. Vale cada centavo investido! Recomendo a todos os meus amigos." },
    { id: 3, name: "Marina Costa", years: 4, image: "https://th.bing.com/th/id/OIP.eVZwFVGk_SXlhxsPhK2d2wHaHa?rs=1&pid=ImgDetMain", text: "Compro há anos na Azul & Branco e nunca me decepcionei. As tendências mais atuais com um toque clássico que só eles conseguem fazer." },
    { id: 4, name: "Roberto Almeida", years: 1, image: "https://img.freepik.com/premium-photo/3d-style-avatar-profile-picture-featuring-male-character-generative-ai_739548-13630.jpg", text: "Cliente novo, mas já apaixonado pela marca. As roupas têm personalidade e são feitas para durar. O custo-benefício é incrível!" }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const stats = [
    { value: "10+", label: "Anos de experiência" },
    { value: "5000+", label: "Clientes satisfeitos" },
    { value: "300+", label: "Modelos exclusivos" },
    { value: "25+", label: "Lojas no Brasil" }
  ];
  
  return (
    <div className="min-h-screen bg-gray-500">
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-navy-900">
          <img src="https://c1.peakpx.com/wallpaper/573/909/315/store-clothes-clothing-line-fashion-wallpaper.jpg" alt="Fashion collection" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-lg text-white">
            <span className="inline-block px-4 py-2 bg-transparent text-navy-900 font-medium rounded-full mb-6">Nova Temporada 2025</span>
            <h1 className="text-5xl font-bold mb-4 leading-tight tracking-tight">Estilo Elevado para <br />Cada Ocasião</h1>
            <p className="text-xl mb-8 text-gray-100 leading-relaxed">Descubra nossa nova coleção com peças exclusivas que combinam elegância, conforto e personalidade.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center justify-center shadow-lg">
                Ver Coleção
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition">
                Nosso Catálogo
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-10 shadow-md relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center py-4 border-r last:border-r-0 border-gray-100">
                <p className="text-3xl font-bold text-navy-900 mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className="text-blue-600 font-semibold mb-2 block">Explore</span>
              <h2 className="text-3xl font-bold text-navy-900">Navegue por Categoria</h2>
            </div>
            <a href="#" className="text-navy-900 font-medium flex items-center hover:underline group">
              Ver todas 
              <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <a 
                key={category.name} 
                href="#" 
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition group border border-gray-100 hover:border-blue-100"
              >
                <div className="text-5xl mb-4 transform transition group-hover:scale-110">{category.icon}</div>
                <h3 className="font-medium text-navy-900 text-lg mb-1 group-hover:text-blue-600">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} produtos</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-blue-600 font-semibold mb-2 block">Destaques</span>
            <h2 className="text-3xl font-bold text-navy-900 mb-2">Nossa Coleção</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Peças exclusivas selecionadas para complementar seu estilo</p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex border border-gray-200 rounded-full overflow-hidden shadow-sm">
              <button 
                onClick={() => setActiveTab('mais-vendidos')}
                className={`px-6 py-3 font-medium transition-all ${activeTab === 'mais-vendidos' ? 'bg-navy-900 text-white' : 'bg-white text-navy-900 hover:bg-gray-50'}`}
              >
                Mais Vendidos
              </button>
              <button 
                onClick={() => setActiveTab('novidades')}
                className={`px-6 py-3 font-medium transition-all ${activeTab === 'novidades' ? 'bg-navy-900 text-white' : 'bg-white text-navy-900 hover:bg-gray-50'}`}
              >
                Novidades
              </button>
              <button 
                onClick={() => setActiveTab('promocoes')}
                className={`px-6 py-3 font-medium transition-all ${activeTab === 'promocoes' ? 'bg-navy-900 text-white' : 'bg-white text-navy-900 hover:bg-gray-50'}`}
              >
                Promoções
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-xl transition duration-300">
                <div className="relative h-72 bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-navy-900 text-white text-xs px-3 py-1 rounded-full">Novo</span>
                  )}
                  {product.oldPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">-{Math.round((1 - parseInt(product.price.replace(/\D/g, '')) / parseInt(product.oldPrice.replace(/\D/g, ''))) * 100)}%</span>
                  )}
                  <button className="absolute top-3 right-3 bg-white text-navy-900 rounded-full p-2 shadow-md hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
                    <Heart size={18} />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-700 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-medium text-navy-900 text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    <p className="font-bold text-navy-900 text-lg">{product.price}</p>
                    {product.oldPrice && (
                      <p className="text-gray-500 text-sm line-through ml-2">{product.oldPrice}</p>
                    )}
                  </div>
                  <button className="w-full bg-navy-900 text-white py-3 rounded-lg hover:bg-navy-800 transition flex items-center justify-center">
                    <ShoppingBag size={16} className="mr-2" />
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-block border-2 border-navy-900 text-navy-900 font-medium px-8 py-3 rounded-full hover:bg-navy-900 hover:text-white transition">
              Ver Todos os Produtos
            </a>
          </div>
        </div>
      </section>
      
      
     <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">Tendências</span>
            <h2 className="text-3xl font-bold text-navy-900 mb-2">Coleções em Destaque</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Explore nossas coleções exclusivas para todas as ocasiões</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden h-96 group shadow-lg">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <p className="text-blue-300 font-medium mb-2">{collection.description}</p>
                  <h3 className="text-white text-3xl font-bold mb-6">{collection.name}</h3>
                  <button className="bg-white text-navy-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center shadow-lg">
                    Explorar
                    <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-blue-800"></div>
        <div className="absolute inset-0 opacity-20">
          <img src="https://th.bing.com/th/id/OIP.Lhmgf9kXdh0rOykwpemzXwHaFj?rs=1&pid=ImgDetMain" alt="Background texture" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <span className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium inline-block mb-6">Premium Quality</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Qualidade e Elegância em Cada Detalhe</h2>
            <p className="text-xl mb-10 text-gray-100 leading-relaxed">Nossas peças são confeccionadas com os melhores materiais, garantindo conforto e durabilidade para o seu dia a dia, sempre com o toque de sofisticação que você merece.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center justify-center shadow-lg">
                Coleção Feminina
                <ChevronRight size={18} className="ml-1" />
              </button>
              <button className="bg-transparent border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition">
                Coleção Masculina
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Categories */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-blue-600 font-semibold mb-2 block">Descubra</span>
                  <h3 className="text-2xl font-bold text-navy-900">Categorias Populares</h3>
                </div>
                <TrendingUp size={20} className="text-navy-900" />
              </div>
              <div className="space-y-4">
                {categories.map((category) => (
                  <a 
                    key={category.name} 
                    href="#" 
                    className="flex items-center justify-between p-5 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition bg-white group"
                  >
                    <div className="flex items-center">
                      <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">{category.icon}</span>
                      <span className="font-medium text-navy-900 text-lg">{category.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-3">{category.count} produtos</span>
                      <div className="bg-navy-900/5 p-2 rounded-full group-hover:bg-navy-900 transition-colors">
                        <ChevronRight size={18} className="text-navy-900 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="mb-6">
                <span className="text-blue-600 font-semibold mb-2 block">Newsletter</span>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Receba Nossas Novidades</h3>
                <p className="text-gray-600">Inscreva-se e receba ofertas exclusivas e as últimas tendências diretamente em seu e-mail.</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu.email@exemplo.com"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                  />
                </div>
                
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="termos" className="h-4 w-4 rounded border-gray-300 text-navy-900 focus:ring-navy-900" />
                  <label htmlFor="termos" className="text-gray-600 text-sm ml-2">Concordo em receber novidades e ofertas por e-mail</label>
                </div>
                
                <button className="w-full bg-navy-900 text-white font-medium py-4 rounded-lg hover:bg-navy-800 transition flex items-center justify-center">
                  <Check size={18} className="mr-2" />
                  Inscrever-se
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">Depoimentos</span>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Mais de 5.000 clientes satisfeitos compartilham suas experiências com nossa marca</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden shadow-md">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-bold text-navy-900 text-lg">{item.name}</h4>
                            <p className="text-gray-500">Cliente fiel há {item.years} anos</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className="text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed italic">
                        "{item.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -left-5 -translate-y-1/2 bg-white text-navy-900 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-900"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white text-navy-900 p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-900"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-navy-900 w-8' : 'bg-gray-300 w-3'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold mb-2 block">Por que nos escolher</span>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Compromisso com a Excelência</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Nossa marca é sinônimo de qualidade, estilo e atendimento impecável</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌿",
                title: "Materiais Sustentáveis",
                description: "Utilizamos tecidos eco-friendly e processos responsáveis em nossas produções."
              },
              {
                icon: "✨",
                title: "Design Exclusivo",
                description: "Cada peça é criada por nossa equipe de designers talentosos para garantir originalidade."
              },
              {
                icon: "🚚",
                title: "Entrega Rápida",
                description: "Enviamos seus pedidos no mesmo dia para todo o Brasil com rastreamento completo."
              },
              {
                icon: "♻️",
                title: "Troca Garantida",
                description: "Satisfação garantida com nossa política de troca e devolução em até 30 dias."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">@azulebranco</span>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Inspire-se em Nosso Instagram</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Siga-nos para inspirações diárias e as últimas tendências da moda</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <a 
                href="#" 
                key={index} 
                className="block relative aspect-square overflow-hidden rounded-lg group"
              >
                <img 
                  src={`https://wallpapercave.com/wp/wp4667553.png`} 
                  alt={`Instagram post ${index+1}`} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-navy-900 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Ver Post
                  </span>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center text-navy-900 font-medium hover:text-blue-600 transition">
              Ver mais no Instagram
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}