import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Guía de Buenas Prácticas de Incubación',
  description: 'Preguntas guía para evaluar el manejo de reproductores, huevos fértiles e incubación.',
};

const sections = [
  {
    emoji: '🐓',
    title: 'Gallinero y Ambiente',
    questions: [
      '¿Cuál es la relación macho:hembra en su lote reproductor?',
      '¿Qué edad tienen las aves reproductoras?',
      '¿Cómo controla la temperatura y ventilación en el gallinero? (¿Están muy encerradas o a pleno sol?)',
      '¿Cuáles son las instalaciones para que pongan huevos? ¿Son limpias y ordenadas?',
      '¿Con qué frecuencia limpia los gallineros?',
    ],
  },
  {
    emoji: '🌾',
    title: 'Alimentación',
    questions: [
      '¿Qué tipo de dieta suministra a los reproductores?',
      '¿Cómo asegura el aporte adecuado de vitaminas y minerales (especialmente Calcio)?',
      '¿Las aves están demasiado gordas o demasiado flacas?',
    ],
  },
  {
    emoji: '🩺',
    title: 'Sanidad',
    questions: [
      '¿Ha observado signos de enfermedad en el lote reproductor?',
      '¿Realiza tratamientos contra parásitos internos/externos?',
    ],
  },
  {
    emoji: '🥚',
    title: 'Recolección de Huevos',
    questions: [
      '¿Con qué frecuencia recolecta los huevos?',
      '¿Qué porcentaje aproximado de huevos encuentra en el piso?',
    ],
  },
  {
    emoji: '📦',
    title: 'Almacenamiento Pre-Incubación',
    questions: [
      '¿Cuánto tiempo almacena los huevos antes de incubarlos?',
      '¿A qué temperatura y humedad los almacena?',
      '¿Cómo posiciona los huevos durante el almacenamiento?',
      '¿Cómo los transporta?',
    ],
  },
  {
    emoji: '🔍',
    title: 'Selección',
    questions: [
      '¿Qué criterios utiliza para seleccionar huevos fértiles?',
      '¿Descarta huevos con formas irregulares, grietas o suciedad?',
      '¿Qué porcentaje de huevos suele descartar antes de incubar?',
    ],
  },
  {
    emoji: '🌡️',
    title: 'Parámetros de Incubación',
    questions: [
      '¿Hubo problemas de temperatura en la incubadora?',
      '¿Hubo problemas de humedad durante las diferentes etapas?',
      '¿Hubo problemas con el ventilador?',
      '¿Hubo problemas con la rotación?',
      '¿Realiza ovoscopía? ¿Qué día?',
      '¿Hubo cortes de luz?',
    ],
  },
  {
    emoji: '🐣',
    title: 'Transferencia a Nacedora',
    questions: [
      '¿En qué día trasladó los huevos a la nacedora?',
    ],
  },
  {
    emoji: '🐥',
    title: 'Nacimiento',
    questions: [
      '¿Aumentó la humedad durante el nacimiento?',
      '¿Cuál es la duración promedio del proceso de eclosión (desde el primero hasta el último)?',
      '¿A los cuántos días comenzó y terminó el nacimiento?',
    ],
  },
  {
    emoji: '📊',
    title: 'Evaluación Post-Nacimiento',
    questions: [
      '¿Cuál es su porcentaje de nacimientos sobre huevos fértiles?',
      '¿Cuál es su tasa de mortalidad embrionaria temprana, media y tardía?',
      '¿Qué porcentaje de pollitos nacen con problemas o malformaciones?',
    ],
  },
  {
    emoji: '🔬',
    title: 'Análisis',
    questions: [
      '¿Realiza necropsia de embriones no eclosionados? (¿Rompe los huevos que no nacieron?)',
    ],
  },
  {
    emoji: '🌟',
    title: 'Calidad de los Pollitos',
    questions: [
      '¿Cómo evalúa la calidad de los pollitos nacidos?',
      '¿Observa signos de deshidratación o problemas en las patas al poco tiempo de nacimiento?',
      '¿Se mueren muchos pollitos en las primeras horas?',
    ],
  },
];

export default function BuenasPracticasPage() {
  return (
    <>
      <PageHeader
        title="Guía de Buenas Prácticas de Incubación"
        subtitle="Preguntas clave para evaluar el manejo de reproductores, huevos fértiles e incubación. Una herramienta de autoevaluación para mejorar tus resultados."
        emoji="✅"
        badge="Evaluación & Diagnóstico"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Intro */}
        <div className="card p-6 border-l-4 border-l-green-500 mb-10">
          <p className="text-gray-700 leading-relaxed">
            Esta guía de preguntas está pensada para que los productores puedan evaluar y mejorar su proceso de
            incubación. Cubren desde el manejo del lote reproductor hasta la evaluación post-nacimiento, pasando
            por la recolección, selección, almacenamiento y el proceso en sí.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="card overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 flex items-center gap-3">
                <span className="text-2xl">{section.emoji}</span>
                <h2 className="font-bold text-green-800">{section.title}</h2>
                <span className="ml-auto text-xs text-green-600 bg-green-200 rounded-full px-2 py-0.5">
                  {section.questions.length} preguntas
                </span>
              </div>
              <ul className="divide-y divide-gray-50">
                {section.questions.map((q, j) => (
                  <li key={j} className="p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                    <span className="text-green-400 mt-0.5 shrink-0">•</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{q}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Practical Example */}
        <div className="mt-10 card overflow-hidden">
          <div className="bg-amber-50 border-b border-amber-200 p-4">
            <h2 className="font-bold text-amber-800 text-lg flex items-center gap-2">
              <span className="text-xl">🐤</span>
              Ejemplo Práctico de Análisis
            </h2>
          </div>
          <div className="p-6 prose-custom">
            <p>
              Si ven una tabla de resultados, podemos interpretar (considerando que es difícil de comprobar con certeza):
            </p>

            {/* Simulated table */}
            <div className="my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="p-3 text-left font-medium">Etapa</th>
                    <th className="p-3 text-center font-medium">Huevos</th>
                    <th className="p-3 text-center font-medium">Porcentaje</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { etapa: 'Huevos totales cargados', cant: '60', pct: '100%', highlight: false },
                    { etapa: 'Descartados por ovoscopio', cant: '19', pct: '>30%', highlight: true },
                    { etapa: 'Pasaron a nacedora', cant: '41', pct: '68%', highlight: false },
                    { etapa: 'Nacieron con éxito', cant: '29', pct: '~70%', highlight: false },
                    { etapa: 'No nacieron', cant: '12', pct: '~30%', highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 ${row.highlight ? 'bg-amber-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="p-3 text-gray-700">{row.etapa}</td>
                      <td className="p-3 text-center font-bold text-gray-800">{row.cant}</td>
                      <td className={`p-3 text-center font-semibold ${row.highlight ? 'text-amber-600' : 'text-green-600'}`}>{row.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg">
                <span className="text-amber-500 shrink-0">⚠️</span>
                <p>
                  Si el porcentaje de huevos descartados por ovoscopio es mayor al 20% (en este caso más del 30%),
                  hay que pensar que esos huevos no estaban fertilizados.
                  <strong className="text-amber-700"> ¿Por qué?</strong> (Es una pregunta que debería pensar el
                  dueño del gallinero primero).
                </p>
              </div>
              <div className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
                <span className="text-green-500 shrink-0">✅</span>
                <p>
                  El nacimiento fue, dentro de todo, normal (ni excelente ni malo). Casi el 70% de eclosión sobre
                  los huevos que pasaron a nacedora.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-gray-800 mb-2">¿Qué pasó con los 12 huevos que no nacieron?</p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>5 no tenían ningún desarrollo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>1 estaba podrido. (También debería haberse descartado por ovoscopio → aumentaría la eclosión al 81%).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>4 embriones muy formados pero solo 2 rompieron cáscara y no pudieron nacer (¿Falta de rotación, humedad o la misma naturaleza?).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>2 con el embrión pequeño (¿Falta de calor o problema del huevo?).</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-bold text-red-800">
                Conclusión: ¡Hay que revisar el proceso de los huevos fértiles!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
