import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Ruler, Thermometer, Droplets, RotateCcw, Cpu, Wifi, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Especificaciones Técnicas',
  description: 'Especificaciones técnicas completas de hardware y software de la incubadora LibreIncu.',
};

const specs = [
  { label: 'Dimensiones', value: '100 cm alto × 50 cm ancho × 50 cm profundo', icon: Ruler },
  { label: 'Capacidad', value: '150 huevos en 3 bandejas + 50 huevos nacedora', icon: CheckCircle },
  { label: 'Índice de eclosión', value: '86% (comparable con mejores marcas comerciales)', icon: CheckCircle },
  { label: 'Temperatura objetivo', value: '37.8°C promedio', icon: Thermometer },
  { label: 'Microcontrolador', value: 'ESP32-S', icon: Cpu },
  { label: 'Conectividad', value: 'WiFi 802.11 b/g/n', icon: Wifi },
];

const thermalSpecs = [
  { item: 'Resistencia calefactora', detail: '200W (mismo modelo que panchera industrial) ubicada en la base' },
  { item: 'Sensor ambiental', detail: 'BME280 – temperatura, humedad y presión (±0.5°C de precisión)' },
  { item: 'Ventilador', detail: 'Turbina Cooler Extractor Fan – distribución uniforme del calor' },
  { item: 'Convección', detail: 'Forzada: aire caliente asciende detrás de bandejas, acumula en techo, baja por el frente' },
];

const humidSpecs = [
  { item: 'Microaspersor', detail: 'Con sistema de carga automática de agua, genera microgotas de alta precisión' },
  { item: 'Presión de trabajo', detail: '3 bar' },
  { item: 'Bomba', detail: 'Tipo genérica automotor (bomba de nafta)' },
  { item: 'Control', detail: 'Integrado con el sistema de temperatura' },
];

const rotationSpecs = [
  { item: 'Motor', detail: 'Ubicado en la parte superior, tracción por cinta' },
  { item: 'Contrapeso', detail: 'Plomo ubicado debajo de la última bandeja' },
  { item: 'Sensores de posición', detail: 'Sensores Reed en extremos superior e inferior' },
  { item: 'Rotación', detail: 'Automática programable (por defecto: cada hora)' },
];

export default function EspecificacionesPage() {
  return (
    <>
      <PageHeader
        title="Especificaciones Técnicas"
        subtitle="Hardware, software y firmware de la incubadora LibreIncu. Diseño iterativo, componentes accesibles y fáciles de reemplazar."
        emoji="⚙️"
        badge="Documentación Técnica"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Summary Cards */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Resumen de Especificaciones
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specs.map((spec, i) => (
              <div key={i} className="card p-4 flex items-start gap-3">
                <spec.icon className="text-green-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{spec.label}</p>
                  <p className="text-gray-800 font-semibold text-sm mt-0.5">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware Section */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-2 pb-2 border-b-2 border-green-100">
            Hardware
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            La incubadora LibreIncu es el resultado de un cuidadoso proceso de diseño iterativo, buscando crear
            un dispositivo accesible, eficiente y adaptado a las necesidades específicas de la AFCI. Usa componentes
            disponibles en el mercado local y fáciles de reemplazar.
          </p>

          <div className="space-y-6">
            {/* Thermal */}
            <div className="card overflow-hidden">
              <div className="bg-red-50 p-4 flex items-center gap-2 border-b border-red-100">
                <Thermometer className="text-red-500" size={20} />
                <h3 className="font-bold text-gray-800">Sistema de Control Térmico</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {thermalSpecs.map((row, i) => (
                      <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 font-medium text-gray-800 w-1/3">{row.item}</td>
                        <td className="p-3 text-gray-600">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Humidity */}
            <div className="card overflow-hidden">
              <div className="bg-blue-50 p-4 flex items-center gap-2 border-b border-blue-100">
                <Droplets className="text-blue-500" size={20} />
                <h3 className="font-bold text-gray-800">Sistema de Humidificación</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {humidSpecs.map((row, i) => (
                      <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 font-medium text-gray-800 w-1/3">{row.item}</td>
                        <td className="p-3 text-gray-600">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rotation */}
            <div className="card overflow-hidden">
              <div className="bg-amber-50 p-4 flex items-center gap-2 border-b border-amber-100">
                <RotateCcw className="text-amber-500" size={20} />
                <h3 className="font-bold text-gray-800">Sistema de Rotación</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {rotationSpecs.map((row, i) => (
                      <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 font-medium text-gray-800 w-1/3">{row.item}</td>
                        <td className="p-3 text-gray-600">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Electronic control */}
            <div className="card overflow-hidden">
              <div className="bg-green-50 p-4 flex items-center gap-2 border-b border-green-100">
                <Cpu className="text-green-500" size={20} />
                <h3 className="font-bold text-gray-800">Control Electrónico</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { item: 'Microcontrolador', detail: 'ESP32 (cerebro del sistema)' },
                      { item: 'Conectividad', detail: 'WiFi para control remoto' },
                      { item: 'App de control', detail: 'LibrePollo para Android' },
                      { item: 'Visualización histórica', detail: 'Grafana (datos de temperatura y humedad)' },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-3 font-medium text-gray-800 w-1/3">{row.item}</td>
                        <td className="p-3 text-gray-600">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Thermal convection description */}
          <div className="mt-6 card p-5 bg-orange-50 border-2 border-orange-200">
            <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
              <Thermometer size={18} />
              Diseño de Convección Forzada
            </h3>
            <p className="text-orange-700 text-sm leading-relaxed">
              El diseño físico incluye un circuito de convección forzada para una distribución uniforme del calor:
              el aire caliente generado por la resistencia <strong>asciende por detrás de las bandejas</strong>,
              se acumula en el techo, y es forzado <strong>hacia abajo por el ventilador</strong> por la parte frontal.
              Esto garantiza temperatura homogénea en toda la cámara.
            </p>
          </div>
        </section>

        {/* Software Section */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Software
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            El ecosistema de software de LibreIncu está diseñado para facilitar el monitoreo remoto y control
            automático, ofreciendo una interfaz intuitiva y accesible.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WiFi modes */}
            <div className="card p-5 border-2 border-blue-200">
              <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Wifi size={18} />
                Conectividad WiFi
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-800">Modo AP (Punto de Acceso)</p>
                  <p className="mt-1">Cada incubadora emite una red WiFi con nombre "incu-[número]" para conexión directa del usuario.</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-green-800">Modo Cliente (Internet)</p>
                  <p className="mt-1">Se conecta a la red WiFi local para enviar datos al servidor y habilitar notificaciones remotas.</p>
                </div>
              </div>
            </div>

            {/* Firmware */}
            <div className="card p-5 border-2 border-green-200">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <Cpu size={18} />
                Firmware
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  Alojado en <code className="bg-gray-100 px-1 rounded">/src/embedded</code> del repositorio del proyecto.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">Lenguaje: Lua (NodeMCU)</p>
                  <p className="mt-1">
                    Lenguaje sencillo elegido deliberadamente para <strong>propiciar la apropiación del software</strong> por
                    parte de las comunidades y facilitar modificaciones locales.
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-800">Funciones principales:</p>
                  <ul className="mt-1 space-y-1">
                    {[
                      'Gestión autónoma de temperatura',
                      'Control de humedad',
                      'Rotación automática de bandejas',
                      'Envío de datos por MQTT',
                      'Sistema de alertas',
                    ].map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-green-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="mt-6 card p-5 bg-gray-900 text-white flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-bold">Código fuente completo disponible</p>
              <p className="text-gray-400 text-sm mt-1">Firmware, App Android, y documentación técnica.</p>
            </div>
            <a
              href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-green-500 transition-colors shrink-0"
            >
              Ver en GitHub →
            </a>
          </div>
        </section>

        {/* Performance */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Rendimiento
          </h2>
          <div className="card p-6 bg-green-50 border-2 border-green-200">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-center">
                <div className="text-5xl font-black text-green-700">86%</div>
                <div className="text-green-600 font-medium mt-1">Índice de eclosión</div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <p className="text-gray-700 leading-relaxed">
                  En las pruebas realizadas, LibreIncu ha logrado un índice de eclosión del{' '}
                  <strong className="text-green-700">86%</strong>, comparable con las mejores marcas comerciales,
                  pero con un costo significativamente menor y adaptada específicamente a las necesidades de
                  pequeños productores.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
