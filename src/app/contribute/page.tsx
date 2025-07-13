import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, GitFork, Heart, Layers } from 'lucide-react';
import PageWrapper from '@/components/page-wrapper';

export default function ContributePage() {
  const GITHUB_REPO_URL = "https://github.com/Firebase/genkit-nextjs-gallery";
    
  return (
    <PageWrapper>
      <div className="container mx-auto max-w-3xl py-12 md:py-16 px-4">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              Contribute to TokenTrove
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Help us build the future of digital asset showcases.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-pink-500" />
                Why Contribute?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                This project is open-source and built for the community. By contributing, you can help add new features, fix bugs, and improve the experience for everyone. Whether you're a developer, a designer, or just an NFT enthusiast with great ideas, we welcome your input.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-6 w-6 text-blue-400" />
                Our Tech Stack
              </CardTitle>
              <CardDescription>
                This project is built with a modern, powerful tech stack:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Next.js:</strong> A leading React framework for building fast, server-rendered applications.</li>
                <li><strong>React:</strong> The core library for building user interfaces with components.</li>
                <li><strong>TypeScript:</strong> For type-safe JavaScript that improves code quality and maintainability.</li>
                <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid UI development.</li>
                <li><strong>ShadCN UI:</strong> A collection of beautifully designed, accessible, and reusable components.</li>
                <li><strong>Google Gemini API:</strong> Powering the AI assistant for an interactive experience.</li>
                <li><strong>Alchemy API:</strong> For robust and reliable interaction with the blockchain.</li>
                <li><strong>Framer Motion:</strong> For smooth, declarative animations on page content.</li>
                <li><strong>Next View Transitions:</strong> For seamless, native page transitions.</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contribution Guidelines</CardTitle>
              <CardDescription>
                We want to make it easy for you to contribute. Here are a few guidelines:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                      <strong>Fork the Repository:</strong> Start by forking the main repository to your own GitHub account.
                  </li>
                  <li>
                      <strong>Create a Branch:</strong> Create a new branch for your feature or bug fix. Use a descriptive name (e.g., `feature/add-new-animation` or `fix/gallery-bug`).
                  </li>
                  <li>
                      <strong>Make Your Changes:</strong> Write clean, readable code and follow the existing code style.
                  </li>
                  <li>
                      <strong>Submit a Pull Request:</strong> Once you're ready, submit a pull request from your branch to our `main` branch. Provide a clear description of your changes.
                  </li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
              <Button asChild size="lg">
                  <a href={"https://github.com/Jyotibrat/Token-Trove"} target="_blank" rel="noopener noreferrer">
                      <GitFork className="mr-2" />
                      View on GitHub
                      <ExternalLink className="ml-2" />
                  </a>
              </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
