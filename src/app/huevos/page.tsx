import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Huevos Fértiles e Incubación',
  description: 'Guía completa sobre selección, almacenamiento y proceso de incubación de huevos fértiles.',
};

const goodEggs = [
  'Forma ovoide ideal.',
  'Tamaño ni muy pequeño ni demasiado grande.',
  'Peso aproximado entre 52 y 70 gramos.',
  'Todos los huevos de la bandeja deben ser homogéneos en forma y tamaño.',
];

const badEggs = [
  'Deformes (muy redondos o puntiagudos).',
  'Rotos, con la cáscara rugosa, muy porosa o frágil.',
  'Sucios con excrementos u otras sustancias.',
  'Recolectados del suelo.',
];

const preparationSteps = [
  'Limpiar y desinfectar profundamente la incubadora. Lavar con solución tibia de detergente y enjuagar con desinfectante (ej. lavandina).',
  'Secar previo a la carga. Nunca iniciar un proceso con la incubadora mojada.',
  'La incubadora debe estar a la misma temperatura que los huevos almacenados (23°C), ni fría ni caliente.',
  'Incrementar la temperatura ambiental a 23°C durante las 18 horas previas para evitar condensación en la cáscara.',
  'Usar huevos de 52 a 70 gramos, iguales y limpios, con no más de 7 días almacenados.',
  'La incubadora a temperatura de 37.8°C y humedad de 60%. (Automático)',
  'Volteo de huevos 1 vez por hora. (Automático)',
];

const hatchingSteps = [
  'Antes, de ser posible, pasar por ovoscopio.',
  'Nacedora: Temperatura a 36.5°C e incrementar la humedad a 70-75%. (Automático)',
  'Suspender el volteo una vez nacidos los pollitos. (Automático)',
  'Ventilar es muy importante para proporcionar oxígeno al embrión y eliminar CO₂.',
  'Un buen nacimiento comienza el día 20.',
  'Ante cortes de energía, se puede esperar hasta el día 22 máximo.',
  'Los pollitos no deben permanecer más de 24 hs en la incubadora.',
  'Si están mojados, dejarlos cerca de una fuente de calor (lámpara o estufa).',
  'Dejar en cajón de recría por lo menos 2 semanas con fuente de calor.',
];

const cleaningSteps = [
  'Retirar todas las cáscaras de huevo, plumas y polvo, usando antiparras, barbijo y guantes descartables.',
  'Limpiar en seco primero, luego desinfectar profundamente.',
  'Lavar con solución caliente de detergente y enjuagar con desinfectante (amonio cuaternario o lavandina).',
];

export default function HuevosPage() {
  return (
    <>
      <PageHeader
        title="Huevos Fértiles e Incubación"
        subtitle="Todo sobre la recolección, selección, almacenamiento y proceso completo de incubación de huevos fértiles."
        emoji="🥚"
        badge="Guía Práctica"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Emoji divider */}
        <div className="text-center text-xl tracking-widest text-gray-300 select-none">
          🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓
        </div>

        {/* Collection */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            1. Recolección y Almacenamiento
          </h2>
          <div className="card p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🕐', text: 'Recolectarlos al menos dos veces al día.' },
                { icon: '📅', text: 'Seleccionar los más frescos posible (máximo 7 días previos a la incubación).' },
                { icon: '📦', text: 'Almacenar en maple nuevo o extremadamente limpio con el polo fino hacia abajo.' },
                { icon: '🌡️', text: 'Conservar a temperatura entre 13 y 15°C.' },
                { icon: '⏳', text: 'Permanecer en reposo al menos 24 hs antes de comenzar la incubación.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Egg selection */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            2. Selección de Huevos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card border-2 border-green-200">
              <div className="bg-green-50 p-4 flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                <h3 className="font-bold text-green-800">Huevos recomendados ✅</h3>
              </div>
              <div className="p-4 space-y-3">
                {goodEggs.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card border-2 border-red-200">
              <div className="bg-red-50 p-4 flex items-center gap-2">
                <XCircle className="text-red-600" size={20} />
                <h3 className="font-bold text-red-800">Huevos a descartar ❌</h3>
              </div>
              <div className="p-4 space-y-3">
                {badEggs.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <XCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important warning */}
          <div className="mt-4 card p-5 bg-amber-50 border-2 border-amber-300">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-bold text-amber-900">¡Los huevos NUNCA deben lavarse!</p>
                <p className="text-amber-700 text-sm mt-1">
                  Al lavarlos pierden su capa protectora, lo que facilita la entrada de bacterias durante el proceso de incubación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="text-center text-xl tracking-widest text-gray-300 select-none">
          🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓
        </div>

        {/* Preparation */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            3. Preparación y Carga
          </h2>
          <div className="space-y-3">
            {preparationSteps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 card">
                <span className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed pt-0.5">
                  🐣 {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="text-center text-xl tracking-widest text-gray-300 select-none">
          🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓
        </div>

        {/* Hatching */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            4. Transferencia a Nacedora y Nacimiento
          </h2>
          <div className="space-y-3">
            {hatchingSteps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 card">
                <span className="text-xl shrink-0">🐥</span>
                <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          {/* Parameters table */}
          <div className="mt-6 card overflow-hidden">
            <div className="bg-green-700 text-white p-4">
              <h3 className="font-bold">Parámetros de Referencia</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-green-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-700">Etapa</th>
                    <th className="text-center p-3 font-semibold text-gray-700">Temperatura</th>
                    <th className="text-center p-3 font-semibold text-gray-700">Humedad</th>
                    <th className="text-center p-3 font-semibold text-gray-700">Volteo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="p-3 text-gray-800 font-medium">Incubación (días 1-18)</td>
                    <td className="p-3 text-center text-red-600 font-bold">37.8°C</td>
                    <td className="p-3 text-center text-blue-600 font-bold">60%</td>
                    <td className="p-3 text-center text-gray-600">Cada hora</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <td className="p-3 text-gray-800 font-medium">Nacedora (días 18-21)</td>
                    <td className="p-3 text-center text-red-600 font-bold">36.5°C</td>
                    <td className="p-3 text-center text-blue-600 font-bold">70–75%</td>
                    <td className="p-3 text-center text-gray-600">Suspendido</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-3 text-gray-800 font-medium">Post nacimiento</td>
                    <td className="p-3 text-center text-gray-500">—</td>
                    <td className="p-3 text-center text-blue-600 font-bold">40%</td>
                    <td className="p-3 text-center text-gray-600">Suspendido</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="text-center text-xl tracking-widest text-gray-300 select-none">
          🥚🐣🐥🐓 🥚🐣🐥🐓 🥚🐣🐥🐓
        </div>

        {/* Post-hatch cleaning */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            5. Limpieza Post-Nacimiento
          </h2>
          <div className="space-y-3">
            {cleaningSteps.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 card">
                <span className="text-xl shrink-0">🐓</span>
                <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* License */}
        <div className="text-center text-xs text-gray-400">
          Este trabajo está bajo licencia{' '}
          <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer"
            className="underline text-green-500">CC BY 4.0</a>
        </div>
      </div>
    </>
  );
}
