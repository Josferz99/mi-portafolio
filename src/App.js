import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Mail, Phone, MapPin, Github, MessageCircle, Filter, X } from 'lucide-react';

// Datos simulados del portfolio
const portfolioData = {
  personal: {
    nombre: "José Fernández",
    titulo: "Desarrollador Full Stack",
    email: "jose.fernandez@uninorte.com",
    telefono: "+595 992 684 548",
    ubicacion: "Asunción, Paraguay",
    github: "github.com/Josferz99",
    whatsapp: "+595992684548",
    descripcion: "Desarrollador apasionado con experiencia en crear soluciones web modernas y eficientes."
  },
  proyectos: [
    {
      id: 1,
      titulo: "Gestor de Ventas",
      descripcion: "Aplicación web completa para gestionar ventas, inventario y clientes",
      descripcionDetallada: "Sistema completo de gestión empresarial que permite administrar el inventario en tiempo real, registrar ventas, generar reportes detallados y gestionar la base de clientes. Incluye dashboard con métricas de rendimiento y alertas de stock bajo.",
      tecnologias: ["React", "Node.js", "MongoDB"],
      fecha: "2024",
      imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      caracteristicas: ["Dashboard interactivo", "Gestión de inventario", "Reportes automáticos", "Sistema de alertas"]
    },
    {
      id: 2,
      titulo: "App de Delivery de Comida",
      descripcion: "Plataforma móvil para pedidos de comida con seguimiento en tiempo real",
      descripcionDetallada: "Aplicación móvil multiplataforma que conecta restaurantes con clientes. Incluye sistema de pedidos en tiempo real, seguimiento GPS del delivery, múltiples métodos de pago y sistema de calificaciones. Los restaurantes pueden gestionar su menú y recibir pedidos instantáneamente.",
      tecnologias: ["React Native", "Firebase", "API REST"],
      fecha: "2024",
      imagen: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=250&fit=crop",
      caracteristicas: ["Seguimiento GPS en vivo", "Pagos integrados", "Sistema de calificaciones", "Notificaciones push"]
    },
    {
      id: 3,
      titulo: "Dashboard Analítico",
      descripcion: "Panel de control con visualización de datos y reportes interactivos",
      descripcionDetallada: "Herramienta de Business Intelligence que transforma datos complejos en visualizaciones comprensibles. Incluye gráficos interactivos, exportación de reportes en PDF/Excel, filtros dinámicos y actualizaciones en tiempo real. Ideal para toma de decisiones basada en datos.",
      tecnologias: ["Vue.js", "Python", "PostgreSQL"],
      fecha: "2023",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      caracteristicas: ["Gráficos interactivos", "Exportación de reportes", "Actualización en tiempo real", "Filtros personalizables"]
    },
    {
      id: 4,
      titulo: "E-commerce de Ropa",
      descripcion: "Tienda online con carrito de compras y pasarela de pagos",
      descripcionDetallada: "Plataforma de comercio electrónico completa con catálogo de productos, sistema de filtros avanzados, carrito de compras persistente y checkout seguro. Integración con Stripe para pagos, sistema de cupones de descuento y panel de administración para gestionar productos y pedidos.",
      tecnologias: ["React", "Express", "Stripe"],
      fecha: "2023",
      imagen: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=250&fit=crop",
      caracteristicas: ["Pasarela de pagos segura", "Gestión de inventario", "Cupones de descuento", "Panel de administración"]
    },
    {
      id: 5,
      titulo: "Sistema de Reservas Hotel",
      descripcion: "Plataforma de reservas con calendario interactivo y gestión de habitaciones",
      descripcionDetallada: "Sistema integral para hoteles que facilita la gestión de reservas, disponibilidad de habitaciones y check-in/check-out. Incluye calendario interactivo, gestión de tarifas por temporada, sistema de reportes de ocupación y módulo de facturación. Los huéspedes pueden hacer reservas online fácilmente.",
      tecnologias: ["Angular", "Node.js", "MySQL"],
      fecha: "2023",
      imagen: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&h=250&fit=crop",
      caracteristicas: ["Calendario de disponibilidad", "Gestión de tarifas", "Check-in online", "Sistema de facturación"]
    },
    {
      id: 6,
      titulo: "Blog Personal",
      descripcion: "Blog con CMS personalizado y sistema de comentarios",
      descripcionDetallada: "Plataforma de blogging con CMS (Content Management System) propio que permite crear, editar y publicar artículos fácilmente. Incluye editor rich-text, sistema de categorías y etiquetas, comentarios moderados, búsqueda de artículos y optimización SEO. Diseño responsivo y carga rápida.",
      tecnologias: ["React", "MongoDB", "Node.js"],
      fecha: "2024",
      imagen: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
      caracteristicas: ["Editor de contenido", "Sistema de comentarios", "Categorías y etiquetas", "Optimización SEO"]
    }
  ],
  habilidades: [
    { categoria: "Frontend", items: ["React", "Vue.js", "Angular", "HTML/CSS", "Tailwind"] },
    { categoria: "Backend", items: ["Node.js", "Express", "Python", "API REST"] },
    { categoria: "Bases de Datos", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"] },
    { categoria: "Herramientas", items: ["Git", "Docker", "VS Code", "Postman"] }
  ],
  experiencias: [
    {
      id: 1,
      puesto: "Desarrollador Full Stack",
      empresa: "Tech Solutions S.A.",
      periodo: "2023 - Presente",
      descripcion: "Desarrollo de aplicaciones web empresariales utilizando React y Node.js"
    },
    {
      id: 2,
      puesto: "Desarrollador Frontend",
      empresa: "Digital Agency",
      periodo: "2022 - 2023",
      descripcion: "Creación de interfaces de usuario modernas y responsivas"
    },
    {
      id: 3,
      puesto: "Desarrollador Junior",
      empresa: "StartUp Innovación",
      periodo: "2021 - 2022",
      descripcion: "Mantenimiento y desarrollo de nuevas funcionalidades"
    }
  ]
};

export default function PortfolioPersonal() {
  const [proyectos, setProyectos] = useState([]);
  const [proyectosFiltrados, setProyectosFiltrados] = useState([]);
  const [tecnologiaSeleccionada, setTecnologiaSeleccionada] = useState('Todas');
  const [modalContacto, setModalContacto] = useState(false);
  const [formularioContacto, setFormularioContacto] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  // Simular carga de datos desde JSON
  useEffect(() => {
    // En un proyecto real, esto vendría de un archivo JSON o API
    setProyectos(portfolioData.proyectos);
    setProyectosFiltrados(portfolioData.proyectos);
  }, []);

  // Obtener todas las tecnologías únicas
  const obtenerTecnologias = () => {
    const tecnologias = new Set();
    proyectos.forEach(proyecto => {
      proyecto.tecnologias.forEach(tech => tecnologias.add(tech));
    });
    return ['Todas', ...Array.from(tecnologias)].sort();
  };

  // Filtrar proyectos por tecnología
  const filtrarProyectos = (tecnologia) => {
    setTecnologiaSeleccionada(tecnologia);
    if (tecnologia === 'Todas') {
      setProyectosFiltrados(proyectos);
    } else {
      const filtrados = proyectos.filter(proyecto =>
        proyecto.tecnologias.includes(tecnologia)
      );
      setProyectosFiltrados(filtrados);
    }
  };

  // Manejar cambios en el formulario
  const manejarCambioFormulario = (e) => {
    const { name, value } = e.target;
    setFormularioContacto(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Enviar formulario de contacto
  const enviarFormulario = () => {
    // Validación básica
    if (!formularioContacto.nombre || !formularioContacto.email || !formularioContacto.mensaje) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formularioContacto.email)) {
      alert('Por favor ingresa un email válido');
      return;
    }

    // Simular envío de formulario
    console.log('Formulario enviado:', formularioContacto);
    setMensajeEnviado(true);
    
    // Limpiar formulario después de 3 segundos
    setTimeout(() => {
      setModalContacto(false);
      setMensajeEnviado(false);
      setFormularioContacto({ nombre: '', email: '', mensaje: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-black text-white py-20 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl shadow-2xl border-4 border-orange-400">
              🧑🏻‍💻
            </div>
            <h1 className="text-5xl font-bold mb-4">{portfolioData.personal.nombre}</h1>
            <p className="text-2xl mb-6 text-orange-400">{portfolioData.personal.titulo}</p>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
              {portfolioData.personal.descripcion}
            </p>
            
            {/* Información de contacto */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>{portfolioData.personal.telefono}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{portfolioData.personal.ubicacion}</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center gap-4">
              <a href={`https://${portfolioData.personal.github}`} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex items-center gap-2 border-2 border-orange-400">
                <Github size={20} />
                GitHub
              </a>
              <a href={`https://wa.me/${portfolioData.personal.whatsapp}?text=Hola%20Jose,%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2 border-2 border-green-400">
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <button 
                onClick={() => setModalContacto(true)}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition flex items-center gap-2 border-2 border-orange-500">
                <Mail size={20} />
                Contactar
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        
        {/* Sección de Proyectos */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-orange-500" size={32} />
            <h2 className="text-4xl font-bold text-white">Proyectos</h2>
          </div>

          {/* Filtros de tecnología */}
          <div className="mb-8 bg-gray-800 p-6 rounded-xl shadow-md border-2 border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="text-orange-500" size={20} />
              <h3 className="text-lg font-semibold text-white">Filtrar por Tecnología:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {obtenerTecnologias().map(tech => (
                <button
                  key={tech}
                  onClick={() => filtrarProyectos(tech)}
                  className={`px-4 py-2 rounded-lg font-medium transition border-2 ${
                    tecnologiaSeleccionada === tech
                      ? 'bg-orange-500 text-white shadow-md border-orange-400'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            {tecnologiaSeleccionada !== 'Todas' && (
              <div className="mt-4 text-sm text-gray-400">
                Mostrando {proyectosFiltrados.length} de {proyectos.length} proyectos
              </div>
            )}
          </div>

          {/* Grid de proyectos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectosFiltrados.map(proyecto => (
              <div 
                key={proyecto.id} 
                onClick={() => setProyectoSeleccionado(proyecto)}
                className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition border-2 border-gray-700 hover:border-orange-500 cursor-pointer transform hover:scale-105"
              >
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{proyecto.titulo}</h3>
                    <span className="text-sm text-orange-400">{proyecto.fecha}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tecnologias.map(tech => (
                      <span 
                        key={tech}
                        className="bg-orange-500 bg-opacity-20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-orange-400 text-sm font-semibold flex items-center gap-2">
                    <span>Ver detalles</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {proyectosFiltrados.length === 0 && (
            <div className="text-center py-12 bg-gray-800 rounded-xl shadow-md border-2 border-gray-700">
              <p className="text-gray-400 text-lg">
                No se encontraron proyectos con la tecnología "{tecnologiaSeleccionada}"
              </p>
            </div>
          )}
        </section>

        {/* Sección de Habilidades */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-orange-500" size={32} />
            <h2 className="text-4xl font-bold text-white">Habilidades</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.habilidades.map((skill, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow-md border-2 border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">{skill.categoria}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span 
                      key={item}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium border border-orange-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Experiencia */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Experiencia Laboral</h2>
          
          <div className="space-y-6">
            {portfolioData.experiencias.map(exp => (
              <div key={exp.id} className="bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.puesto}</h3>
                    <p className="text-orange-400 font-semibold">{exp.empresa}</p>
                  </div>
                  <span className="bg-orange-500 bg-opacity-20 text-orange-400 px-4 py-1 rounded-full text-sm font-medium border border-orange-500">
                    {exp.periodo}
                  </span>
                </div>
                <p className="text-gray-300">{exp.descripcion}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal de Proyecto */}
      {proyectoSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-3xl w-full p-8 relative border-2 border-orange-500 my-8">
            <button 
              onClick={() => setProyectoSeleccionado(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 bg-gray-700 rounded-full p-2 hover:bg-gray-600 transition"
            >
              <X size={24} />
            </button>

            <img 
              src={proyectoSeleccionado.imagen} 
              alt={proyectoSeleccionado.titulo}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-white">{proyectoSeleccionado.titulo}</h2>
              <span className="bg-orange-500 bg-opacity-20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium border border-orange-500">
                {proyectoSeleccionado.fecha}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Descripción del Proyecto</h3>
              <p className="text-gray-300 leading-relaxed">
                {proyectoSeleccionado.descripcionDetallada}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Características Principales</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {proyectoSeleccionado.caracteristicas.map((caracteristica, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">✓</span>
                    <span className="text-gray-300">{caracteristica}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {proyectoSeleccionado.tecnologias.map(tech => (
                  <span 
                    key={tech}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium border border-orange-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setProyectoSeleccionado(null)}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition border-2 border-orange-400"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Contacto */}
      {modalContacto && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-8 relative border-2 border-orange-500">
            <button 
              onClick={() => setModalContacto(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-orange-500"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-white mb-6">Contactarme</h2>

            {mensajeEnviado ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <p className="text-xl font-semibold text-orange-400">¡Mensaje enviado con éxito!</p>
                <p className="text-gray-300 mt-2">Te responderé pronto.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formularioContacto.nombre}
                    onChange={manejarCambioFormulario}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formularioContacto.email}
                    onChange={manejarCambioFormulario}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formularioContacto.mensaje}
                    onChange={manejarCambioFormulario}
                    rows="4"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-white"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <button
                  onClick={enviarFormulario}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition border-2 border-orange-400"
                >
                  Enviar Mensaje
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16 border-t-4 border-orange-500">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2025 {portfolioData.personal.nombre} - Todos los derechos reservados</p>
          <p className="text-gray-400 mt-2">Desarrollado con React y Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}