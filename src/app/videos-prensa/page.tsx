import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { ExternalLink, BookOpen, Newspaper, Video } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Videos, Prensa y Difusión',
  description: 'Cobertura mediática, videos de difusión y artículos académicos sobre el proyecto LibreIncu.',
};

const articles = [
  {
    source: 'Tiempo Argentino – Economía',
    title: 'Presentan incubadora para potenciar la producción avícola de los pequeños productores',
    url: 'https://www.tiempoar.com.ar/ta_article/incubadora-avicola-productores/',
    type: 'nota',
  },
  {
    source: 'Legislatura de la Provincia de Córdoba',
    title: 'Se presentó "LibreIncu", una incubadora diseñada para la agricultura familiar',
    url: 'https://legislaturacba.gob.ar/se-presento-la-libreincu-una-incubadora-disenada-para-la-agricultura-familiar/',
    type: 'nota',
  },
  {
    source: 'Tiempo Argentino – Tiempo Rural',
    title: 'Crean "LibreIncu", una incubadora para familias productoras que funciona con software libre',
    url: 'https://bit.ly/LibreIncu',
    type: 'nota',
  },
  {
    source: 'Página 12',
    title: 'Problemas en la salud, maltrato animal y pérdida de soberanía. ¿Qué hacer con la industria avícola?',
    url: 'https://www.pagina12.com.ar/798691-que-hacer-con-la-industria-avicola',
    type: 'nota',
  },
  {
    source: 'Multimedio Comechingones',
    title: 'Incubadoras libres y la soberanía alimentaria y tecnológica',
    url: 'https://www.youtube.com/watch?v=XAIEJV1IsmM',
    type: 'video',
  },
  {
    source: 'Radio Pueblo 103.3 – Somos Tierra',
    title: '"LibreIncu", una incubadora para familias productoras que funciona con software libre',
    url: 'https://www.facebook.com/100064102022746/posts/pfbid0N8CtLHdo2AVj12pVsAtcoeShCmByB2GCyXqmLqw75aoo8GYHFhkMTCCCVQQF8PBvl/?app=fbl',
    type: 'radio',
  },
  {
    source: 'CDM Noticias',
    title: 'Fabricio Puzio brinda detalles del proyecto LibreIncu en entrevista radial',
    url: 'https://cdmnoticias.com.ar/2025/03/11/libreincu-una-incubadora-de-pollos-con-software-libre-para-la-agricultura-familiar-en-cordoba/',
    type: 'radio',
  },
];

const videos = [
  {
    id: 'uNX2r0yYUN8',
    title: 'Presentación ante autoridades en la Legislatura de Córdoba',
    desc: 'El proyecto LibreIncu fue presentado oficialmente ante las autoridades de la Legislatura de la Provincia de Córdoba.',
    url: 'https://www.youtube.com/watch?v=uNX2r0yYUN8',
  },
  {
    id: 'J35QhUBAY-U',
    title: 'Jornada de trabajo con las comunidades',
    desc: 'Resumen de la jornada de trabajo con las comunidades que ya están produciendo con la LibreIncu.',
    url: 'https://www.youtube.com/watch?v=J35QhUBAY-U',
  },
  {
    id: 'KnWVigydmrw',
    title: 'Voces de las comunidades receptoras',
    desc: 'Testimonios en primera persona de las comunidades que recibieron la incubadora.',
    url: 'https://youtu.be/KnWVigydmrw',
  },
  {
    id: 'x1D_cCt7HYg',
    title: 'Capacitación técnica – Febrero 2025',
    desc: 'Actividad de febrero 2025: capacitación técnica sobre el uso de la incubadora y su entrega a las comunidades.',
    url: 'https://youtu.be/x1D_cCt7HYg',
  },
  {
    id: 'SZky4Ak8hUw',
    title: 'Reflexiones del equipo de AlterMundi',
    desc: 'Las voces del equipo de AlterMundi reflexionando sobre el proceso de desarrollo.',
    url: 'https://youtu.be/SZky4Ak8hUw',
  },
  {
    id: 'OzdKqgwdBYY',
    title: 'Testimonios sobre el proyecto de desarrollo',
    desc: 'Testimonios sobre lo que implica el proyecto de desarrollo para las organizaciones involucradas.',
    url: 'https://youtu.be/OzdKqgwdBYY',
  },
  {
    id: 'WrC1Y-ACtMo',
    title: 'Presentación técnica de la incubadora',
    desc: 'Presentación técnica de la incubadora con descripción de sus componentes principales.',
    url: 'https://www.youtube.com/watch?v=WrC1Y-ACtMo',
  },
  {
    id: 'IfGGvOIJ1b8',
    title: '1ª Capacitación sobre manejo de huevos fértiles',
    desc: 'Testimonios sobre la primera capacitación realizada con las comunidades sobre manejo productivo de huevos fértiles e incubadora.',
    url: 'https://youtu.be/IfGGvOIJ1b8',
  },
];

const academic = [
  {
    conference: 'X Congreso Latinoamericano de Agroecología – Asunción del Paraguay',
    title: 'Innovación tecnológica y productiva en la cadena avícola para la agricultura familiar, campesina e indígena (AFCI). Córdoba-Argentina.',
    author: 'Fabricio Puzio',
    url: 'https://indico.una.py/event/3/contributions/772/',
  },
];

const typeLabels: Record<string, { label: string; color: string }> = {
  nota: { label: 'Nota', color: 'bg-blue-100 text-blue-700' },
  video: { label: 'Video', color: 'bg-red-100 text-red-700' },
  radio: { label: 'Radio', color: 'bg-purple-100 text-purple-700' },
};

export default function VideosPrensaPage() {
  return (
    <>
      <PageHeader
        title="Videos, Prensa y Difusión"
        subtitle="Notas periodísticas, videos de difusión y artículos académicos sobre el proyecto LibreIncu."
        emoji="📢"
        badge="Difusión & Prensa"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* Articles */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Newspaper className="text-blue-600" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-800">Artículos y Notas</h2>
              <p className="text-gray-500 text-sm">Cobertura periodística del proyecto</p>
            </div>
          </div>
          <div className="space-y-3">
            {articles.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 flex items-start gap-4 hover:shadow-md transition-shadow group block"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeLabels[article.type]?.color || 'bg-gray-100 text-gray-600'}`}>
                      {typeLabels[article.type]?.label || article.type}
                    </span>
                    <span className="text-xs text-gray-400">{article.source}</span>
                  </div>
                  <p className="text-gray-800 font-medium text-sm leading-snug group-hover:text-green-700 transition-colors">
                    {article.title}
                  </p>
                </div>
                <ExternalLink size={16} className="text-gray-300 group-hover:text-green-500 transition-colors shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 p-2 rounded-lg">
              <Video className="text-red-600" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-800">Videos</h2>
              <p className="text-gray-500 text-sm">Material audiovisual del proyecto</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {videos.map((video, i) => (
              <a
                key={i}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/15 transition-colors">
                    <div className="bg-white/80 rounded-full p-3">
                      <svg className="w-5 h-5 text-red-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-green-700 transition-colors">
                    {video.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{video.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Academic */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <BookOpen className="text-green-600" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-800">Artículos Académicos</h2>
              <p className="text-gray-500 text-sm">Publicaciones científicas y congresos</p>
            </div>
          </div>
          <div className="space-y-4">
            {academic.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 hover:shadow-md transition-shadow group block"
              >
                <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">
                  {article.conference}
                </p>
                <p className="font-semibold text-gray-800 leading-snug group-hover:text-green-700 transition-colors mb-2">
                  {article.title}
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span>Autor: {article.author}</span>
                  <ExternalLink size={12} className="text-gray-300 group-hover:text-green-500 transition-colors" />
                </p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
