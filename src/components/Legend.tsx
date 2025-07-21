import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function Legend() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5" />
          Legend & Guide
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Solana Pay Status */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Solana Pay QR Compatibility</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <Badge variant="default" className="bg-solana-pay-yes text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                One-tap
              </Badge>
              <span className="text-sm text-muted-foreground">Instant QR scanning with minimal taps</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="default" className="bg-solana-pay-partial text-white">
                <Clock className="h-3 w-3 mr-1" />
                Buried
              </Badge>
              <span className="text-sm text-muted-foreground">QR support available but requires navigation</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="default" className="bg-solana-pay-no text-white">
                <XCircle className="h-3 w-3 mr-1" />
                No Support
              </Badge>
              <span className="text-sm text-muted-foreground">No QR code scanning capability</span>
            </div>
          </div>
        </div>

        {/* Data Quality Indicators */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Data Quality</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-green-500 text-green-700">
                Recently Tested
              </Badge>
              <span className="text-sm text-muted-foreground">Tested within last 30 days</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="border-orange-500 text-orange-700">
                Needs Testing
              </Badge>
              <span className="text-sm text-muted-foreground">Data may be outdated or incomplete</span>
            </div>
          </div>
        </div>

        {/* Platform Icons */}
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Platform Support</h4>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>📱 Mobile</span>
            <span>💻 Desktop</span>
            <span>🌐 Web</span>
            <span>📟 Hardware</span>
            <span>🔗 Browser Extension</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}