import Header from "../components/Header";
import ConversionPanel from "../components/ConversionPanel";
import Footer from "../components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ConversionPanel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
