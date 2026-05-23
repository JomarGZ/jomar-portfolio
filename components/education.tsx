import { SectionCard } from "./section-card";

export default function Education() {
  return (
    <SectionCard title="Education" className="order-2">
      <div>
        <p className="text-headline-sm">BS in Computer Science</p>
        <p className="text-body-md">
          North Eastern Mindanao State University of the Philippines
        </p>
        <p className="text-xs text-gray-500 mt-1">2019 - 2023</p>
      </div>
    </SectionCard>
  );
}
