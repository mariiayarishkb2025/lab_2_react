function Experience() {
  return (
    <section className="bg-white/85 backdrop-blur-md p-7 sm:p-9 rounded-[24px] border border-rose-200/60 shadow-lg shadow-rose-950/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/10 transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-rose-950 pb-3 mb-6 border-b border-rose-200/70">
        Практичні проєкти та досвід
      </h2>

      <div className="space-y-6">
        {/* Проєкт 1 */}
        <article className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-rose-900">
            Моделювання та захист корпоративної мережі
          </h3>
          <span className="inline-block text-xs font-semibold text-rose-700 bg-rose-100/80 border border-rose-200/80 px-3 py-1 rounded-full">
            Cisco Packet Tracer • VLAN • 802.1Q
          </span>
          <ul className="text-sm text-rose-950/85 space-y-2 pt-1">
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold select-none">✦</span>
              <span>Проєктування багаторівневої локальної мережі із сегментацією за допомогою VLAN.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold select-none">✦</span>
              <span>Налаштування міжвіланної маршрутизації (Router-on-a-Stick) та протоколу IEEE 802.1Q.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold select-none">✦</span>
              <span>Конфігурація списків контролю доступу (ACL) та протоколів безпеки для бездротових точок.</span>
            </li>
          </ul>
        </article>

        {/* Пунктирний роздільник */}
        <div className="border-t border-dashed border-rose-200" />

        {/* Проєкт 2 */}
        <article className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-rose-900">
            Проєктування та оптимізація реляційної бази даних
          </h3>
          <span className="inline-block text-xs font-semibold text-rose-700 bg-rose-100/80 border border-rose-200/80 px-3 py-1 rounded-full">
            MySQL • Реляційне моделювання • 3NF
          </span>
          <ul className="text-sm text-rose-950/85 space-y-2 pt-1">
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold select-none">✦</span>
              <span>Створення концептуальної та логічної схеми предметної області «Національний природний парк».</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold select-none">✦</span>
              <span>Нормалізація сутностей до 3-ї нормальної форми, налаштування первинних і зовнішніх ключів.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold select-none">✦</span>
              <span>Складання комплексних аналітичних SQL-запитів із фільтрацією та агрегацією.</span>
            </li>
          </ul>
        </article>

        {/* Пунктирний роздільник */}
        <div className="border-t border-dashed border-rose-200" />

        {/* Проєкт 3 */}
        <article className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-rose-900">
            Розробка алгоритмічних модулів та скриптів
          </h3>
          <span className="inline-block text-xs font-semibold text-rose-700 bg-rose-100/80 border border-rose-200/80 px-3 py-1 rounded-full">
            C# • Python • OOP
          </span>
          <ul className="text-sm text-rose-950/85 space-y-2 pt-1">
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold select-none">✦</span>
              <span>Реалізація структур даних, алгоритмів сортування та модулів логування.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-600 font-bold select-none">✦</span>
              <span>Написання Python-скриптів для взаємодії з БД та автоматизації рутинної обробки файлів.</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;
