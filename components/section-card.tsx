import { cn } from "@/lib/utils";

type SectionCardProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionCard({ title, className, children }: SectionCardProps) {
  return (
    <section
      className={cn(
        "rounded-lg border bg-card text-card-foreground p-4 sm:p-6",
        "shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        "fade-in",
        className,
      )}
    >
      {title && (
        <h2 className="text-headline-md mb-2 font-semibold">{title}</h2>
      )}

      {children}
    </section>
  );
}
