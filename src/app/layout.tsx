import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LibreIncu – Tecnología Libre para la Soberanía Alimentaria',
    template: '%s | LibreIncu',
  },
  description:
    'Incubadora avícola con tecnología de monitoreo y control en línea, diseñada para la Agricultura Familiar, Campesina e Indígena (AFCI) de Córdoba, Argentina.',
  keywords: ['LibreIncu', 'incubadora', 'soberanía alimentaria', 'tecnología libre', 'agricultura familiar', 'AlterMundi'],
  authors: [{ name: 'AlterMundi & CTO' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'LibreIncu',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
