export function SimpleHeader() {
  return (
    <header className="py-4 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground">A</span>
            </div>
            <span className="text-lg">Aptura</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Have a project in mind? <a 
              href="https://t.me/sandourss" 
              className="text-primary hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}