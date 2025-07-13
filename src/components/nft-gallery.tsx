'use client';

import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import type { AlchemyNft } from '@/lib/types';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Search, ServerCrash, PackageOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

function NftCard({ nft }: { nft: AlchemyNft }) {
  const imageUrl =
    nft.image?.cachedUrl ||
    nft.image?.originalUrl ||
    'https://placehold.co/500x500.png';
  const detailUrl = `/gallery/${nft.contract.address}/${nft.tokenId}`;

  return (
    <Link href={detailUrl}>
      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={imageUrl}
              alt={nft.name || 'NFT Image'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4 border-t">
            <h3 className="font-bold text-lg truncate" title={nft.name || `#${nft.tokenId}`}>
              {nft.name || `#${nft.tokenId}`}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {nft.contract.name || 'Unknown Collection'}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function NftGridSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i}>
                    <CardContent className="p-0">
                        <Skeleton className="aspect-square w-full" />
                        <div className="p-4 space-y-2">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export function NftGallery() {
  const [ownerAddress, setOwnerAddress] = useState('boredapeyachtclub.eth');
  const [nfts, setNfts] = useState<AlchemyNft[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

  const fetchNfts = useCallback(async (address: string) => {
    if (!apiKey) {
      setError('API key not found.');
      setIsLoading(false);
      return;
    }
    if (!address) {
      setNfts([]);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTsForOwner?owner=${address}&withMetadata=true&pageSize=24`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch NFTs.');
      }
      const data = await response.json();
      setNfts(data.ownedNfts.filter((nft: AlchemyNft) => nft.image?.cachedUrl || nft.image?.originalUrl));
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      toast({
        title: 'Error',
        description: err.message || 'Failed to fetch NFTs. Please check the address and try again.',
        variant: 'destructive',
      });
      setNfts([]);
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, toast]);

  useEffect(() => {
    fetchNfts(ownerAddress);
  }, [fetchNfts]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchNfts(ownerAddress);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
          Explore the Gallery
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Enter an Ethereum wallet address or ENS name to view its NFT collection.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-lg w-full mx-auto">
        <Input
          value={ownerAddress}
          onChange={(e) => setOwnerAddress(e.target.value)}
          placeholder="Enter wallet address or ENS name"
          disabled={isLoading}
          className="text-base"
        />
        <Button type="submit" disabled={isLoading} size="lg">
          <Search className="h-4 w-4" />
          <span className="ml-2">Search</span>
        </Button>
      </form>
      
      <div className="mt-12">
        {isLoading ? (
          <NftGridSkeleton />
        ) : error ? (
          <Alert variant="destructive" className="max-w-md mx-auto">
            <ServerCrash className="h-4 w-4" />
            <AlertTitle>Error Fetching NFTs</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : nfts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {nfts.map((nft) => (
                <NftCard key={`${nft.contract.address}-${nft.tokenId}`} nft={nft} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <PackageOpen className="mx-auto h-16 w-16 text-muted-foreground" />
            <h2 className="mt-4 text-2xl font-bold">No NFTs Found</h2>
            <p className="mt-2 text-muted-foreground">This address doesn't own any NFTs with images, or the collection is not on Ethereum Mainnet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
