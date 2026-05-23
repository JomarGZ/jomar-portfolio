import Image from "next/image";
import { SectionCard } from "./section-card";

const projects = [
  {
    title: "PawsitiveCare",
    description: "Secure multi-role pet care management via Laravel.",
    image: "/images/thumbnail1.jpg",
    tags: ["LARAVEL", "MYSQL"],
  },
  {
    title: "Mr. Beans Coffee Co.",
    description:
      "E-commerce Coffee Store - UI/UX, WordPress & SEO Optimization",
    image: "/images/thumbnail2.jpg",
    tags: ["WORDPRESS", "SEO"],
  },
  {
    title: "KodeCraze",
    description: "Tech Trends & AI Platform - Founder/Content Strategy.",
    image: "/images/thumbnail3.jpg",
    tags: ["REACT", "AI"],
  },
  {
    title: "OneClique Studio",
    description: "Multimedia Team - UI/UX, WordPress & SEO Optimization",
    image: "/images/thumbnail4.jpg",
    tags: ["UI/UX", "WORDPRESS"],
  },
];

export default function Projects() {
  return (
    <SectionCard title="Projects" className="order-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-xl bg-surface border border-border-subtle hover:shadow-lg transition-all duration-300"
          >
            <div className="h-40 overflow-hidden relative">
              <Image
                alt={project.title}
                src={project.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-sm text-headline-sm">
                  {project.title}
                </h3>
                <a
                  href="#"
                  className="text-primary hover:translate-x-1 transition-transform"
                >
                  <span className="material-symbols-outlined">north_east</span>
                </a>
              </div>
              <p className="text-text-body font-body-md mb-3">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label-caps text-label-caps text-outline bg-surface-container px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
