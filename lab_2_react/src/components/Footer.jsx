import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState(null);

  useEffect(() => {
    const info = {
      platform: navigator.platform,
      userAgent: navigator.userAgent
    };
    localStorage.setItem('react_sys_info', JSON.stringify(info));
    setSysInfo(JSON.parse(localStorage.getItem('react_sys_info')));
  }, []);

  return (
    <footer className="text-center py-6 text-xs sm:text-sm text-rose-800/80 dark:text-rose-200/80">
      <p>&copy; 2026 Марія Яріш • Лабораторна робота №4 (Розгорнуто на Vercel)</p>
      {sysInfo && (
        <div className="mt-3 pt-3 border-t border-rose-200/60 dark:border-rose-900/40 text-[11px] break-all">
          <span><strong>ОС:</strong> {sysInfo.platform}</span> | <span><strong>Браузер:</strong> {sysInfo.userAgent}</span>
        </div>
      )}
    </footer>
  );
}

export default Footer;