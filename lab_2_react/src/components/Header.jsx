function Header() {
  return (
    <header className="text-center bg-gradient-to-br from-rose-950 via-rose-900 to-rose-700 text-white p-8 sm:p-10 rounded-3xl shadow-xl shadow-rose-950/20 border border-rose-800/40">
      <span className="inline-block text-xs uppercase tracking-widest text-rose-200 font-semibold mb-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
        Портфоліо • CV
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
        Марія Яріш
      </h1>
      <p className="text-rose-200 text-base sm:text-lg mb-6">
        Фахівець з кібербезпеки та веброзробник
      </p>
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        <span className="bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
          Львів, Україна
        </span>
        <a
          href="mailto:mariia.yarish.kb.2025@lpnu.ua"
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 transition-all font-medium"
        >
          mariia.yarish.kb.2025@lpnu.ua
        </a>
        <a
          href="https://github.com/mariiayarishkb2025"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-900/80 hover:bg-rose-800 px-4 py-1.5 rounded-full border border-rose-600/50 transition-all font-medium"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
export default Header;