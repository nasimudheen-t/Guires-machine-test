import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24">
      <Container className="space-y-12">
        <div className="text-center">
          <SectionHeading
            badge="Technical Assessment"
            title={
              <>
                Welcome to <span className="text-gradient">TechNova Solutions</span>
              </>
            }
            subtitle="Project successfully initialized with Next.js 15, TypeScript, Tailwind CSS v4, and Clean Architecture."
            align="center"
          />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Documentation
          </Button>
          <Button variant="outline" size="lg">
            Outline Button
          </Button>
          <Button variant="ghost" size="lg">
            Ghost Button
          </Button>
        </div>
      </Container>
    </main>
  );
}
