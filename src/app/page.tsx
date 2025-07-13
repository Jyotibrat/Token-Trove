import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FloatingNftCards } from '@/components/floating-nft-cards';
import { FeatureCard } from '@/components/feature-card';
import { Palette, Layers, Gem } from 'lucide-react';
import PageWrapper from '@/components/page-wrapper';

export default function LandingPage() {
  return (
    <PageWrapper>
      <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="mx-auto max-w-3xl space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              The Future of Digital Collectibles is Here
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Discover, create, and showcase unique NFTs with the power of AI. Your journey into the world of digital
              ownership starts now.
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/create">
                Create an NFT
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/gallery">Explore Gallery</Link>
            </Button>
          </div>
        </div>
        <FloatingNftCards />
        <div className="absolute inset-0 -z-10 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <FeatureCard
              icon={<Palette className="h-8 w-8" />}
              title="AI Content Moderation"
              description="Use our AI content moderator to ensure your NFT descriptions and traits are ready for major marketplaces like OpenSea."
            />
            <FeatureCard
              icon={<Layers className="h-8 w-8" />}
              title="Showcase Your Collection"
              description="Display your prized NFTs in a beautiful, modern gallery. Connect your wallet to see your collection come to life."
            />
            <FeatureCard
              icon={<Gem className="h-8 w-8" />}
              title="Powered by Alchemy"
              description="Leveraging the robust Alchemy API for seamless and reliable interaction with the Ethereum blockchain."
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Join the NFT Revolution?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you're an artist, a collector, or just curious, our platform provides the tools you need.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full">
              <Link href="/about">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
