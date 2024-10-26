import ContactUs from "@/components/ContactUs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <div className="flex min-h-screen flex-col items-center bg-blue-900">
        {/* Header Section */}
        <section className="py-10 text-center text-white">
          <h1 className="text-3xl font-bold md:text-4xl">
            MAKING GAMES SINCE 2008
          </h1>
        </section>

        {/* Stats Section */}
        <section className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 rounded-lg bg-blue-800 px-4 py-8 md:grid-cols-5">
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-2 text-6xl">🏆</div>
            <h2 className="text-lg font-bold">Fortune 500</h2>
            <p className="text-sm">03</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-2 text-6xl">🦄</div>
            <h2 className="text-lg font-bold">Unicorns</h2>
            <p className="text-sm">09</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-2 text-6xl">📲</div>
            <h2 className="text-lg font-bold">Downloads</h2>
            <p className="text-sm">150M+</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-2 text-6xl">🚀</div>
            <h2 className="text-lg font-bold">Completed Projects</h2>
            <p className="text-sm">500+</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <div className="mb-2 text-6xl">🏅</div>
            <h2 className="text-lg font-bold">Multiple Games in</h2>
            <p className="text-sm">Top 10</p>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="mx-auto mt-8 w-full max-w-6xl bg-white px-4 py-10 text-center">
          <h2 className="text-2xl font-bold text-blue-900">WHY TINTASH</h2>
          <p className="mt-2 text-gray-600">
            Your success is important to us. We are a reliable partner with 15+
            years of hands-on experience maintaining games after the release.
          </p>

          {/* Features Cards */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-blue-50 p-6 text-center shadow-md"
              >
                <h3 className="text-lg font-semibold text-blue-900">
                  TRANSPARENT COMMUNICATION
                </h3>
                <p className="mt-2 text-gray-500">
                  Unlock the power of seamless game creation with our
                  comprehensive suite of development services.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Testimonials />
      <ContactUs />
    </>
  );
}
