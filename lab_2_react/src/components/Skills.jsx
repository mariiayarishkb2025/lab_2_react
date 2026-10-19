function Skills() {
  const skills = [
    'Кібербезпека', 'Packet Tracer', 'VLAN & 802.1Q', 
    'Python', 'C# (.NET)', 'MySQL', 'Linux (Kali/Ubuntu)', 
    'HTML5/CSS3', 'Tailwind CSS', 'React', 'Git & GitHub'
  ];

  return (
    <section className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-md shadow-rose-950/5">
      <h2 className="text-xl font-bold text-rose-950 pb-2 mb-4 border-b border-rose-100">
        Технічний стек
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-rose-50 text-rose-900 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-rose-200/80 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;
