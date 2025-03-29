
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-primary/10 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl font-bold mb-4">About ConnectPro</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Connecting Peshawar's finest service providers with clients seeking quality services.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  ConnectPro was founded with a clear mission: to bridge the gap between local service providers in Peshawar and clients looking for quality services. We believe in supporting local businesses while providing clients with easy access to the services they need.
                </p>
                <p className="text-gray-600 mb-6">
                  Our platform makes it simple for service providers to showcase their skills and for clients to find the perfect match for their needs, all in one place.
                </p>
                <Button asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/40 to-secondary/40 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-medium">ConnectPro Mission</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Local Community</h3>
                <p className="text-gray-600">
                  We're committed to supporting local businesses and professionals in Peshawar, helping them grow and thrive.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Quality Service</h3>
                <p className="text-gray-600">
                  We ensure all service providers on our platform meet high standards of professionalism and quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
                <p className="text-gray-600">
                  We continuously improve our platform to better connect service providers with clients in the most efficient way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Join ConnectPro Today</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Whether you're a service provider looking to expand your client base or a client searching for quality services in Peshawar, ConnectPro is the platform for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/signup">Create an Account</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
