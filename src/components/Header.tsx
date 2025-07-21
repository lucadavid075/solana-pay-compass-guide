import { Badge } from '@/components/ui/badge';

export default function Header() {
  return (
    <header className="text-center mb-12 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
          Solana Wallet Explorer
        </h1>
        <Badge variant="outline" className="border-primary text-primary text-sm">
          Living Reference • Community Driven
        </Badge>
      </div>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        A comprehensive, up-to-date catalog of Solana wallets with detailed Solana Pay QR compatibility testing to help merchants and users choose the perfect wallet for seamless transactions.
      </p>
    </header>
  );
}