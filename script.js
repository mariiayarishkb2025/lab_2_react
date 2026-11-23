document.addEventListener('DOMContentLoaded', () => {
  const systemData = {
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    language: navigator.language
  };
  localStorage.setItem('userSystemInfo', JSON.stringify(systemData));

  const storedData = JSON.parse(localStorage.getItem('userSystemInfo'));
  const footerBox = document.getElementById('system-info');
  if (footerBox && storedData) {
    footerBox.innerHTML = `
      <strong>ОС:</strong> ${storedData.platform} | <strong>Мова:</strong> ${storedData.language}<br>
      <strong>Браузер:</strong> ${storedData.userAgent}
    `;
  }

  const reviewsList = document.getElementById('reviews-list');
  fetch('https://jsonplaceholder.typicode.com/posts/27/comments')
    .then(res => res.json())
    .then(comments => {
      reviewsList.innerHTML = '';
      comments.forEach(comment => {
        const item = document.createElement('article');
        item.className = 'review-item';
        item.innerHTML = `
          <div class="review-author">${comment.name}</div>
          <div class="review-email">${comment.email}</div>
          <p>${comment.body}</p>
        `;
        reviewsList.appendChild(item);
      });
    })
    .catch(() => {
      reviewsList.innerHTML = '<p>Помилка завантаження відгуків.</p>';
    });

  const modal = document.getElementById('feedback-modal');
  const closeBtn = document.getElementById('close-modal');

  setTimeout(() => {
    modal.style.display = 'flex';
  }, 60000);

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const themeBtn = document.getElementById('theme-toggle');
  const hour = new Date().getHours();

  if (hour < 7 || hour >= 21) {
    document.body.classList.add('dark-theme');
    themeBtn.textContent = '☀️';
  }

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
  });
});
