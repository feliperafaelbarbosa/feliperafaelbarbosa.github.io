const username = 'feliperafaelbarbosa';
const url = `https://api.github.com/users/${username}/repos?per_page=30`;
var name_list_repos = ["inpi-exploratory-analysis", "energy-consumption-simulator", "i2a2-inteligencia-artificial-socioambiental-amazonia", "global-terror-predictor"];

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        return response.json();
    })
    .then(data => {
        
        
    })
    .catch(error => {
        console.error('Erro ao acessar a API do GITHUB:', error);
    })
