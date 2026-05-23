import Image from "next/image";
import { SectionCard } from "./section-card";

const techCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        iconSrc: "https://thesvg.org/icons/html5/default.svg",
      },
      {
        name: "CSS",
        iconSrc: "https://thesvg.org/icons/css/default.svg",
      },
      {
        name: "JavaScript",
        iconSrc: "https://thesvg.org/icons/javascript/default.svg",
      },
      {
        name: "Tailwind CSS",
        iconSrc: "https://thesvg.org/icons/tailwind-css/default.svg",
      },
      {
        name: "React",
        iconSrc: "https://thesvg.org/icons/react/default.svg",
      },
      {
        name: "Next.js",
        iconSrc: "https://thesvg.org/icons/nextdotjs/default.svg",
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "PHP",
        iconSrc: "https://thesvg.org/icons/php/mono.svg",
      },
      {
        name: "Laravel",
        iconSrc: "https://thesvg.org/icons/laravel/default.svg",
      },
      {
        name: "MySQL",
        iconSrc: "https://thesvg.org/icons/mysql/wordmark-light.svg",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        iconSrc: "https://thesvg.org/icons/docker/default.svg",
      },
      {
        name: "GitHub Actions",
        iconSrc: "https://thesvg.org/icons/github-actions/default.svg",
      },
      {
        name: "Stripe",
        iconSrc: "https://thesvg.org/icons/stripe/default.svg",
      },
      {
        name: "Git & GitHub",
        iconSrc: "https://thesvg.org/icons/github/default.svg",
      },
    ],
  },
];
export default function TechStack() {
  return (
    <SectionCard title="Tech Stack" className="order-3">
      <div className="flex flex-col gap-gutter">
        {techCategories.map((cat) => (
          <div key={cat.title} className="gap-4">
            <h3 className="text-headline-sm mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 border border-border text-sm px-3 py-1 rounded-lg"
                >
                  <Image
                    src={skill.iconSrc}
                    alt={skill.name}
                    width={16}
                    height={16}
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
