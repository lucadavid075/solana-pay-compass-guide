import { Badge } from '@/components/ui/badge';

export default function Header() {
  return (
    <header className="text-center mb-12 space-y-4">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Solana Wallet Explorer
        </h1>
      </div>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Explore Solana Supported wallets with detailed Solana Pay QR compatibility notes to help you choose the perfect wallet for seamless checkouts.
      </p>
    </header>
  );
}