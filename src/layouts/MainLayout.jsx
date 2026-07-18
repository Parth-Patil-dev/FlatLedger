import Navbar from "../components/layout/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100  text-black transition-colors duration-300">
      <Navbar />

      <main className="p-10">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;