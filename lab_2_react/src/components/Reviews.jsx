import { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/27/comments')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md p-7 sm:p-9 rounded-[24px] border border-rose-200/60 dark:border-rose-900/50 shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-rose-950 dark:text-rose-100 pb-3 mb-6 border-b border-rose-200/70 dark:border-rose-900/60">
        Відгуки роботодавців
      </h2>
      <div className="space-y-4">
        {comments.map(comment => (
          <article key={comment.id} className="p-4 rounded-xl bg-rose-50/70 dark:bg-zinc-800/60 border-l-4 border-rose-500">
            <h3 className="font-bold text-sm sm:text-base text-rose-900 dark:text-rose-200">{comment.name}</h3>
            <span className="text-xs text-rose-600 dark:text-rose-400 block mb-2">{comment.email}</span>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;