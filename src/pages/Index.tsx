import Header from '@/components/Header';
import DataStatus from '@/components/DataStatus';
import WalletGrid from '@/components/WalletGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <DataStatus />
        <WalletGrid />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
