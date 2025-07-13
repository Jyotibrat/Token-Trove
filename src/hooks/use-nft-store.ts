import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Nft {
  name: string;
  imageUrl: string;
  creator: string;
}

interface NftStoreState {
  nfts: Nft[];
  addNft: (nft: Nft) => void;
}

export const useNftStore = create<NftStoreState>()(
  persist(
    (set) => ({
      nfts: [],
      addNft: (nft) => set((state) => ({ nfts: [...state.nfts, nft] })),
    }),
    {
      name: 'nft-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
