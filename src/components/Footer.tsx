import { ExternalLink, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-8 pb-6">
      <div className="space-y-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            Data last updated: July 16, 2025
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://solana.com/solana-wallets"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Solana Wallets</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/solana-labs/solana-pay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Solana Pay GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://twitter.com/intent/tweet?text=Check out this comprehensive Solana Wallet Reference with Solana Pay QR compatibility notes!&url="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Built for the Solana community • 
            <span className="text-primary"> Wallet logos © respective wallet providers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}