'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Gem } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import * as React from 'react';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: 'https://www.alchemy.com/docs/how-to-create-an-nft', label: 'Docs', external: true },
  { href: '/create', label: 'Create' },
  { href: '/nfts', label: 'NFTs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contribute', label: 'Contribute' },
];


export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image
              src="/logo.png"
              alt="TokenTrove Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <Image
              src="/tokentrove.svg"
              alt="TokenTrove"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label, external }) => {
              const isActive = pathname === href;
              if (external) {
                return (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {label}
                  </Link>
                );
              }
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'transition-colors hover:text-foreground/80',
                    isActive ? 'text-foreground' : 'text-foreground/60'
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                    <Image
                      src="/logo.png"
                      alt="TokenTrove Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <Image
                      src="/tokentrove.svg"
                      alt="TokenTrove"
                      width={120}
                      height={32}
                      className="h-8 w-auto"
                    />
                </Link>
                <div className="my-4 h-px w-full bg-border" />
                <div className="flex flex-col space-y-4">
                    {navLinks.map(({ href, label, external }) => {
                        if (external) {
                           return <Link key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>{label}</Link>
                        }
                        return <Link key={href} href={href} className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>{label}</Link>
                    })}
                </div>
            </SheetContent>
        </Sheet>
        <Link className="flex items-center space-x-2 md:hidden" href="/">
            <Image
              src="/logo.png"
              alt="TokenTrove Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <Image
              src="/tokentrove.svg"
              alt="TokenTrove"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
        </Link>
      </div>
    </header>
  );
}