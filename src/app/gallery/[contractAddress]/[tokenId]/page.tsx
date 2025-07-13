import { NftDetail } from '@/components/nft-detail';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function NftDetailPage({
  params,
}: {
  params: { contractAddress: string; tokenId: string };
}) {
  return (
    <div className="container mx-auto max-w-4xl py-8 md:py-12">
      <Suspense fallback={<NftDetailSkeleton />}>
        <NftDetail
          contractAddress={params.contractAddress}
          tokenId={params.tokenId}
        />
      </Suspense>
    </div>
  );
}

function NftDetailSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      <Skeleton className="aspect-square w-full rounded-lg" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-20 w-full" />
        <div className="space-y-2">
            <Skeleton className="h-6 w-1/2" />
            <div className="flex flex-wrap gap-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-20" />
            </div>
        </div>
        <Skeleton className="h-10 w-40" />
      </div>
    </div>
  );
}
