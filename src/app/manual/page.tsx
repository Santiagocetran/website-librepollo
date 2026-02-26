import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Thermometer, Droplets, RotateCcw, Cpu, Wifi, MapPin, AlertTriangle, CheckCircle, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Manual Básico de Incubadoras LibrePollo',
  description: 'Guía completa de uso, instalación, mantenimiento y solución de problemas de la incubadora LibrePollo.',
};

const components = [
  {
    icon: Thermometer,
    title: 'Sistema de Control de Temperatura',
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
    items: [
      { name: 'Sensor BME280', desc: 'Mide temperatura, humedad y presión con precisión ±0.5°C. Datos visibles en la app y en Grafana.' },
      { name: 'Resistencia Calefactora', desc: 'Fijada bajo la bandeja de humedad (~200W). Se prende y apaga para mantener el promedio de temperatura. De fábrica calibrada para huevos de pollo: 37.8°C.' },
      { name: 'Ventilador', desc: 'Asegura distribución pareja del calor en toda la cámara y fuerza la entrada de aire con oxígeno para el desarrollo.' },
    ],
  },
  {
    icon: Droplets,
    title: 'Sistema de Humidificación',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    items: [
      { name: 'Recipiente de Agua', desc: 'Se alimenta de la red doméstica con flotante para mantener el nivel. Conexión similar a un lavarropas (canilla abierta).' },
      { name: 'Humidificador por Microaspersión', desc: 'Un microaspersor dentro de la incubadora genera microgotas que, con la bandeja y el calor, mantienen el ambiente húmedo.' },
    ],
  },
  {
    icon: RotateCcw,
    title: 'Sistema de Rotación',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    items: [
      { name: 'Motor de Rotación', desc: 'Ubicado en la parte superior. Hace subir las bandejas a través de una cinta; baja por contrapeso de plomo.' },
      { name: 'Sensores Reed', desc: 'Informan al controlador cuando las bandejas se aproximan al punto máximo superior e inferior.' },
      { name: 'Bandeja Porta Huevos', desc: 'Desmontable para facilitar su limpieza.' },
    ],
  },
  {
    icon: Cpu,
    title: 'Sistema de Control',
    color: 'text-green-500',
    bg: 'bg-green-50',
    border: 'border-green-100',
    items: [
      { name: 'Placa de Control', desc: 'Circuito empoderado por microcontrolador ESP32-S. Conecta motores, resistencias y sensores.' },
      { name: 'App LibrePollo', desc: 'Permite acceder en cualquier momento al estado de la incubadora: temperatura, humedad, historial, notificaciones y gestión de bandejas.' },
    ],
  },
];

const locationReqs = [
  { icon: '💨', label: 'Lugar ventilado pero sin corrientes de aire' },
  { icon: '💧', label: 'Con acceso a conexión de agua' },
  { icon: '🔌', label: 'Cerca de un tomacorriente' },
  { icon: '📶', label: 'Con señal WiFi y al alcance del celular' },
];

const firstSteps = [
  'Conectá y encendé la incubadora.',
  'Esperá que aparezca la red WiFi "incu-" (seguido de un número único de identificación).',
  'Conectate desde tu celular con la contraseña: 12345678.',
  'Configurá los parámetros básicos desde la app.',
];

const maintenanceTasks = [
  {
    title: 'Limpieza Regular',
    steps: [
      'Limpiá el interior después de cada ciclo.',
      'Mantené el recipiente de agua limpio y conectado a la red.',
      'Revisá que las bandejas estén siempre limpias.',
    ],
  },
  {
    title: 'Verificaciones Periódicas',
    steps: [
      'Nivel de agua en el recipiente.',
      'Funcionamiento de la rotación.',
      'Lecturas de temperatura y humedad.',
    ],
  },
  {
    title: 'Mantenimiento del Humidificador',
    steps: [
      'Desenroscá el pico de aspersión con cuidado.',
      'Limpiá suavemente la boquilla para retirar suciedad.',
    ],
  },
];

const problems = [
  {
    title: 'La temperatura no sube',
    icon: Thermometer,
    steps: [
      'Verificá que la resistencia esté funcionando.',
      'Revisá las conexiones.',
      'Controlá que el ventilador distribuya el aire.',
    ],
  },
  {
    title: 'La humedad está baja',
    icon: Droplets,
    steps: [
      'Revisá el nivel de agua en el reservorio.',
      'Verificá que la bomba funcione.',
      'Controlá que no haya suciedad en el pico microaspersor.',
    ],
  },
  {
    title: 'La rotación no funciona',
    icon: RotateCcw,
    steps: [
      'Revisá la posición de la bandeja y los sensores Reed.',
      'Verificá las conexiones del motor.',
      'Controlá que las partes (cinta, polea y motor) estén bien asociadas.',
    ],
  },
];

export default function ManualPage() {
  return (
    <>
      <PageHeader
        title="Manual de Usuario – Incubadora LibrePollo"
        subtitle="Innovación tecnológica y productiva en la cadena avícola para la agricultura familiar, campesina e indígena."
        emoji="📖"
        badge="Manual Completo"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Intro */}
        <section className="mb-12">
          <div className="card p-6 border-l-4 border-l-green-500">
            <h2 className="text-xl font-bold text-green-800 mb-3">Introducción</h2>
            <p className="text-gray-600 leading-relaxed">
              LibreIncu es una incubadora de huevos desarrollada por AlterMundi y CTO. Este proyecto integra tecnología
              de monitoreo y control para optimizar la incubación avícola, poniendo el control en manos de los propios
              productores.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-12">
          <div className="card p-6 bg-green-50">
            <h2 className="text-lg font-bold text-green-800 mb-4">Índice</h2>
            <nav className="space-y-2">
              {['Componentes Principales', 'Cómo empezar', 'Mantenimiento Básico', 'Solución de Problemas', 'Precauciones'].map((section) => (
                <a key={section} href={`#${section.toLowerCase().replace(/ /g, '-')}`}
                  className="flex items-center gap-2 text-green-700 hover:text-green-900 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {section}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Components */}
        <section id="componentes-principales" className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Componentes Principales
          </h2>
          <div className="space-y-6">
            {components.map((comp, idx) => (
              <div key={idx} className={`card border-2 ${comp.border}`}>
                <div className={`p-4 ${comp.bg} flex items-center gap-3`}>
                  <comp.icon className={comp.color} size={22} />
                  <h3 className="font-bold text-gray-800">{comp.title}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {comp.items.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-green-500 mt-0.5 shrink-0">
                        <CheckCircle size={16} />
                      </span>
                      <div>
                        <span className="font-semibold text-gray-800">{item.name}: </span>
                        <span className="text-gray-600 text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section id="cómo-empezar" className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Cómo empezar a usar la incubadora
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Location */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-green-600" size={20} />
                <h3 className="font-bold text-gray-800">Ubicación</h3>
              </div>
              <ul className="space-y-2">
                {locationReqs.map((req) => (
                  <li key={req.label} className="flex items-start gap-2 text-sm text-gray-600">
                    <span>{req.icon}</span>
                    <span>{req.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* First Boot */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="text-green-600" size={20} />
                <h3 className="font-bold text-gray-800">Primer encendido</h3>
              </div>
              <ol className="space-y-2">
                {firstSteps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section id="mantenimiento-básico" className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Mantenimiento Básico
          </h2>
          <div className="space-y-4">
            {maintenanceTasks.map((task, i) => (
              <div key={i} className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="text-green-600" size={18} />
                  <h3 className="font-semibold text-gray-800">{task.title}</h3>
                </div>
                <ul className="space-y-2">
                  {task.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={14} />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 card p-5 border-l-4 border-l-amber-400 bg-amber-50">
            <h3 className="font-semibold text-amber-800 mb-2">Apagado</h3>
            <p className="text-amber-700 text-sm">
              Cuando apaques la incubadora, asegurate de vaciar el circuito de agua y lubricar la bomba para preservarla del óxido.
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="solución-de-problemas" className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Solución de Problemas
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {problems.map((prob, i) => (
              <div key={i} className="card p-5 border-l-4 border-l-red-300">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="text-red-400" size={18} />
                  <h3 className="font-semibold text-gray-800 text-sm">{prob.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {prob.steps.map((step, j) => (
                    <li key={j} className="flex gap-2 text-xs text-gray-600">
                      <span className="text-red-300 mt-0.5 shrink-0">→</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Precautions */}
        <section id="precauciones" className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Precauciones Importantes
          </h2>
          <div className="card p-6 bg-amber-50 border-2 border-amber-200">
            <ul className="space-y-3">
              {[
                'Tratá de no abrirla mientras está funcionando, salvo para mantenimiento.',
                'Mantené conexiones de agua sin pérdidas y el reservorio limpio.',
                'Protegé la incubadora de temperaturas extremas.',
                'No tapes las ventilaciones.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-amber-800">
                  <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final note */}
        <div className="card p-6 bg-green-50 border-2 border-green-200 text-center">
          <p className="text-2xl mb-3">🐣</p>
          <h3 className="font-bold text-green-800 text-lg mb-2">¡A incubar se ha dicho!</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>La paciencia es clave en la incubación.</li>
            <li>Leé con cuidado las Buenas Prácticas de manejo de huevos fértiles.</li>
            <li>La constancia en el control hace la diferencia.</li>
            <li>Estás participando en un proyecto de tecnología libre y soberana.</li>
          </ul>
          <p className="text-xs text-green-500 mt-4">
            Este trabajo está bajo licencia{' '}
            <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline">
              CC BY 4.0
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
