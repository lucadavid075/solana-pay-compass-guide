import { Badge } from '@/components/ui/badge';

export default function Header() {
  return (
    <header className="text-center mb-12 space-y-4">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Solana Wallet Reference
        </h1>
        <div className="flex justify-center">
          <Badge variant="outline" className="text-primary border-primary">
            Living Reference
          </Badge>
        </div>
      </div>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Explore 27+ Solana wallets with detailed Solana Pay QR compatibility notes to help builders, merchants, and users choose the perfect wallet for seamless checkouts.
      </p>
    </header>
  );
}