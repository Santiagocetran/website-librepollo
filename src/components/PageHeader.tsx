interface PageHeaderProps {
  title: string;
  subtitle?: string;
  emoji?: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, emoji, badge }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {badge && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/40 text-green-100 mb-4 border border-green-400/30">
            {badge}
          </span>
        )}
        <div className="flex items-start gap-4">
          {emoji && (
            <span className="text-4xl leading-tight mt-1 hidden sm:block">{emoji}</span>
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{title}</h1>
            {subtitle && (
              <p className="text-green-200 mt-2 text-lg leading-relaxed">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
