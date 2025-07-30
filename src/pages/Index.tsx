import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gothic-black text-gothic-light">
      {/* Gothic ornamental corners */}
      <div className="fixed top-4 left-4 w-20 h-20 bg-contain bg-no-repeat z-10 opacity-60" 
           style={{backgroundImage: "url('/img/99c1a150-a592-471d-9d3c-4656e729e164.jpg')"}}></div>
      <div className="fixed top-4 right-4 w-20 h-20 bg-contain bg-no-repeat z-10 opacity-60" 
           style={{backgroundImage: "url('/img/99c1a150-a592-471d-9d3c-4656e729e164.jpg')", transform: "scaleX(-1)"}}></div>
      <div className="fixed bottom-4 left-4 w-20 h-20 bg-contain bg-no-repeat z-10 opacity-60" 
           style={{backgroundImage: "url('/img/99c1a150-a592-471d-9d3c-4656e729e164.jpg')", transform: "scaleY(-1)"}}></div>
      <div className="fixed bottom-4 right-4 w-20 h-20 bg-contain bg-no-repeat z-10 opacity-60" 
           style={{backgroundImage: "url('/img/99c1a150-a592-471d-9d3c-4656e729e164.jpg')", transform: "scale(-1)"}}></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gothic-black via-gothic-dark to-gothic-gray">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" 
             style={{backgroundImage: "url('/img/54f5655b-81d3-4f68-8a73-c7a0160d799f.jpg')"}}></div>
        
        <div className="relative z-10 text-center animate-fade-in">
          {/* MEKO Logo */}
          <div className="mb-8 animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/files/394e7b79-91fa-4f58-9df5-fb6fc9589977.png" 
              alt="MEKO Art & Design" 
              className="w-80 h-80 mx-auto object-contain hover:animate-gothic-glow transition-all duration-300"
            />
          </div>
          
          <h1 className="font-gothic text-6xl md:text-8xl font-bold text-gothic-red mb-6 tracking-wider">
            MEKO
          </h1>
          <p className="font-gothic text-2xl md:text-3xl text-gothic-light mb-8 tracking-wide">
            Арт & Дизайн
          </p>
          <p className="font-body text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Создаем уникальные визуальные решения в готическом стиле. 
            Погружаемся в мир мрачной элегантности и средневековой эстетики.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gothic-red hover:bg-red-700 text-gothic-light font-body font-semibold px-8 py-4 text-lg border-2 border-gothic-red hover:border-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-gothic-red/30"
            >
              <Icon name="Palette" className="mr-2" size={20} />
              Посмотреть портфолио
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-gothic-red text-gothic-red hover:bg-gothic-red hover:text-gothic-light font-body font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gothic-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-gothic text-4xl md:text-5xl font-bold text-gothic-red mb-6">
              О нашей студии
            </h2>
            <div className="w-24 h-1 bg-gothic-red mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="font-gothic text-2xl font-semibold text-gothic-light mb-6">
                Мастера темного искусства
              </h3>
              <p className="font-body text-lg text-gray-300 mb-6 leading-relaxed">
                MEKO — это студия графического дизайна, специализирующаяся на создании 
                визуальных решений в готическом и средневековом стиле. Мы объединяем 
                древние традиции с современными технологиями.
              </p>
              <p className="font-body text-lg text-gray-300 leading-relaxed">
                Наша команда создает уникальные логотипы, брендинг, иллюстрации и 
                веб-дизайн для клиентов, которые ценят необычность и глубину.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 border border-gothic-red/30 rounded">
                  <Icon name="Crown" className="mx-auto mb-2 text-gothic-red" size={32} />
                  <h4 className="font-gothic text-lg text-gothic-red">Премиальность</h4>
                </div>
                <div className="text-center p-4 border border-gothic-red/30 rounded">
                  <Icon name="Zap" className="mx-auto mb-2 text-gothic-red" size={32} />
                  <h4 className="font-gothic text-lg text-gothic-red">Уникальность</h4>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <Card className="bg-gothic-gray border-gothic-red/30 p-6">
                <img 
                  src="/img/e8fcffeb-be0a-460c-81ce-be59e2e548c8.jpg" 
                  alt="Портфолио работ" 
                  className="w-full h-80 object-cover rounded mb-4"
                />
                <h4 className="font-gothic text-xl font-semibold text-gothic-red mb-2">
                  Наши работы
                </h4>
                <p className="font-body text-gray-300">
                  Каждый проект — это произведение искусства, созданное с душой и вниманием к деталям.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gothic-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-gothic text-4xl md:text-5xl font-bold text-gothic-red mb-6">
              Наши услуги
            </h2>
            <div className="w-24 h-1 bg-gothic-red mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Brush",
                title: "Логотипы и брендинг",
                description: "Создаем мощные визуальные идентичности в готическом стиле"
              },
              {
                icon: "Image",
                title: "Иллюстрации",
                description: "Рисуем уникальные артворки и концепт-арты"
              },
              {
                icon: "Monitor",
                title: "Веб-дизайн",
                description: "Разрабатываем темные и элегантные интерфейсы"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-gothic-dark border-gothic-red/30 p-8 hover:border-gothic-red transition-all duration-300 hover:shadow-lg hover:shadow-gothic-red/20 animate-fade-in">
                <Icon name={service.icon as any} className="text-gothic-red mb-4" size={48} />
                <h3 className="font-gothic text-xl font-semibold text-gothic-light mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gothic-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-gothic text-4xl md:text-5xl font-bold text-gothic-red mb-6">
            Связаться с нами
          </h2>
          <div className="w-24 h-1 bg-gothic-red mx-auto mb-8"></div>
          
          <p className="font-body text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Готовы воплотить ваши самые смелые идеи в готическом стиле? 
            Свяжитесь с нами для обсуждения проекта.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="flex items-center justify-center gap-3 text-gothic-light">
              <Icon name="Mail" className="text-gothic-red" size={24} />
              <span className="font-body text-lg">hello@meko-design.ru</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gothic-light">
              <Icon name="Phone" className="text-gothic-red" size={24} />
              <span className="font-body text-lg">+7 (999) 123-45-67</span>
            </div>
          </div>
          
          <Button 
            className="bg-gothic-red hover:bg-red-700 text-gothic-light font-body font-semibold px-12 py-4 text-xl border-2 border-gothic-red hover:border-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-gothic-red/30"
          >
            <Icon name="Send" className="mr-2" size={20} />
            Обсудить проект
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gothic-black border-t border-gothic-red/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-body text-gray-400">
            © 2024 MEKO Art & Design. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;