import { useMemo, useState } from 'react';
import WalletCard from './WalletCard';
import FilterControls from './FilterControls';
import walletsData from '@/data/wallets.json';

interface Wallet {
  wallet_name: string;
  platforms: string[];
  custody_model: string;
  in_app_dex_swap: string;
  nft_gallery: string;
  in_app_staking: string;
  fiat_on_ramp: string;
  fiat_off_ramp: string;
  push_notifications: string;
  solana_pay_qr: string;
  solana_pay_ux_notes: string;
  version_tested: string;
  date_tested: string;
  additional_features: {
    hardware_wallet_integration: string;
    dapp_browser: string;
    security_features: string;
    multi_chain_support: string;
    open_source: string;
    user_interface: string;
  };
}

const getSolanaPayStatus = (qrSupport: string, notes: string) => {
  if (qrSupport.toLowerCase() === 'yes') {
    if (notes.includes('one-tap') || notes.includes('seamless')) {
      return 'Yes';
    }
    return 'Partial';
  }
  return 'No';
};

const getSolanaPaySortValue = (qrSupport: string, notes: string) => {
  const status = getSolanaPayStatus(qrSupport, notes);
  switch (status) {
    case 'Yes': return 3;
    case 'Partial': return 2;
    case 'No': return 1;
    default: return 0;
  }
};

export default function WalletGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [solanaPayFilter, setSolanaPayFilter] = useState('all');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [custodyFilter, setCustodyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const wallets = walletsData.wallets as Wallet[];

  const filteredAndSortedWallets = useMemo(() => {
    let filtered = wallets.filter((wallet) => {
      // Search filter
      const searchMatch = searchTerm === '' || 
        wallet.wallet_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        wallet.solana_pay_ux_notes.toLowerCase().includes(searchTerm.toLowerCase());

      // Solana Pay filter
      const solanaPayStatus = getSolanaPayStatus(wallet.solana_pay_qr, wallet.solana_pay_ux_notes);
      const solanaPayMatch = solanaPayFilter === 'all' || 
        (solanaPayFilter === 'yes' && solanaPayStatus === 'Yes') ||
        (solanaPayFilter === 'partial' && solanaPayStatus === 'Partial') ||
        (solanaPayFilter === 'no' && solanaPayStatus === 'No');

      // Platform filter
      const platformMatch = platformFilter === 'all' || 
        wallet.platforms.includes(platformFilter);

      // Custody filter
      const custodyMatch = custodyFilter === 'all' || 
        wallet.custody_model === custodyFilter;

      return searchMatch && solanaPayMatch && platformMatch && custodyMatch;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.wallet_name.localeCompare(b.wallet_name);
        case 'solana-pay':
          return getSolanaPaySortValue(b.solana_pay_qr, b.solana_pay_ux_notes) - 
                 getSolanaPaySortValue(a.solana_pay_qr, a.solana_pay_ux_notes);
        case 'platforms':
          return b.platforms.length - a.platforms.length;
        default:
          return 0;
      }
    });

    return filtered;
  }, [wallets, searchTerm, solanaPayFilter, platformFilter, custodyFilter, sortBy]);

  const oneTapWallets = useMemo(() => {
    return wallets.filter(wallet => 
      getSolanaPayStatus(wallet.solana_pay_qr, wallet.solana_pay_ux_notes) === 'Yes'
    ).length;
  }, [wallets]);

  return (
    <div>
      <FilterControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        solanaPayFilter={solanaPayFilter}
        setSolanaPayFilter={setSolanaPayFilter}
        platformFilter={platformFilter}
        setPlatformFilter={setPlatformFilter}
        custodyFilter={custodyFilter}
        setCustodyFilter={setCustodyFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        totalWallets={filteredAndSortedWallets.length}
        oneTapWallets={oneTapWallets}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedWallets.map((wallet) => (
          <WalletCard key={wallet.wallet_name} wallet={wallet} />
        ))}
      </div>

      {filteredAndSortedWallets.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No wallets found matching your criteria.</p>
          <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
}