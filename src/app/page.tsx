import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Egg,
  Thermometer,
  Droplets,
  RotateCcw,
  Wifi,
  BookOpen,
  AlertTriangle,
  Video,
  Mail,
  ChevronRight,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'LibreIncu – Tecnología Libre para la Soberanía Alimentaria',
};

const features = [
  {
    icon: Thermometer,
    title: 'Control de Temperatura',
    desc: 'Sensor BME280 con precisión ±0.5°C. Resistencia calefactora de 200W con control automático a 37.8°C.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Droplets,
    title: 'Sistema de Humidificación',
    desc: 'Microaspersor de alta precisión con carga automática de agua. Control integrado de humedad al 60%.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: RotateCcw,
    title: 'Rotación Automática',
    desc: 'Motor con sensores Reed para rotación programable cada hora. Bandejas desmontables para fácil limpieza.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Wifi,
    title: 'Conectividad WiFi',
    desc: 'ESP32 con conectividad WiFi. App LibrePollo para Android con monitoreo en tiempo real y alertas.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
];

const navCards = [
  {
    href: '/manual',
    icon: BookOpen,
    title: 'Manual de Usuario',
    desc: 'Guía completa de uso, instalación y mantenimiento de la incubadora.',
    color: 'border-green-200 hover:border-green-400',
    badge: 'Esencial',
  },
  {
    href: '/huevos',
    icon: Egg,
    title: 'Huevos e Incubación',
    desc: 'Todo sobre selección, almacenamiento y proceso de incubación de huevos fértiles.',
    color: 'border-amber-200 hover:border-amber-400',
    badge: 'Guía práctica',
  },
  {
    href: '/aplicacion',
    icon: Wifi,
    title: 'App LibrePollo',
    desc: 'Manual de la aplicación Android para control y monitoreo remoto.',
    color: 'border-blue-200 hover:border-blue-400',
    badge: 'App Android',
  },
  {
    href: '/buenas-practicas',
    icon: CheckCircle,
    title: 'Buenas Prácticas',
    desc: 'Preguntas guía para evaluar y mejorar tu proceso de incubación.',
    color: 'border-purple-200 hover:border-purple-400',
    badge: 'Evaluación',
  },
  {
    href: '/especificaciones',
    icon: Thermometer,
    title: 'Especificaciones Técnicas',
    desc: 'Hardware, software, firmware y detalles del diseño de la LibreIncu.',
    color: 'border-red-200 hover:border-red-400',
    badge: 'Técnico',
  },
  {
    href: '/solucion-problemas',
    icon: AlertTriangle,
    title: 'Solución de Problemas',
    desc: 'Diagnóstico paso a paso para resolver los problemas más comunes.',
    color: 'border-orange-200 hover:border-orange-400',
    badge: 'Soporte',
  },
  {
    href: '/ecosistema',
    icon: ExternalLink,
    title: 'Ecosistema Tecnológico',
    desc: 'Arquitectura IoT para zonas rurales con LoRa, Libremesh y más.',
    color: 'border-teal-200 hover:border-teal-400',
    badge: 'Infraestructura',
  },
  {
    href: '/videos-prensa',
    icon: Video,
    title: 'Videos y Prensa',
    desc: 'Cobertura mediática, videos de difusión y artículos académicos.',
    color: 'border-pink-200 hover:border-pink-400',
    badge: 'Difusión',
  },
  {
    href: '/contacto',
    icon: Mail,
    title: 'Contacto',
    desc: 'Canales de comunicación, redes sociales y ubicación del proyecto.',
    color: 'border-gray-200 hover:border-gray-400',
    badge: 'Contacto',
  },
];

const dependencies = [
  {
    num: '01',
    title: 'Dependencia genética',
    desc: 'El "pollito bebé híbrido" proviene de un oligopolio mundial (Cobb-Vantress y Aviagen) que controla la genética de todos los pollos industriales.',
  },
  {
    num: '02',
    title: 'Dependencia alimentaria',
    desc: 'La dieta requiere precursores industriales, núcleos vitamínicos y minerales, además de maíz y soja del modelo agronegocio.',
  },
  {
    num: '03',
    title: 'Dependencia tecnológica',
    desc: 'Las incubadoras comerciales son inaccesibles por su costo o están diseñadas para hobbistas, no para producción familiar.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #8BC34A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4CAF50 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/30 text-green-100 border border-green-400/30">
                Tecnología Libre · Código Abierto · CC BY 4.0
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              LibreIncu
              <span className="block text-green-300 text-3xl sm:text-4xl lg:text-5xl mt-2 font-bold">
                Soberanía Tecnológica y Alimentaria
              </span>
            </h1>
            <p className="text-green-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Incubadora avícola con monitoreo y control en línea, diseñada para las necesidades reales de la
              Agricultura Familiar, Campesina e Indígena (AFCI) de Córdoba, Argentina.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/manual" className="btn-primary flex items-center gap-2">
                <BookOpen size={18} />
                Ver Manual
              </Link>
              <Link href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
                target="_blank" rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2">
                <ExternalLink size={18} />
                GitHub
              </Link>
            </div>
          </div>
        </div>
        {/* Stat bar */}
        <div className="relative border-t border-green-600/50 bg-green-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '86%', label: 'Índice de eclosión' },
              { value: '150', label: 'Huevos por ciclo' },
              { value: '37.8°C', label: 'Temperatura precisa' },
              { value: '100%', label: 'Código libre' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-green-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro video */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="tag mb-4 inline-block">Introducción al Proyecto</span>
            <h2 className="section-title">¿Qué es LibreIncu?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              LibreIncu es una iniciativa de soberanía tecnológica y alimentaria desarrollada colaborativamente por
              <strong> AlterMundi</strong> y <strong>Comunidad, Trabajo y Organización (CTO)</strong>, junto con
              diversas organizaciones de la AFCI de Córdoba, Argentina.
            </p>
            <p className="text-gray-600 leading-relaxed">
              El proyecto busca romper la triple dependencia que enfrenta la AFCI en la producción avícola,
              permitiendo la recuperación del &ldquo;saber ancestral&rdquo; y el desarrollo de genética propia para
              la transición hacia un modelo agroecológico integral.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="https://www.youtube.com/watch?v=WrC1Y-ACtMo"
              target="_blank" rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border-2 border-green-100 hover:border-green-300 transition-colors group"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/WrC1Y-ACtMo/maxresdefault.jpg"
                  alt="Presentación Incubadora AlterMundi"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="bg-white/90 rounded-full p-4">
                    <svg className="w-8 h-8 text-green-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold text-green-800">▶ Presentación Incubadora AlterMundi</p>
                <p className="text-sm text-gray-500 mt-1">Sistemas de Monitoreo y Control</p>
              </div>
            </a>
            <a
              href="https://youtu.be/SZky4Ak8hUw"
              target="_blank" rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border-2 border-green-100 hover:border-green-300 transition-colors group"
            >
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.youtube.com/vi/SZky4Ak8hUw/maxresdefault.jpg"
                  alt="Equipo de Desarrollo LibreIncu"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="bg-white/90 rounded-full p-4">
                    <svg className="w-8 h-8 text-green-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold text-green-800">▶ Equipo de Desarrollo LibreIncu</p>
                <p className="text-sm text-gray-500 mt-1">Voces del equipo de AlterMundi</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Triple dependency */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block bg-amber-100 text-amber-700">El Problema</span>
            <h2 className="section-title">La Triple Dependencia de la AFCI</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              La producción avícola de pequeños productores enfrenta tres barreras estructurales que LibreIncu busca romper.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {dependencies.map((dep) => (
              <div key={dep.num} className="card p-6">
                <div className="text-4xl font-black text-green-100 mb-3">{dep.num}</div>
                <h3 className="text-lg font-bold text-green-800 mb-3">{dep.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{dep.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Tecnología</span>
            <h2 className="section-title">Características Principales</h2>
            <p className="section-subtitle">Cuatro sistemas integrados para una incubación óptima.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat) => (
              <div key={feat.title} className="card p-6 hover:shadow-md transition-shadow">
                <div className={`${feat.bg} rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                  <feat.icon className={feat.color} size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag mb-4 inline-block">Documentación</span>
            <h2 className="section-title">Explorar el Proyecto</h2>
            <p className="section-subtitle">Todo lo que necesitás saber sobre LibreIncu.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {navCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`card p-5 border-2 transition-all group flex flex-col ${card.color}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-green-100 rounded-lg p-2">
                    <card.icon className="text-green-600" size={20} />
                  </div>
                  <span className="text-xs font-medium text-gray-400">{card.badge}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-medium">
                  Ver más
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
