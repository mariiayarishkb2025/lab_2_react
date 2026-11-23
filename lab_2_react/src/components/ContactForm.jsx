import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-rose-200 dark:border-rose-900">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-5 text-2xl font-bold text-rose-900 dark:text-rose-300"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-rose-950 dark:text-rose-100 mb-4">Зворотний зв'язок</h2>
        <form action="https://formspree.io/f/meagpkeb" method="POST" className="space-y-3">
          <input required type="text" name="name" placeholder="Ім'я" className="w-full px-3 py-2 text-sm rounded-lg border border-rose-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
          <input required type="email" name="email" placeholder="Email" className="w-full px-3 py-2 text-sm rounded-lg border border-rose-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
          <input required type="tel" name="phone" placeholder="Номер телефону" className="w-full px-3 py-2 text-sm rounded-lg border border-rose-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white" />
          <textarea required rows="3" name="message" placeholder="Повідомлення" className="w-full px-3 py-2 text-sm rounded-lg border border-rose-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"></textarea>
          <button type="submit" className="w-full bg-rose-700 hover:bg-rose-800 text-white font-semibold py-2.5 rounded-xl">
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;