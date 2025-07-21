import { Badge } from '@/components/ui/badge';
import { Clock, Calendar, Database } from 'lucide-react';

export default function DataStatus() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const oneTapCount = 12; // This should be calculated from the actual data
  const totalWallets = 22; // This should be calculated from the actual data

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
      <Badge variant="secondary" className="flex items-center gap-2">
        <Calendar className="h-3 w-3" />
        Last Updated: {lastUpdated}
      </Badge>
      
      <Badge variant="secondary" className="flex items-center gap-2">
        <Database className="h-3 w-3" />
        {totalWallets} Wallets Catalogued
      </Badge>
      
      <Badge variant="default" className="bg-solana-pay-yes text-white flex items-center gap-2">
        <Clock className="h-3 w-3" />
        {oneTapCount} One-tap Compatible
      </Badge>
    </div>
  );
}