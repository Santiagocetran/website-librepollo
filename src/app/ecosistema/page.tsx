import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Radio, Server, Smartphone, Database, Globe, Cpu, Network } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ecosistema Informático para la Agricultura Familiar',
  description: 'Arquitectura IoT para zonas rurales con LoRa, Libremesh y MeshStatic para economía social y producción sustentable.',
};

const components = [
  {
    number: '1a',
    title: 'Nodo IoT – MeshStatic',
    icon: Radio,
    color: 'text-green-500',
    bg: 'bg-green-50',
    border: 'border-green-200',
    desc: 'Nodo sensor/actuador con tecnología MeshStatic para zonas rurales con vegetación densa. Bajo consumo y largo alcance.',
  },
  {
    number: '1b',
    title: 'Nodo IoT – ESP32 Now',
    icon: Cpu,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    desc: 'Sensor Node basado en ESP32 con protocolo ESP-NOW para comunicación directa entre nodos sin infraestructura.',
  },
  {
    number: '2',
    title: 'Gateway Rural',
    icon: Network,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    desc: 'LibreRouter + LoRa USB o MESHSTICK. Punto de enlace que conecta los nodos rurales con internet comunitario.',
  },
  {
    number: '3',
    title: 'Broker MQTT en la Nube',
    icon: Server,
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    desc: 'Servidor MQTT para la recepción, almacenamiento y distribución de datos de los nodos IoT.',
  },
  {
    number: '4',
    title: 'Cliente de Datos + Visualización',
    icon: Smartphone,
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    desc: 'Aplicación Android para visualización en tiempo real e historial de datos. App LibrePollo para la incubadora.',
  },
  {
    number: '5',
    title: 'Odoo',
    icon: Database,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    desc: 'Plataforma ERP libre para la gestión integral de la producción y la economía social de las comunidades.',
  },
];

const principles = [
  {
    title: 'Necesidades Reales',
    desc: 'Diseñado a partir de las necesidades reales, explicitadas en 1ª persona por los protagonistas de la Economía Social.',
    icon: '🎯',
  },
  {
    title: 'Modularidad',
    desc: 'Núcleo común de HW o SW al cual se agregan complementos, capas o funcionalidades de manera modular según la producción.',
    icon: '🧩',
  },
  {
    title: 'Apropiación Tecnológica',
    desc: 'La modularidad facilita la adaptación a diferentes realidades productivas y promueve la apropiación por parte de trabajadores y productores.',
    icon: '✊',
  },
  {
    title: 'Integración Sistémica',
    desc: 'Los subsistemas se integran en un sistema mayor que acompaña al sujeto de la economía y la producción social.',
    icon: '🔗',
  },
];

export default function EcosistemaPage() {
  return (
    <>
      <PageHeader
        title="Ecosistema Informático para la Agricultura Familiar"
        subtitle="Arquitectura IoT para zonas rurales con Libremesh, MeshStatic y LoRa. Tecnología integrada para la Economía Social y la Producción Sustentable."
        emoji="🌐"
        badge="Infraestructura & IoT"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Main concept */}
        <section className="card p-6 border-l-4 border-l-green-500">
          <div className="flex items-start gap-3 mb-4">
            <Globe className="text-green-600 shrink-0 mt-1" size={22} />
            <div>
              <h2 className="text-xl font-bold text-green-800 mb-2">
                ¿Qué es un Ecosistema Tecnológico para Economía Social?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Es un conjunto integrado de subsistemas, cada uno enfocado en producciones específicas, que incluye
                innovaciones tecnológicas adaptadas a las necesidades locales, caracterización productiva de los
                procesos, curaduría de materiales bibliográficos, definición de requerimientos físicos y estructurales,
                e interfaces de usuario amigables y accesibles.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4 ml-9">
            Cada subsistema se construye a partir de un núcleo común de Hardware o Software, al cual se van
            anexando, de manera modular, una diversidad de complementos acordes a las necesidades específicas
            de cada producción o contexto.
          </p>
        </section>

        {/* Status banner */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 flex items-start gap-3">
          <span className="text-2xl shrink-0">🚧</span>
          <div>
            <p className="font-bold text-amber-800">En desarrollo activo</p>
            <p className="text-amber-700 text-sm mt-1">
              Estamos trabajando en una arquitectura IoT para Zonas Rurales con Libremesh y MeshStatic (LoRa).
              El ecosistema se expande continuamente junto con las comunidades participantes.
            </p>
          </div>
        </div>

        {/* Objective */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-4 pb-2 border-b-2 border-green-100">
            Objetivo
          </h2>
          <div className="card p-6 bg-green-50">
            <p className="text-gray-700 leading-relaxed">
              Diseñar una arquitectura de hardware y software para redes de sensores IoT en zonas rurales con
              vegetación densa, utilizando tecnologías de <strong>bajo consumo y largo alcance como LoRa</strong>,
              y conectividad comunitaria basada en <strong>Libremesh y LibreRouter</strong>.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Principios del Ecosistema
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="font-bold text-gray-800">{p.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Componentes Principales
          </h2>
          <div className="space-y-4">
            {components.map((comp) => (
              <div key={comp.number} className={`card border-2 ${comp.border} overflow-hidden`}>
                <div className={`${comp.bg} p-4 flex items-center gap-3`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-gray-500 bg-white rounded-full w-7 h-7 flex items-center justify-center border">
                      {comp.number}
                    </span>
                    <comp.icon className={comp.color} size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800">{comp.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture diagram description */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Diagrama General
          </h2>
          <div className="card p-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              {/* ASCII-style diagram */}
              <div className="font-mono text-xs sm:text-sm text-gray-600 space-y-2 text-left inline-block">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 border border-green-300 rounded px-3 py-1.5 text-green-800 font-semibold">
                    Nodos IoT (ESP32/LoRa)
                  </div>
                  <span>──────→</span>
                  <div className="bg-amber-100 border border-amber-300 rounded px-3 py-1.5 text-amber-800 font-semibold">
                    Gateway Rural (LibreRouter)
                  </div>
                </div>
                <div className="ml-12 text-gray-400">↓</div>
                <div className="flex items-center gap-2 ml-0">
                  <div className="invisible bg-green-100 border border-green-300 rounded px-3 py-1.5 text-green-800 font-semibold">
                    Nodos IoT placeholder
                  </div>
                  <span className="invisible">──────→</span>
                  <div className="bg-purple-100 border border-purple-300 rounded px-3 py-1.5 text-purple-800 font-semibold">
                    Broker MQTT (Internet)
                  </div>
                </div>
                <div className="ml-[calc(50%+3rem)] text-gray-400">↓</div>
                <div className="flex items-center justify-end gap-3">
                  <div className="bg-teal-100 border border-teal-300 rounded px-3 py-1.5 text-teal-800 font-semibold text-xs sm:text-sm">
                    App Android
                  </div>
                  <div className="bg-orange-100 border border-orange-300 rounded px-3 py-1.5 text-orange-800 font-semibold text-xs sm:text-sm">
                    Grafana
                  </div>
                  <div className="bg-orange-100 border border-orange-300 rounded px-3 py-1.5 text-orange-800 font-semibold text-xs sm:text-sm">
                    Odoo
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              Arquitectura simplificada del Ecosistema IoT para zonas rurales
            </p>
          </div>
        </section>

        {/* Technologies */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'LoRa', 'ESP32', 'ESP-NOW', 'MQTT', 'Libremesh', 'LibreRouter',
              'MeshStatic', 'Grafana', 'Odoo', 'Android', 'Software Libre',
            ].map((tech) => (
              <span key={tech} className="tag text-sm px-4 py-1.5">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* GitHub link */}
        <div className="card p-6 bg-gray-900 text-white text-center">
          <h3 className="font-bold text-lg mb-2">Código fuente disponible</h3>
          <p className="text-gray-400 text-sm mb-4">
            Todo el desarrollo es abierto y está disponible en GitHub.
          </p>
          <a
            href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition-colors"
          >
            Ver en GitHub
          </a>
        </div>
      </div>
    </>
  );
}
