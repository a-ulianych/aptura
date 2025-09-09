import { Separator } from "./ui/separator";

export function SimpleFooter() {
  const links = [
    { href: "#privacy", text: "Privacy Policy" },
    { href: "#terms", text: "Terms of Service" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground text-xs">WS</span>
            </div>
            <span>WebStudio</span>
          </div>
          
          <Separator />
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.text}
              </a>
            ))}
            <span>
              © 2024 WebStudio. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}