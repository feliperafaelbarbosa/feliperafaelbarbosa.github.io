const username = 'feliperafaelbarbosa';
const url = `https://api.github.com/users/${username}/repos?per_page=30`;
var listRepoName = ["inpi-exploratory-analysis", "energy-consumption-simulator", "i2a2-inteligencia-artificial-socioambiental-amazonia", "global-terror-predictor"];

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
        data.forEach((e) => {
            const index = listRepoName.indexOf(e.name);
            if (index === -1) return;

            const elements = document.getElementsByClassName("name-of-project");
            const descriptionElements = document.getElementsByClassName("description-of-project");
            const linkElements = document.getElementsByClassName("link-to-project");

            if (listRepoName.includes(e.name)) {
                if (elements[index]) {
                    elements[index].textContent = e.name;
                    descriptionElements[index].textContent = e.description || "Nenhuma descrição disponível.";
                    linkElements[index].href = e.html_url;
                }
            }
        });
    })
    .catch(error => {
        console.error('Erro ao acessar a API do GITHUB:', error);
    })
