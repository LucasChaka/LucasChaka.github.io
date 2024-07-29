document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById("project-list");
    const repos = [
        "Bitcoin-Realized-Volatility-Analysis",
        "Chess_Analytics"
    ];
    const username = "LucasChaka"; // Replace with your GitHub username

    repos.forEach(repo => {
        fetch(`https://api.github.com/repos/${username}/${repo}/readme`, {
            headers: {
                Accept: "application/vnd.github.v3.html+json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch README for ${repo}`);
            }
            return response.text();
        })
        .then(data => {
            const projectDiv = document.createElement("div");
            projectDiv.className = "project";
            projectDiv.innerHTML = `<h2>${repo}</h2>${data}`;
            projectList.appendChild(projectDiv);
        })
        .catch(error => {
            console.error('Error fetching README:', error);
            const errorDiv = document.createElement("div");
            errorDiv.className = "error";
            errorDiv.innerHTML = `<h2>${repo}</h2><p>Error fetching README: ${error.message}</p>`;
 
