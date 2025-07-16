import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

interface FilterControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  solanaPayFilter: string;
  setSolanaPayFilter: (filter: string) => void;
  platformFilter: string;
  setPlatformFilter: (filter: string) => void;
  custodyFilter: string;
  setCustodyFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalWallets: number;
  oneTapWallets: number;
}

export default function FilterControls({
  searchTerm,
  setSearchTerm,
  solanaPayFilter,
  setSolanaPayFilter,
  platformFilter,
  setPlatformFilter,
  custodyFilter,
  setCustodyFilter,
  sortBy,
  setSortBy,
  totalWallets,
  oneTapWallets
}: FilterControlsProps) {
  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-lg mb-8">
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-primary-foreground/70" />
          <Input
            placeholder="Search wallets by name or Solana Pay notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70 focus:bg-white/20"
          />
        </div>

        {/* Filters and Sort */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Select value={solanaPayFilter} onValueChange={setSolanaPayFilter}>
            <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground">
              <SelectValue placeholder="Solana Pay Support" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="yes">Yes (One-tap)</SelectItem>
              <SelectItem value="partial">Partial</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>

          <Select value={platformFilter} onValueChange={setPlatformFilter}>
            <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="iOS">iOS</SelectItem>
              <SelectItem value="Android">Android</SelectItem>
              <SelectItem value="Web">Web</SelectItem>
              <SelectItem value="Chrome">Chrome</SelectItem>
              <SelectItem value="Firefox">Firefox</SelectItem>
              <SelectItem value="Brave">Brave</SelectItem>
              <SelectItem value="Desktop">Desktop</SelectItem>
              <SelectItem value="Hardware">Hardware</SelectItem>
            </SelectContent>
          </Select>

          <Select value={custodyFilter} onValueChange={setCustodyFilter}>
            <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground">
              <SelectValue placeholder="Custody Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Self-custody">Self-custody</SelectItem>
              <SelectItem value="Custodial">Custodial</SelectItem>
              <SelectItem value="MPC">MPC</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="solana-pay">Solana Pay Support</SelectItem>
              <SelectItem value="platforms">Platform Count</SelectItem>
            </SelectContent>
          </Select>

          {/* Stats */}
          <div className="flex flex-col justify-center">
            <div className="text-sm font-medium">
              Total Wallets: <Badge variant="secondary" className="ml-1">{totalWallets}</Badge>
            </div>
            <div className="text-sm font-medium">
              One-tap: <Badge variant="secondary" className="ml-1">{oneTapWallets}</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}