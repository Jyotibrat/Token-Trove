import { NftCreationForm } from '@/components/nft-creation-form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TriangleAlert } from 'lucide-react';
import PageWrapper from '@/components/page-wrapper';

export default function CreateNftPage() {
  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

  return (
    <PageWrapper>
      <div className="container mx-auto max-w-2xl py-8 md:py-12">
        {!apiKey && (
          <Alert variant="destructive" className="mb-8">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Configuration Error</AlertTitle>
            <AlertDescription>
              Alchemy API key is not configured. Please add{' '}
              <code className="font-code rounded bg-muted px-1 py-0.5">NEXT_PUBLIC_ALCHEMY_API_KEY</code>{' '}
              to your <code className="font-code rounded bg-muted px-1 py-0.5">.env</code> file.
            </AlertDescription>
          </Alert>
        )}
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Create a New NFT</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Fill out the details below to mint your unique digital asset.
            </p>
          </div>
          <NftCreationForm />
        </div>
      </div>
    </PageWrapper>
  );
}
