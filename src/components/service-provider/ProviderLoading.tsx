
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProviderLoading = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse h-6 w-40 bg-gray-200 rounded-md mx-auto mb-4"></div>
          <div className="animate-pulse h-4 w-60 bg-gray-200 rounded-md mx-auto"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProviderLoading;
