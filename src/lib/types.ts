export interface AlchemyNft {
  tokenId: string;
  name: string;
  description: string;
  image: {
    cachedUrl: string;
    thumbnailUrl: string;
    pngUrl: string;
    contentType: string;
    size: number;
    originalUrl: string;
  };
  contract: {
    address: string;
    name?: string;
  };
  raw: {
    metadata: {
      attributes?: {
        trait_type: string;
        value: string;
      }[];
    };
  };
}
