import React from 'react';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <Nav />
      </header>

      <aside>
        <Aside />
      </aside>
      <main className="flex-1 ml-8">
        <Catalog />
        </main>

      <footer className="bg-white text-black p-5 mt-12 border-t border-gray-200">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
