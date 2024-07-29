document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById("project-list");
    const repos = [
        "repo1",
        "repo2",
        "repo3"  // Replace with your actual repository names
    ];
    const username = "LucasChaka"; // Replace with your GitHub username

    repos.forEach(repo => {
        fetch(`https://api.github.com/repos/${username}/${repo}/readme`, {
            headers: {
                Accept: "application/vnd.github.v3.html+json"
            }
        })
        .then(response => response.text())
        .then(data => {
            const projectDiv = document.createElement("div");
            projectDiv.className = "project";
            projectDiv.innerHTML = `<h2>${repo}</h2>${data}`;
            projectList.appendChild(projectDiv);
        })
        .catch(error => {
            console.error('Error fetching README:', error);
        });
    });
});
