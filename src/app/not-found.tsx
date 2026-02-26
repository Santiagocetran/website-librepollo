import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">🥚</div>
        <h1 className="text-4xl font-black text-green-800 mb-2">404</h1>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Página no encontrada</h2>
        <p className="text-gray-500 mb-8">
          Esta página no existe o fue movida. Volvé al inicio para encontrar lo que buscás.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary flex items-center gap-2">
            <Home size={16} />
            Ir al inicio
          </Link>
          <Link href="/manual" className="btn-secondary flex items-center gap-2">
            <Search size={16} />
            Ver manual
          </Link>
        </div>
      </div>
    </div>
  );
}
