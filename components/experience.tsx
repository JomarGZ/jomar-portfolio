import { SectionCard } from "./section-card";

const experiences = [
  {
    role: "Backend Web Developer",
    company: "Forty Degrees Celsius Inc.",
    period: "2024",
    description: "Maintaining and building scalable backend solutions.",
    active: false,
  },
];

export default function Experience() {
  return (
    <SectionCard title="Experience" className="order-1">
      <div className="max-w-3xl space-y-0">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-4 py-2"
          >
            <div className="flex items-start gap-3 flex-1">
              <div className="experience-dot-current w-2 h-2 rounded-full mt-2 shrink-0"></div>
              <div>
                <h3 className="text-headline-sm sm:text-base">{exp.role}</h3>
                <p className="text-body-md mt-0.5">{exp.company}</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium whitespace-nowrap">
              {exp.period}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
