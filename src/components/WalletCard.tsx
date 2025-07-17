import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight, Smartphone, Monitor, Globe, HardDrive, Chrome, CreditCard, Zap, PiggyBank, Coins, Bell, Eye, Shield } from 'lucide-react';

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
  solana_pay_access: string;
  version_tested: string;
  date_tested: string;
  additional_features: {
    hardware_wallet_integration: string;
    dapp_browser: string;
    security_features: string;
    multi_chain_support: string;
    open_source: string;
    user_interface: string;
    solana_pay_ux_notes: string;
  };
}

interface WalletCardProps {
  wallet: Wallet;
}

const getPlatformIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'ios':
    case 'android':
      return <Smartphone className="h-4 w-4" />;
    case 'chrome':
    case 'firefox':
    case 'brave':
      return <Chrome className="h-4 w-4" />;
    case 'web':
      return <Globe className="h-4 w-4" />;
    case 'desktop':
      return <Monitor className="h-4 w-4" />;
    case 'hardware':
      return <HardDrive className="h-4 w-4" />;
    default:
      return <Globe className="h-4 w-4" />;
  }
};

const getSolanaPayBadgeColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'yes':
      return 'bg-solana-pay-yes text-black';
    case 'partial':
      return 'bg-solana-pay-partial text-black';
    case 'no':
      return 'bg-solana-pay-no text-white';
    default:
      return 'bg-muted';
  }
};

const getSolanaPayStatus = (qrSupport: string, notes: string = '') => {
  if (qrSupport.toLowerCase() === 'yes') {
    if (notes.includes('one-tap') || notes.includes('seamless')) {
      return 'Yes';
    }
    return 'Partial';
  }
  return 'No';
};

export default function WalletCard({ wallet }: WalletCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const solanaPayStatus = getSolanaPayStatus(wallet.solana_pay_qr, wallet.additional_features.solana_pay_ux_notes || '');

  return (
    <div className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 bg-card border-border">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg font-semibold text-card-foreground">
              {wallet.wallet_name}
            </CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge 
                    className={`${getSolanaPayBadgeColor(solanaPayStatus)} font-medium transition-colors`}
                  >
                    {solanaPayStatus}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="text-sm">{wallet.additional_features.solana_pay_ux_notes || 'No additional notes available'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Platforms</p>
              <div className="flex flex-wrap gap-1">
                {wallet.platforms.map((platform) => (
                  <Badge key={platform} variant="outline" className="text-xs">
                    <span className="mr-1">{getPlatformIcon(platform)}</span>
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Custody Model</p>
              <Badge variant="secondary" className="text-xs">
                <Shield className="h-3 w-3 mr-1" />
                {wallet.custody_model}
              </Badge>
            </div>
            
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Key Features</p>
              <div className="flex flex-wrap gap-1">
                {wallet.in_app_dex_swap === 'Yes' && (
                  <Badge variant="outline" className="text-xs">
                    <Zap className="h-3 w-3 mr-1" />
                    DEX
                  </Badge>
                )}
                {wallet.nft_gallery === 'Yes' && (
                  <Badge variant="outline" className="text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    NFT
                  </Badge>
                )}
                {wallet.in_app_staking === 'Yes' && (
                  <Badge variant="outline" className="text-xs">
                    <Coins className="h-3 w-3 mr-1" />
                    Stake
                  </Badge>
                )}
                {wallet.fiat_on_ramp === 'Yes' && (
                  <Badge variant="outline" className="text-xs">
                    <CreditCard className="h-3 w-3 mr-1" />
                    Buy
                  </Badge>
                )}
                {wallet.fiat_off_ramp === 'Yes' && (
                  <Badge variant="outline" className="text-xs">
                    <PiggyBank className="h-3 w-3 mr-1" />
                    Sell
                  </Badge>
                )}
                {wallet.push_notifications === 'Yes' && (
                  <Badge variant="outline" className="text-xs">
                    <Bell className="h-3 w-3 mr-1" />
                    Notify
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                View Details
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl">{wallet.wallet_name} Details</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Solana Pay QR Support</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getSolanaPayBadgeColor(solanaPayStatus)}>
                      {solanaPayStatus}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{wallet.additional_features.solana_pay_ux_notes || 'No additional notes available'}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Additional Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-medium">Hardware Wallet Integration</p>
                      <p className="text-sm text-muted-foreground">{wallet.additional_features.hardware_wallet_integration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">DApp Browser</p>
                      <p className="text-sm text-muted-foreground">{wallet.additional_features.dapp_browser}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Security Features</p>
                      <p className="text-sm text-muted-foreground">{wallet.additional_features.security_features}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Multi-chain Support</p>
                      <p className="text-sm text-muted-foreground">{wallet.additional_features.multi_chain_support}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Open Source</p>
                      <p className="text-sm text-muted-foreground">{wallet.additional_features.open_source}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">User Interface</p>
                      <p className="text-sm text-muted-foreground">{wallet.additional_features.user_interface}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Testing Information</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-sm font-medium">Version Tested</p>
                      <p className="text-sm text-muted-foreground">{wallet.version_tested}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Date Tested</p>
                      <p className="text-sm text-muted-foreground">{wallet.date_tested}</p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}