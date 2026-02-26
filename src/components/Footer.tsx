import Link from 'next/link';
import { Github, Twitter, Facebook, Instagram, Youtube, Mail, MapPin, Egg } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-500 rounded-lg p-1.5">
                <Egg size={20} />
              </div>
              <span className="text-xl font-bold">LibreIncu</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-4 max-w-sm">
              Tecnología libre para la soberanía alimentaria. Desarrollado por AlterMundi y CTO junto con comunidades
              de la Agricultura Familiar, Campesina e Indígena de Córdoba, Argentina.
            </p>
            <p className="text-green-300 text-xs italic">
              &ldquo;La tecnología debe estar al servicio de las comunidades, no al revés&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-green-100 mb-4">Documentación</h3>
            <ul className="space-y-2">
              {[
                { href: '/manual', label: 'Manual de Usuario' },
                { href: '/huevos', label: 'Huevos e Incubación' },
                { href: '/aplicacion', label: 'App LibrePollo' },
                { href: '/especificaciones', label: 'Especificaciones' },
                { href: '/solucion-problemas', label: 'Solución de Problemas' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-green-300 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-green-100 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-green-300 text-sm">
                <MapPin size={14} className="shrink-0" />
                Córdoba, Argentina
              </li>
              <li>
                <a href="mailto:info@altermundi.net" className="flex items-center gap-2 text-green-300 text-sm hover:text-white transition-colors">
                  <Mail size={14} className="shrink-0" />
                  info@altermundi.net
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://github.com/AlterMundi-MonitoreoyControl" target="_blank" rel="noopener noreferrer"
                className="text-green-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://x.com/altermundinet" target="_blank" rel="noopener noreferrer"
                className="text-green-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.facebook.com/altermundi.net" target="_blank" rel="noopener noreferrer"
                className="text-green-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/altermundinet/" target="_blank" rel="noopener noreferrer"
                className="text-green-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@AlterMundiNet" target="_blank" rel="noopener noreferrer"
                className="text-green-400 hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-green-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-green-400 text-xs">
            © 2025 AlterMundi &amp; CTO. Este trabajo está bajo licencia{' '}
            <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer"
              className="underline hover:text-green-200">
              CC BY 4.0
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://altermundi.net" target="_blank" rel="noopener noreferrer"
              className="text-green-400 text-xs hover:text-green-200 transition-colors">
              altermundi.net
            </a>
            <span className="text-green-700">•</span>
            <a href="https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora"
              target="_blank" rel="noopener noreferrer"
              className="text-green-400 text-xs hover:text-green-200 transition-colors">
              Código abierto en GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
