import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Code, ShieldCheck, Gem, Package, Link2, Puzzle } from 'lucide-react';
import Image from 'next/image';
import PageWrapper from '@/components/page-wrapper';

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto max-w-4xl py-12 md:py-16 px-4">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              About NFTs & Blockchain
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Understanding the technology behind digital ownership.
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-6 w-6 text-primary" />
                What is an NFT?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                A Non-Fungible Token (NFT) is a unique digital identifier that is recorded on a blockchain and is used to certify ownership and authenticity. It cannot be copied, substituted, or subdivided.
              </p>
              <p>
                Think of it like a digital certificate of ownership for a unique item, whether that's a piece of art, a collectible, a virtual item in a game, or even a ticket to an event. Because it's on a blockchain, the record of ownership is transparent and secure.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold flex items-center gap-2">
                <Link2 className="h-7 w-7 text-primary" /> What is a Blockchain?
              </h2>
              <p className="text-muted-foreground">
                A blockchain is a decentralized, distributed, and oftentimes public, digital ledger consisting of records called blocks that is used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks.
              </p>
              <p className="text-muted-foreground">
                This technology ensures the security and integrity of data, making it ideal for things like cryptocurrencies and NFTs where trust and transparency are paramount.
              </p>
            </div>
            <div>
              <Image
                src="/blockchain image.png"
                alt="Blockchain illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="blockchain technology"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/NFT Gallery image.png"
                alt="NFT Gallery Illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="art gallery"
              />
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold flex items-center gap-2">
                <Puzzle className="h-7 w-7 text-primary" /> What is an NFT Gallery?
              </h2>
              <p className="text-muted-foreground">
                An NFT gallery is a digital space where you can view and showcase Non-Fungible Tokens. Our gallery feature connects directly to the Ethereum blockchain using an address you provide (like an ENS name or a wallet address).
              </p>
              <p className="text-muted-foreground">
                It fetches the NFTs owned by that address and displays them in an interactive 3D carousel, allowing you to explore collections in a visually engaging way.
              </p>
            </div>
          </div>
          
          <Card>
              <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                      <Gem className="h-6 w-6 text-primary" />
                      Why are they valuable?
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                      The value of an NFT comes from its uniqueness and the proof of ownership. For digital art, it allows collectors to own the "original" piece, much like owning the original Mona Lisa painting instead of just a print. This scarcity, combined with demand from collectors and investors, is what gives an NFT its value.
                  </p>
              </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
