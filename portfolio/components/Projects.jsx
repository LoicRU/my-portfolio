async function getRepos() {
  const res = await fetch(
    "https://api.github.com/users/LoicRU/repos",
    {
      next: { revalidate: 3600 } // cache 1h
    }
  )

  if (!res.ok) {
    throw new Error("Erreur lors du chargement des projets")
  }

  return res.json()
}

export default async function Projects() {
  const repos = await getRepos()

  const publicRepos = repos
    .filter(repo => !repo.fork)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Mes projets
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {publicRepos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:-translate-y-1 hover:border-indigo-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {repo.name}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {repo.description || "Aucune description"}
            </p>

            <div className="flex justify-between items-center text-sm">
              <span className="text-indigo-400">
                {repo.language || "Code"}
              </span>

              <span className="text-gray-500">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
