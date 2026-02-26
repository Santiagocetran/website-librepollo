import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Mail, MapPin, Globe, Github, Twitter, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Canales de comunicación, redes sociales y ubicación del proyecto LibreIncu.',
};

const socialLinks = [
  {
    name: 'GitHub',
    handle: 'AlterMundi-MonitoreoyControl',
    url: 'https://github.com/AlterMundi-MonitoreoyControl',
    icon: Github,
    color: 'bg-gray-900 hover:bg-gray-800',
    desc: 'Código fuente, firmware y documentación técnica.',
  },
  {
    name: 'YouTube',
    handle: '@altermundinet',
    url: 'https://www.youtube.com/@AlterMundiNet',
    icon: Youtube,
    color: 'bg-red-600 hover:bg-red-700',
    desc: 'Videos del proyecto, capacitaciones y testimonios.',
  },
  {
    name: 'Twitter / X',
    handle: '@altermundinet',
    url: 'https://x.com/altermundinet',
    icon: Twitter,
    color: 'bg-sky-500 hover:bg-sky-600',
    desc: 'Actualizaciones y noticias del proyecto.',
  },
  {
    name: 'Facebook',
    handle: '@altermundinet',
    url: 'https://www.facebook.com/altermundi.net',
    icon: Facebook,
    color: 'bg-blue-700 hover:bg-blue-800',
    desc: 'Publicaciones, novedades y comunidad.',
  },
  {
    name: 'Instagram',
    handle: '@altermundinet',
    url: 'https://www.instagram.com/altermundinet/',
    icon: Instagram,
    color: 'bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600',
    desc: 'Imágenes del proyecto y las comunidades.',
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        subtitle="Conectate con el equipo del proyecto LibreIncu. Somos AlterMundi y CTO, trabajando en red con organizaciones rurales de toda la provincia de Córdoba."
        emoji="💬"
        badge="Comunidad & Contacto"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Main contact */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Canales de Comunicación
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="https://altermundi-monitoreoycontrol.github.io/website/"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="bg-green-100 rounded-xl p-3 mb-3">
                <Globe className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Sitio Web</h3>
              <p className="text-green-600 text-sm group-hover:underline">libreincu.altermundi.net</p>
              <ExternalLink size={12} className="text-gray-300 mt-2" />
            </a>

            <a
              href="mailto:info@altermundi.net"
              className="card p-5 hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 rounded-xl p-3 mb-3">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Email General</h3>
              <p className="text-blue-600 text-sm group-hover:underline">info@altermundi.net</p>
            </a>

            <a
              href="mailto:fabriciopuzio@altermundi.net"
              className="card p-5 hover:shadow-md transition-shadow group flex flex-col items-center text-center"
            >
              <div className="bg-amber-100 rounded-xl p-3 mb-3">
                <Mail className="text-amber-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Coordinación</h3>
              <p className="text-amber-600 text-sm group-hover:underline break-all">fabriciopuzio@altermundi.net</p>
            </a>
          </div>
        </section>

        {/* Social */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Redes Sociales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${link.color} text-white p-2 rounded-lg transition-colors`}>
                    <link.icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{link.name}</p>
                    <p className="text-gray-400 text-xs">{link.handle}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{link.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-2xl font-bold text-green-800 mb-6 pb-2 border-b-2 border-green-100">
            Ubicación
          </h2>
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-xl shrink-0">
                <MapPin className="text-green-600" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Córdoba, Argentina</h3>
                <p className="text-gray-500 mt-1">
                  Trabajando en red con organizaciones rurales de toda la provincia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open tech philosophy */}
        <section>
          <div className="card p-8 bg-gradient-to-br from-green-700 to-green-900 text-white text-center">
            <p className="text-4xl mb-4">🚀</p>
            <h2 className="text-2xl font-bold mb-3">Tecnología Libre</h2>
            <p className="text-green-200 leading-relaxed max-w-xl mx-auto mb-6">
              LibreIncu se desarrolla bajo principios de tecnología libre y código abierto. Todo el conocimiento
              generado está disponible para la comunidad, promoviendo la soberanía tecnológica y alimentaria.
            </p>
            <blockquote className="text-green-100 italic text-lg font-medium border-l-4 border-green-400 pl-4 text-left max-w-md mx-auto">
              &ldquo;La tecnología debe estar al servicio de las comunidades, no al revés&rdquo;
            </blockquote>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-800 px-5 py-2.5 rounded-xl font-semibold hover:bg-green-50 transition-colors flex items-center gap-2 text-sm"
              >
                <Github size={16} />
                Ver código fuente
              </a>
              <a
                href="https://altermundi.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-green-500 transition-colors flex items-center gap-2 text-sm border border-green-400"
              >
                <Globe size={16} />
                altermundi.net
              </a>
            </div>
          </div>
        </section>

        {/* CC License */}
        <div className="text-center text-sm text-gray-500">
          <p>
            Todo el contenido de este sitio está licenciado bajo{' '}
            <a
              href="http://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              Creative Commons BY 4.0
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
