'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { useNftStore } from "@/hooks/use-nft-store";
import { useEffect, useState } from "react";
import { PackageOpen } from "lucide-react";
import PageWrapper from "@/components/page-wrapper";

export default function NftsPage() {
  const { nfts } = useNftStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return null; 
  }

  return (
    <PageWrapper>
      <div className="container mx-auto py-12 md:py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
            Created NFTs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of NFTs simulated as created through this platform.
          </p>
        </div>

        {nfts.length === 0 ? (
          <div className="text-center py-16">
            <PackageOpen className="mx-auto h-16 w-16 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-bold">No NFTs Created Yet</h2>
            <p className="mt-2 text-muted-foreground">Go to the 'Create' page to mint your first NFT!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nfts.map((nft, index) => (
              <Card key={index} className="overflow-hidden group">
                <CardContent className="p-0">
                    <div className="aspect-square relative">
                        <Image
                            src={nft.imageUrl}
                            alt={nft.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint="nft image"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg truncate">{nft.name}</h3>
                        <p className="text-sm text-muted-foreground">by You</p>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
