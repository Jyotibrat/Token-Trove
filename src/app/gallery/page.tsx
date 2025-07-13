import { NftGallery } from '@/components/nft-gallery';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TriangleAlert } from 'lucide-react';
import PageWrapper from '@/components/page-wrapper';

export default function GalleryPage() {
  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

  return (
    <PageWrapper>
      <div className="container mx-auto py-12 px-4">
        {apiKey ? (
          <NftGallery />
        ) : (
          <Alert variant="destructive" className="max-w-md mx-auto">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Configuration Error</AlertTitle>
            <AlertDescription>
              Alchemy API key is not configured. Please add{' '}
              <code className="font-code rounded bg-muted px-1 py-0.5">NEXT_PUBLIC_ALCHEMY_API_KEY</code>{' '}
              to your <code className="font-code rounded bg-muted px-1 py-0.5">.env</code> file to use the gallery.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </PageWrapper>
  );
}
