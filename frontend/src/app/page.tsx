import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80')",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                CONNECTING HEARTS,
                <br />
                CREATING SMILES.
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                Your support builds a brighter, connected future for children
                worldwide.
              </p>
              <Link
                href="/donate"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                JOIN US (DONATE)
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
