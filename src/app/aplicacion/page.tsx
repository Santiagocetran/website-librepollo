import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Wifi, Bell, RotateCcw, Settings, BarChart2, AlertTriangle, CheckCircle, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'App LibrePollo – Manual de Usuario',
  description: 'Manual completo de la aplicación Android LibrePollo para control y monitoreo remoto de la incubadora.',
};

const menuItems = [
  { icon: '🏠', name: 'Inicio', desc: 'Pantalla principal con información en tiempo real' },
  { icon: '📶', name: 'Conexión', desc: 'Configuración de WiFi' },
  { icon: '⚙️', name: 'Configuraciones', desc: 'Ajustes generales de la incubadora' },
  { icon: '🔢', name: 'Contador', desc: 'Control de bandejas y ciclos de incubación' },
  { icon: '🔄', name: 'Rotación', desc: 'Control manual de la rotación' },
  { icon: '📊', name: 'Grafana', desc: 'Visualización de datos históricos' },
];

const topButtons = [
  { icon: Bell, name: 'Notificaciones', desc: 'Tutorial de suscripción al sistema de notificaciones.' },
  { icon: AlertTriangle, name: 'Alertas', desc: 'Muestra los llamados de atención más importantes.' },
];

const configParams = [
  { param: 'Nombre de la Incubadora', desc: 'Identificador único de tu equipo' },
  { param: 'Temperaturas', desc: 'Máxima y mínima permitidas' },
  { param: 'Humedad', desc: 'Niveles máximo y mínimo deseados' },
  { param: 'Período de Incubación', desc: 'Duración del ciclo en días' },
  { param: 'Intervalos de Rotación', desc: 'Frecuencia de rotación de las bandejas' },
];

const troubleshootingItems = [
  {
    title: '"Verifique conexión con incubadora"',
    icon: Wifi,
    steps: [
      'Verificá que la incubadora esté encendida.',
      'Asegurate de estar conectado a la Red WiFi con el nombre de tu incubadora (ModoAP).',
      'Presioná "Reintentar".',
      'Si el problema persiste, revisá la configuración WiFi.',
    ],
  },
  {
    title: 'Problemas de Rotación',
    icon: RotateCcw,
    steps: [
      'Verificá que no haya obstáculos físicos.',
      'Usá los controles manuales de rotación para probar el sistema.',
      'Revisá la posición de la bandeja y los sensores Reed.',
      'Verificá las conexiones del motor.',
      'Controlá que las partes (cinta, polea y motor) estén bien asociadas.',
    ],
  },
  {
    title: 'Alertas de Temperatura o Humedad',
    icon: AlertTriangle,
    steps: [
      'Verificá que los rangos configurados sean correctos.',
      'Asegurate de que el sensor no se encuentre obstruido.',
      'Comprobá el funcionamiento del sistema de ventilación.',
    ],
  },
];

export default function AplicacionPage() {
  return (
    <>
      <PageHeader
        title="App LibrePollo – Manual de Usuario"
        subtitle="Controlá y monitoreá tu LibreIncu desde tu dispositivo móvil. Temperatura, humedad, rotación y notificaciones en tiempo real."
        emoji="📱"
        badge="Android App"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Intro */}
        <section className="card p-6 border-l-4 border-l-blue-400">
          <p className="text-gray-700 leading-relaxed">
            Esta aplicación te permite controlar y monitorear tu LibreIncu de forma fácil y eficiente desde tu
            dispositivo móvil. Podés supervisar la temperatura, humedad, rotación de bandejas y recibir
            notificaciones importantes sobre el proceso de incubación.
          </p>
        </section>

        {/* Main Screen */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100 flex items-center gap-2">
            <Smartphone size={22} /> Pantalla Principal
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Wifi, title: 'Estado de Conexión WiFi', desc: 'Muestra si la incubadora está conectada a internet.', color: 'text-blue-500', bg: 'bg-blue-50' },
              { icon: RotateCcw, title: 'Estado de Rotación', desc: 'Indica si el sistema de rotación está funcionando correctamente.', color: 'text-amber-500', bg: 'bg-amber-50' },
              { icon: () => <span className="text-xl">🌡️</span>, title: 'Temperatura Actual', desc: 'Verde = dentro del rango configurado. Rojo = temperatura fuera del rango seguro.', color: 'text-red-500', bg: 'bg-red-50' },
              { icon: () => <span className="text-xl">💧</span>, title: 'Humedad Actual', desc: 'Muestra el nivel de humedad con el mismo sistema de colores que la temperatura.', color: 'text-blue-500', bg: 'bg-blue-50' },
            ].map((item, i) => (
              <div key={i} className="card p-4 flex items-start gap-3">
                <div className={`${item.bg} rounded-lg p-2 shrink-0`}>
                  <item.icon className={item.color} size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Top buttons */}
          <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Barra Superior:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {topButtons.map((btn, i) => (
                <div key={i} className="flex items-start gap-2">
                  <btn.icon className="text-green-600 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="font-medium text-sm text-gray-800">{btn.name}: </span>
                    <span className="text-xs text-gray-600">{btn.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Menú de Navegación
          </h2>
          <p className="text-gray-600 text-sm mb-4">En la parte inferior de la pantalla encontrás seis botones de navegación:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {menuItems.map((item, i) => (
              <div key={i} className="card p-4 flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installation */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Primera Conexión y Configuración
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            {/* Installation */}
            <div className="card p-5">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Smartphone size={18} className="text-green-600" />
                Instalación
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-400 shrink-0 mt-0.5" />
                  La aplicación LibrePollo se instala a través de un archivo APK.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-400 shrink-0 mt-0.5" />
                  En caso de ser necesario, permitir "Instalar sin Analizar".
                </li>
              </ul>
            </div>

            {/* WiFi Connection */}
            <div className="card p-5">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Wifi size={18} className="text-green-600" />
                Conexión con LibreIncu
              </h3>
              <ol className="space-y-2">
                {[
                  'Conectá y encendé la incubadora.',
                  'Ingresá a las configuraciones de WiFi de tu teléfono.',
                  'Esperá que aparezca la red WiFi "incu-" (cada incubadora tiene un número único).',
                  'Conectate con la contraseña: 12345678.',
                  'Abrí la app y comenzá el proceso de configuración.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* WiFi Config */}
            <div className="card p-5">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Wifi size={18} className="text-blue-500" />
                Configuración de WiFi
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Para que la LibreIncu pueda enviar notificaciones y guardar datos históricos en Grafana,
                necesita conexión WiFi con internet. Seguí estos pasos desde la app:
              </p>
              <ol className="space-y-2">
                {[
                  'Presioná "Conexión" en el menú inferior.',
                  'Seleccioná tu red WiFi de la lista.',
                  'Ingresá la contraseña.',
                  'Esperá que se establezca la conexión.',
                  'Verificá el estado en la pantalla principal (dirá "Conectado").',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Notifications */}
            <div className="card p-5">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Bell size={18} className="text-amber-500" />
                Sistema de Notificaciones (NTFY)
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Para recibir notificaciones móviles cuando no estés cerca, se requiere la app NTFY:
              </p>
              <ol className="space-y-2">
                {[
                  'Buscá "NTFY" en Google Play.',
                  'Instalá la aplicación NTFY.',
                  'En LibrePollo, tocá el ícono de mensaje en la barra superior.',
                  'Seguí el tutorial detallado en esa pantalla.',
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="bg-amber-100 text-amber-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Functions */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Funciones de la Aplicación
          </h2>
          <div className="space-y-4">

            {/* Tray control */}
            <div className="card overflow-hidden">
              <div className="bg-green-50 p-4 flex items-center gap-2">
                <span className="text-xl">🔢</span>
                <h3 className="font-bold text-gray-800">Control de Bandejas</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">
                  La sección "Contador" te permite gestionar hasta tres bandejas de incubación:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-4 h-4 rounded bg-green-500 shrink-0" />
                    <div>
                      <p className="font-semibold text-green-800 text-sm">Bandeja Verde</p>
                      <p className="text-xs text-green-600">Vacía, lista para nuevo ciclo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="w-4 h-4 rounded bg-red-500 shrink-0" />
                    <div>
                      <p className="font-semibold text-red-800 text-sm">Bandeja Roja</p>
                      <p className="text-xs text-red-600">En uso con ciclo activo</p>
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-2">Iniciar ciclo:</p>
                    <ol className="space-y-1 text-xs text-gray-600">
                      <li>1. Seleccioná una bandeja verde.</li>
                      <li>2. Confirmá el inicio del ciclo.</li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-2">Finalizar ciclo:</p>
                    <ol className="space-y-1 text-xs text-gray-600">
                      <li>1. Seleccioná una bandeja roja.</li>
                      <li>2. Confirmá que deseás finalizar.</li>
                      <li>3. La bandeja vuelve a estado verde.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Config */}
            <div className="card overflow-hidden">
              <div className="bg-green-50 p-4 flex items-center gap-2">
                <Settings size={20} className="text-green-600" />
                <h3 className="font-bold text-gray-800">Configuraciones Generales</h3>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  {configParams.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-sm text-gray-800">{item.param}</span>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Para modificar un parámetro: tocá el ícono de editar → ingresá el nuevo valor → pulsá "Aceptar".
                </p>
              </div>
            </div>

            {/* Rotation */}
            <div className="card overflow-hidden">
              <div className="bg-green-50 p-4 flex items-center gap-2">
                <RotateCcw size={20} className="text-green-600" />
                <h3 className="font-bold text-gray-800">Control Manual de Rotación</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-3">La pantalla de rotación te permite:</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
                    <span className="text-xl">↑</span>
                    <span className="text-sm text-gray-700">Rotar hacia arriba</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
                    <span className="text-xl">↓</span>
                    <span className="text-sm text-gray-700">Rotar hacia abajo</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Útil para dejar las bandejas en posición necesaria para limpieza, carga y descarga.
                </p>
              </div>
            </div>

            {/* Grafana */}
            <div className="card overflow-hidden">
              <div className="bg-green-50 p-4 flex items-center gap-2">
                <BarChart2 size={20} className="text-green-600" />
                <h3 className="font-bold text-gray-800">Visualización de Datos (Grafana)</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    'Ver gráficos históricos de temperatura y humedad.',
                    'Analizar tendencias del proceso.',
                    'Identificar patrones o problemas.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-amber-600 mt-3 flex items-center gap-1">
                  <AlertTriangle size={12} />
                  Requiere conexión WiFi con acceso a internet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Solución de Problemas Comunes
          </h2>
          <div className="space-y-4">
            {troubleshootingItems.map((item, i) => (
              <div key={i} className="card border-l-4 border-l-red-300 overflow-hidden">
                <div className="bg-red-50 p-4 flex items-center gap-2">
                  <item.icon size={18} className="text-red-500" />
                  <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                </div>
                <div className="p-4">
                  <ol className="space-y-2">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-600">
                        <span className="bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {j + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
