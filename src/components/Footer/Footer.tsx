export function Footer() {
    return (
        <footer className="bg-navy-900 text-gray-600 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AZUL & BRANCO</h3>
              <p className="text-gray-600 mb-4">Elegância e sofisticação em cada peça. Sua loja de roupas para todos os momentos.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600  hover:text-gray-300">FB</a>
                <a href="#" className="text-gray-600 hover:text-gray-300">IG</a>
                <a href="#" className="text-gray-600 hover:text-gray-300">TW</a>
                <a href="#" className="text-gray-600 hover:text-gray-300">YT</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Categorias</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-white">Feminino</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white">Masculino</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white">Acessórios</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white">Calçados</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white">Promoções</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Informações</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-white">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white">Contato</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white">Termos e Condições</a></li>
                <li><a href="#" className="text-gray-600 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Contato</h4>
              <address className="not-italic text-gray-600 space-y-2">
                <p>Av Heitor Dias, 1000</p>
                <p>Salvador - BA</p>
                <p>contato@azulebranco.com.br</p>
                <p>(71) 99913-6601</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Azul & Branco. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
}