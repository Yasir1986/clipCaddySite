import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main className="flex-1">
        {/* Your sections/components here */}
        <section className="p-8">
          <h1 className="text-3xl font-bold">
            ClipCaddy
          </h1>
          <p className="mt-2 text-slate-300">
            Smart Clipboard Manager
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
