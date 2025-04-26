import React from "react"
import Image from "next/image"
import { Truck, Plane, Globe, Package, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HomeProps {
  params: {
    id: string
  }
}

export default function Home({ params }: HomeProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="DRL EXPRESS Logo" width={180} height={60} className="h-12 w-auto rounded-lg" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-medium hover:text-[#f26522] transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-sm font-medium hover:text-[#f26522] transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-sm font-medium hover:text-[#f26522] transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-sm font-medium hover:text-[#f26522] transition-colors">
              Contacto
            </a>
          </nav>
          <Button className="bg-[#4b2d83] hover:bg-[#3a2266] text-white">Cotizar Ahora</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative bg-[#4b2d83] text-white">
          <div className="container px-4 py-20 mx-auto md:px-6 md:py-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Soluciones Logísticas Internacionales
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Entrega rápida, segura y eficiente para sus envíos nacionales e internacionales.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-[#f26522] hover:bg-[#d55a1d] text-white">
                    Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="bg-white text-[#4b2d83] hover:bg-gray-100">Contactar</Button>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center">
                <div className="bg-[#4b2d83] p-8 rounded-lg shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Servicios Destacados:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-[#f26522]" />
                      <span>Envíos Internacionales Express</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-[#f26522]" />
                      <span>Logística Puerta a Puerta</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-[#f26522]" />
                      <span>Seguimiento en Tiempo Real</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-[#f26522]" />
                      <span>Soluciones Empresariales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4b2d83]">
                  Nuestros Servicios
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos soluciones logísticas completas para satisfacer todas sus necesidades de envío.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ServiceCard
                icon={<Package className="h-10 w-10 text-[#f26522]" />}
                title="Paquetería y Mercancía"
                description="Envío seguro de paquetes y mercancías con seguimiento en tiempo real."
              />
              <ServiceCard
                icon={<Truck className="h-10 w-10 text-[#f26522]" />}
                title="Carga Masiva"
                description="Soluciones para transporte de carga masiva nacional e internacional."
              />
              <ServiceCard
                icon={<Plane className="h-10 w-10 text-[#f26522]" />}
                title="Servicios de Aviación Express"
                description="Envíos urgentes vía aérea con tiempos de entrega garantizados."
              />
              <ServiceCard
                icon={<ArrowRight className="h-10 w-10 text-[#f26522]" />}
                title="Envíos Aros Express"
                description="Servicio especializado para envíos con tiempos de entrega críticos."
              />
              <ServiceCard
                icon={<MapPin className="h-10 w-10 text-[#f26522]" />}
                title="Motorizados Urbanos Última Milla"
                description="Entregas rápidas en zonas urbanas con nuestra flota de motorizados."
              />
              <ServiceCard
                icon={<Globe className="h-10 w-10 text-[#f26522]" />}
                title="Envíos Internacionales"
                description="Conectamos su negocio con el mundo a través de nuestra red global."
              />
            </div>
            <div className="flex justify-center mt-12">
              <ServiceCard
                icon={<Truck className="h-10 w-10 text-[#f26522]" />}
                title="Auxiliares Logísticos"
                description="Personal capacitado para apoyar todas sus operaciones logísticas."
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#4b2d83]">Sobre DRL EXPRESS</h2>
                <p className="text-gray-500 md:text-lg">
                  En DRL EXPRESS nos especializamos en brindar soluciones logísticas integrales para empresas y
                  particulares. Con años de experiencia en el sector, nos hemos consolidado como un aliado confiable
                  para el transporte de mercancías a nivel nacional e internacional.
                </p>
                <p className="text-gray-500 md:text-lg">
                  Nuestra misión es ofrecer un servicio de calidad, rápido y seguro, adaptándonos a las necesidades
                  específicas de cada cliente. Contamos con un equipo de profesionales altamente capacitados y una
                  infraestructura moderna que nos permite garantizar la eficiencia en cada envío.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#f26522]">100+</span>
                    <span className="text-gray-500">Clientes Satisfechos</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#f26522]">50+</span>
                    <span className="text-gray-500">Destinos</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-[#f26522]">24/7</span>
                    <span className="text-gray-500">Soporte</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#4b2d83] text-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <Image
                    src="/logo.png"
                    alt="DRL EXPRESS Logo"
                    width={220}
                    height={80}
                    className="h-auto w-auto mx-auto rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Nuestra Visión</h3>
                  <p>
                    Ser líderes en soluciones logísticas innovadoras, conectando negocios y personas a nivel global con
                    eficiencia y confiabilidad.
                  </p>
                  <h3 className="text-xl font-bold">Nuestros Valores</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[#f26522]" />
                      <span>Confiabilidad</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[#f26522]" />
                      <span>Puntualidad</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[#f26522]" />
                      <span>Innovación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[#f26522]" />
                      <span>Excelencia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 bg-[#4b2d83] text-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 w-[90%]">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contáctenos</h2>
                <p className="text-gray-200 md:text-lg">
                  Estamos listos para atender sus consultas y brindarle la mejor solución para sus necesidades
                  logísticas.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#f26522]" />
                    <span>315 699 8220</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#f26522]" />
                    <span>GERENCIACOMERCIAL@DRLEXPRESSCOL.COM.CO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-[#f26522]" />
                    <span>DRLEXPRESSCOL.COM.CO</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-900">
                          Nombre
                        </label>
                        <input
                          id="name"
                          placeholder="Su nombre"
                          className="w-full px-3 py-2 border rounded-md text-gray-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-900">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Su email"
                          className="w-full px-3 py-2 border rounded-md text-gray-900"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-900">
                        Asunto
                      </label>
                      <input
                        id="subject"
                        placeholder="Asunto de su mensaje"
                        className="w-full px-3 py-2 border rounded-md text-gray-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-900">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        placeholder="Su mensaje"
                        className="w-full px-3 py-2 border rounded-md min-h-[120px] text-gray-900"
                      />
                    </div>
                    <Button className="w-full bg-[#f26522] hover:bg-[#d55a1d] text-white">Enviar Mensaje</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="container px-4 py-8 mx-auto md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Image
                src="/logo.png"
                alt="DRL EXPRESS Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 rounded-lg"
              />
              <p className="text-sm">Soluciones logísticas integrales para sus envíos nacionales e internacionales.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-sm hover:text-[#f26522] transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-sm hover:text-[#f26522] transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="text-sm hover:text-[#f26522] transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-sm hover:text-[#f26522] transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-[#f26522] transition-colors">
                    Paquetería y Mercancía
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#f26522] transition-colors">
                    Carga Masiva
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#f26522] transition-colors">
                    Servicios de Aviación Express
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#f26522] transition-colors">
                    Envíos Internacionales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#f26522]" />
                  <span className="text-sm">315 699 8220</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#f26522]" />
                  <span className="text-sm">GERENCIACOMERCIAL@DRLEXPRESSCOL.COM.CO</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#f26522]" />
                  <span className="text-sm">DRLEXPRESSCOL.COM.CO</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm">© {new Date().getFullYear()} DRL EXPRESS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#4b2d83]">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  )
}
