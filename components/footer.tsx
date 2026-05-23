export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto py-10 mt-10 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <p className="text-headline-sm font-semibold">Jomar Godinez</p>
          <p className="text-body-sm text-muted-foreground">
            Full Stack Developer
          </p>
        </div>

        {/* Center: subtle note (optional but clean) */}
        <div className="text-body-sm text-muted-foreground text-center">
          Built with Next.js & Tailwind CSS
        </div>

        {/* Right: Copyright */}
        <div className="text-body-sm text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
