const username = "LoicRU";
const container = document.getElementById("projects");

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {

        if (repo.name.toLowerCase() === "loicru") return;
        if (repo.name.toLowerCase() === "readme") return;
        if (repo.fork) return;

        const div = document.createElement("div");
        div.className = "project";

        div.innerHTML = `
            <h2>${repo.name}</h2>
            <p>${repo.description ?? "Pas de description"}</p>
            <p><strong>Langage :</strong> ${repo.language ?? "N/A"}</p>
            <a href="${repo.html_url}" target="_blank">Voir sur GitHub</a>
        `;

        container.appendChild(div);
        });
    })
    .catch(error => {
        container.innerHTML = "<p>Erreur lors du chargement des projets.</p>";
        console.error(error);   
  });
