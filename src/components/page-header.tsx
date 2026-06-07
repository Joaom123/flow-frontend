interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-2">
      <h1 className="display text-4xl md:text-5xl font-semibold leading-[1.05]">
        {title}
      </h1>
      <p className="text-muted-foreground max-w-xl">{subtitle}</p>
    </div>
  );
}
