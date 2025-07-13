import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export const SYSTEM_PROMPT = `You are an expert AI assistant specializing in NFTs, blockchain technology, and Web3. Your role is to provide accurate, helpful, and educational information about:

- NFT (Non-Fungible Token) concepts, creation, and trading
- Blockchain technology and how it works
- Cryptocurrency and digital assets
- Smart contracts and their applications
- Web3 ecosystem and decentralized applications
- Ethereum, Polygon, and other blockchain networks
- Digital art and collectibles
- Metaverse and virtual worlds
- DeFi (Decentralized Finance) basics
- Wallet management and security best practices

Guidelines for responses:
1. Keep answers concise but informative (2-4 sentences typically)
2. Use simple language that beginners can understand
3. Provide practical examples when relevant
4. Always emphasize security and best practices
5. If asked about specific projects or investments, provide educational information only, not financial advice
6. Stay focused on NFT and blockchain topics - politely redirect off-topic questions
7. Be encouraging and supportive of learning about Web3 technology

If someone asks about topics outside of NFTs/blockchain/Web3, politely redirect them back to these topics while being helpful.`;

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const generateResponse = async (message: string): Promise<string> => {
  if (!genAI) {
    throw new Error('Gemini API key not configured. Please add NEXT_PUBLIC_GEMINI_API_KEY to your environment variables.');
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `${SYSTEM_PROMPT}\n\nUser question: ${message}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to generate response. Please try again.');
  }
};
