"use client";

import { Mail, CalendarDays } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { SectionCard } from "./section-card";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      alert("Message sent successfully!");

      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };
  return (
    <SectionCard className="container-section py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4">
          <h2 className="text-headline-xl leading-tight">
            Let’s build something amazing together
          </h2>

          <p className="text-body-md text-muted-foreground/95">
            I’m a full-stack developer specializing in Laravel, React, and
            Next.js. I build scalable web applications, REST APIs, and clean UI
            systems that focus on performance and user experience.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://github.com/JomarGZ"
              target="_blank"
              className="p-2 rounded-lg border border-border hover:bg-muted transition"
            >
              {/* Light mode */}
              <Image
                src="https://thesvg.org/icons/github/light.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="block dark:hidden"
              />

              {/* Dark mode */}
              <Image
                src="https://thesvg.org/icons/github/dark.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="hidden dark:block"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jomar-godinez"
              target="_blank"
              className="p-2 rounded-lg border border-border hover:bg-muted transition"
            >
              <Image
                src="https://thesvg.org/icons/linkedin/default.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="border border-border rounded-xl p-6 bg-card">
          <h3 className="text-headline-md mb-4">Get in touch</h3>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-3"
          >
            <input
              name="user_name"
              type="text"
              placeholder="Your name"
              className="px-3 py-2 rounded-lg border border-border bg-transparent text-body-sm"
            />

            <input
              name="user_email"
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg border border-border bg-transparent text-body-sm"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows={2}
              className="px-3 py-2 rounded-lg border border-border bg-transparent text-body-sm"
            />

            <Button className="mt-2 rounded-lg" type="submit">
              Send Message
            </Button>
          </form>
          {/* QUICK ACTIONS */}
          <div className="flex flex-col gap-2 mt-4 text-body-sm">
            <a
              href="mailto:jomar.godinezs@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
            >
              <Mail className="w-4 h-4" />
              Email me directly
            </a>

            <a
              href="https://calendly.com/jomar-godinezs/30min"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
            >
              <CalendarDays className="w-4 h-4" />
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
