import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;