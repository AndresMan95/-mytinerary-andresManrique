function HeroSection() {
  return (
    <section className="relative w-full h-80">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Capa oscura */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-4xl font-bold">MyTinerary</h1>
        <p className="mt-4 text-xl p-10">Find your perfect trip, designed by insiders who know and love their cities!</p>
      </div>
    </section>
  );
}

export default HeroSection;
