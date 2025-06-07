import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="color-box bg-primary">Primary</div>
      <div className="color-box bg-secondary">Secondary</div>
      <div className="color-box bg-muted">Muted</div>
      <div className="color-box bg-accent">Accent</div>
      <div className="color-box bg-destructive">Destructive</div>
      <div className="color-box bg-card">Card</div>
    </div>
  );
}
