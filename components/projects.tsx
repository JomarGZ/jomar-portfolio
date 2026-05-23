import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { SectionCard } from "./section-card";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  stack: string[];
  demoUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online shopping platform with secure checkout and product management.",
    image: "/images/thumbnail1.jpg",
    tags: ["LARAVEL", "ReactJS"],
    stack: ["Laravel", "MySQL", "Tailwind", "ReactJS", "stripe"],
    demoUrl: "#",
    repoUrl: "https://github.com/JomarGZ/sellora",
  },
  {
    title: "Task Management Web App",
    description:
      "Project and task tracking system for organizing teams, deadlines, and workflows.",
    image: "/images/thumbnail2.jpg",
    tags: ["Laravel", "VueJS"],
    stack: ["Laravel", "VueJS", "MySQL"],
    demoUrl: "#",
    repoUrl: "https://github.com/JomarGZ/Vue-Task-Management-App",
  },
];

export default function Projects() {
  return (
    <SectionCard title="Projects" className="order-2">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[10px] font-semibold tracking-wider"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <CardContent>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <Button asChild size="sm" className="gap-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="gap-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {/* <Github className="h-4 w-4" /> */}
                    GitHub Repo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionCard>
  );
}
