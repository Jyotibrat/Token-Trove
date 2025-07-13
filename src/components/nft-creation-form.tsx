'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import { useNftStore } from '@/hooks/use-nft-store';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  description: z.string().min(1, 'Description is required.'),
  imageUrl: z.string().url('Please enter a valid URL.').or(z.literal('')),
  traits: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function NftCreationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { addNft } = useNftStore();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      imageUrl: '',
      traits: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    addNft({
      name: values.name,
      imageUrl: values.imageUrl || `https://placehold.co/500x500.png?text=${encodeURIComponent(values.name)}`,
      creator: "You"
    });

    toast({
      title: 'Success!',
      description: `NFT "${values.name}" has been (simulated) created.`,
      className: 'bg-green-500 text-white',
    });
    
    form.reset();
    setIsLoading(false);
  }

  return (
    <>
      <Card className="border-2 border-primary/20 shadow-lg shadow-primary/10">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="My Awesome NFT #1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="A brief description of your NFT." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.png" {...field} />
                    </FormControl>
                    <FormDescription>
                      If left blank, a placeholder image will be generated.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="traits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Traits</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Cool, Rare, Blue" {...field} />
                    </FormControl>
                    <FormDescription>
                      Comma-separated list of traits.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg" className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Create NFT
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
