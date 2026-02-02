import { Dumbbell, Clock, Users, Award, ArrowRight, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2 rounded">
                <Dumbbell className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-600">SPARTACUS</h1>
                <p className="text-xs text-gray-400">FITNESS CENTER</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-gray-300 hover:text-red-600 transition">Inicio</a>
              <a href="#servicios" className="text-gray-300 hover:text-red-600 transition">Servicios</a>
              <a href="#clases" className="text-gray-300 hover:text-red-600 transition">Clases</a>
              <a href="#membresias" className="text-gray-300 hover:text-red-600 transition">Membresías</a>
              <a href="#sedes" className="text-gray-300 hover:text-red-600 transition">Sedes</a>
              <a href="#contacto" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded transition">Únete Ahora</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-red-900/20">
              <div className="flex flex-col gap-4">
                <a href="#inicio" className="text-gray-300 hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
                <a href="#servicios" className="text-gray-300 hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
                <a href="#clases" className="text-gray-300 hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Clases</a>
                <a href="#membresias" className="text-gray-300 hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Membresías</a>
                <a href="#sedes" className="text-gray-300 hover:text-red-600 transition" onClick={() => setMobileMenuOpen(false)}>Sedes</a>
                <a href="#contacto" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded transition text-center" onClick={() => setMobileMenuOpen(false)}>Únete Ahora</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1666979290238-2d862b573345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwaW50ZW5zZXxlbnwxfHx8fDE3NzAwNDUzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-red-900/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl mb-6 max-w-3xl">
            FORJA TU <span className="text-red-600">LEYENDA</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Entrena como un guerrero. Conviértete en una leyenda. 
            Spartacus Fitness Center es donde nacen los campeones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#membresias" className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded inline-flex items-center gap-2 transition text-lg justify-center">
              Comenzar Ahora <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#servicios" className="border-2 border-red-600 hover:bg-red-600/10 px-8 py-4 rounded transition text-lg justify-center">
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-gradient-to-b from-black to-red-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl mb-4">
              NUESTROS <span className="text-red-600">SERVICIOS</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Todo lo que necesitas para alcanzar tus objetivos fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Dumbbell className="w-12 h-12" />,
                title: "Área de Pesas",
                description: "Equipamiento de última generación para entrenamiento de fuerza"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Clases Grupales",
                description: "Entrenamientos dinámicos con instructores certificados"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Entrenamiento Personal",
                description: "Planes personalizados con expertos dedicados"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "24/7 Acceso",
                description: "Entrena cuando quieras, tu horario es el nuestro"
              },
              {
                icon: <span className="text-4xl">📱</span>,
                title: "App Móvil",
                description: "Seguimiento de progreso, rutinas personalizadas y pagos en línea"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/30 p-8 rounded-lg hover:border-red-600 transition group">
                <div className="text-red-600 mb-4 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h4 className="text-xl mb-3">{service.title}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="clases" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl mb-4">
              CLASES <span className="text-red-600">POPULARES</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Variedad de entrenamientos para todos los niveles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1630415187908-39d6d209b15c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3NzAwMjYyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "CrossFit",
                description: "Alta intensidad funcional",
                schedule: "Lun-Vie 6:00 AM"
              },
              {
                image: "https://images.unsplash.com/photo-1767552273968-da3464e2986c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcwMDczMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Entrenamiento Funcional",
                description: "Fuerza y resistencia",
                schedule: "Mar-Jue 7:00 PM"
              },
              {
                image: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluaW5nJTIwZ3ltfGVufDF8fHx8MTc3MDAxNjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "HIIT",
                description: "Quema grasa máxima",
                schedule: "Lun-Sab 5:00 PM"
              }
            ].map((clase, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                  <ImageWithFallback 
                    src={clase.image}
                    alt={clase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl mb-2">{clase.title}</h4>
                    <p className="text-red-600 text-sm">{clase.schedule}</p>
                  </div>
                </div>
                <p className="text-gray-400">{clase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membresias" className="py-24 bg-gradient-to-b from-red-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl mb-4">
              ELIGE TU <span className="text-red-600">MEMBRESÍA</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Planes flexibles para todo tipo de guerreros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "BÁSICA",
                price: "$29",
                period: "/mes",
                features: ["Acceso al gimnasio", "Área de cardio", "Vestuarios y duchas", "App móvil"]
              },
              {
                name: "PRO",
                price: "$49",
                period: "/mes",
                features: ["Todo lo de Básica", "Clases grupales ilimitadas", "Acceso 24/7", "Nutricionista online"],
                featured: true
              },
              {
                name: "ÉLITE",
                price: "$79",
                period: "/mes",
                features: ["Todo lo de Pro", "Entrenador personal", "Plan nutricional personalizado", "Acceso VIP"]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg p-8 ${
                  plan.featured 
                    ? 'bg-red-600 border-2 border-red-500 transform scale-105' 
                    : 'bg-gradient-to-br from-red-900/20 to-black border border-red-900/30'
                }`}
              >
                {plan.featured && (
                  <div className="text-center mb-4">
                    <span className="bg-black px-4 py-1 rounded-full text-sm">MÁS POPULAR</span>
                  </div>
                )}
                <h4 className="text-2xl mb-4 text-center">{plan.name}</h4>
                <div className="text-center mb-8">
                  <span className="text-5xl">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${plan.featured ? 'bg-white' : 'bg-red-600'}`}></div>
                      <span className={plan.featured ? 'text-white' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded transition ${
                  plan.featured 
                    ? 'bg-black hover:bg-gray-900 text-white' 
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}>
                  Seleccionar Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="sedes" className="py-24 bg-gradient-to-b from-black to-red-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl mb-4">
              NUESTRAS <span className="text-red-600">SEDES</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Encuentra la sede más cercana a ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: 'Spartacus Dolores Hidalgo',
                lat: 21.159634621079555,
                lng: -100.93016168439476,
                address: 'Dolores Hidalgo, Guanajuato',
                phone: '(418) 182-0000',
                hours: 'Lun-Dom: 5:00 AM - 11:00 PM'
              },
              {
                id: 2,
                name: 'Spartacus San Felipe',
                lat: 21.486092461782306,
                lng: -101.22238128993207,
                address: 'San Felipe, Guanajuato',
                phone: '(428) 685-0000',
                hours: 'Lun-Dom: 5:00 AM - 11:00 PM'
              },
              {
                id: 3,
                name: 'Spartacus San Luis de la Paz',
                lat: 21.292474256797778,
                lng: -100.51434382964185,
                address: 'San Luis de la Paz, Guanajuato',
                phone: '(468) 688-0000',
                hours: 'Lun-Dom: 5:00 AM - 11:00 PM'
              }
            ].map((location) => (
              <div key={location.id} className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/30 rounded-lg overflow-hidden hover:border-red-600 transition group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MDA3NTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-sm">
                    Sede {location.id}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl mb-4">{location.name}</h4>
                  <div className="space-y-3 text-gray-400 text-sm mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">📍</span>
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600">📞</span>
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600">🕐</span>
                      <span>{location.hours}</span>
                    </div>
                  </div>
                  <a 
                    href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-red-600 hover:bg-red-700 px-4 py-3 rounded transition flex items-center justify-center gap-2 group"
                  >
                    <span>Ver en el Mapa</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full"></div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9iaWxlJTIwYXBwJTIwcGhvbmUlMjBzY3JlZW58ZW58MXx8fHwxNzcwMDc1MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="App Móvil Spartacus"
                  className="relative rounded-lg w-full max-w-md mx-auto"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl md:text-5xl mb-6">
                NUESTRA <span className="text-red-600">APP MÓVIL</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Lleva tu entrenamiento al siguiente nivel con nuestra aplicación móvil. Monitorea tu progreso, 
                accede a rutinas personalizadas, Recomendaciones nutrimentales, realiza los pagos de tu Membresía 
                y mucho mas que un esta por venir.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/30 p-4 rounded-lg">
                  <p className="text-red-600 text-2xl mb-1">📊</p>
                  <p className="text-sm">Seguimiento de Progreso</p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/30 p-4 rounded-lg">
                  <p className="text-red-600 text-2xl mb-1">💪</p>
                  <p className="text-sm">Rutinas Personalizadas</p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/30 p-4 rounded-lg">
                  <p className="text-red-600 text-2xl mb-1">🥗</p>
                  <p className="text-sm">Guía Nutricional</p>
                </div>
                <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/30 p-4 rounded-lg">
                  <p className="text-red-600 text-2xl mb-1">💳</p>
                  <p className="text-sm">Pagos Fáciles</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-black border border-red-600 hover:bg-red-600/10 px-6 py-3 rounded transition flex items-center gap-2">
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Descarga en</p>
                    <p className="text-sm">App Store</p>
                  </div>
                </button>
                <button className="bg-black border border-red-600 hover:bg-red-600/10 px-6 py-3 rounded transition flex items-center gap-2">
                  <span className="text-2xl">🤖</span>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Descarga en</p>
                    <p className="text-sm">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl mb-6">
            ¿LISTO PARA <span className="text-red-600">TRANSFORMARTE?</span>
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Únete a nuestra comunidad de guerreros y empieza tu transformación hoy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <input 
              type="email" 
              placeholder="Tu email"
              className="px-6 py-4 bg-red-900/20 border border-red-900/30 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
            />
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded transition">
              Empezar Ahora
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl text-red-600 mb-2">1000+</p>
              <p className="text-gray-400">Miembros Activos</p>
            </div>
            <div>
              <p className="text-3xl text-red-600 mb-2">50+</p>
              <p className="text-gray-400">Clases Semanales</p>
            </div>
            <div>
              <p className="text-3xl text-red-600 mb-2">15+</p>
              <p className="text-gray-400">Entrenadores Expertos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-950/20 border-t border-red-900/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 p-2 rounded">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-red-600">SPARTACUS</h1>
                  <p className="text-xs text-gray-400">FITNESS CENTER</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Forja tu leyenda con nosotros
              </p>
            </div>
            <div>
              <h5 className="mb-4 text-red-600">Horarios</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Lun-Vie: 5:00 AM - 11:00 PM</li>
                <li>Sábado: 6:00 AM - 10:00 PM</li>
                <li>Domingo: 7:00 AM - 8:00 PM</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-red-600">Enlaces</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#servicios" className="hover:text-red-600 transition">Servicios</a></li>
                <li><a href="#clases" className="hover:text-red-600 transition">Clases</a></li>
                <li><a href="#membresias" className="hover:text-red-600 transition">Membresías</a></li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-red-600">Contacto</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📍 Av. Principal 123</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@spartacusfit.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-red-900/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Spartacus Fitness Center. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}