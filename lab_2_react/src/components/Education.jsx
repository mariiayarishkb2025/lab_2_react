function Education() {
  return (
    <section className="bg-white/85 backdrop-blur-md p-7 sm:p-9 rounded-[24px] border border-rose-200/60 shadow-lg shadow-rose-950/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/10 transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-rose-950 pb-3 mb-4 border-b border-rose-200/70">
        Освіта
      </h2>
      <article className="space-y-2">
        <h3 className="text-base sm:text-lg font-bold text-rose-900">
          <a 
            href="https://lpnu.ua" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-rose-700 hover:underline transition-colors"
          >
            НУ «Львівська політехніка»
          </a>
        </h3>
        <span className="inline-block text-xs font-semibold text-rose-700 bg-rose-100/80 border border-rose-200/80 px-3 py-1 rounded-full">
          2025 – 2029 • Бакалаврат
        </span>
        <p className="text-sm text-rose-950/85">
          <strong>Інститут комп'ютерних технологій, автоматики та метрології</strong><br />
          Спеціальність: «Кібербезпека та захист інформації».
        </p>
        <p className="text-xs sm:text-sm text-rose-900/75 pt-1">
          Основний фокус: комп'ютерні мережі, операційні системи (Linux, Windows Server), основи криптографії, реляційні бази даних та об'єктно-орієнтоване програмування.
        </p>
      </article>
    </section>
  );
}

export default Education;
