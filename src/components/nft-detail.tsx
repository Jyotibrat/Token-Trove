import type { AlchemyNft } from '@/lib/types';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, GalleryVertical, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

async function getNftMetadata(
  contractAddress: string,
  tokenId: string
): Promise<AlchemyNft> {
  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  if (!apiKey) {
    throw new Error('Alchemy API key not configured');
  }
  const url = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch NFT metadata');
  }
  const data = await response.json();
  return data;
}

interface NftDetailProps {
  contractAddress: string;
  tokenId: string;
}

export async function NftDetail({ contractAddress, tokenId }: NftDetailProps) {
  try {
    const nft = await getNftMetadata(contractAddress, tokenId);
    const imageUrl =
      nft.image?.cachedUrl ||
      nft.image?.originalUrl ||
      'https://placehold.co/600x600.png';
    const openSeaUrl = `https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`;

    return (
      <Card className="overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3">
            <div className="aspect-square w-full relative">
              <Image
                src={imageUrl}
                alt={nft.name || 'NFT Image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                data-ai-hint="nft image"
              />
            </div>
          </div>
          <div className="md:col-span-2 p-6 flex flex-col">
            <div className="flex-grow">
              <h1 className="font-headline text-3xl font-bold tracking-tight mb-2">
                {nft.name || `#${nft.tokenId}`}
              </h1>
              <p className="text-muted-foreground text-sm mb-4">
                Owned by a very cool person.
              </p>
              <p className="text-foreground leading-relaxed">
                {nft.description}
              </p>

              {nft.raw?.metadata?.attributes &&
                nft.raw.metadata.attributes.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-bold font-headline mb-3">
                      Attributes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {nft.raw.metadata.attributes.map((attr, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="font-normal text-sm"
                        >
                          <span className="font-semibold mr-1.5 capitalize">
                            {attr.trait_type}:
                          </span>
                          {attr.value}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
            </div>
            <div className="mt-6 space-y-3">
              <Button asChild size="lg" className="w-full">
                <a href={openSeaUrl} target="_blank" rel="noopener noreferrer">
                  View on OpenSea
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/gallery">
                  Back to Gallery
                  <GalleryVertical className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  } catch (error) {
    const err = error as Error;
    return (
      <Alert variant="destructive">
        <Info className="h-4 w-4" />
        <AlertTitle>Error fetching NFT details</AlertTitle>
        <AlertDescription>
          {err.message ||
            'There was a problem fetching the details for this NFT. It might be on a different network or the data is currently unavailable.'}
        </AlertDescription>
      </Alert>
    );
  }
}
