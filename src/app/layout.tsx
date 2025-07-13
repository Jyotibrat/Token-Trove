import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { LoadingScreen } from '@/components/loading-screen';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ViewTransitions } from 'next-view-transitions';
import { ChatBot } from '@/components/chat-bot';

export const metadata: Metadata = {
  title: 'TokenTrove',
  description: 'Create and display NFTs using Alchemy API',
  icons: {
    icon: '/logo.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="font-body antialiased bg-background text-foreground flex flex-col min-h-screen">
          <LoadingScreen />
          <Header />
            <main className="flex-1">{children}</main>
          <Footer />
          <ChatBot />
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  );
}