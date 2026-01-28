import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn("flex gap-2 mt-6", centered && "justify-center")}>
        <div className="w-12 h-1 bg-primary rounded-full"></div>
        <div className="w-3 h-1 bg-secondary rounded-full"></div>
      </div>
    </div>
  );
};
