import { BadgeCheck, CalendarDays, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeToggle } from "@/app/theme-toggle";

export default function Hero() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <section className="container-section py-8 md:px-6 px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="md:hidden fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shadow-sm border border-border-subtle shrink-0">
        <Image
          alt="Jomar Godinez"
          className="w-full h-full object-cover"
          src={"/images/jomar.jpg"}
          width={250}
          priority
          height={250}
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-between w-full mb-1">
          {/* Left side */}
          <div className="flex items-center gap-2">
            <h1 className="text-headline-lg">Jomar Godinez</h1>
            <BadgeCheck className="text-blue-500 dark:text-blue-400 w-5 h-5" />
          </div>

          {/* Right side */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>

        <p className="text-body-sm flex items-center justify-center md:justify-start gap-1 mb-2 text-muted-foreground">
          <MapPin className="w-3 h-3" />
          Lapu-lapu City, Cebu, Philippines
        </p>

        <p className="text-headline-sm text-foreground mb-4">
          Software Developer | Laravel &amp; ReactJS | SEO | Freelancer
        </p>

        <div className="flex flex-wrap justify-center md:justify-start text-sm gap-4">
          <Button asChild className="gap-2 rounded-xl px-5 py-2">
            <a
              href="https://calendly.com/jomar-godinezs/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarDays className="h-4 w-4" />
              Schedule a Call
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="gap-2 rounded-xl px-5 py-2"
          >
            <a href={`mailto:${email}`}>
              <Mail className="h-4 w-4" /> Send Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
