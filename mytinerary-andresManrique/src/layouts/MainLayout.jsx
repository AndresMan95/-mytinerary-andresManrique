import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Capa de fondo que incluye la imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/src/assets/hero-image.jpg")' // Asegúrate de ajustar este valor según lo que desees
        }}
      />
      {/* Capa oscura para dar contraste */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Contenedor principal */}
      <div className="flex flex-col min-h-screen relative z-10">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
