import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { AlertTriangle, Droplets, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solución de Problemas',
  description: 'Diagnóstico y solución de problemas paso a paso para la incubadora LibreIncu.',
};

export default function SolucionProblemasPage() {
  return (
    <>
      <PageHeader
        title="Diagnóstico y Solución de Problemas"
        subtitle="Guía paso a paso para identificar y resolver los problemas más comunes de la incubadora LibreIncu."
        emoji="🔧"
        badge="Soporte Técnico"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">

        {/* Intro */}
        <div className="card p-5 border-l-4 border-l-amber-400 bg-amber-50">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
            <p className="text-amber-800 text-sm leading-relaxed">
              Antes de comenzar el diagnóstico, asegurate de que la incubadora esté conectada a la corriente
              y que tengas acceso al multímetro si necesitás verificar tensiones eléctricas.
            </p>
          </div>
        </div>

        {/* Problem 1: Low humidity */}
        <section>
          <div className="card overflow-hidden">
            <div className="bg-blue-600 text-white p-5">
              <div className="flex items-center gap-3">
                <Droplets size={24} />
                <div>
                  <h2 className="text-xl font-bold">Problema: Baja Humedad</h2>
                  <p className="text-blue-200 text-sm mt-0.5">La humedad no alcanza el valor configurado</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-8">

              {/* Sub A */}
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                  <span className="bg-red-100 text-red-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">A</span>
                  No se escucha el sonido de la bomba
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Si la bomba no enciende, es un problema eléctrico o mecánico.
                  Seguí estos pasos usando un multímetro para verificar la fuente de 12V:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      step: 1,
                      title: 'Configurar el multímetro',
                      desc: 'Colocar el multímetro en posición 20V continua.',
                    },
                    {
                      step: 2,
                      title: 'Conectar punta negra',
                      desc: 'Colocar la punta negra en el cuarto terminal de la fuente donde salen cables negros.',
                    },
                    {
                      step: 3,
                      title: 'Conectar punta roja',
                      desc: 'Colocar la punta roja en el terminal del medio (5) de la caja azul que tiene cables.',
                    },
                    {
                      step: 4,
                      title: 'Verificar tensión',
                      desc: 'El multímetro deberá indicar 12V. De lo contrario, existe un problema de cableado o la fuente no funciona.',
                      important: true,
                    },
                    {
                      step: 5,
                      title: 'Verificar activación del relé',
                      desc: 'En el plazo de 5 minutos, el relé se debe activar encendiendo una de las luces rojas.',
                    },
                    {
                      step: 6,
                      title: 'Verificar el pin del relé',
                      desc: 'Cada vez que se activa el relé, verificar que el pin de la izquierda se ponga en 12V. Colocar la punta roja sobre el borne a la izquierda del borne del medio (4) y dejar la punta negra en la posición indicada en el punto 2. Verificar 0V hasta que se prende la luz → 12V mientras la luz está encendida.',
                    },
                  ].map((item) => (
                    <div key={item.step} className={`flex gap-4 p-4 rounded-xl border ${item.important ? 'bg-amber-50 border-amber-200' : 'bg-gray-50 border-gray-200'}`}>
                      <span className={`rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0 ${item.important ? 'bg-amber-200 text-amber-800' : 'bg-gray-200 text-gray-700'}`}>
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                        <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fix if step 6 fails */}
                <div className="mt-4 card p-5 border-2 border-red-200 bg-red-50">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <AlertTriangle size={16} />
                    Si el paso 6 no se cumple – Solución de cableado
                  </h4>
                  <ol className="space-y-2 text-sm text-red-700">
                    <li className="flex gap-2">
                      <span className="font-bold shrink-0">1.</span>
                      Apagar la incubadora.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold shrink-0">2.</span>
                      Quitar el cable del terminal 4 y colocarlo en el 1.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold shrink-0">3.</span>
                      Quitar el cable de 5 y colocarlo en 2.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold shrink-0">4.</span>
                      Quitar el cable de IN1 y colocarlo en IN2.
                    </li>
                  </ol>
                </div>
              </div>

              {/* Sub B */}
              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                  <span className="bg-amber-100 text-amber-700 rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold shrink-0">B</span>
                  La bomba enciende (cada 2 minutos) pero no sale agua
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Esto indica un problema en el recorrido del agua. Verificar:
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { icon: '💧', title: 'Nivel del reservorio', desc: 'Verificar que tenga agua el reservorio.' },
                    { icon: '🔗', title: 'Manguera', desc: 'Verificar que la manguera no esté obstruida ni "ahorcada".' },
                    { icon: '🔩', title: 'Pico microaspersor', desc: 'Controlar que el pico no esté tapado ni sucio.' },
                  ].map((item, i) => (
                    <div key={i} className="card p-4 text-center">
                      <span className="text-3xl block mb-2">{item.icon}</span>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other common problems */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Otros Problemas Frecuentes
          </h2>

          <div className="space-y-4">
            {[
              {
                title: 'La temperatura no sube',
                emoji: '🌡️',
                color: 'border-red-200',
                headerBg: 'bg-red-50',
                steps: [
                  'Verificá que la resistencia calefactora esté funcionando correctamente.',
                  'Revisá todas las conexiones eléctricas.',
                  'Controlá que el ventilador esté distribuyendo el aire.',
                  'Asegurate de que las ventilaciones no estén tapadas.',
                ],
              },
              {
                title: 'La rotación no funciona',
                emoji: '🔄',
                color: 'border-amber-200',
                headerBg: 'bg-amber-50',
                steps: [
                  'Revisá la posición de la bandeja y los sensores Reed.',
                  'Verificá las conexiones del motor.',
                  'Controlá que la cinta, la polea y el motor estén bien asociados.',
                  'Usá el control manual de rotación desde la app para probar el sistema.',
                ],
              },
              {
                title: 'La app no conecta con la incubadora',
                emoji: '📶',
                color: 'border-blue-200',
                headerBg: 'bg-blue-50',
                steps: [
                  'Verificá que la incubadora esté encendida.',
                  'Conectate al WiFi "incu-[número]" desde la configuración de tu teléfono.',
                  'Contraseña de fábrica: 12345678.',
                  'Presioná "Reintentar" en la app.',
                  'Si persiste, reiniciá la incubadora y el teléfono.',
                ],
              },
              {
                title: 'El humidificador hace ruido pero no humidifica',
                emoji: '💦',
                color: 'border-blue-200',
                headerBg: 'bg-blue-50',
                steps: [
                  'Desenroscá el pico de aspersión con cuidado.',
                  'Limpiá suavemente la boquilla para retirar incrustaciones.',
                  'Verificá que la manguera no esté torcida ni obstruida.',
                  'Asegurate de que haya agua suficiente en el reservorio.',
                ],
              },
            ].map((problem, i) => (
              <div key={i} className={`card border-2 ${problem.color} overflow-hidden`}>
                <div className={`${problem.headerBg} p-4 flex items-center gap-3`}>
                  <span className="text-xl">{problem.emoji}</span>
                  <h3 className="font-bold text-gray-800">{problem.title}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {problem.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-400 shrink-0 mt-0.5" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact for support */}
        <div className="card p-6 bg-green-50 border-2 border-green-200 text-center">
          <p className="text-2xl mb-3">🤝</p>
          <h3 className="font-bold text-green-800 text-lg mb-2">¿No encontrás la solución?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Si el problema persiste, podés contactarnos a través de los canales del proyecto.
          </p>
          <a href="/contacto" className="btn-primary inline-flex items-center gap-2">
            Ver canales de contacto
          </a>
        </div>
      </div>
    </>
  );
}
