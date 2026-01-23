const skills = ["Python", "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"]

export default function Skills() {
  return (
    <section id="skills" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Compétences</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}