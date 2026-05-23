import { SectionCard } from "./section-card";

export default function About() {
  return (
    <SectionCard title="About Me" className="order-1">
      <div className="text-body-md space-y-4">
        <p>
          Hi, I&apos;m Jomar. My journey into web development didn&apos;t start
          with a big plan—it began with simple curiosity. I enjoyed creating
          things, breaking them, fixing them again, and slowly realizing that
          building systems was something I genuinely loved.
        </p>

        <p>
          Over time, that curiosity grew into a real passion. I started diving
          deeper into Laravel, React.js, and RESTful APIs, and before I knew it,
          I was building complete applications from end to end. One of the
          biggest lessons I&apos;ve learned is that every problem—no matter how
          difficult—can be solved with patience, a clear plan, and a bit of
          creativity.
        </p>
      </div>
    </SectionCard>
  );
}
