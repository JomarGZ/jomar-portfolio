"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { SectionCard } from "./section-card";
import { PlayCircle, X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  stack: string[];
  youtubeId: string; // ← NEW: YouTube video ID
  demoUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online shopping platform with secure checkout and product management.",
    image: "/images/ecommerce-thumbnail.jpg",
    tags: ["LARAVEL", "ReactJS"],
    stack: ["Laravel", "MySQL", "Tailwind", "ReactJS", "Stripe"],
    youtubeId: "fqH-_26_VuY", // e.g. "dQw4w9WgXcQ"
    demoUrl: "#",
    repoUrl: "https://github.com/JomarGZ/sellora",
  },
  {
    title: "Task Management Web App",
    description:
      "Project and task tracking system for organizing teams, deadlines, and workflows.",
    image: "/images/task-management-Thumbnail.jpg",
    tags: ["Laravel", "VueJS"],
    stack: ["Laravel", "VueJS", "MySQL"],
    youtubeId: "pH0ECtzRDqY",
    demoUrl: "#",
    repoUrl: "https://github.com/JomarGZ/Vue-Task-Management-App",
  },
];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <SectionCard title="Projects" className="order-2">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Thumbnail / YouTube hover area */}
              <div
                className="relative aspect-video overflow-hidden bg-muted cursor-pointer"
                onClick={() => setActiveVideo(project.youtubeId)}
              >
                {/* Static thumbnail (hidden on hover) */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                />

                {/* YouTube muted autoplay preview (shown on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.youtubeId}&modestbranding=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 z-20">
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
                  <Button
                    size="sm"
                    className="gap-2"
                    onClick={() => setActiveVideo(project.youtubeId)}
                  >
                    <PlayCircle className="h-4 w-4" />
                    Watch Demo
                  </Button>
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionCard>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
