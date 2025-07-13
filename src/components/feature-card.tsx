interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-headline">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
